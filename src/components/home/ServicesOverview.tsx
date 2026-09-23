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
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 70}>
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
