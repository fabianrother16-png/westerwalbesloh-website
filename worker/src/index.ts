// Cloudflare Worker für den Chat und das Kontaktformular der statischen Website (All-Inkl).
// Schlüssel liegen nur als Worker-Secret vor (ANTHROPIC_API_KEY, RESEND_API_KEY), nie im Browser.
import { z } from "zod";
import { buildSystemPrompt, CHAT_MODEL, getAnthropicClient } from "@/lib/anthropic";
import { fallbackAnswer } from "@/lib/chatFallback";
import { getResendClient } from "@/lib/email";
import { company } from "@/data/company";

type RateLimiter = { limit(options: { key: string }): Promise<{ success: boolean }> };

interface Env {
  ALLOWED_ORIGINS: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_TO_EMAIL?: string;
  CHAT_LIMITER: RateLimiter;
  CONTACT_LIMITER: RateLimiter;
}

const chatSchema = z.object({
  messages: z
    .array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().trim().min(1).max(2000) }))
    .min(1)
    .max(20),
});

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  address: z.string().trim().min(3).max(200),
  phone: z.string().trim().min(4).max(40),
  email: z.string().trim().email().max(200),
  inquiryType: z.enum(company.contactFormOptions.inquiryTypes),
  product: z.enum(company.contactFormOptions.products),
  message: z.string().trim().min(5).max(3000),
  consent: z.literal(true),
  // Honeypot-Feld: für Menschen unsichtbar, wird nur von Bots ausgefüllt.
  website: z.string().max(0).optional(),
});

const unreachableMessage = `Ihre Anfrage konnte nicht gesendet werden. Bitte rufen Sie uns direkt an: ${company.phoneDisplay} oder schreiben Sie an ${company.email}.`;

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] as string);
}

function corsHeaders(origin: string): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Expose-Headers": "X-Chat-Mode",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const origin = req.headers.get("Origin") ?? "";
    const allowed = env.ALLOWED_ORIGINS.split(",").map((value) => value.trim());
    // Nur Aufrufe von der eigenen Website (Browser senden bei POST immer einen Origin-Header).
    if (!allowed.includes(origin)) return new Response("Forbidden", { status: 403 });
    const cors = corsHeaders(origin);
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405, headers: cors });

    const path = new URL(req.url).pathname;
    const ip = req.headers.get("CF-Connecting-IP") ?? "unbekannt";
    if (path === "/chat") return handleChat(req, env, ip, cors);
    if (path === "/contact") return handleContact(req, env, ip, cors);
    return new Response("Not Found", { status: 404, headers: cors });
  },
};

async function handleChat(req: Request, env: Env, ip: string, cors: Record<string, string>): Promise<Response> {
  if (!(await env.CHAT_LIMITER.limit({ key: ip })).success) {
    return Response.json({ error: "Zu viele Nachrichten in kurzer Zeit. Bitte warten Sie einen Moment." }, { status: 429, headers: cors });
  }
  let body;
  try {
    body = chatSchema.parse(await req.json());
  } catch {
    return Response.json({ error: "Ungültige Anfrage." }, { status: 400, headers: cors });
  }
  const textHeaders = { ...cors, "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" };
  const lastQuestion = body.messages.filter((message) => message.role === "user").at(-1)?.content ?? "";

  let client;
  try {
    client = getAnthropicClient();
  } catch {
    // Kein Schlüssel hinterlegt: Antwort aus FAQ und Glossar der Website.
    return new Response(fallbackAnswer(lastQuestion), { headers: { ...textHeaders, "X-Chat-Mode": "faq" } });
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let sentText = false;
      try {
        const anthropicStream = client.messages.stream({
          model: CHAT_MODEL,
          max_tokens: 700,
          system: [{ type: "text", text: buildSystemPrompt(), cache_control: { type: "ephemeral" } }],
          messages: body.messages,
        });
        anthropicStream.on("text", (text) => {
          sentText = true;
          controller.enqueue(encoder.encode(text));
        });
        await anthropicStream.finalMessage();
        controller.close();
      } catch (error) {
        console.error("Chat stream error", error);
        if (sentText) controller.error(error);
        else {
          controller.enqueue(encoder.encode(fallbackAnswer(lastQuestion)));
          controller.close();
        }
      }
    },
  });
  return new Response(stream, { headers: { ...textHeaders, "X-Chat-Mode": "ai" } });
}

async function handleContact(req: Request, env: Env, ip: string, cors: Record<string, string>): Promise<Response> {
  if (!(await env.CONTACT_LIMITER.limit({ key: ip })).success) {
    return Response.json({ ok: false, error: unreachableMessage }, { status: 429, headers: cors });
  }
  let data;
  try {
    data = contactSchema.parse(await req.json());
  } catch {
    return Response.json({ ok: false, error: "Bitte überprüfen Sie Ihre Eingaben." }, { status: 400, headers: cors });
  }
  if (data.website) return Response.json({ ok: true }, { headers: cors });

  const fromEmail = env.CONTACT_FROM_EMAIL;
  let resend;
  try {
    if (!fromEmail) throw new Error("CONTACT_FROM_EMAIL ist nicht gesetzt.");
    resend = getResendClient();
  } catch (error) {
    console.error("Mailversand nicht eingerichtet", error);
    return Response.json({ ok: false, error: unreachableMessage }, { status: 503, headers: cors });
  }

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Adresse", data.address],
    ["Telefon", data.phone],
    ["E-Mail", data.email],
    ["Art der Anfrage", data.inquiryType],
    ["Produkt", data.product],
  ];
  const text = ["Neue Anfrage über die Website", "", ...rows.map(([label, value]) => `${label}: ${value}`), "", "Nachricht:", data.message].join("\n");
  const html = `<div style="font-family:sans-serif;max-width:560px;">
    <h2 style="color:#1c3a4e;">Neue Anfrage über die Website</h2>
    <table>${rows
      .map(([label, value]) => `<tr><td style="padding:4px 12px 4px 0;color:#4a5a63;font-weight:600;white-space:nowrap;">${label}</td><td style="padding:4px 0;color:#17242c;">${escapeHtml(value)}</td></tr>`)
      .join("")}</table>
    <p style="color:#4a5a63;font-weight:600;margin-top:16px;">Nachricht:</p>
    <p style="color:#17242c;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
  </div>`;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: env.CONTACT_TO_EMAIL || company.email,
      replyTo: data.email,
      subject: `Website-Anfrage: ${data.inquiryType} – ${data.product}`,
      text,
      html,
    });
    if (error) {
      console.error("Resend-Fehler", error);
      return Response.json({ ok: false, error: unreachableMessage }, { status: 502, headers: cors });
    }
  } catch (error) {
    console.error("Kontaktformular-Fehler", error);
    return Response.json({ ok: false, error: unreachableMessage }, { status: 500, headers: cors });
  }
  return Response.json({ ok: true }, { headers: cors });
}
