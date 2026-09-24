"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

export type SectionNavItem = { id: string; label: string; live?: boolean };

/**
 * In-page navigation for long pages: sticks below the header from tablet width on and highlights the section in view.
 * On phones it is a plain, swipeable row of chips right below the hero.
 */
export function SectionNav({ items, ctaHref }: { items: SectionNavItem[]; ctaHref: string }) {
  const [active, setActive] = useState<string | null>(null);
  const list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = items.map((item) => document.getElementById(item.id)).filter((node): node is HTMLElement => Boolean(node));
    // A thin line in the upper part of the viewport decides which section counts as "current".
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-30% 0px -65% 0px" }
    );
    targets.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);

  // Keep the active chip visible without moving the page itself.
  useEffect(() => {
    const container = list.current;
    const link = active ? container?.querySelector<HTMLElement>(`[data-target="${active}"]`) : null;
    if (!container || !link) return;
    const left = link.offsetLeft - container.clientWidth / 2 + link.clientWidth / 2;
    container.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <nav aria-label="Auf dieser Seite" className="z-30 border-b border-brand-border bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/75 md:sticky md:top-22">
      <div className="mx-auto flex max-w-(--container-content) items-center gap-4 px-5 sm:px-8">
        <div ref={list} className="scrollbar-hide -mx-1 flex flex-1 gap-1 overflow-x-auto py-2.5">
          {items.map((item) => {
            const current = item.id === active;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-target={item.id}
                aria-current={current ? "location" : undefined}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                  current ? "bg-brand-primary text-white" : "text-brand-ink-soft hover:bg-brand-sand hover:text-brand-primary"
                }`}
              >
                {item.label}
                {item.live && <span className={`h-1.5 w-1.5 animate-pulse rounded-full ${current ? "bg-amber-300" : "bg-amber-400"}`} aria-hidden="true" />}
              </a>
            );
          })}
        </div>
        <div className="hidden shrink-0 lg:block">
          <Button href={ctaHref}>Angebot anfordern</Button>
        </div>
      </div>
    </nav>
  );
}
