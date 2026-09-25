import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ProductGrid } from "@/components/home/ProductGrid";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ComparisonMatrix } from "@/components/interactive/ComparisonMatrix";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Sonnenschutz Produkte in Gütersloh | Westerwalbesloh",
  absoluteTitle: true,
  description:
    "Suchen Sie den perfekten Sonnenschutz? Entdecken Sie Markisen, Rollläden & Raffstores in Gütersloh & OWL. Qualität vom Meisterbetrieb. Jetzt ansehen!",
  path: "/produkte",
  image: "/images/produkte/overview-cta.jpg",
});

export default function ProdukteOverviewPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Produkte", path: "/produkte" },
        ])}
      />
      <PageHero
        eyebrow="Sonnenschutz aus einer Hand"
        title="Unsere Produkte"
        description="Von Markisen und Sonnenschirmen über maßgefertigten Insektenschutz bis zu intelligenten Steuerungen: Qualitätsprodukte namhafter Hersteller, individuell geplant und fachgerecht montiert."
        image="/images/produkte/overview-cta.jpg"
        imageAlt="Modernes Wohnhaus mit Lamellen-Pergola in der Abenddämmerung"
      >
        <Button href="/kontakt" size="lg">
          Kostenlose Beratung anfragen
        </Button>
      </PageHero>
      <ProductGrid finderHref="/#finder" />
      <Section id="vergleich" background="surface" className="scroll-mt-24">
        <SectionHeading
          eyebrow="Produktvergleich"
          title="Welcher Sonnenschutz kann was?"
          description="Tippen Sie an, was Ihnen wichtig ist – die Übersicht zeigt sofort, welche Produkte dafür ideal sind."
        />
        <Reveal className="mt-10">
          <ComparisonMatrix />
        </Reveal>
      </Section>
      <CtaBanner />
    </>
  );
}
