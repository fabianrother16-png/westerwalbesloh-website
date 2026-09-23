# Westerwalbesloh GmbH Rollladenbau – Website-Relaunch

Kompletter Relaunch von [sonnenschutz-westerwalbesloh.de](https://sonnenschutz-westerwalbesloh.de/)
als eigenständige Next.js-Anwendung (kein Framer). Gleiche URL-Struktur, alle Inhalte der
Live-Seite, modernes Design und neue Features (KI-Chat-Berater, Sonnenschutz-Finder,
Cookie-Einwilligung, GEO-Optimierung).

## Tech-Stack

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4**
- Schrift **Host Grotesk** (wie auf der Live-Seite), self-hosted über
  `@fontsource-variable/host-grotesk` – kein Google-Fonts-CDN-Request
- **Anthropic API** (`@anthropic-ai/sdk`) für den KI-Sonnenschutz-Berater
- **Resend** für den Versand des Kontaktformulars
- `next/og` für dynamisch generiertes Favicon/OG-Bild

## Inhalte & Marken-Assets

- **Texte**: Sämtliche Inhalte der Live-Seite wurden übernommen – je Produkt alle Varianten
  (z. B. Insektenschutz: Spannrahmen, Drehrahmen, Schiebeanlagen, Pendeltüren,
  Lichtschachtabdeckungen und alle Gewebearten), Bedienarten, Hersteller, FAQs sowie die Texte
  der Leistungsseiten, von „Über uns“ und die Kundenstimmen im Originalwortlaut.
- **Fotos**: Alle Bilder der Live-Seite in voller Auflösung (statt verkleinerter Screenshots),
  ergänzt um echte Team- und Projektfotos. Sie liegen unter `public/images/` und sind in den
  Datendateien zugeordnet (siehe unten).
- **Logo**: `public/images/brand/logo.png` ist das Original-Logo der Live-Seite (freigestellt),
  `logo-emblem.png` die „W“-Bildmarke für Favicon/OG-Bild. Gerendert über
  `src/components/brand/Logo.tsx`.
- **Farben**: Aus dem Logo extrahiert – Blau `#376fb2`, Grau `#9d9d9c`. Alle Werte liegen zentral
  in `src/app/globals.css` im `@theme`-Block (`--color-brand-*`).
- **Partner & Zertifikate**: `src/data/company.ts` (`partners`, `certificates`), Logos unter
  `public/images/partner/` und `public/images/zertifikate/`.
- **Impressum & Datenschutz**: Das Impressum enthält die Angaben der Live-Seite (Handelsregister,
  USt-ID, Handwerkskammer, Berufshaftpflicht), aktualisiert auf § 5 DDG; der Hinweis auf die
  EU-Streitschlichtungsplattform entfällt, da die Plattform am 20.07.2025 eingestellt wurde. Die
  Datenschutzerklärung bildet zusätzlich die Datenverarbeitung dieser Seite ab (KI-Chat, Resend,
  Hosting, Einwilligung für Instagram und Google Maps). **Bitte vor Veröffentlichung rechtlich
  prüfen lassen.**

## Wo welche Inhalte gepflegt werden

| Inhalt | Datei |
|---|---|
| Produkte (Texte, Varianten, Bilder, FAQ, SEO-Titel) | `src/data/products.ts` |
| Leistungen | `src/data/services.ts` |
| Firmendaten, Geschichte, Partner, Zertifikate | `src/data/company.ts` |
| Team (inkl. Fotos) | `src/data/team.ts` |
| Kundenstimmen | `src/data/testimonials.ts` |
| Instagram-Reels (Startseite) | `src/components/home/InstagramReels.tsx` |
| Einblicke-Galerie (Startseite) | `src/components/home/InsightsGallery.tsx` |

Produkt- und Leistungsseiten bestehen aus frei kombinierbaren Abschnitten (`sections`), die
`src/components/content/ContentSections.tsx` darstellt:

- `variants` – Fotokarten (z. B. Markisenarten); die Rasteraufteilung passt sich der Anzahl an,
  damit keine halb leeren Reihen entstehen
- `cards` – nummerierte Karten, optional mit Foto
- `checklist` – Stichpunktliste mit Foto

**Neues Foto einbinden:** Datei unter `public/images/…` ablegen (JPG, mindestens 1600 px breit)
und in der passenden Datendatei eintragen, z. B. als Projektfoto:

```ts
projectPhotos: [
  { ...img("markisen", "projekt-6.jpg", "Alt-Text für Google & Screenreader"), caption: "Bildunterschrift" },
],
```

Bis zu drei Projektfotos erscheinen als Raster mit Kontakt-Kachel, ab vier als Karussell.
`wide: true` kennzeichnet ein einzelnes Querformat-Foto, das dann doppelt breit dargestellt wird.

**Videos** (z. B. von Instagram/TikTok) sind noch nicht als Dateien eingebunden; Instagram-Reels
werden über die offizielle Einbettung geladen (siehe unten).

## Cookie-Banner, Statistik & externe Inhalte

Das Cookie-Banner (`src/components/consent/CookieBanner.tsx`, Logik in `src/lib/consent.ts`)
fragt zwei Kategorien ab:

- **Statistik** – Google Analytics 4 (`G-7DVDHX6NLD`) und Microsoft Clarity (`utosndrm9n`), also
  dieselbe Property bzw. dasselbe Projekt wie auf der bisherigen Seite, damit die Auswertungen
  nahtlos weiterlaufen. Beide werden erst nach Einwilligung geladen
  (`src/components/consent/Analytics.tsx`), Werbefunktionen sind per Consent Mode deaktiviert.
  Bei einem Widerruf werden die Cookies gelöscht und die Seite ohne Tracking neu geladen.
  Im Entwicklungsmodus (`npm run dev`) wird grundsätzlich nichts geladen.
- **Externe Medien** – Instagram-Reels (Startseite) und die Google-Maps-Karte (Kontakt).

Die Auswahl liegt nur im Local Storage des Besuchers; über „Cookie-Einstellungen“ im Footer lässt
sie sich jederzeit ändern. Neue externe Dienste (z. B. YouTube) müssen ebenfalls hinter
`useConsent()` liegen und in der Datenschutzerklärung ergänzt werden.

## SEO & Auffindbarkeit bei Google

- **Metadaten**: Jede Seite hat eigenen Titel, Beschreibung, Canonical-URL und Vorschaubild für
  Social Media (`src/lib/metadata.ts`). Die SEO-Titel der Live-Seite wurden übernommen, damit
  bestehende Rankings erhalten bleiben.
- **Strukturierte Daten** (`src/lib/schema.ts`): Firmeneintrag als `HomeAndConstructionBusiness`
  mit Koordinaten, Einsatzgebiet (alle Orte im Kreis Gütersloh und Bielefeld), Instagram- und
  Facebook-Profil; `WebSite` für den Seitennamen in den Suchergebnissen; je Produkt und Leistung
  ein `Service` mit allen Ausführungen; dazu FAQ und Breadcrumbs.
- **Sitemap** (`/sitemap.xml`, inkl. 70+ Bildern für die Google-Bildersuche) und `robots.txt`.
- **Lokale Inhalte**: Abschnitt „Einsatzgebiet“ auf der Startseite mit allen Orten
  (`company.serviceArea` in `src/data/company.ts`).
- **Leistung**: Lighthouse (Mobil) 97 Performance, 100 Barrierefreiheit, 100 Best Practices,
  100 SEO; Desktop durchgehend 100.

### Nach dem Livegang (einmalig)

1. **Google Search Console**: Domain-Property für `sonnenschutz-westerwalbesloh.de` per DNS
   bestätigen (alternativ den Code der Methode „HTML-Tag“ als `GOOGLE_SITE_VERIFICATION`
   eintragen), dann die Sitemap `https://sonnenschutz-westerwalbesloh.de/sitemap.xml` einreichen.
2. **Google-Unternehmensprofil**: Website-Link, Kategorien, Einzugsgebiet und Fotos prüfen,
   regelmäßig Beiträge veröffentlichen und Kunden um Bewertungen bitten – das ist für die
   Platzierung in Google Maps der wichtigste Faktor.
3. **Einheitliche Firmendaten**: Name, Adresse und Telefonnummer in Branchenverzeichnissen
   (z. B. Das Örtliche, Gelbe Seiten, Handwerkskammer) genau so schreiben wie auf der Website.

## Weiterleitungen alter URLs

Google hat noch URLs der Website vor Framer indexiert (z. B. `/produkt/insektenschutz-plissee/`,
`/produkte/markisen/fenster-markisen`, `/produkte/jalousien/...`) sowie die nicht mehr
existierende Framer-Vorlagenseite `/service/roof-repair`. Diese werden in `next.config.ts`
(`redirects()`) dauerhaft auf die passende neue Seite umgeleitet, damit Besucher und Ranking
nicht auf einer 404-Seite landen.

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
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | nein | Google-Analytics-ID. Standard: `G-7DVDHX6NLD` (bisherige Property). `off` schaltet Google Analytics ab, z. B. für Vorschau-Deployments. |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | nein | Microsoft-Clarity-Projekt. Standard: `utosndrm9n` (bisheriges Projekt). `off` schaltet Clarity ab. |
| `GOOGLE_SITE_VERIFICATION` | nein | Bestätigungscode der Google Search Console (Methode „HTML-Tag“). Nicht nötig bei Bestätigung per DNS. |

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

## Struktur

```
src/
  app/                 Next.js App Router (Seiten, API-Routen, sitemap.ts, robots.ts)
  components/          UI-Komponenten, nach Bereich sortiert (home, content, layout, consent, ...)
  data/                Zentrale Inhalte (company.ts, products.ts, services.ts, team.ts, ...)
  lib/                 Anthropic-Client, Resend-Client, Einwilligung, SEO-Helper
  types/               Geteilte TypeScript-Typen
public/
  images/              Alle Fotos, Logos und Zertifikate
  llms.txt             Struktur-Zusammenfassung für KI-Suchsysteme (GEO)
```

Produkt- und Leistungsseiten sind dynamische Routen (`produkte/[slug]`, `leistungen/[slug]`),
die zur Build-Zeit aus `src/data/products.ts` bzw. `src/data/services.ts` statisch generiert
werden (`generateStaticParams`) – ein neuer Eintrag in der jeweiligen Datei erzeugt die Seite
automatisch.

## Behobene Fehler der Live-Seite

- Die Startseiten-Kachel „Innenliegender Sonnenschutz“ verlinkte auf `/produkte/insektentschutz`.
  Alle Produktkacheln sind jetzt datengetrieben, der Fehler kann nicht mehr auftreten.
- Die Einleitungstexte von „Beratung, Aufmaß & Montage“ und „Reparatur & Modernisierung“ waren
  vertauscht.
- Auf der Wartungsseite fehlte einer Karte die Überschrift (jetzt „Rechtssichere Nachweise“);
  die Meta-Beschreibung warb allgemein mit „Ihren Markisen & Rollläden“, obwohl die Wartung nur
  für Gewerbe und öffentliche Träger angeboten wird.
- SEO-Titel und -Beschreibung der Seite „Innenliegender Sonnenschutz“ nannten „Markisen &
  Rollläden“ bzw. „Fenster & Terrassen“ statt der Innenbeschattung.

Hinweis zur URL `/produkte/insektentschutz`: Der Tippfehler („insektentschutz“ statt
„insektenschutz“) stammt aus der Original-URL-Struktur und wurde bewusst **beibehalten**, um das
bestehende Google-Ranking nicht zu gefährden; `/produkte/insektenschutz` leitet dorthin um.
