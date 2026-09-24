import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck, IconPhone, IconStar } from "@/components/icons/UiIcons";
import { company } from "@/data/company";

const highlights = [
  "Kostenlose Beratung und Aufmaß bei Ihnen vor Ort",
  "Montage durch unser festangestelltes Team",
  "Familienbetrieb in Gütersloh seit 1959",
];

export function CtaBanner() {
  const years = new Date().getFullYear() - company.founded;

  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="group relative mx-auto max-w-(--container-content) overflow-hidden rounded-[2rem] bg-brand-primary-dark text-white shadow-2xl shadow-brand-primary-dark/25">
        <Image
          src="/images/kontakt/terrasse.jpg"
          alt=""
          fill
          sizes="(min-width: 1280px) 1216px, 100vw"
          className="object-cover object-[70%_center] transition-transform duration-[1500ms] ease-out group-hover:scale-105"
        />
        {/* Solid tint on small screens, where the text covers the whole photo; a left-to-right fade on desktop. */}
        <div className="absolute inset-0 bg-brand-primary-dark/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-brand-primary-dark lg:via-brand-primary-dark/80 lg:to-brand-primary-dark/0" />

        <div className="relative flex flex-col gap-10 px-6 py-12 sm:px-12 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-20">
          <div className="max-w-xl">
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
          </div>

          {/* Glass badges floating over the photo on large screens. */}
          <div className="hidden shrink-0 flex-col gap-4 lg:flex">
            <div className="float-soft rounded-2xl border border-white/25 bg-white/10 px-6 py-5 backdrop-blur-md">
              <div className="flex gap-0.5 text-amber-300" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IconStar key={index} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-2 text-2xl font-bold">{company.reviews.rating.toLocaleString("de-DE")} von 5</p>
              <p className="text-sm text-white/75">bei Google-Bewertungen</p>
            </div>
            <div className="float-soft float-delay rounded-2xl border border-white/25 bg-white/10 px-6 py-5 backdrop-blur-md">
              <p className="text-2xl font-bold">{years}+ Jahre</p>
              <p className="text-sm text-white/75">Erfahrung in Gütersloh &amp; OWL</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
