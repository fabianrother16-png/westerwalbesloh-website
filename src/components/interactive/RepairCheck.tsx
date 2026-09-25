"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ProductIcon } from "@/components/icons/ProductIcons";
import { IconCheck, IconPhone, IconSparkles } from "@/components/icons/UiIcons";
import { repairAreas } from "@/data/repairCheck";

/** "Was ist kaputt?" - pick the product and the problem, get a plain explanation and a prefilled repair request. */
export function RepairCheck({ phoneHref, phoneDisplay }: { phoneHref: string; phoneDisplay: string }) {
  const [areaKey, setAreaKey] = useState<string | null>(null);
  const [symptomIndex, setSymptomIndex] = useState<number | null>(null);
  const result = useRef<HTMLDivElement>(null);

  const area = repairAreas.find((item) => item.key === areaKey);
  const symptom = area && symptomIndex !== null ? area.symptoms[symptomIndex] : undefined;

  const chooseSymptom = (index: number) => {
    setSymptomIndex(index);
    // On phones the answer appears below the list - bring it into view.
    if (window.matchMedia("(max-width: 1023px)").matches) {
      requestAnimationFrame(() => result.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  };

  const contactHref =
    area && symptom
      ? `/kontakt?anfrage=Reparatur&produkt=${encodeURIComponent(area.formLabel)}&nachricht=${encodeURIComponent(
          `Reparatur-Check: ${area.label} – ${symptom.label}.\n\nHersteller und ungefähres Alter der Anlage (falls bekannt): `
        )}`
      : "/kontakt?anfrage=Reparatur";

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
      <div className="rounded-3xl bg-white p-5 text-brand-ink sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink-soft">1. Was ist betroffen?</p>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {repairAreas.map((item) => {
            const active = item.key === areaKey;
            return (
              <button
                key={item.key}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setAreaKey(item.key);
                  setSymptomIndex(null);
                }}
                className={`flex items-center gap-2.5 rounded-2xl border p-3 text-left text-sm font-semibold transition-colors ${
                  active ? "border-brand-accent bg-brand-accent text-white" : "border-brand-border bg-white text-brand-ink hover:border-brand-accent hover:bg-brand-sand"
                }`}
              >
                <ProductIcon icon={item.icon} className={`h-5 w-5 shrink-0 ${active ? "text-white" : "text-brand-accent"}`} />
                {item.label}
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink-soft">2. Was ist das Problem?</p>
        {area ? (
          <div key={area.key} className="swap-in mt-3 flex flex-col gap-2">
            {area.symptoms.map((item, index) => {
              const active = index === symptomIndex;
              return (
                <button
                  key={item.label}
                  type="button"
                  aria-pressed={active}
                  onClick={() => chooseSymptom(index)}
                  className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    active ? "border-brand-accent bg-brand-accent-soft/30 text-brand-primary" : "border-brand-border text-brand-ink hover:border-brand-accent hover:bg-brand-sand"
                  }`}
                >
                  {item.label}
                  <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${active ? "border-brand-accent bg-brand-accent text-white" : "border-brand-border"}`}>
                    {active && <IconCheck className="h-3 w-3" strokeWidth={3} />}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <p className="mt-3 rounded-2xl border border-dashed border-brand-border px-4 py-5 text-sm text-brand-ink-soft">
            Wählen Sie zuerst oben aus, welche Anlage betroffen ist.
          </p>
        )}
      </div>

      <div ref={result} className="scroll-mt-24 rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8" aria-live="polite">
        {area && symptom ? (
          <div key={`${area.key}-${symptomIndex}`} className="swap-in">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-brand-accent-soft">
              <ProductIcon icon={area.icon} className="h-4 w-4" />
              {area.label}
            </p>
            <p className="mt-2 text-2xl font-bold">{symptom.label}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">Was meist dahintersteckt</p>
            <p className="mt-1.5 leading-relaxed text-white/85">{symptom.cause}</p>
            {symptom.tip && (
              <div className="mt-5 flex gap-3 rounded-2xl bg-white/10 p-4 text-sm leading-relaxed text-white/85">
                <IconSparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                <p>
                  <span className="font-semibold text-white">Das können Sie selbst prüfen: </span>
                  {symptom.tip}
                </p>
              </div>
            )}
            {symptom.warning && (
              <p className="mt-4 rounded-2xl border border-amber-300/50 bg-amber-300/10 p-4 text-sm leading-relaxed text-amber-100">
                <span className="font-semibold text-amber-200">Wichtig: </span>
                {symptom.warning}
              </p>
            )}
            <p className="mt-5 text-sm text-white/70">Unser Grundsatz: Wir reparieren, was sich lohnt – und erneuern, was Sinn macht. Auch Anlagen anderer Hersteller.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={contactHref}>Reparatur anfragen</Button>
              <Button href={phoneHref} variant="ghost">
                <IconPhone className="h-4 w-4" />
                {phoneDisplay}
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex h-full min-h-[16rem] flex-col justify-center">
            <p className="text-2xl font-bold">Was ist kaputt?</p>
            <p className="mt-3 max-w-md leading-relaxed text-white/75">
              Wählen Sie links die Anlage und das Problem. Wir sagen Ihnen, was meist dahintersteckt, was Sie selbst prüfen können – und
              schicken Ihre Anfrage auf Wunsch gleich vorausgefüllt an unser Team.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
