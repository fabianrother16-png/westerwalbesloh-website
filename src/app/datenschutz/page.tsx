// Describes the data processing of this website (Vercel, Resend, Anthropic chat, consent-gated statistics and Instagram/Maps); have changes reviewed by a lawyer.
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
              Beim ersten Besuch fragen wir Sie in einem Banner, ob wir Statistik-Dienste (Google
              Analytics, Microsoft Clarity) nutzen und externe Medien (Instagram, Google Maps)
              laden dürfen. Ihre Auswahl speichern wir ausschließlich lokal in Ihrem Browser
              (Local Storage), damit das Banner nicht bei jedem Seitenaufruf erneut erscheint.
              Diese Speicherung ist technisch erforderlich (§ 25 Abs. 2 TDDDG) und wird nicht an
              uns oder Dritte übertragen. Ohne Ihre Einwilligung laden wir keine Statistik-Dienste
              und setzen keine Cookies zu Analysezwecken. Ihre Einwilligung können Sie jederzeit
              über den Link „Cookie-Einstellungen“ im Seitenfuß ändern oder widerrufen; bei einem
              Widerruf löschen wir die Cookies von Google Analytics und Microsoft Clarity in Ihrem
              Browser.
            </p>
          </LegalSection>

          <LegalSection title="8. Google Analytics">
            <p>
              Mit Ihrer Einwilligung nutzen wir Google Analytics 4, einen Webanalysedienst der
              Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“).
              Google Analytics zeigt uns, wie Besucher unsere Website nutzen, z. B. welche Seiten
              aufgerufen werden, wie lange Besuche dauern, welche Geräte und Browser verwendet
              werden und aus welcher Region die Besucher ungefähr kommen. Dazu setzt Google die
              Cookies „_ga“ und „_ga_&lt;ID&gt;“, die Ihren Browser wiedererkennen und bis zu zwei
              Jahre gespeichert werden. IP-Adressen werden von Google Analytics 4 nach Angaben von
              Google nicht protokolliert oder gespeichert.
            </p>
            <p>
              Werbe- und Personalisierungsfunktionen haben wir über den sogenannten Consent Mode
              deaktiviert; es werden keine Daten zu Werbezwecken an Google übermittelt. Die
              erhobenen Daten können an Server der Google LLC in den USA übertragen werden. Google
              LLC ist nach dem EU-US Data Privacy Framework zertifiziert, für das die
              EU-Kommission ein angemessenes Datenschutzniveau festgestellt hat
              (https://www.dataprivacyframework.gov/participant/5780). Wir haben mit Google einen
              Vertrag zur Auftragsverarbeitung geschlossen.
            </p>
            <p>
              Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1
              TDDDG), die Sie jederzeit über die „Cookie-Einstellungen“ im Seitenfuß widerrufen
              können. Weitere Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden
              Sie unter https://support.google.com/analytics/answer/6004245?hl=de.
            </p>
          </LegalSection>

          <LegalSection title="9. Microsoft Clarity">
            <p>
              Mit Ihrer Einwilligung nutzen wir Microsoft Clarity, einen Analysedienst der
              Microsoft Ireland Operations Limited, One Microsoft Place, South County Business
              Park, Leopardstown, Dublin 18, Irland. Clarity erfasst, wie Besucher mit unserer
              Website interagieren (z. B. Mausbewegungen, Klicks und Scrollverhalten), und stellt
              dies als Heatmaps und Sitzungsaufzeichnungen dar. So erkennen wir, wo die Bedienung
              der Seite verbessert werden kann. Eingaben in Formularfelder werden von Clarity
              grundsätzlich maskiert und nicht übertragen.
            </p>
            <p>
              Clarity setzt die Cookies „_clck“ und „_clsk“, um Seitenaufrufe einer Sitzung und
              wiederkehrende Besuche einer pseudonymen Kennung zuzuordnen; über Microsoft-Domains
              können zusätzlich Cookies von Microsoft gesetzt werden (z. B. „MUID“). Die Daten
              werden auf Servern von Microsoft (Microsoft Azure) in den USA gespeichert. Microsoft
              ist nach dem EU-US Data Privacy Framework zertifiziert
              (https://www.dataprivacyframework.gov/participant/6474). Wir haben mit Microsoft
              einen Vertrag zur Auftragsverarbeitung geschlossen.
            </p>
            <p>
              Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1
              TDDDG), die Sie jederzeit über die „Cookie-Einstellungen“ im Seitenfuß widerrufen
              können. Weitere Informationen finden Sie in der Datenschutzerklärung von Microsoft
              unter https://privacy.microsoft.com/de-de/privacystatement.
            </p>
          </LegalSection>

          <LegalSection title="10. Google Maps (Anfahrtskarte)">
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

          <LegalSection title="11. Eingebettete Instagram-Beiträge">
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

          <LegalSection title="12. Social-Media-Verlinkungen">
            <p>
              Darüber hinaus verlinken wir auf unsere Profile bei Instagram und Facebook sowie
              unser Google-Unternehmensprofil. Bei diesen reinen Verlinkungen werden beim bloßen
              Besuch unserer Website keine Daten an die Anbieter übertragen. Erst wenn Sie aktiv
              auf einen der Links klicken und die jeweilige Plattform besuchen, gelten deren
              eigene Datenschutzbestimmungen.
            </p>
          </LegalSection>

          <LegalSection title="13. SSL-/TLS-Verschlüsselung">
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung zur
              Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als
              Seitenbetreiber senden. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers von „http://“ auf „https://“ wechselt.
            </p>
          </LegalSection>

          <LegalSection title="14. Änderung dieser Datenschutzerklärung">
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
