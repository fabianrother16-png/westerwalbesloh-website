import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SlatPattern } from "@/components/ui/SlatPattern";
import { ServiceIcon } from "@/components/icons/ProductIcons";
import { IconArrowRight } from "@/components/icons/UiIcons";
import { services } from "@/data/services";
import { localImage } from "@/lib/media";

export function ServicesOverview() {
  return (
    <Section background="surface">
      <SectionHeading
        eyebrow="Unsere Leistungen"
        title="Von der Beratung bis zur laufenden Wartung"
        description="Wir begleiten Sie durch den gesamten Prozess – persönlich, ehrlich und mit einem festangestellten Team, das jede Anlage selbst montiert."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => {
          const photo = localImage(`leistungen/${service.slug}/hero.jpg`);

          return (
            <Reveal key={service.slug} delay={index * 70}>
              <Link
                href={`/leistungen/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:shadow-xl hover:shadow-brand-ink/10"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  {photo ? (
                    <Image
                      src={photo}
                      alt={`${service.name} durch Westerwalbesloh in Gütersloh`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-brand-primary-soft to-brand-primary-dark p-6">
                      <SlatPattern className="pointer-events-none absolute inset-0 h-full w-full" />
                      <ServiceIcon
                        icon={service.icon}
                        className="relative h-8 w-8 text-white/70"
                        strokeWidth={1.5}
                      />
                      <span className="relative text-2xl leading-[1.05] font-bold tracking-tight text-white">
                        {service.name}
                      </span>
                    </div>
                  )}
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
          );
        })}
      </div>
    </Section>
  );
}
