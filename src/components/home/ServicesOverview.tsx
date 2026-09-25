import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrowRight } from "@/components/icons/UiIcons";
import { services } from "@/data/services";

export function ServicesOverview({ background = "surface" }: { background?: "sand" | "surface" }) {
  return (
    <Section background={background}>
      <SectionHeading
        eyebrow="Unsere Leistungen"
        title="Von der Beratung bis zur laufenden Wartung"
        description="Ehrliches Handwerk, transparente Beratung und langlebige Technik aus einer Hand – mit einem festangestellten Team, das jede Anlage selbst montiert."
      />
      <p className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-ink-soft sm:hidden" aria-hidden="true">
        Zum Blättern wischen <IconArrowRight className="h-4 w-4" />
      </p>
      <div className="scrollbar-hide -mx-5 mt-4 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 70} className="w-[82%] shrink-0 snap-start sm:w-auto">
            <Link
              href={`/leistungen/${service.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:shadow-xl hover:shadow-brand-ink/10"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={service.heroImage.src}
                  alt={service.heroImage.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-brand-ink">{service.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-ink-soft">
                  {service.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary group-hover:text-brand-accent">
                  Mehr erfahren
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
