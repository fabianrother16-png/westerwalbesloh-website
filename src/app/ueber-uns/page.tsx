import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Partners } from "@/components/home/Partners";
import { NumberedCards } from "@/components/content/ContentSections";
import { DrawLine } from "@/components/ui/DrawLine";
import { IconAward, IconGarage, IconUsers } from "@/components/icons/UiIcons";
import { CtaBanner } from "@/components/home/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { company, story } from "@/data/company";
import { team } from "@/data/team";

export const metadata: Metadata = buildMetadata({
  title: "Sonnenschutz-Experten in Gütersloh | Über uns | Westerwalbesloh",
  absoluteTitle: true,
  description:
    "Auf der Suche nach Qualität? Westerwalbesloh ist Ihr regionaler Meisterbetrieb für Sonnenschutz in Gütersloh & OWL. Jetzt mehr über unser Team erfahren!",
  path: "/ueber-uns",
  image: "/images/home/team-treppe.jpg",
});

const years = new Date().getFullYear() - company.founded;

const facts = [
  { value: String(company.founded), label: "gegründet in Gütersloh" },
  { value: "3", label: "Generationen Familienbetrieb" },
  { value: `${years}+`, label: "Jahre Erfahrung" },
  { value: "100 %", label: "eigenes Montageteam, keine Subunternehmer" },
];

const chapters = [
  { year: "1959", title: "Der Anfang in der Garage", icon: IconGarage, paragraphs: [story[1]] },
  { year: "1980er", title: "Die Westerwalbesloh GmbH entsteht", icon: IconAward, paragraphs: [story[2]] },
  { year: "Heute", title: "Dritte Generation", icon: IconUsers, paragraphs: [story[3], story[4]] },
].map((chapter) => ({ ...chapter, paragraphs: chapter.paragraphs.filter((paragraph): paragraph is string => Boolean(paragraph)) }));

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
        <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Unsere Geschichte" title="Von der Garage zum Fachbetrieb" />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-brand-ink-soft sm:text-xl">{story[0]}</p>
          </Reveal>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <Reveal key={fact.label} delay={index * 70} className="rounded-2xl border border-brand-border bg-brand-sand px-5 py-4">
              <dt className="text-2xl font-bold tracking-tight text-brand-primary sm:text-3xl">{fact.value}</dt>
              <dd className="mt-1 text-sm text-brand-ink-soft">{fact.label}</dd>
            </Reveal>
          ))}
        </dl>

        {/* Three chapters on a timeline that draws itself */}
        <ol className="relative mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          <DrawLine className="absolute top-7 right-[16%] left-[16%] hidden h-0.5 lg:block" />
          {chapters.map((chapter, index) => (
            <Reveal as="li" key={chapter.year} delay={index * 120} className="relative flex flex-col">
              <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-lg shadow-brand-primary/25 lg:mx-auto">
                <chapter.icon className="h-7 w-7" />
              </span>
              <div className="mt-5 flex-1 rounded-3xl border border-brand-border bg-white p-6 sm:p-7">
                <p className="text-4xl font-bold tracking-tight text-brand-accent">{chapter.year}</p>
                <h3 className="mt-2 text-xl font-bold text-brand-ink">{chapter.title}</h3>
                <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-brand-ink-soft">
                  {chapter.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="relative mt-12 overflow-hidden rounded-3xl bg-brand-primary-dark p-8 text-white sm:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-brand-accent/30 blur-3xl" />
          <p className="relative text-sm font-semibold uppercase tracking-[0.14em] text-brand-accent-soft">Unser Versprechen</p>
          <p className="relative mt-3 max-w-4xl text-xl leading-relaxed sm:text-2xl">{story[5]}</p>
        </Reveal>
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
        <div className="mt-12">
          <NumberedCards items={company.values} background="surface" />
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
