import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ProductGrid } from "@/components/home/ProductGrid";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Sonnenschutz Produkte in Gütersloh | Westerwalbesloh",
  absoluteTitle: true,
  description:
    "Suchen Sie den perfekten Sonnenschutz? Entdecken Sie hochwertige Markisen, Rollläden & Raffstores in Gütersloh & OWL. Qualität vom Meisterbetrieb. Jetzt ansehen!",
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
        imageAlt="Moderne Küche mit Raffstoren und Blick ins Grüne"
      >
        <Button href="/kontakt" size="lg">
          Kostenlose Beratung anfragen
        </Button>
      </PageHero>
      <ProductGrid finderHref="/#finder" />
      <CtaBanner />
    </>
  );
}
