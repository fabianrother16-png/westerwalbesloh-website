import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProductIcon } from "@/components/icons/ProductIcons";
import { IconArrowRight } from "@/components/icons/UiIcons";
import { products } from "@/data/products";

export function ProductGrid() {
  return (
    <Section background="sand">
      <SectionHeading
        eyebrow="Unsere Produkte"
        title="Der passende Sonnenschutz für jede Situation"
        description="Von außenliegenden Raffstores bis zum innenliegenden Plissee – wir beraten Sie zu jedem unserer sieben Produktbereiche und finden die technisch sinnvolle Lösung für Ihr Zuhause."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <Reveal key={product.slug} delay={index * 60}>
            <Link
              href={`/produkte/${product.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-brand-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-primary hover:shadow-lg hover:shadow-brand-ink/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sand text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-white">
                <ProductIcon icon={product.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-brand-ink">{product.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-ink-soft">
                {product.shortDescription}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary group-hover:text-brand-accent">
                Mehr erfahren
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
