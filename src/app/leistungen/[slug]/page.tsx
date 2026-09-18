import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FeatureList } from "@/components/shared/FeatureList";
import { FaqList } from "@/components/shared/FaqList";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ServiceIcon } from "@/components/icons/ProductIcons";
import { IconPhone } from "@/components/icons/UiIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug, services } from "@/data/services";
import { company } from "@/data/company";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle.replace(" | Westerwalbesloh", ""),
    description: service.metaDescription,
    path: `/leistungen/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: service.name, path: `/leistungen/${service.slug}` },
        ])}
      />

      <PageHero eyebrow="Leistungen" title={service.name} description={service.heroText}>
        <div className="flex flex-wrap gap-4">
          <Button href="/kontakt" size="lg">
            Kostenloses Angebot anfordern
          </Button>
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white"
          >
            <IconPhone className="h-4 w-4 text-brand-accent-soft" />
            {company.phoneDisplay}
          </a>
        </div>
      </PageHero>

      <Section background="surface">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-sand text-brand-primary">
              <ServiceIcon icon={service.icon} className="h-7 w-7" />
            </span>
            <p className="mt-6 text-lg leading-relaxed text-brand-ink-soft">{service.intro}</p>
            {service.quote && (
              <blockquote className="mt-6 border-l-4 border-brand-accent pl-5 text-xl font-semibold italic text-brand-ink">
                „{service.quote}“
              </blockquote>
            )}
          </Reveal>

          <Reveal delay={100} className="rounded-3xl border border-brand-border bg-brand-sand p-8">
            <h2 className="text-lg font-bold text-brand-ink">Diese Leistung umfasst</h2>
            <div className="mt-5">
              <FeatureList items={service.features} />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section background="sand">
        <SectionHeading eyebrow="Häufige Fragen" title={`Fragen zu ${service.name}`} />
        <div className="mt-10 max-w-3xl">
          <FaqList items={service.faq} />
        </div>
      </Section>

      <Section background="surface">
        <SectionHeading eyebrow="Weitere Leistungen" title="Auch das könnte relevant sein" />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {otherServices.map((item) => (
            <Link
              key={item.slug}
              href={`/leistungen/${item.slug}`}
              className="group rounded-3xl border border-brand-border p-6 transition-colors hover:border-brand-primary hover:bg-brand-sand"
            >
              <ServiceIcon icon={item.icon} className="h-6 w-6 text-brand-primary" />
              <h3 className="mt-4 text-base font-bold text-brand-ink">{item.name}</h3>
              <p className="mt-2 text-sm text-brand-ink-soft">{item.shortDescription}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
