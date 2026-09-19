# Westerwalbesloh GmbH Rollladenbau – Website-Relaunch

Kompletter Relaunch von [sonnenschutz-westerwalbesloh.de](https://sonnenschutz-westerwalbesloh.de/)
als eigenständige Next.js-Anwendung (kein Framer). Gleiche URL-Struktur, gleiche Inhalte,
modernes Design und neue KI-Features (Chat-Berater, Sonnenschutz-Finder, GEO-Optimierung).

## Tech-Stack

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4**
- Fonts self-hosted über `@fontsource-variable/inter` (kein Google-Fonts-CDN-Request)
- **Anthropic API** (`@anthropic-ai/sdk`) für den KI-Sonnenschutz-Berater
- **Resend** für den Versand des Kontaktformulars
- `next/og` für dynamisch generiertes Favicon/OG-Bild (kein externes Bild nötig)

## Marken-Assets

**Farben, Logo und Fotos sind jetzt echt**, nicht mehr platzhalterhaft:

- **Logo**: `public/images/brand/logo.png` (vollständiges Logo) und `logo-emblem.png`
  (freigestellte "W"-Bildmarke ohne Schriftzug, für Header/Footer/Favicon/OG-Bild) sind die
  Originaldateien. `src/components/brand/Logo.tsx` rendert sie per `next/image`.
- **Farben**: Per Pixel-Analyse aus dem echten Logo extrahiert – Blau `#376fb2`, Grau `#9d9d9c`.
  Alle Werte liegen zentral in `src/app/globals.css` im `@theme`-Block (`--color-brand-*`);
  `--color-brand-accent` ist der exakte Logo-Blauton (für CTAs), `--color-brand-primary` eine
  vertiefte Variante davon für große Flächen wie Header/Footer, damit Buttons darauf erkennbar
  bleiben. Zum Anpassen genügt es, dort die Hex-Werte zu ändern.
- **Fotos**: Reale Team-/Projektfotos (aus Instagram-Uploads) sind bereits auf mehreren Seiten
  im Einsatz (Startseite, Raffstore, Markisen, Über uns, Beratung/Reparatur/Wartung/Objektbau).
  Wo noch kein Foto vorliegt (z. B. Rollladen, Insektenschutz, innenliegender Sonnenschutz,
  Sonnenschirme, Steuerungen), greift automatisch ein gestaltetes Icon/Muster als Platzhalter –
  siehe nächster Abschnitt, wie das durch ein echtes Foto ersetzt wird.
- Die Schriftart (Inter, self-hosted) ist weiterhin ein bewusst gewählter Platzhalter, da keine
  Angabe zur Original-Schriftart vorlag.
- **Impressum & Datenschutzerklärung** (`src/app/impressum`, `src/app/datenschutz`) wurden neu
  erstellt (kein Live-Zugriff auf die Originaltexte möglich) und bilden zusätzlich die
  *tatsächliche* Datenverarbeitung dieser neuen Seite ab (KI-Chat, Resend, Vercel-Hosting) – das
  wäre mit dem alten Text ohnehin nicht abgedeckt gewesen. **Bitte vor Veröffentlichung von
  einem Anwalt/einer Anwältin prüfen lassen**, insbesondere die Umsatzsteuer-ID ergänzen, falls
  vorhanden.

Alle Texte (Firmenbeschreibung, Produkte, Leistungen, Team, Testimonials etc.) stammen aus dem
im Auftrag mitgelieferten Fallback-Content und sind vollständig, echte Inhalte – keine
Platzhalter/Lorem Ipsum.

## Bilder & Videos ergänzen (kein Code nötig)

Seiten prüfen zur Build-Zeit selbst, ob unter einem festen Dateinamen in `public/images/`
bereits ein Foto liegt (`src/lib/media.ts`, Funktion `localImage()`). Liegt die Datei vor, wird
sie automatisch als Hero-/Detailbild angezeigt; liegt sie nicht vor, greift der bestehende
Icon-Platzhalter. Zum Ergänzen reicht es, die Datei **mit exakt diesem Namen** z. B. direkt über
die GitHub-Weboberfläche hochzuladen (Repo → zum Ordner navigieren → "Add file" → "Upload
files") und danach neu zu deployen (bei Vercel automatisch bei jedem Push) – es muss kein Code
angepasst werden.

| Zweck | Erwarteter Pfad |
|---|---|
| Produktseite Hero | `public/images/produkte/<slug>/hero.jpg` |
| Produktseite Zusatzbild | `public/images/produkte/<slug>/detail.jpg` |
| Leistungsseite Hero | `public/images/leistungen/<slug>/hero.jpg` |
| Team-Gruppenfoto (Über-uns-Hero) | `public/images/team/team-gruppe.jpg` |
| Firmenwagen-Banner (Über uns) | `public/images/projekte/firmenwagen.jpg` |
| Home-Hero-Hintergrund | aktuell `public/images/produkte/markisen/hero.jpg` (siehe `src/components/home/Hero.tsx`) |

`<slug>` ist der jeweilige URL-Slug, z. B. `raffstore`, `rollladen`, `markisen`,
`insektentschutz`, `sonnenschutz` (innenliegender Sonnenschutz), `sonnenschirme`,
`steuerung-antriebe` bzw. bei Leistungen `beratung-aufmass-montage`,
`reparatur-modernisierung`, `wartung`, `objektbau-projekte`. Empfohlenes Format: JPG/WebP,
mindestens 1600px breit, Querformat (die Bilder werden per `object-cover` zugeschnitten).

**Videos** (z. B. von Instagram/TikTok) sind noch nicht eingebunden. Sobald Dateien vorliegen,
gerne hier im Chat hochladen oder als Datei ins Repo legen (z. B. `public/videos/...`) – dann
wird an passender Stelle (Hero-Hintergrund, eigene Galerie) ein `<video>`-Element ergänzt.

## Lokale Entwicklung

```bash
npm install
cp .env.example .env.local   # Werte eintragen, siehe unten
npm run dev
```

## Umgebungsvariablen

| Variable | Pflicht | Beschreibung |
|---|---|---|
| `ANTHROPIC_API_KEY` | ja (für den Chat) | Server-seitiger API-Key für den KI-Berater. **Niemals** im Client-Code verwenden. |
| `CLAUDE_CHAT_MODEL` | nein | Standard: `claude-haiku-4-5-20251001` (schnell & günstig). Für höhere Qualität z. B. auf ein aktuelles Sonnet-Modell umstellen. |
| `RESEND_API_KEY` | ja (für das Kontaktformular) | API-Key von [resend.com](https://resend.com). |
| `CONTACT_FROM_EMAIL` | ja | Absenderadresse, z. B. `Westerwalbesloh Website <formular@ihre-domain.de>`. Die Domain muss bei Resend verifiziert sein. |
| `CONTACT_TO_EMAIL` | nein | Empfänger der Anfragen. Standard: `westerwalbesloh_gmbh@t-online.de`. |
| `NEXT_PUBLIC_SITE_URL` | nein | Basis-URL für Sitemap/JSON-LD/OG-Tags. Standard: `https://sonnenschutz-westerwalbesloh.de`. |

Ohne `ANTHROPIC_API_KEY` bzw. `RESEND_API_KEY`/`CONTACT_FROM_EMAIL` antworten die jeweiligen
API-Routen (`/api/chat`, `/api/contact`) mit einem klaren Fehler (HTTP 503) statt so zu tun,
als hätten sie funktioniert – es gibt also keinen stillen Mock-Modus.

## Deployment auf Vercel

1. Repository auf [vercel.com/new](https://vercel.com/new) importieren (Framework wird
   automatisch als Next.js erkannt).
2. Unter **Settings → Environment Variables** alle Variablen aus der Tabelle oben eintragen
   (mindestens `ANTHROPIC_API_KEY`, `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`).
3. Bei Resend die Absender-Domain verifizieren (Resend-Dashboard → Domains), damit E-Mails
   nicht im Spam landen.
4. Deployen. Danach die Domain `sonnenschutz-westerwalbesloh.de` in den Vercel-Domain-Settings
   hinterlegen und beim Domain-Registrar auf Vercel verweisen (A/CNAME-Record laut
   Vercel-Anleitung).
5. `npm run build` wurde lokal erfolgreich getestet (siehe Commit-Historie) – keine
   TypeScript- oder ESLint-Fehler.

## Struktur

```
src/
  app/                 Next.js App Router (Seiten, API-Routen, sitemap.ts, robots.ts)
  components/          UI-Komponenten, nach Bereich sortiert (home, layout, chat, finder, ...)
  data/                Zentrale Inhalte (company.ts, products.ts, services.ts, team.ts, ...)
  lib/                 Anthropic-Client, Resend-Client, SEO-Helper
  types/               Geteilte TypeScript-Typen
public/
  llms.txt             Struktur-Zusammenfassung für KI-Suchsysteme (GEO)
```

Produkt- und Leistungsseiten sind dynamische Routen (`produkte/[slug]`, `leistungen/[slug]`),
die zur Build-Zeit aus `src/data/products.ts` bzw. `src/data/services.ts` statisch generiert
werden (`generateStaticParams`) – neue Produkte/Leistungen hinzufügen heißt: Eintrag in der
jeweiligen Datei ergänzen, die Seite entsteht automatisch.

## Bekannter Fehler der Altseite (behoben)

Auf der Startseite verlinkte die Kachel "Innenliegender Sonnenschutz" fälschlich auf
`/produkte/insektentschutz`. In dieser Version sind alle Produktkacheln datengetrieben
(`src/components/home/ProductGrid.tsx` iteriert über `src/data/products.ts`), sodass dieser
Fehler strukturell nicht mehr auftreten kann.

Hinweis zur URL `/produkte/insektentschutz`: Der Tippfehler ("insektentschutz" statt
"insektenschutz") stammt aus der Original-URL-Struktur und wurde bewusst **beibehalten**,
um das bestehende Google-Ranking nicht zu gefährden.
