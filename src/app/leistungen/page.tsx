import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { CtaBanner } from "@/components/home/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Leistungen",
  description:
    "Beratung, Aufmaß & Montage, Reparatur & Modernisierung, Wartung sowie Projekte für Unternehmen und öffentliche Einrichtungen – die Leistungen von Westerwalbesloh.",
  path: "/leistungen",
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
        title="Mehr als Montage: ein Partner für den gesamten Prozess"
        description="Von der ersten Beratung über Reparatur und Modernisierung bis zur laufenden Wartung gewerblicher Anlagen – alles aus einer Hand."
      />
      <ServicesOverview />
      <CtaBanner />
    </>
  );
}
