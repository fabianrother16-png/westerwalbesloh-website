import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IconStar } from "@/components/icons/UiIcons";
import { CountUp } from "@/components/ui/CountUp";
import { company } from "@/data/company";

export function Hero() {
  const yearsExperience = new Date().getFullYear() - company.founded;

  return (
    <section className="relative flex min-h-[calc(100svh-4.5rem)] items-end overflow-hidden bg-brand-primary text-white sm:min-h-[calc(100svh-5.5rem)]">
      <Image
        src="/images/home/hero.jpg"
        alt="Moderne Terrasse mit großer Markise und senkrechter Seitenbeschattung"
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="hero-zoom object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-dark/90 via-brand-primary-dark/55 to-brand-primary-dark/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark/80 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-(--container-content) px-5 pt-28 pb-12 sm:px-8 sm:pb-16">
        <Reveal>
          <Badge tone="dark">
            <IconStar className="h-3.5 w-3.5 text-brand-accent-soft" />
            {company.reviews.label}
          </Badge>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Sonnenschutz für Ihr Zuhause im Raum Gütersloh und OWL
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Als Familienbetrieb mit über 60 Jahren Erfahrung bieten wir Ihnen individuelle
            Sonnenschutzlösungen, persönliche Beratung und fachgerechte Montage – zuverlässig,
            ehrlich und genau auf Ihre Wünsche abgestimmt.
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
          <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-white/20 pt-8 sm:grid-cols-4">
            <div>
              <dt className="text-3xl font-bold">
                <CountUp end={yearsExperience} suffix="+" />
              </dt>
              <dd className="mt-1 text-sm text-white/80">Jahre Erfahrung</dd>
            </div>
            <div>
              <dt className="text-3xl font-bold">
                <CountUp end={company.reviews.rating} decimals={1} suffix="★" />
              </dt>
              <dd className="mt-1 text-sm text-white/80">Google-Bewertung</dd>
            </div>
            <div>
              <dt className="text-3xl font-bold">3.</dt>
              <dd className="mt-1 text-sm text-white/80">Generation</dd>
            </div>
            <div>
              <dt className="text-3xl font-bold">Somfy</dt>
              <dd className="mt-1 text-sm text-white/80">Expert-Fachbetrieb</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
