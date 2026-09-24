import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { CarouselItem } from "@/components/ui/Carousel";

type ProjectPhoto = CarouselItem & { wide?: boolean };

// Up to three project photos as a static grid; a contact tile fills the row when there are fewer than three.
export function ProjectGrid({ items, ctaHref }: { items: ProjectPhoto[]; ctaHref: string }) {
  const wide = items.length === 1 && Boolean(items[0]?.wide);
  const ctaSpan = items.length === 1 && !wide ? "lg:col-span-2" : "sm:col-span-2 lg:col-span-1";
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <figure
          key={item.src}
          className={`group relative overflow-hidden rounded-3xl ${
            wide ? "aspect-[16/10] sm:col-span-2 lg:aspect-[16/9]" : "aspect-[4/5]"
          }`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes={wide ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          {item.caption && (
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4 text-sm font-medium text-white">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
      {items.length < 3 && (
        <div className={`relative flex min-h-[20rem] flex-col justify-end overflow-hidden rounded-3xl bg-brand-primary-dark p-8 text-white ${ctaSpan}`}>
          <Image
            src="/images/team/christoph-kulik.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark via-brand-primary-dark/70 to-brand-primary-dark/0" />
          <div className="relative">
            <p className="text-2xl font-bold tracking-tight">Ihr Projekt als Nächstes?</p>
            <p className="mt-3 leading-relaxed text-white/75">
              Wir kommen zur kostenlosen Beratung und zum Aufmaß zu Ihnen – in Gütersloh und ganz OWL.
            </p>
            <Button href={ctaHref} variant="secondary" className="mt-6">
              Angebot anfordern
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
