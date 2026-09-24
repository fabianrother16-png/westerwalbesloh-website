"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Button } from "@/components/ui/Button";
import { ProductIcon } from "@/components/icons/ProductIcons";
import { IconCheck, IconSparkles } from "@/components/icons/UiIcons";
import { DemoRenderer } from "./DemoRenderer";
import { demoCopy, demoOrder, type DemoKey } from "./demoConfig";

/** Home page showroom: one tab per product, each with its own interactive demo and a short explanation. */
export function Showroom() {
  const [active, setActive] = useState<DemoKey>("raffstore");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const copy = demoCopy[active];

  const select = (index: number, focus = false) => {
    const key = demoOrder[index];
    if (!key) return;
    setActive(key);
    const tab = tabs.current[index];
    if (focus) tab?.focus();
    tab?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = demoOrder.length - 1;
    const targets: Record<string, number> = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    const target = targets[event.key];
    if (target === undefined) return;
    event.preventDefault();
    select(target, true);
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Produkt zum Ausprobieren wählen"
        className="scrollbar-hide -mx-5 flex gap-2 overflow-x-auto px-5 py-1 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {demoOrder.map((key, index) => {
          const selected = key === active;
          return (
            <button
              key={key}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              id={`showroom-tab-${key}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="showroom-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => select(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                selected
                  ? "bg-white text-brand-primary shadow-lg shadow-black/20"
                  : "bg-white/10 text-white/85 hover:bg-white/20 hover:text-white"
              }`}
            >
              <ProductIcon icon={demoCopy[key].icon} className="h-5 w-5" />
              {demoCopy[key].label}
            </button>
          );
        })}
      </div>

      <div
        id="showroom-panel"
        role="tabpanel"
        aria-labelledby={`showroom-tab-${active}`}
        className="mt-8 grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14"
      >
        <div className="relative rounded-3xl bg-white p-5 text-brand-ink shadow-2xl shadow-black/25 sm:p-7">
          <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-brand-ink shadow-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-ink" />
            Live-Demo – probieren Sie es aus
          </span>
          <DemoRenderer key={active} demo={active} />
        </div>

        <div key={active} className="swap-in">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-accent-soft">{copy.productName}</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{copy.title}</h3>
          <p className="mt-3 text-lg leading-relaxed text-white/80">{copy.description}</p>
          <ul className="mt-6 space-y-3">
            {copy.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent">
                  <IconCheck className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-white/90">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm leading-relaxed text-white/75">
            <IconSparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
            {copy.note}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={`/produkte/${copy.productSlug}`}>{copy.cta}</Button>
            <Button href={`/kontakt?produkt=${encodeURIComponent(copy.formLabel)}`} variant="ghost">
              Beratung anfragen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
