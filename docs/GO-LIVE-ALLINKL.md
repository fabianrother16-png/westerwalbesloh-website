# Go-live bei All-Inkl (statische Seite + Cloudflare Worker)

Die Website ist ein statischer Export: Nach dem Build liegt sie komplett im Ordner `out/`, ohne Server-Code.
Chat und Kontaktformular laufen über einen kostenlosen Cloudflare Worker (Ordner `worker/`).
Die Domain-, Mail- und DNS-Schritte stehen in der Übergabe der bisherigen Agentur und werden dort abgearbeitet.
Diese Datei beschreibt nur die Website selbst.

## 1. Cloudflare Worker einrichten (einmalig, kostenlos)

1. Kostenloses Konto bei cloudflare.com anlegen. Eine Domain muss dafür **nicht** zu Cloudflare umziehen.
2. Im Ordner `worker/`:
   ```
   npx wrangler login
   npx wrangler secret put ANTHROPIC_API_KEY
   npx wrangler secret put RESEND_API_KEY
   npx wrangler deploy
   ```
3. Wrangler zeigt danach die Adresse, z. B. `https://westerwalbesloh-api.<konto>.workers.dev`. Diese Adresse braucht der Build.
4. In der Anthropic-Konsole ein monatliches Ausgabenlimit setzen (z. B. 20 €). Das ist die harte Kostengrenze für den Chat.
5. Bei Resend die Domain `sonnenschutz-westerwalbesloh.de` hinzufügen und die angezeigten DNS-Einträge (SPF/DKIM) bei All-Inkl eintragen.
   Erst danach kann der Worker von `anfrage@sonnenschutz-westerwalbesloh.de` senden.

Ohne Anthropic-Schlüssel antwortet der Chat aus den FAQ der Website. Ohne Resend zeigt das Formular Telefon und E-Mail an.

## 2. Website bauen

```
npm ci
NEXT_PUBLIC_API_URL=https://westerwalbesloh-api.<konto>.workers.dev npm run build
```

`npm run build` verkleinert danach automatisch die Bilder in `out/` und legt die Vorlade-Dateien so ab, dass Apache sie findet.

## 3. Hochladen zu All-Inkl

1. Im KAS eine Domain bzw. Subdomain auf ein eigenes Verzeichnis zeigen lassen, z. B. `/sonnenschutz-westerwalbesloh.de/`.
2. SSL (Let's Encrypt) für die Domain und `www` aktivieren.
3. Den **Inhalt** von `out/` per FTP/SFTP in dieses Verzeichnis laden, inklusive der versteckten Datei `.htaccess`.
4. Prüfen:
   - `https://sonnenschutz-westerwalbesloh.de/kontakt` lädt (ohne `.html`).
   - `http://` und `www.` leiten auf `https://sonnenschutz-westerwalbesloh.de` weiter.
   - Alte Adressen wie `/produkt/markise-xy` leiten auf die neuen Seiten.
   - Sicherheits-Header sind gesetzt (z. B. mit securityheaders.com).
   - Chat antwortet, Testanfrage über das Formular kommt an.
5. In `public/.htaccess` die CSP-Zeile von `https://*.workers.dev` auf die genaue Worker-Adresse einschränken und neu hochladen.

## 4. Nach dem Go-live

- Google Search Console: Domain bestätigen und `https://sonnenschutz-westerwalbesloh.de/sitemap.xml` einreichen.
- Bing Webmaster Tools: Sitemap einreichen (auch für ChatGPT-Suche relevant).
