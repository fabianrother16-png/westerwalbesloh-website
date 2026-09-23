import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Carousel, type CarouselItem } from "@/components/ui/Carousel";
import { Button } from "@/components/ui/Button";
import { localImage } from "@/lib/media";
import { company } from "@/data/company";

const candidates: CarouselItem[] = [
  {
    src: "team/team-bei-der-arbeit.jpg",
    alt: "Mitarbeiter von Westerwalbesloh bei einer Baustellenpause",
    caption: "Unser Team",
  },
  {
    src: "produkte/markisen/gallery-navy.jpg",
    alt: "Elektrische Markise von Westerwalbesloh auf einem Balkon in Gütersloh",
    caption: "Elektrische Markise, Gütersloh",
  },
  {
    src: "projekte/montage-hochhaus.jpg",
    alt: "Westerwalbesloh-Team bei der Montage an einem mehrgeschossigen Gewerbeobjekt",
    caption: "Montage in luftiger Höhe",
  },
  {
    src: "produkte/markisen/gallery-terrasse.jpg",
    alt: "Sonnenschutz-Markise über einer Terrasse in OWL",
    caption: "Terrassenbeschattung, OWL",
  },
  {
    src: "produkte/markisen/gallery-orange.jpg",
    alt: "Markise in Orange von Westerwalbesloh – große Farbauswahl möglich",
    caption: "Markisen in vielen Farben",
  },
  {
    src: "projekte/screens-haus.jpg",
    alt: "Außenliegender Sonnenschutz an einem Wohnhaus, montiert von Westerwalbesloh",
    caption: "Außenliegender Sonnenschutz",
  },
  {
    src: "projekte/montage-leiter.jpg",
    alt: "Westerwalbesloh-Mitarbeiter bei der Montage eines Rollladens",
    caption: "Handwerk mit Präzision",
  },
  {
    src: "produkte/raffstore/gallery-mehrfamilienhaus.jpg",
    alt: "Raffstoreanlagen an einem Mehrfamilienhaus, montiert von Westerwalbesloh",
    caption: "Raffstore am Mehrfamilienhaus",
  },
  {
    src: "leistungen/objektbau-projekte/gallery-schenke.jpg",
    alt: "Markisen an einem Ladengeschäft, montiert von Westerwalbesloh",
    caption: "Gewerbliche Beschattung",
  },
  {
    src: "projekte/firmenwagen-objekt.jpg",
    alt: "Westerwalbesloh im Einsatz bei einem Gewerbeprojekt in Ostwestfalen-Lippe",
    caption: "Im Einsatz für Gewerbekunden",
  },
];

export function InsightsGallery() {
  const items = candidates
    .map((item) => {
      const resolved = localImage(item.src);
      return resolved ? { ...item, src: resolved } : null;
    })
    .filter((item): item is CarouselItem => item !== null);

  if (items.length === 0) return null;

  return (
    <Section background="surface">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Einblicke"
          title="Aus unserem Arbeitsalltag in Gütersloh und OWL"
          description="Echte Projekte, echtes Team – mehr davon auf Instagram."
        />
        <Button href={company.social.instagram} size="md" variant="secondary">
          @westerwalbesloh_gmbh auf Instagram
        </Button>
      </div>
      <Reveal className="mt-12">
        <Carousel items={items} />
      </Reveal>
    </Section>
  );
}
