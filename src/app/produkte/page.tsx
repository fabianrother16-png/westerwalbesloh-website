import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ProductGrid } from "@/components/home/ProductGrid";
import { CtaBanner } from "@/components/home/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Produkte",
  description:
    "Raffstore, Rollladen, Markisen, Insektenschutz, innenliegender Sonnenschutz, Sonnenschirme und Steuerungstechnik – alle Produkte von Westerwalbesloh im Überblick.",
  path: "/produkte",
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
        eyebrow="Produkte"
        title="Sieben Wege zu mehr Komfort und Schutz"
        description="Ob Hitzeschutz für große Fensterfronten, Beschattung für die Terrasse oder Insektenschutz für Fenster und Türen – wir beraten Sie zu jedem Produktbereich individuell."
      />
      <ProductGrid />
      <CtaBanner />
    </>
  );
}
