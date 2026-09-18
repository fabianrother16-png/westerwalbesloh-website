import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SlatPattern } from "@/components/ui/SlatPattern";
import { IconPhone } from "@/components/icons/UiIcons";
import { company } from "@/data/company";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-primary text-white">
      <SlatPattern className="pointer-events-none absolute inset-0 h-full w-full" />
      <Section background="none" className="relative">
        <Reveal className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Bereit für Ihr Projekt?</h2>
            <p className="mt-3 max-w-md text-white/75">
              Vereinbaren Sie ein unverbindliches Beratungsgespräch – wir melden uns kurzfristig
              bei Ihnen.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <Button href="/kontakt" size="lg">
              Kostenloses Angebot anfordern
            </Button>
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white"
            >
              <IconPhone className="h-4 w-4 text-brand-accent-soft" />
              oder direkt anrufen: {company.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </Section>
    </section>
  );
}
