import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { IconClock, IconMail, IconMapPin, IconPhone } from "@/components/icons/UiIcons";
import { company } from "@/data/company";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Kontaktieren Sie Westerwalbesloh GmbH Rollladenbau in Gütersloh: Telefon, E-Mail oder Kontaktformular für ein kostenloses, unverbindliches Angebot.",
  path: "/kontakt",
});

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
        title="Sprechen wir über Ihr Vorhaben"
        description="Ob Neuanlage, Reparatur oder gewerbliche Anfrage – schreiben Sie uns oder rufen Sie direkt an. Wir melden uns zeitnah zurück."
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
              </div>
            </div>
            <MapEmbed />
          </div>
        </div>
      </Section>
    </>
  );
}
