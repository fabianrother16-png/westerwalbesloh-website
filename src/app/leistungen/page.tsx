import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Sonnenschutz Leistungen in Gütersloh | Westerwalbesloh",
  absoluteTitle: true,
  description:
    "Beratung, Aufmaß, Montage, Reparatur und Wartung von Rollläden, Raffstores und Markisen – vom eigenen Team in Gütersloh, Bielefeld und ganz OWL.",
  path: "/leistungen",
  image: "/images/leistungen/overview-raffstore.jpg",
});

export default function LeistungenOverviewPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
        ])}
      />
      <PageHero
        eyebrow="Leistungen"
        title="Leistungen & Ablauf"
        description="Ehrliches Handwerk, transparente Beratung und langlebige Technik aus einer Hand – von der ersten Beratung bis zur Wartung gewerblicher Anlagen."
        image="/images/leistungen/overview-raffstore.jpg"
        imageAlt="Modernes Wohnhaus mit dunklen Raffstores über Eck an der Terrasse"
      >
        <Button href="/kontakt" size="lg">
          Termin anfragen
        </Button>
      </PageHero>
      <ServicesOverview />
      <ProcessSteps />
      <CtaBanner />
    </>
  );
}
