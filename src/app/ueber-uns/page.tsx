import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Partners } from "@/components/home/Partners";
import { CtaBanner } from "@/components/home/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { company, history, story } from "@/data/company";
import { team } from "@/data/team";

export const metadata: Metadata = buildMetadata({
  title: "Sonnenschutz-Experten in Gütersloh | Über uns | Westerwalbesloh",
  absoluteTitle: true,
  description:
    "Auf der Suche nach Qualität? Westerwalbesloh ist Ihr regionaler Meisterbetrieb für Sonnenschutz in Gütersloh & OWL. Jetzt mehr über unser Team erfahren!",
  path: "/ueber-uns",
  image: "/images/home/team-treppe.jpg",
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
        title="Drei Generationen Handwerk aus Leidenschaft"
        description="Vom mutigen Start in einer kleinen Garage 1959 bis zum modernen Fachbetrieb von heute: Tradition bewahren und mit innovativen Lösungen in die Zukunft gehen."
        image="/images/home/team-treppe.jpg"
        imageAlt="Drei Mitarbeiter von Westerwalbesloh im Treppenhaus eines Kundenhauses"
        imagePosition="object-[center_22%]"
      />

      <Section background="surface">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading eyebrow="Unsere Geschichte" title="Von der Garage zum Fachbetrieb" />
            <ol className="mt-10 space-y-8 border-l-2 border-brand-border pl-8">
              {history.map((milestone, index) => (
                <Reveal as="li" key={milestone.year} delay={index * 90} className="relative">
                  <span className="absolute -left-[2.55rem] top-0.5 h-5 w-5 rounded-full border-4 border-white bg-brand-accent" />
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-accent">
                    {milestone.year}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-brand-ink">{milestone.title}</h3>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal className="space-y-5 text-lg leading-relaxed text-brand-ink-soft">
            {story.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? "text-xl font-medium text-brand-ink" : undefined}>
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section background="sand">
        <SectionHeading
          eyebrow="Unser Team"
          title="Die Menschen hinter Westerwalbesloh"
          description="Ein festangestelltes Team statt wechselnder Subunternehmer – Sie wissen immer, wer bei Ihnen arbeitet."
        />
        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-5">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 70}>
              <figure className="group">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-brand-border">
                  {member.photo && (
                    <Image
                      src={member.photo}
                      alt={`${member.name}, ${member.role} bei Westerwalbesloh`}
                      fill
                      sizes="(min-width: 1024px) 20vw, 50vw"
                      className="object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                </div>
                <figcaption className="mt-4">
                  <p className="text-base font-bold text-brand-ink">{member.name}</p>
                  <p className="text-sm text-brand-ink-soft">{member.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section background="surface">
        <SectionHeading eyebrow="Unsere Arbeitsweise" title="Worauf Sie sich bei uns verlassen können" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {company.values.map((value, index) => (
            <Reveal key={value.title} delay={index * 70}>
              <div className="h-full rounded-3xl border border-brand-border bg-brand-sand p-6">
                <span className="text-sm font-bold tabular-nums text-brand-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-bold text-brand-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/kontakt">Lernen Sie uns kennen</Button>
        </div>
      </Section>

      <Partners />
      <CtaBanner />
    </>
  );
}
