// Legal details mirror the Impressum of the previous website; have changes reviewed by a lawyer.
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { LegalSection } from "@/components/legal/LegalSection";
import { buildMetadata } from "@/lib/metadata";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "Impressum | Westerwalbesloh Sonnenschutz Gütersloh & OWL",
  absoluteTitle: true,
  description:
    "Gesetzliches Impressum der Firma Westerwalbesloh aus Gütersloh. Ihr Meisterbetrieb für Markisen, Rollläden & mehr in OWL. Jetzt Kontakt aufnehmen.",
  path: "/impressum",
});

const linkClass = "underline hover:text-brand-primary";

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <Section background="surface">
        <div className="max-w-2xl">
          <LegalSection title="Angaben gemäß § 5 DDG">
            <p>
              {company.legalName}
              <br />
              {company.street}
              <br />
              {company.zip} {company.city}
            </p>
            <p>
              Handelsregister: {company.registerNumber}
              <br />
              Registergericht: {company.registerCourt}
            </p>
            <p>Vertreten durch die Geschäftsführerin {company.managingDirector}</p>
          </LegalSection>

          <LegalSection title="Kontakt">
            <p>
              Telefon: <a href={company.phoneHref} className={linkClass}>{company.phoneDisplay}</a>
              <br />
              E-Mail: <a href={`mailto:${company.email}`} className={linkClass}>{company.email}</a>
            </p>
          </LegalSection>

          <LegalSection title="Umsatzsteuer-ID">
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: {company.vatId}
            </p>
          </LegalSection>

          <LegalSection title="Aufsichtsbehörde">
            <p>
              {company.chamber.name}
              <br />
              {company.chamber.address}
              <br />
              <a href={company.chamber.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {company.chamber.url}
              </a>
            </p>
          </LegalSection>

          <LegalSection title="Berufsbezeichnung und berufsrechtliche Regelungen">
            <p>
              Berufsbezeichnung: {company.profession}
              <br />
              Verliehen in: Deutschland
            </p>
            <p>
              Es gilt die Handwerksordnung (HwO), einsehbar unter{" "}
              <a
                href="https://www.gesetze-im-internet.de/hwo/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                gesetze-im-internet.de/hwo
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection title="Angaben zur Berufshaftpflichtversicherung">
            <p>
              Name und Sitz des Versicherers:
              <br />
              {company.liabilityInsurer.name}
              <br />
              {company.liabilityInsurer.address}
            </p>
            <p>Geltungsraum der Versicherung: {company.liabilityInsurer.scope}</p>
          </LegalSection>

          <LegalSection title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
            <p>
              {company.managingDirector}
              <br />
              {company.street}, {company.zip} {company.city}
            </p>
          </LegalSection>

          <LegalSection title="Verbraucherstreitbeilegung / Universalschlichtungsstelle">
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </LegalSection>

          <LegalSection title="Haftung für Inhalte">
            <p>
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder
              gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
              Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt.
            </p>
          </LegalSection>

          <LegalSection title="Haftung für Links">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
          </LegalSection>

          <LegalSection title="Bildnachweise">
            <p>
              Fotos von Projekten, Team und Montage stammen von Westerwalbesloh selbst. Produktbilder
              stammen von den Herstellern (u. a. WAREMA, Somfy, KADECO, CARAVITA) sowie aus
              lizenzfreien Bildportalen (Unsplash, Pexels, Pixabay). Einzelne Produktabbildungen sind
              KI-generierte Illustrationen und zeigen keine realen Projekte.
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
