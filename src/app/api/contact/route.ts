import type { NextRequest } from "next/server";
import { z } from "zod";
import { getResendClient } from "@/lib/email";
import { company } from "@/data/company";

export const runtime = "nodejs";

const unreachableMessage = `Ihre Anfrage konnte nicht gesendet werden. Bitte rufen Sie uns direkt an: ${company.phoneDisplay} oder schreiben Sie an ${company.email}.`;

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

export async function POST(req: NextRequest) {
  let data;
  try {
    data = contactSchema.parse(await req.json());
  } catch {
    return Response.json({ ok: false, error: "Bitte überprüfen Sie Ihre Eingaben." }, { status: 400 });
  }

  if (data.website) {
    // Honeypot ausgelöst - stillschweigend "erfolgreich" antworten, ohne E-Mail zu versenden.
    return Response.json({ ok: true });
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  if (!fromEmail) {
    console.error("CONTACT_FROM_EMAIL ist nicht gesetzt.");
    return Response.json({ ok: false, error: unreachableMessage }, { status: 503 });
  }

  let resend;
  try {
    resend = getResendClient();
  } catch (error) {
    console.error("Resend nicht konfiguriert", error);
    return Response.json({ ok: false, error: unreachableMessage }, { status: 503 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || company.email;

  const textBody = [
    `Neue Anfrage über die Website`,
    ``,
    `Name: ${data.name}`,
    `Adresse: ${data.address}`,
    `Telefon: ${data.phone}`,
    `E-Mail: ${data.email}`,
    `Art der Anfrage: ${data.inquiryType}`,
    `Produkt: ${data.product}`,
    ``,
    `Nachricht:`,
    data.message,
  ].join("\n");

  const htmlRow = (label: string, value: string) =>
    `<tr><td style="padding:4px 12px 4px 0;color:#4a5a63;font-weight:600;white-space:nowrap;">${label}</td><td style="padding:4px 0;color:#17242c;">${value}</td></tr>`;

  const htmlBody = `<div style="font-family:sans-serif;max-width:560px;">
    <h2 style="color:#1c3a4e;">Neue Anfrage über die Website</h2>
    <table>
      ${htmlRow("Name", data.name)}
      ${htmlRow("Adresse", data.address)}
      ${htmlRow("Telefon", data.phone)}
      ${htmlRow("E-Mail", data.email)}
      ${htmlRow("Art der Anfrage", data.inquiryType)}
      ${htmlRow("Produkt", data.product)}
    </table>
    <p style="color:#4a5a63;font-weight:600;margin-top:16px;">Nachricht:</p>
    <p style="color:#17242c;white-space:pre-wrap;">${data.message.replace(/</g, "&lt;")}</p>
  </div>`;

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `Website-Anfrage: ${data.inquiryType} – ${data.product}`,
      text: textBody,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend-Fehler", error);
      return Response.json({ ok: false, error: unreachableMessage }, { status: 502 });
    }
  } catch (error) {
    console.error("Kontaktformular-Fehler", error);
    return Response.json({ ok: false, error: unreachableMessage }, { status: 500 });
  }

  return Response.json({ ok: true });
}
