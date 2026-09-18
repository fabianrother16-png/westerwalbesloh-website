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

## Wichtiger Hinweis zu Design-Assets (bitte vor Go-Live lesen)

Diese Seite wurde in einer Sandbox-Umgebung ohne Internetzugriff zur ursprünglichen Domain
gebaut (die Netzwerk-Policy dieser Umgebung blockierte externe Domains). Das heißt konkret:

- **Farben, Schriftart und Logo sind bewusst gewählte Platzhalter**, keine 1:1-Kopie des
  Originals. Alle Farbwerte liegen zentral in `src/app/globals.css` im `@theme`-Block
  (`--color-brand-*`) – zum Austauschen genügt es, dort die Hex-Werte zu ändern, der Rest
  der Seite zieht sich die Farben automatisch darüber. Die Schriftart (Inter) lässt sich in
  derselben Datei sowie in `package.json`/`globals.css` (Import von `@fontsource-variable/...`)
  austauschen.
- Das Logo (`src/components/brand/Logo.tsx`) ist ein selbst gestaltetes, stilisiertes
  "W" als SVG (kein Foto) – ebenfalls leicht ersetzbar, z. B. durch ein echtes Logo-Bild in
  `/public/images/logo.svg`.
- **Es gibt keine Fotos von Personen, dem Team oder Projekten**, da keine echten Bilddateien
  verfügbar waren. Team-Mitglieder werden mit einem gestalteten Initialen-Platzhalter
  (`src/components/media/PlaceholderPhoto.tsx`) dargestellt statt mit Stockfotos fremder
  Personen. Sobald echte Fotos vorliegen: Dateien nach `/public/images/team/...` legen und
  `PlaceholderPhoto` an den jeweiligen Stellen (aktuell in `src/app/ueber-uns/page.tsx`) durch
  `next/image` ersetzen.
- **Impressum & Datenschutzerklärung** (`src/app/impressum`, `src/app/datenschutz`) wurden aus
  denselben Gründen neu erstellt (nicht wortgetreu vom Original übernommen) und bilden zusätzlich
  die *tatsächliche* Datenverarbeitung dieser neuen Seite ab (KI-Chat, Resend, Vercel-Hosting) –
  das wäre mit dem alten Text ohnehin nicht abgedeckt gewesen. **Bitte vor Veröffentlichung von
  einem Anwalt/einer Anwältin prüfen lassen**, insbesondere die Umsatzsteuer-ID ergänzen, falls
  vorhanden.

Alle Texte (Firmenbeschreibung, Produkte, Leistungen, Team, Testimonials etc.) stammen aus dem
im Auftrag mitgelieferten Fallback-Content und sind vollständig, echte Inhalte – keine
Platzhalter/Lorem Ipsum.

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
