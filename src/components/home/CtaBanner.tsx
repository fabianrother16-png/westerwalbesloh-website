import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck, IconPhone } from "@/components/icons/UiIcons";
import { company } from "@/data/company";

const highlights = [
  "Kostenlose Beratung und Aufmaß bei Ihnen vor Ort",
  "Montage durch unser festangestelltes Team",
  "Familienbetrieb in Gütersloh seit 1959",
];

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-primary-dark text-white">
      <Image
        src="/images/kontakt/terrasse.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      {/* Solid tint on small screens, where the text covers the whole photo; a left-to-right fade on desktop. */}
      <div className="absolute inset-0 bg-brand-primary-dark/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-brand-primary-dark lg:via-brand-primary-dark/85 lg:to-brand-primary-dark/10" />
      <Section background="none" className="relative">
        <Reveal className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-accent-soft">
            Kostenlos &amp; unverbindlich
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Bereit für Ihr Projekt?</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Vereinbaren Sie ein unverbindliches Beratungsgespräch – wir melden uns kurzfristig bei
            Ihnen.
          </p>
          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent">
                  <IconCheck className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/kontakt" size="lg">
              Kostenloses Angebot anfordern
            </Button>
            <Button href={company.phoneHref} size="lg" variant="ghost">
              <IconPhone className="h-4 w-4" />
              {company.phoneDisplay}
            </Button>
          </div>
        </Reveal>
      </Section>
    </section>
  );
}
