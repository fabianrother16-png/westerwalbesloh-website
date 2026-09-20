import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FeatureList } from "@/components/shared/FeatureList";
import { FaqList } from "@/components/shared/FaqList";
import { RelatedCard } from "@/components/shared/RelatedCard";
import { CtaBanner } from "@/components/home/CtaBanner";
import { ProductIcon } from "@/components/icons/ProductIcons";
import { IconPhone } from "@/components/icons/UiIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { getProductBySlug, products } from "@/data/products";
import { company } from "@/data/company";
import { localImage } from "@/lib/media";

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
    title: product.metaTitle.replace(" | Westerwalbesloh", ""),
    description: product.metaDescription,
    path: `/produkte/${product.slug}`,
  });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const contactHref = `/kontakt?produkt=${encodeURIComponent(product.formLabel)}`;
  const otherProducts = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  const heroImage = localImage(`produkte/${product.slug}/hero.jpg`);
  const detailImage = localImage(`produkte/${product.slug}/detail.jpg`);

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
        description={product.heroText}
        image={heroImage}
        imageAlt={`${product.name} von Westerwalbesloh in Gütersloh`}
      >
        <div className="flex flex-wrap gap-4">
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

      <Section background="surface">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-sand text-brand-accent">
              <ProductIcon icon={product.icon} className="h-7 w-7" />
            </span>
            <p className="mt-6 text-lg leading-relaxed text-brand-ink-soft">{product.intro}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {product.applications.map((application) => (
                <Badge key={application}>{application}</Badge>
              ))}
            </div>

            {detailImage && (
              <div className="relative mt-8 aspect-[4/3] w-full overflow-hidden rounded-3xl">
                <Image
                  src={detailImage}
                  alt={`${product.name}-Montage durch das Westerwalbesloh-Team`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </Reveal>

          <Reveal delay={100} className="rounded-3xl border border-brand-border bg-brand-sand p-8">
            <h2 className="text-lg font-bold text-brand-ink">Das zeichnet {product.name} aus</h2>
            <div className="mt-5">
              <FeatureList items={product.features} />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section background="sand">
        <SectionHeading eyebrow="Häufige Fragen" title={`Fragen zu ${product.name}`} />
        <div className="mt-10 max-w-3xl">
          <FaqList items={product.faq} />
        </div>
      </Section>

      <Section background="surface">
        <SectionHeading eyebrow="Weitere Produkte" title="Das könnte Sie ebenfalls interessieren" />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {otherProducts.map((item) => (
            <RelatedCard
              key={item.slug}
              href={`/produkte/${item.slug}`}
              name={item.name}
              description={item.shortDescription}
              image={localImage(`produkte/${item.slug}/hero.jpg`)}
              icon={(props) => <ProductIcon icon={item.icon} {...props} />}
            />
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
