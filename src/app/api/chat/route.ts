import type { NextRequest } from "next/server";
import { z } from "zod";
import { buildSystemPrompt, CHAT_MODEL, getAnthropicClient } from "@/lib/anthropic";

export const runtime = "nodejs";

const bodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().trim().min(1).max(2000),
      })
    )
    .min(1)
    .max(20),
});

export async function POST(req: NextRequest) {
  let parsedBody;
  try {
    parsedBody = bodySchema.parse(await req.json());
  } catch {
    return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  let client;
  try {
    client = getAnthropicClient();
  } catch (error) {
    console.error("Anthropic client not configured", error);
    return Response.json(
      { error: "Der KI-Berater ist aktuell nicht verfügbar. Bitte kontaktieren Sie uns direkt." },
      { status: 503 }
    );
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const anthropicStream = client.messages.stream({
          model: CHAT_MODEL,
          max_tokens: 700,
          system: buildSystemPrompt(),
          messages: parsedBody.messages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        });

        anthropicStream.on("text", (text) => {
          controller.enqueue(encoder.encode(text));
        });

        await anthropicStream.finalMessage();
        controller.close();
      } catch (error) {
        console.error("Chat stream error", error);
        controller.error(error);
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
