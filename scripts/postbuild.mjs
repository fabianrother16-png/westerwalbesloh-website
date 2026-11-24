// Läuft nach `next build` (npm run build): verkleinert die Bilder im statischen Export (out/images), weil es auf dem Webhosting
// keine Next.js-Bildoptimierung gibt. Dateinamen bleiben gleich, die Originale in public/ bleiben unangetastet.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

sharp.cache(false); // sonst hält sharp unter Windows die Dateien offen
const root = join(process.cwd(), "out", "images");
const MAX_WIDTH = 1920;
let before = 0;
let after = 0;

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await walk(path);
    else await optimize(path);
  }
}

async function optimize(path) {
  const ext = extname(path).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return;
  const input = await readFile(path);
  const size = input.length;
  before += size;
  const image = sharp(input, { failOn: "none" }).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true });
  const output =
    ext === ".png"
      ? await image.png({ compressionLevel: 9, palette: true, quality: 85 }).toBuffer()
      : ext === ".webp"
        ? await image.webp({ quality: 80 }).toBuffer()
        : await image.jpeg({ quality: 78, mozjpeg: true }).toBuffer();
  // Nur ersetzen, wenn die neue Datei wirklich kleiner ist.
  if (output.length < size) {
    await writeFile(path, output);
    after += output.length;
  } else after += size;
}

await walk(root);
const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1);
console.log(`Bilder: ${mb(before)} MB -> ${mb(after)} MB`);

// Next.js 16 lädt beim Vorladen Dateien wie "__next.produkte.$d$slug.__PAGE__.txt", exportiert sie aber als
// Ordner "__next.produkte/$d$slug/__PAGE__.txt". Flache Kopien daneben legen, damit Apache sie direkt findet.
import { copyFile } from "node:fs/promises";
import { relative, sep, dirname } from "node:path";
let copies = 0;
async function flatten(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("__next.")) await copyNested(path, dir);
    else if (entry.name !== "_next" && entry.name !== "images") await flatten(path);
  }
}
async function copyNested(segmentDir, pageDir) {
  for (const entry of await readdir(segmentDir, { withFileTypes: true, recursive: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".txt")) continue;
    const full = join(entry.parentPath, entry.name);
    const flatName = relative(pageDir, full).split(sep).join(".");
    await copyFile(full, join(pageDir, flatName));
    copies++;
  }
}
await flatten(join(process.cwd(), "out"));
console.log(`Vorlade-Dateien flach kopiert: ${copies}`);
