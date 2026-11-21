import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

export function AboutIntro() {
  return (
    <Section background="sand">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/home/team-treppe.jpg"
              alt="Drei Mitarbeiter von Westerwalbesloh im Treppenhaus eines Kundenhauses"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-brand-accent px-6 py-4 text-white shadow-xl shadow-brand-accent/30 sm:left-auto sm:-right-6">
            <p className="text-3xl font-bold leading-none">{company.founded}</p>
            <p className="mt-1 text-sm text-white">gegründet in Gütersloh</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <SectionHeading eyebrow="Über uns" title="Familienbetrieb mit Tradition" />
          <p className="mt-6 text-lg leading-relaxed text-brand-ink-soft">
            Seit über 60 Jahren stehen wir für ehrliche Beratung, zuverlässige Arbeit und
            bodenständiges Handwerk. Wir nehmen uns Zeit, jede Situation genau zu prüfen, und
            empfehlen nur das, was technisch sinnvoll und langfristig zuverlässig ist.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-brand-ink-soft">
            Viele unserer Kunden begleiten uns seit Jahrzehnten – manche sogar über mehrere
            Generationen hinweg.
          </p>
          <div className="mt-8">
            <Button href="/ueber-uns" variant="secondary">
              Mehr über uns
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
