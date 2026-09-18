import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/icons/ProductIcons";
import { IconArrowRight } from "@/components/icons/UiIcons";
import { services } from "@/data/services";

export function ServicesOverview() {
  return (
    <Section background="surface">
      <SectionHeading
        eyebrow="Unsere Leistungen"
        title="Von der Beratung bis zur laufenden Wartung"
        description="Wir begleiten Sie durch den gesamten Prozess – persönlich, ehrlich und mit einem festangestellten Team."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 70}>
            <Link
              href={`/leistungen/${service.slug}`}
              className="group flex items-start gap-5 rounded-3xl border border-brand-border p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary hover:shadow-lg hover:shadow-brand-ink/5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-sand text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                <ServiceIcon icon={service.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-brand-ink">{service.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">
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
