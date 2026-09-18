import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderPhoto } from "@/components/media/PlaceholderPhoto";
import { CtaBanner } from "@/components/home/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { company, history } from "@/data/company";
import { team } from "@/data/team";

export const metadata: Metadata = buildMetadata({
  title: "Über uns – Familienbetrieb seit 1959",
  description:
    "Von der Garage an der Elsässer Straße zum Fachbetrieb in dritter Generation: die Geschichte von Westerwalbesloh GmbH Rollladenbau in Gütersloh.",
  path: "/ueber-uns",
});

export default function UeberUnsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Über uns", path: "/ueber-uns" },
        ])}
      />
      <PageHero
        eyebrow="Über uns"
        title="Familiengeführt seit 1959"
        description="Drei Generationen, ein Handwerk: Wir stehen für ehrliche Beratung, saubere Montage und Sonnenschutzlösungen, die zu Gütersloh passen."
      />

      <Section background="surface">
        <SectionHeading eyebrow="Unsere Geschichte" title="Von der Garage zum Fachbetrieb" />
        <div className="mt-12 space-y-10 border-l-2 border-brand-border pl-8">
          {history.map((milestone, index) => (
            <Reveal key={milestone.year} delay={index * 90} className="relative">
              <span className="absolute -left-[2.55rem] flex h-5 w-5 items-center justify-center rounded-full border-4 border-brand-sand bg-brand-accent" />
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-accent">
                {milestone.year}
              </p>
              <h3 className="mt-1 text-xl font-bold text-brand-ink">{milestone.title}</h3>
              <p className="mt-2 max-w-2xl text-brand-ink-soft leading-relaxed">{milestone.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section background="sand">
        <SectionHeading eyebrow="Unsere Arbeitsweise" title="Worauf Sie sich bei uns verlassen können" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {company.values.map((value, index) => (
            <Reveal key={value.title} delay={index * 70}>
              <div className="h-full rounded-3xl border border-brand-border bg-white p-6">
                <h3 className="text-base font-bold text-brand-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section background="surface">
        <SectionHeading eyebrow="Unser Team" title="Die Menschen hinter Westerwalbesloh" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 70}>
              <div className="text-center">
                <PlaceholderPhoto label={member.name} className="aspect-square w-full" />
                <p className="mt-4 text-sm font-bold text-brand-ink">{member.name}</p>
                <p className="text-xs text-brand-ink-soft">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
