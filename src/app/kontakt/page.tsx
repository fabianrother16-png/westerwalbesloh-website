import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NumberedCards } from "@/components/content/ContentSections";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { IconClock, IconCompass, IconMail, IconMapPin, IconPhone } from "@/components/icons/UiIcons";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "Sonnenschutz Beratung Gütersloh | Kontakt | Westerwalbesloh",
  absoluteTitle: true,
  description:
    "Fragen zum Sonnenschutz? Kontaktieren Sie uns für eine individuelle Beratung in Gütersloh & OWL. Wir planen Ihr Projekt maßgeschneidert. Jetzt anfragen!",
  path: "/kontakt",
  image: "/images/kontakt/terrasse.jpg",
});

const contactSteps = [
  { title: "Kontaktaufnahme", text: "Melden Sie sich unkompliziert per Telefon, E-Mail oder Formular. Wir nehmen Ihr Anliegen direkt auf." },
  { title: "Details klären", text: "Wir erfragen kurz die wichtigsten Eckdaten zu Ihrer Anlage und Ihren Wünschen, um den Bedarf einzuschätzen." },
  { title: "Termin vor Ort", text: "Falls für die Planung notwendig, kommen wir zu Ihnen und führen eine Beratung oder Prüfung durch." },
  { title: "Angebot & Lösung", text: "Sie erhalten anschließend ein transparentes Angebot oder einen verbindlichen Plan für die Umsetzung." },
];

export default function KontaktPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Kontakt", path: "/kontakt" },
        ])}
      />
      <PageHero
        eyebrow="Kontakt"
        title="Wir sind gerne für Sie da"
        description="Ob Beratung, Reparatur, Modernisierung oder eine Frage zu einem bestehenden Projekt – rufen Sie uns an oder schreiben Sie uns. Wir melden uns zuverlässig bei Ihnen zurück."
        image="/images/kontakt/terrasse.jpg"
        imageAlt="Überdachte Terrasse mit Loungemöbeln und Blick auf den Pool"
      />
      <Section background="surface">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
          <Suspense fallback={<div className="h-[40rem] animate-pulse rounded-3xl bg-brand-sand" />}>
            <ContactForm />
          </Suspense>

          <div className="space-y-6">
            <div className="rounded-3xl border border-brand-border bg-brand-sand p-6">
              <h2 className="text-lg font-bold text-brand-ink">Direkt erreichbar</h2>
              <div className="mt-4 space-y-4 text-sm">
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-3 font-medium text-brand-ink hover:text-brand-primary"
                >
                  <IconPhone className="h-5 w-5 shrink-0 text-brand-accent" />
                  {company.phoneDisplay}
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 font-medium text-brand-ink hover:text-brand-primary"
                >
                  <IconMail className="h-5 w-5 shrink-0 text-brand-accent" />
                  {company.email}
                </a>
                <p className="flex items-start gap-3 text-brand-ink">
                  <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  <span>
                    {company.street}
                    <br />
                    {company.zip} {company.city}
                  </span>
                </p>
                <p className="flex items-start gap-3 text-brand-ink-soft">
                  <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  {company.hoursNote}
                </p>
                <p className="flex items-start gap-3 text-brand-ink-soft">
                  <IconCompass className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  Einsatzgebiet: ganz Kreis Gütersloh, Bielefeld und Ostwestfalen-Lippe
                </p>
              </div>
            </div>
            <MapEmbed />
          </div>
        </div>
      </Section>

      <Section background="sand">
        <SectionHeading eyebrow="Ablauf" title="So läuft eine Kontaktanfrage bei uns ab" />
        <div className="mt-12">
          <NumberedCards items={contactSteps} background="sand" />
        </div>
      </Section>
    </>
  );
}
