import { readFileSync } from "node:fs";
import { join } from "node:path";

let cached: string | null = null;

/** Base64 data URI of the real logo emblem, for use inside next/og ImageResponse (Satori JSX). */
export function getLogoDataUri(): string {
  if (!cached) {
    const bytes = readFileSync(join(process.cwd(), "public/images/brand/logo-emblem.png"));
    cached = `data:image/png;base64,${bytes.toString("base64")}`;
  }
  return cached;
}
