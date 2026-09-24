import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { anchorOffset, ContentSections, NumberedCards, sectionId } from "@/components/content/ContentSections";
import { Manufacturers } from "@/components/content/Manufacturers";
import { ProjectGrid } from "@/components/content/ProjectGrid";
import { FaqSection } from "@/components/shared/FaqSection";
import { RelatedCard } from "@/components/shared/RelatedCard";
import { CtaBanner } from "@/components/home/CtaBanner";
import { SectionNav, type SectionNavItem } from "@/components/layout/SectionNav";
import { ProductDemoSection } from "@/components/content/ProductDemoSection";
import { ProductIcon } from "@/components/icons/ProductIcons";
import { IconPhone } from "@/components/icons/UiIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { getProductBySlug, products } from "@/data/products";
import { company } from "@/data/company";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return buildMetadata({
    title: product.metaTitle,
    absoluteTitle: true,
    description: product.metaDescription,
    path: `/produkte/${product.slug}`,
    image: product.heroImage.src,
  });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const contactHref = `/kontakt?produkt=${encodeURIComponent(product.formLabel)}`;
  const otherProducts = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  const flip = (bg: "sand" | "surface") => (bg === "sand" ? "surface" : "sand");
  const manufacturersBg = product.sections.length % 2 === 0 ? "sand" : "surface";
  const photosBg = flip(manufacturersBg);
  const faqBg = product.projectPhotos.length > 0 ? flip(photosBg) : photosBg;
  const relatedBg = flip(faqBg);
  const navItems: SectionNavItem[] = [
    { id: "vorteile", label: "Vorteile" },
    ...(product.demo ? [{ id: "ausprobieren", label: "Ausprobieren", live: true }] : []),
    ...product.sections.map((section) => ({ id: sectionId(section), label: section.navLabel ?? section.eyebrow ?? section.title })),
    { id: "hersteller", label: "Hersteller" },
    ...(product.projectPhotos.length > 0 ? [{ id: "projekte", label: "Projekte" }] : []),
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      <JsonLd data={productSchema(product)} />
      <JsonLd data={faqSchema(product.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Produkte", path: "/produkte" },
          { name: product.name, path: `/produkte/${product.slug}` },
        ])}
      />

      <PageHero
        eyebrow="Produkte"
        title={product.name}
        description={product.tagline}
        image={product.heroImage.src}
        imageAlt={product.heroImage.alt}
        imagePosition={product.heroImage.position}
        highlights={product.highlights}
      >
        <div className="flex flex-wrap items-center gap-5">
          <Button href={contactHref} size="lg">
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

      <SectionNav items={navItems} ctaHref={contactHref} />

      <Section id="vorteile" background="surface" className={anchorOffset}>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Ihre Vorteile auf einen Blick" title={product.benefitsTitle} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-brand-ink-soft">
              {product.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8">
              <Button href={contactHref} variant="secondary">
                Beratung vor Ort vereinbaren
              </Button>
            </div>
          </Reveal>
          <NumberedCards items={product.benefits} background="surface" columns="sm:grid-cols-2" />
        </div>
      </Section>

      {product.demo && <ProductDemoSection demo={product.demo} />}

      <ContentSections sections={product.sections} startWith="sand" />

      <Section id="hersteller" background={manufacturersBg} className={anchorOffset}>
        <Manufacturers
          title={product.manufacturersTitle}
          intro={product.manufacturersIntro}
          manufacturers={product.manufacturers}
        />
      </Section>

      {product.projectPhotos.length > 0 && (
        <Section id="projekte" background={photosBg} className={anchorOffset}>
          <SectionHeading
            eyebrow="Echte Projekte"
            title={`${product.name} von uns montiert`}
            description="Keine Katalogbilder: Diese Anlagen hat unser eigenes Team in Gütersloh und OWL geplant und montiert."
          />
          <Reveal className="mt-10">
            {product.projectPhotos.length > 3 ? (
              <Carousel items={product.projectPhotos} />
            ) : (
              <ProjectGrid items={product.projectPhotos} ctaHref={contactHref} />
            )}
          </Reveal>
        </Section>
      )}

      <Section id="faq" background={faqBg} className={anchorOffset}>
        <FaqSection title={product.faqTitle} items={product.faq} contactHref={contactHref} />
      </Section>

      <Section background={relatedBg}>
        <SectionHeading eyebrow="Weitere Produkte" title="Das könnte Sie ebenfalls interessieren" />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {otherProducts.map((item) => (
            <RelatedCard
              key={item.slug}
              href={`/produkte/${item.slug}`}
              name={item.name}
              description={item.shortDescription}
              image={item.cardImage.src}
              icon={(props) => <ProductIcon icon={item.icon} {...props} />}
            />
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
