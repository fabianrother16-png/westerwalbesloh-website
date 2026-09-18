/**
 * WICHTIGER HINWEIS FÜR DEN BETREIBER:
 * Der Live-Abruf der alten Seite (für eine wortgetreue Übernahme des bestehenden
 * Impressums) war in dieser Umgebung technisch nicht möglich (siehe README.md).
 * Dieser Text wurde daher auf Basis der Firmenangaben aus dem Auftrag sowie
 * öffentlich einsehbarer Handelsregisterdaten neu nach §5 TMG erstellt.
 * Bitte vor Go-Live von einem/einer Rechtsanwalt/Rechtsanwältin prüfen lassen
 * und insbesondere die Umsatzsteuer-ID ergänzen, falls vorhanden.
 */
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { LegalSection } from "@/components/legal/LegalSection";
import { buildMetadata } from "@/lib/metadata";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "Impressum",
  description: "Impressum von Westerwalbesloh GmbH Rollladenbau gemäß § 5 TMG.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <Section background="surface">
        <div className="max-w-2xl">
          <LegalSection title="Angaben gemäß § 5 TMG">
            <p>
              {company.legalName}
              <br />
              {company.street}
              <br />
              {company.zip} {company.city}
              <br />
              Deutschland
            </p>
          </LegalSection>

          <LegalSection title="Vertreten durch">
            <p>Geschäftsführerin: {company.managingDirector}</p>
          </LegalSection>

          <LegalSection title="Kontakt">
            <p>
              Telefon: <a href={company.phoneHref} className="underline hover:text-brand-primary">{company.phoneDisplay}</a>
              <br />
              E-Mail:{" "}
              <a href={`mailto:${company.email}`} className="underline hover:text-brand-primary">
                {company.email}
              </a>
            </p>
          </LegalSection>

          <LegalSection title="Registereintrag">
            <p>
              Eintragung im Handelsregister.
              <br />
              Registergericht: {company.registerCourt}
              <br />
              Registernummer: {company.registerNumber}
            </p>
          </LegalSection>

          <LegalSection title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
            <p>
              {company.managingDirector}
              <br />
              {company.street}, {company.zip} {company.city}
            </p>
          </LegalSection>

          <LegalSection title="EU-Streitschlichtung">
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit, die Sie unter{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-brand-primary"
              >
                https://ec.europa.eu/consumers/odr/
              </a>{" "}
              finden. Unsere E-Mail-Adresse finden Sie oben in diesem Impressum.
            </p>
          </LegalSection>

          <LegalSection title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
            <p>
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </LegalSection>

          <LegalSection title="Haftung für Inhalte">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder
              nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
          </LegalSection>

          <LegalSection title="Haftung für Links">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </LegalSection>

          <LegalSection title="Urheberrecht">
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </LegalSection>
        </div>
      </Section>
    </>
  );
}
