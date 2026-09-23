import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/icons/UiIcons";
import { products } from "@/data/products";

export function ProductGrid({
  finderHref = "#finder",
  background = "sand",
}: {
  finderHref?: string;
  background?: "sand" | "surface";
}) {
  return (
    <Section background={background}>
      <SectionHeading
        eyebrow="Unsere Produkte"
        title="Der passende Sonnenschutz für jede Situation"
        description="Von außenliegenden Raffstoren bis zum innenliegenden Plissee – wir beraten Sie zu jedem unserer sieben Produktbereiche und finden die technisch sinnvolle Lösung für Ihr Zuhause in Gütersloh und OWL."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {products.map((product, index) => {
          const featured = index < 2;
          return (
            <Reveal key={product.slug} delay={(index % 3) * 70} className={featured ? "lg:col-span-3" : "lg:col-span-2"}>
              <Link
                href={`/produkte/${product.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary hover:shadow-xl hover:shadow-brand-ink/10"
              >
                <div className={`relative w-full overflow-hidden ${featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <Image
                    src={product.cardImage.src}
                    alt={product.cardImage.alt}
                    fill
                    sizes={featured ? "(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
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
        <Reveal delay={140} className="lg:col-span-2">
          <div className="flex h-full flex-col justify-between rounded-3xl bg-brand-primary p-8 text-white">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-accent-soft">
                Noch unsicher?
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-tight">
                Finden Sie in einer Minute den passenden Sonnenschutz.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Oder lassen Sie sich direkt bei Ihnen vor Ort beraten – kostenlos und unverbindlich.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={finderHref} variant="secondary">
                Sonnenschutz-Finder
              </Button>
              <Button href="/kontakt" variant="ghost">
                Beratung anfragen
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
