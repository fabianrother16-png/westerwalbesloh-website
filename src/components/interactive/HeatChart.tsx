"use client";

import { useEffect, useRef, useState } from "react";

type Row = {
  label: string;
  detail: string;
  /** Abminderungsfaktor Fc: share of solar heat that still passes the shaded window. */
  fc: number;
  outside: boolean;
};

// Richtwerte nach den Anhaltswerten der DIN 4108-2 (Tabelle 7, Dreifachverglasung).
const rows: Row[] = [
  { label: "Rollladen", detail: "außen, geschlossen", fc: 0.1, outside: true },
  { label: "Raffstore", detail: "außen, Lamellen fast geschlossen", fc: 0.15, outside: true },
  { label: "Senkrechtmarkise", detail: "außen, vor dem Fenster", fc: 0.25, outside: true },
  { label: "Terrassenmarkise", detail: "außen, als Vordach", fc: 0.5, outside: true },
  { label: "Plissee oder Rollo", detail: "innen, weiß", fc: 0.7, outside: false },
];

const OUTSIDE_COLOR = "#376fb2"; // brand accent
const INSIDE_COLOR = "#9aa6b2"; // de-emphasis gray; every bar also carries a visible value label

const keptOut = (fc: number) => Math.round((1 - fc) * 100);
const formatFc = (fc: number) => fc.toLocaleString("de-DE", { minimumFractionDigits: 2 });

export function HeatChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    // Safety net for tools that render without scroll events.
    const fallback = window.setTimeout(() => setVisible(true), 2500);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const current = active === null ? null : rows[active];

  return (
    <figure ref={ref} className="flex h-full flex-col">
      <figcaption>
        <p className="text-lg font-bold text-brand-ink">So viel Sonnenwärme bleibt draußen</p>
        <p className="mt-1 text-sm text-brand-ink-soft">
          Anteil der Sonnenwärme, den der Sonnenschutz vom Raum fernhält
        </p>
      </figcaption>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-brand-ink-soft" aria-hidden="true">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: OUTSIDE_COLOR }} />
          außenliegend
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: INSIDE_COLOR }} />
          innenliegend
        </span>
      </div>

      <div className="relative mt-5 flex-1">
        <ul className="space-y-4 pb-2">
          {rows.map((row, index) => {
            const value = keptOut(row.fc);
            const inside = value >= 60;
            return (
              <li
                key={row.label}
                tabIndex={0}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(index)}
                onBlur={() => setActive(null)}
                className="group rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                <p className="text-sm">
                  <span className="font-semibold text-brand-ink">{row.label}</span>{" "}
                  <span className="text-brand-ink-soft">({row.detail})</span>
                </p>
                {/* The light track stands for 100 %, so each bar reads as a share of the whole. */}
                <div className="relative mt-1.5 h-5 rounded-r-[4px] bg-[#edf1f6]">
                  <div
                    className="h-5 rounded-r-[4px] transition-[width,filter] duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:brightness-110 motion-reduce:transition-none"
                    style={{
                      width: visible ? `${value}%` : "0%",
                      backgroundColor: row.outside ? OUTSIDE_COLOR : INSIDE_COLOR,
                      transitionDelay: visible ? `${index * 120}ms` : "0ms",
                    }}
                  />
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 text-xs font-semibold whitespace-nowrap transition-opacity duration-500 ${
                      inside ? "pr-2 text-white" : "pl-2 text-brand-ink"
                    } ${visible ? "opacity-100" : "opacity-0"}`}
                    style={
                      inside
                        ? { right: `${100 - value}%`, transitionDelay: `${900 + index * 120}ms` }
                        : { left: `${value}%`, transitionDelay: `${900 + index * 120}ms` }
                    }
                  >
                    ca. {value} %
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="min-h-10 text-sm text-brand-ink-soft" aria-live="polite">
        {current
          ? `${current.label} (${current.detail}): Abminderungsfaktor Fc ≈ ${formatFc(current.fc)} – nur rund ${Math.round(current.fc * 100)} % der Sonnenwärme gelangen in den Raum.`
          : "Außen liegender Sonnenschutz stoppt die Hitze, bevor sie durchs Glas kommt."}
      </p>

      <details className="mt-3 text-sm">
        <summary className="cursor-pointer font-semibold text-brand-primary hover:text-brand-accent">
          Werte als Tabelle
        </summary>
        <table className="mt-3 w-full text-left text-sm">
          <thead className="text-xs text-brand-ink-soft">
            <tr className="border-b border-brand-border">
              <th className="py-2 pr-3 font-semibold">Sonnenschutz</th>
              <th className="py-2 pr-3 font-semibold">Fc (Richtwert)</th>
              <th className="py-2 font-semibold">Wärme bleibt draußen</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-brand-border/70">
                <td className="py-2 pr-3 text-brand-ink">
                  {row.label} <span className="text-brand-ink-soft">({row.detail})</span>
                </td>
                <td className="py-2 pr-3 tabular-nums">{formatFc(row.fc)}</td>
                <td className="py-2 tabular-nums">ca. {keptOut(row.fc)} %</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>

      <p className="mt-4 text-xs leading-relaxed text-brand-ink-soft">
        Richtwerte nach den Anhaltswerten der DIN 4108-2 (Abminderungsfaktor Fc, Dreifachverglasung).
        Die tatsächliche Wirkung hängt von Verglasung, Farbe, Lamellenstellung und Einbausituation ab.
      </p>
    </figure>
  );
}
