import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ContentSections } from "@/components/content/ContentSections";
import { RepairCheck } from "@/components/interactive/RepairCheck";
import { FaqSection } from "@/components/shared/FaqSection";
import { RelatedCard } from "@/components/shared/RelatedCard";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ServiceIcon } from "@/components/icons/ProductIcons";
import { IconMail, IconPhone } from "@/components/icons/UiIcons";
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
    title: service.metaTitle,
    absoluteTitle: true,
    description: service.metaDescription,
    path: `/leistungen/${service.slug}`,
    image: service.heroImage.src,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((item) => item.slug !== service.slug);
  const flip = (bg: "sand" | "surface") => (bg === "sand" ? "surface" : "sand");
  const faqBg = service.sections.length % 2 === 0 ? "sand" : "surface";

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
        image={service.heroImage.src}
        imageAlt={service.heroImage.alt}
      >
        <div className="flex flex-wrap items-center gap-5">
          {service.slug === "reparatur-modernisierung" ? (
            <Button href="#reparatur-check" size="lg">
              Reparatur-Check starten
            </Button>
          ) : (
            <Button href="/kontakt" size="lg">
              Kostenloses Angebot anfordern
            </Button>
          )}
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
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <Reveal>
            <SectionHeading title={service.introTitle} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-brand-ink-soft">
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <aside className="rounded-3xl bg-brand-primary p-7 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-accent-soft">
                Direkter Draht
              </p>
              <p className="mt-3 text-xl font-bold leading-snug">
                Sprechen Sie persönlich mit uns – ohne Warteschleife.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <a href={company.phoneHref} className="flex items-center gap-3 font-semibold hover:text-brand-accent-soft">
                  <IconPhone className="h-5 w-5 text-brand-accent-soft" />
                  {company.phoneDisplay}
                </a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 break-all hover:text-brand-accent-soft">
                  <IconMail className="h-5 w-5 shrink-0 text-brand-accent-soft" />
                  {company.email}
                </a>
              </div>
              <Button href="/kontakt" variant="secondary" className="mt-7 w-full">
                Termin vereinbaren
              </Button>
            </aside>
          </Reveal>
        </div>
      </Section>

      {service.slug === "reparatur-modernisierung" && (
        <section id="reparatur-check" className="relative scroll-mt-20 overflow-hidden bg-brand-primary-dark py-16 text-white sm:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-32 h-96 w-96 rounded-full bg-brand-accent/30 blur-3xl" />
          <Container className="relative">
            <SectionHeading
              light
              eyebrow="Reparatur-Check"
              title="Was ist kaputt? In zwei Klicks zur Einschätzung"
              description="Antippen, was nicht mehr funktioniert: Sie erfahren sofort, was meist dahintersteckt, was Sie selbst prüfen können – und können die Reparatur direkt anfragen."
            />
            <Reveal className="mt-10">
              <RepairCheck phoneHref={company.phoneHref} phoneDisplay={company.phoneDisplay} />
            </Reveal>
          </Container>
        </section>
      )}

      <ContentSections sections={service.sections} startWith="sand" />

      {service.closing && (
        <Section background="primary">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{service.closing.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">{service.closing.text}</p>
          </Reveal>
        </Section>
      )}

      <Section background={faqBg}>
        <FaqSection title={service.faqTitle} items={service.faq} contactHref="/kontakt" />
      </Section>

      <Section background={flip(faqBg)}>
        <SectionHeading eyebrow="Weitere Leistungen" title="Alles aus einer Hand" />
        <div className="scrollbar-hide -mx-5 mt-10 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0">
          {otherServices.map((item) => (
            <div key={item.slug} className="w-[80%] shrink-0 snap-start sm:w-auto">
              <RelatedCard
                href={`/leistungen/${item.slug}`}
                name={item.name}
                description={item.shortDescription}
                image={(item.cardImage ?? item.heroImage).src}
                icon={(props) => <ServiceIcon icon={item.icon} {...props} />}
              />
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
