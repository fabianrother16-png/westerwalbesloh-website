import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SonnenschutzFinder, type FinderProduct } from "@/components/finder/SonnenschutzFinder";
import { products } from "@/data/products";

const finderProducts: FinderProduct[] = products.map((product) => ({
  slug: product.slug,
  name: product.name,
  shortDescription: product.shortDescription,
  icon: product.icon,
  formLabel: product.formLabel,
  image: { src: product.cardImage.src, alt: product.cardImage.alt },
}));

export function FinderSection() {
  return (
    <Section id="finder" background="surface" className="scroll-mt-20">
      <SectionHeading
        eyebrow="Sonnenschutz-Finder"
        title="In wenigen Klicks zur passenden Empfehlung"
        description="Beantworten Sie fünf kurze Fragen – wir zeigen Ihnen, welches Produkt zu Ihrem Vorhaben passt."
        align="center"
      />
      <Reveal className="mt-12">
        <SonnenschutzFinder products={finderProducts} />
      </Reveal>
    </Section>
  );
}
