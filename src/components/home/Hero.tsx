import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SlatPattern } from "@/components/ui/SlatPattern";
import { IconStar } from "@/components/icons/UiIcons";
import { company } from "@/data/company";

export function Hero() {
  const yearsExperience = new Date().getFullYear() - company.founded;

  return (
    <section className="relative overflow-hidden bg-brand-primary text-white">
      <SlatPattern className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="relative mx-auto max-w-(--container-content) px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <Badge tone="dark">
            <IconStar className="h-3.5 w-3.5 text-brand-accent-soft" />
            {company.reviews.label}
          </Badge>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Sonnenschutz &amp; Rollladenbau für Gütersloh und ganz OWL
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            {company.slogan} Seit {company.founded} in Familienhand – heute in dritter
            Generation geführt.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/kontakt" size="lg">
              Kostenloses Angebot anfordern
            </Button>
            <Button href="#finder" size="lg" variant="ghost">
              Sonnenschutz-Finder starten
            </Button>
          </div>
        </Reveal>
        <Reveal delay={320}>
          <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-white/15 pt-10 sm:grid-cols-4">
            <div>
              <dt className="text-3xl font-bold">{yearsExperience}+</dt>
              <dd className="mt-1 text-sm text-white/60">Jahre Erfahrung</dd>
            </div>
            <div>
              <dt className="text-3xl font-bold">{company.reviews.rating}★</dt>
              <dd className="mt-1 text-sm text-white/60">Google-Bewertung</dd>
            </div>
            <div>
              <dt className="text-3xl font-bold">3.</dt>
              <dd className="mt-1 text-sm text-white/60">Generation</dd>
            </div>
            <div>
              <dt className="text-3xl font-bold">Somfy</dt>
              <dd className="mt-1 text-sm text-white/60">Experte</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
