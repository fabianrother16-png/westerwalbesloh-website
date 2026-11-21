"use client";

import { useRef } from "react";
import Image from "next/image";
import { IconChevronRight } from "@/components/icons/UiIcons";

export type CarouselItem = {
  src: string;
  alt: string;
  caption?: string;
};

export function Carousel({ items }: { items: CarouselItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByAmount(direction: 1 | -1) {
    const node = trackRef.current;
    if (!node) return;
    const slide = node.querySelector<HTMLElement>("[data-slide]");
    const amount = (slide?.offsetWidth ?? node.clientWidth * 0.85) + 16;
    node.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {items.map((item) => (
          <figure
            key={item.src}
            data-slide
            className="group relative aspect-[4/5] w-[78%] shrink-0 snap-center overflow-hidden rounded-3xl sm:w-[46%] lg:w-[30%]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 78vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {item.caption && (
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 py-4 text-sm font-medium text-white">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      <div className="mt-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          aria-label="Vorheriges Bild"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-border bg-white text-brand-ink transition-colors hover:border-brand-primary hover:text-brand-primary"
        >
          <IconChevronRight className="h-5 w-5 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          aria-label="Nächstes Bild"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-border bg-white text-brand-ink transition-colors hover:border-brand-primary hover:text-brand-primary"
        >
          <IconChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
