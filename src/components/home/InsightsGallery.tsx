import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Carousel, type CarouselItem } from "@/components/ui/Carousel";
import { Button } from "@/components/ui/Button";
import { localImage } from "@/lib/media";
import { company } from "@/data/company";

const candidates: CarouselItem[] = [
  {
    src: "produkte/markisen/gallery-navy.jpg",
    alt: "Elektrische Markise von Westerwalbesloh auf einem Balkon in Gütersloh",
    caption: "Elektrische Markise, Gütersloh",
  },
  {
    src: "produkte/markisen/gallery-terrasse.jpg",
    alt: "Sonnenschutz-Markise über einer Terrasse in OWL",
    caption: "Terrassenbeschattung, OWL",
  },
  {
    src: "projekte/screens-haus.jpg",
    alt: "Außenliegender Sonnenschutz an einem Wohnhaus, montiert von Westerwalbesloh",
    caption: "Außenliegender Sonnenschutz",
  },
  {
    src: "projekte/screen-fassade-detail.jpg",
    alt: "Präzise Montage eines Sonnenschutz-Screens an einer Fassade",
    caption: "Präzision im Detail",
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
