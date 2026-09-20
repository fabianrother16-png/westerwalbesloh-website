import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FeatureList } from "@/components/shared/FeatureList";
import { FaqList } from "@/components/shared/FaqList";
import { RelatedCard } from "@/components/shared/RelatedCard";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ServiceIcon } from "@/components/icons/ProductIcons";
import { IconPhone } from "@/components/icons/UiIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { getServiceBySlug, services } from "@/data/services";
import { company } from "@/data/company";
import { localImage } from "@/lib/media";

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
  const heroImage = localImage(`leistungen/${service.slug}/hero.jpg`);
  const detailImage = localImage(`leistungen/${service.slug}/detail.jpg`);

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

      <PageHero
        eyebrow="Leistungen"
        title={service.name}
        description={service.heroText}
        image={heroImage}
        imageAlt={`${service.name} von Westerwalbesloh in Gütersloh`}
      >
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

            {detailImage && (
              <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <Image
                  src={detailImage}
                  alt={`${service.name} durch das Westerwalbesloh-Team in Gütersloh`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
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
            <RelatedCard
              key={item.slug}
              href={`/leistungen/${item.slug}`}
              name={item.name}
              description={item.shortDescription}
              image={localImage(`leistungen/${item.slug}/hero.jpg`)}
              icon={(props) => <ServiceIcon icon={item.icon} {...props} />}
            />
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
