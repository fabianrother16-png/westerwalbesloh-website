import type { NextRequest } from "next/server";

// shortcut: Zähler liegt im Speicher der jeweiligen Server-Instanz; bei vielen parallelen Instanzen auf Upstash/Vercel KV umstellen.
const hits = new Map<string, number[]>();

/** Erlaubt höchstens `limit` Anfragen je IP und Zweck innerhalb von `windowMs`. */
export function rateLimited(req: NextRequest, scope: string, limit: number, windowMs: number): boolean {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unbekannt";
  const key = `${scope}:${ip}`;
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < windowMs);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [entryKey, times] of hits) if (times.every((time) => now - time >= windowMs)) hits.delete(entryKey);
  }
  return recent.length > limit;
}

/** Nur Anfragen von der eigenen Website annehmen (Schutz gegen fremde Seiten, die das Formular oder den Chat missbrauchen). */
export function fromOwnSite(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true; // manche Browser senden bei gleicher Herkunft keinen Origin-Header
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

/** Text sicher in HTML-E-Mails einsetzen. */
export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] as string);
}
