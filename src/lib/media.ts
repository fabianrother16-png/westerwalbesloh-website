import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Prüft, ob unter public/images/<relativePath> eine Datei liegt, und gibt den
 * öffentlichen Pfad zurück - oder null, falls (noch) kein Bild hinterlegt ist.
 * So kann später einfach eine Datei mit dem dokumentierten Namen in GitHub
 * hochgeladen werden, ohne dass Code angepasst werden muss (siehe README.md).
 */
export function localImage(relativePath: string): string | null {
  const absolute = join(process.cwd(), "public", "images", relativePath);
  return existsSync(absolute) ? `/images/${relativePath}` : null;
}
