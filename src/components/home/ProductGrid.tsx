import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SlatPattern } from "@/components/ui/SlatPattern";
import { ProductIcon } from "@/components/icons/ProductIcons";
import { IconArrowRight } from "@/components/icons/UiIcons";
import { products } from "@/data/products";
import { localImage } from "@/lib/media";

export function ProductGrid() {
  return (
    <Section background="sand">
      <SectionHeading
        eyebrow="Unsere Produkte"
        title="Der passende Sonnenschutz für jede Situation"
        description="Von außenliegenden Raffstores bis zum innenliegenden Plissee – wir beraten Sie zu jedem unserer sieben Produktbereiche und finden die technisch sinnvolle Lösung für Ihr Zuhause in Gütersloh und OWL."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {products.map((product, index) => {
          const photo = localImage(`produkte/${product.slug}/hero.jpg`);

          return (
            <Reveal key={product.slug} delay={index * 60}>
              <Link
                href={`/produkte/${product.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:shadow-xl hover:shadow-brand-ink/10"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  {photo ? (
                    <Image
                      src={photo}
                      alt={`${product.name} von Westerwalbesloh in Gütersloh`}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-brand-primary-soft to-brand-primary-dark p-6">
                      <SlatPattern className="pointer-events-none absolute inset-0 h-full w-full" />
                      <ProductIcon
                        icon={product.icon}
                        className="relative h-8 w-8 text-white/70"
                        strokeWidth={1.5}
                      />
                      <span className="relative text-2xl leading-[1.05] font-bold tracking-tight text-white">
                        {product.name}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-brand-ink">{product.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-ink-soft">
                    {product.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary group-hover:text-brand-accent">
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
