// Describes the data processing of this website (Vercel, Resend, Anthropic chat, consent-gated Instagram/Maps); have changes reviewed by a lawyer.
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { LegalSection } from "@/components/legal/LegalSection";
import { buildMetadata } from "@/lib/metadata";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutz | Westerwalbesloh Sonnenschutz Gütersloh & OWL",
  absoluteTitle: true,
  description:
    "Hier finden Sie alle Informationen zum Schutz Ihrer Daten bei Westerwalbesloh in Gütersloh. Wir behandeln Ihre Daten sicher & vertraulich.",
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <Section background="surface">
        <div className="max-w-2xl">
          <LegalSection title="1. Verantwortlicher">
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              <br />
              {company.legalName}, {company.street}, {company.zip} {company.city}
              <br />
              Telefon: {company.phoneDisplay}, E-Mail: {company.email}
            </p>
          </LegalSection>

          <LegalSection title="2. Ihre Rechte als betroffene Person">
            <p>
              Sie haben jederzeit das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16
              DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
              Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch gegen die Verarbeitung (Art.
              21 DSGVO) bezüglich der Sie betreffenden personenbezogenen Daten. Wenden Sie sich
              hierzu an die oben genannte Kontaktadresse. Außerdem steht Ihnen ein
              Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu, für Nordrhein-
              Westfalen ist dies die Landesbeauftragte für Datenschutz und Informationsfreiheit
              Nordrhein-Westfalen.
            </p>
          </LegalSection>

          <LegalSection title="3. Hosting und Server-Logfiles">
            <p>
              Diese Website wird bei einem externen Hosting-Dienstleister (Vercel Inc.)
              gehostet. Bei jedem Aufruf der Website erfasst der Hosting-Anbieter automatisch
              Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt
              (z. B. IP-Adresse, Datum und Uhrzeit der Anfrage, aufgerufene Seite, verwendeter
              Browser). Diese Daten dienen ausschließlich der technisch fehlerfreien Bereitstellung
              der Website und der Gewährleistung der Systemsicherheit (Art. 6 Abs. 1 lit. f DSGVO)
              und werden nicht mit anderen Datenquellen zusammengeführt.
            </p>
          </LegalSection>

          <LegalSection title="4. Kontaktformular">
            <p>
              Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
              aus dem Formular (Name, Adresse, Telefonnummer, E-Mail-Adresse, Art der Anfrage,
              gewünschtes Produkt sowie Ihre Nachricht) zum Zwecke der Bearbeitung Ihrer Anfrage
              und für den Fall von Anschlussfragen bei uns gespeichert und verarbeitet (Art. 6
              Abs. 1 lit. b DSGVO). Der Versand erfolgt technisch über den E-Mail-Dienstleister
              Resend; die Inhalte werden dabei ausschließlich zur Zustellung der E-Mail an uns
              verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Daten aus
              dem Kontaktformular verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
              Einwilligung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach
              abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Aufbewahrungsfristen
              – insbesondere handels- und steuerrechtliche – bleiben unberührt.
            </p>
          </LegalSection>

          <LegalSection title="5. KI-Sonnenschutz-Berater (Chat)">
            <p>
              Auf unserer Website bieten wir optional einen KI-gestützten Chat-Assistenten an, der
              Fragen zu unseren Produkten und Leistungen beantwortet. Wenn Sie den Chat nutzen,
              werden Ihre eingegebenen Nachrichten zur Erzeugung einer Antwort an die Anthropic
              PBC (USA) als externen KI-Dienstleister übermittelt und dort verarbeitet. Dabei kann
              es zu einer Datenübermittlung in ein Drittland (USA) kommen; Anthropic verpflichtet
              sich vertraglich zur Einhaltung eines angemessenen Datenschutzniveaus (u. a. mittels
              EU-Standardvertragsklauseln). Die Nutzung des Chats ist freiwillig und erfolgt auf
              Grundlage Ihrer Einwilligung bzw. unseres berechtigten Interesses an einer
              modernen, hilfreichen Kundenberatung (Art. 6 Abs. 1 lit. a bzw. lit. f DSGVO). Bitte
              geben Sie im Chat keine besonders sensiblen personenbezogenen Daten ein. Der
              Chatverlauf wird nicht dauerhaft mit Ihrer Person verknüpft gespeichert; er dient
              ausschließlich der Beantwortung Ihrer Anfrage während der laufenden Sitzung.
            </p>
          </LegalSection>

          <LegalSection title="6. Sonnenschutz-Finder">
            <p>
              Der interaktive Sonnenschutz-Finder auf unserer Startseite wird vollständig lokal in
              Ihrem Browser ausgeführt. Ihre Antworten werden nicht an unsere Server übermittelt
              oder gespeichert, es sei denn, Sie entscheiden sich, das Ergebnis über das
              Kontaktformular an uns zu senden – in diesem Fall gilt Abschnitt 4 dieser
              Datenschutzerklärung.
            </p>
          </LegalSection>

          <LegalSection title="7. Cookie- und Einwilligungs-Banner">
            <p>
              Beim ersten Besuch fragen wir Sie in einem Banner, ob wir externe Medien (Instagram,
              Google Maps) laden dürfen. Ihre Auswahl speichern wir ausschließlich lokal in Ihrem
              Browser (Local Storage), damit das Banner nicht bei jedem Seitenaufruf erneut
              erscheint. Diese Speicherung ist technisch erforderlich (§ 25 Abs. 2 TDDDG) und
              wird nicht an uns oder Dritte übertragen. Weitere Cookies oder Tracking- und
              Analyse-Tools setzen wir nicht ein. Ihre Einwilligung können Sie jederzeit über den
              Link „Cookie-Einstellungen“ im Seitenfuß ändern oder widerrufen.
            </p>
          </LegalSection>

          <LegalSection title="8. Google Maps (Anfahrtskarte)">
            <p>
              Auf unserer Kontaktseite bieten wir die Möglichkeit, eine Anfahrtskarte von Google
              Maps zu laden. Die Karte wird nur geladen, wenn Sie externe Medien im
              Cookie-Banner erlaubt oder aktiv auf „Karte laden“ geklickt haben. Erst dann wird
              eine Verbindung zu Servern der Google Ireland Limited bzw. Google LLC hergestellt und
              es können Daten wie Ihre IP-Adresse übertragen werden (Art. 6 Abs. 1 lit. a DSGVO,
              § 25 Abs. 1 TDDDG). Weitere Informationen entnehmen Sie der Datenschutzerklärung
              von Google.
            </p>
          </LegalSection>

          <LegalSection title="9. Eingebettete Instagram-Beiträge">
            <p>
              Auf unserer Startseite zeigen wir ausgewählte Beiträge (Reels) von unserem
              Instagram-Profil. Anbieter ist die Meta Platforms Ireland Limited, Merrion Road,
              Dublin 4, Irland. Die Beiträge werden erst geladen, wenn Sie externe Medien im
              Cookie-Banner erlaubt oder aktiv auf „Reels laden“ geklickt haben. Dann wird eine
              Verbindung zu Servern von Meta hergestellt, wobei insbesondere Ihre IP-Adresse und
              Informationen über Ihren Browser übertragen werden; Meta kann dabei Cookies setzen
              und Daten in die USA übermitteln. Rechtsgrundlage ist Ihre Einwilligung (Art. 6
              Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG), die Sie jederzeit über die
              „Cookie-Einstellungen“ widerrufen können. Weitere Informationen finden Sie in der
              Datenschutzrichtlinie von Instagram.
            </p>
          </LegalSection>

          <LegalSection title="10. Social-Media-Verlinkungen">
            <p>
              Darüber hinaus verlinken wir auf unsere Profile bei Instagram und Facebook sowie
              unser Google-Unternehmensprofil. Bei diesen reinen Verlinkungen werden beim bloßen
              Besuch unserer Website keine Daten an die Anbieter übertragen. Erst wenn Sie aktiv
              auf einen der Links klicken und die jeweilige Plattform besuchen, gelten deren
              eigene Datenschutzbestimmungen.
            </p>
          </LegalSection>

          <LegalSection title="11. SSL-/TLS-Verschlüsselung">
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung zur
              Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als
              Seitenbetreiber senden. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers von „http://“ auf „https://“ wechselt.
            </p>
          </LegalSection>

          <LegalSection title="12. Änderung dieser Datenschutzerklärung">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
              aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen
              umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </LegalSection>
        </div>
      </Section>
    </>
  );
}
