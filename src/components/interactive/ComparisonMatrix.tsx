"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ProductIcon } from "@/components/icons/ProductIcons";
import { IconCheck } from "@/components/icons/UiIcons";
import type { ProductIconKey } from "@/types";

type Column = { slug: string; name: string; icon: ProductIconKey; formLabel: string };

const columns: Column[] = [
  { slug: "raffstore", name: "Raffstore", icon: "raffstore", formLabel: "Raffstore" },
  { slug: "rollladen", name: "Rollladen", icon: "rollladen", formLabel: "Rollladen" },
  { slug: "markisen", name: "Markise", icon: "markise", formLabel: "Markise" },
  { slug: "sonnenschutz", name: "Plissee", icon: "innensonnenschutz", formLabel: "Innen-Sonnenschutz" },
  { slug: "insektentschutz", name: "Insektenschutz", icon: "insektenschutz", formLabel: "Insektenschutz" },
  { slug: "sonnenschirme", name: "Sonnenschirm", icon: "sonnenschirm", formLabel: "Sonnenschirm" },
];

/** 2 = ideal, 1 = geeignet, 0 = nicht dafür gedacht. Optional hint names the variant that makes it work. */
type Cell = 0 | 1 | 2 | [1 | 2, string];

const wishes: { key: string; label: string; cells: Cell[] }[] = [
  { key: "hitze", label: "Hitze aus den Räumen halten", cells: [2, 2, [2, "Senkrechtmarkise"], [1, "Wabenplissee"], 0, 0] },
  { key: "terrasse", label: "Schatten auf Terrasse oder Balkon", cells: [0, 0, 2, 0, 0, 2] },
  { key: "blendfrei", label: "Hell, aber blendfrei – z. B. im Homeoffice", cells: [2, 0, [1, "Senkrechtmarkise"], 2, 0, 0] },
  { key: "dunkel", label: "Schlafzimmer abdunkeln", cells: [[1, "Z-Lamellen"], 2, 0, [2, "Verdunkelungsstoff"], 0, 0] },
  { key: "sicht", label: "Sichtschutz am Abend", cells: [2, 2, [1, "Senkrechtmarkise"], 2, 0, 0] },
  { key: "luft", label: "Lüften ohne Mücken", cells: [0, 0, 0, 0, 2, 0] },
  { key: "winter", label: "Wärme im Winter im Haus halten", cells: [1, 2, 0, [1, "Wabenplissee"], 0, 0] },
];

const valueOf = (cell: Cell | undefined) => (Array.isArray(cell) ? cell[0] : (cell ?? 0));
const hintOf = (cell: Cell | undefined) => (Array.isArray(cell) ? cell[1] : undefined);

function Rating({ cell }: { cell: Cell | undefined }) {
  const value = valueOf(cell);
  const hint = hintOf(cell);
  if (value === 0) {
    return (
      <span className="text-brand-border" aria-label="nicht dafür gedacht">
        –
      </span>
    );
  }
  return (
    <span className="inline-flex flex-col items-center gap-1">
      {value === 2 ? (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-accent text-white" aria-label="ideal">
          <IconCheck className="h-4 w-4" strokeWidth={3} />
        </span>
      ) : (
        <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-brand-accent text-brand-accent" aria-label="geeignet">
          <IconCheck className="h-3.5 w-3.5" strokeWidth={3} />
        </span>
      )}
      {hint && <span className="text-[11px] leading-tight text-brand-ink-soft">{hint}</span>}
    </span>
  );
}

/** "Welcher Sonnenschutz kann was?" - pick what matters, the matrix highlights it and ranks the products. */
export function ComparisonMatrix() {
  const [selected, setSelected] = useState<string[]>(["hitze"]);
  const toggle = (key: string) => setSelected((list) => (list.includes(key) ? list.filter((item) => item !== key) : [...list, key]));

  const scores = columns
    .map((column, index) => ({
      column,
      score: wishes.filter((wish) => selected.includes(wish.key)).reduce((sum, wish) => sum + valueOf(wish.cells[index]), 0),
    }))
    .sort((a, b) => b.score - a.score);
  const maxScore = selected.length * 2;
  const ranking = scores.filter((entry) => entry.score > 0).slice(0, 4);
  const top = ranking.filter((entry) => entry.score === ranking[0]?.score);

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink-soft">Was ist Ihnen wichtig? (Mehrfachauswahl)</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {wishes.map((wish) => {
          const active = selected.includes(wish.key);
          return (
            <button
              key={wish.key}
              type="button"
              onClick={() => toggle(wish.key)}
              aria-pressed={active}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors ${
                active ? "border-brand-accent bg-brand-accent text-white" : "border-brand-border bg-white text-brand-ink-soft hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              <span className={`flex h-4 w-4 items-center justify-center rounded-full border ${active ? "border-white bg-white text-brand-accent" : "border-brand-border"}`}>
                {active && <IconCheck className="h-3 w-3" strokeWidth={3} />}
              </span>
              {wish.label}
            </button>
          );
        })}
      </div>

      {/* Result */}
      <div className="mt-6 rounded-2xl bg-brand-primary-dark p-5 text-white sm:p-6" aria-live="polite">
        {ranking.length === 0 ? (
          <p className="text-white/80">Wählen Sie oben aus, was Ihnen wichtig ist – wir zeigen Ihnen, welcher Sonnenschutz am besten passt.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-accent-soft">
                {top.length > 1 ? "Passen am besten" : "Passt am besten"}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {top.map((entry) => (
                  <Link
                    key={entry.column.slug}
                    href={`/produkte/${entry.column.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-base font-bold text-brand-primary transition-colors hover:bg-brand-accent-soft"
                  >
                    <ProductIcon icon={entry.column.icon} className="h-5 w-5 text-brand-accent" />
                    {entry.column.name}
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <Button href={`/kontakt?produkt=${encodeURIComponent(top[0]!.column.formLabel)}`} variant="ghost">
                  Beratung dazu anfragen
                </Button>
              </div>
            </div>
            <ul className="space-y-3">
              {ranking.map((entry) => (
                <li key={entry.column.slug}>
                  <div className="flex justify-between gap-3 text-sm">
                    <span className="font-semibold">{entry.column.name}</span>
                    <span className="tabular-nums text-white/70">{Math.round((entry.score / maxScore) * 100)} % Übereinstimmung</span>
                  </div>
                  <div className="mt-1.5 h-2.5 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-brand-accent-soft transition-[width] duration-500" style={{ width: `${(entry.score / maxScore) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Full matrix on larger screens */}
      <div className="mt-8 hidden overflow-hidden rounded-2xl border border-brand-border bg-white md:block">
        <table className="w-full text-center text-sm">
          <caption className="sr-only">Welcher Sonnenschutz eignet sich wofür</caption>
          <thead>
            <tr className="border-b border-brand-border bg-brand-sand">
              <th scope="col" className="w-[28%] px-4 py-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink-soft">
                Das ist mir wichtig
              </th>
              {columns.map((column) => (
                <th key={column.slug} scope="col" className="px-2 py-4 font-semibold">
                  <Link href={`/produkte/${column.slug}`} className="inline-flex flex-col items-center gap-1.5 text-brand-ink hover:text-brand-accent">
                    <ProductIcon icon={column.icon} className="h-6 w-6 text-brand-accent" />
                    {column.name}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {wishes.map((wish) => {
              const active = selected.includes(wish.key);
              return (
                <tr key={wish.key} className={`border-b border-brand-border/70 transition-colors last:border-0 ${active ? "bg-brand-accent-soft/25" : ""}`}>
                  <th scope="row" className="px-4 py-3 text-left font-semibold text-brand-ink">
                    {wish.label}
                  </th>
                  {columns.map((column, index) => (
                    <td key={column.slug} className="px-2 py-3 align-middle">
                      <Rating cell={wish.cells[index]} />
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Compact cards on phones */}
      <ul className="mt-8 space-y-3 md:hidden">
        {wishes.map((wish) => {
          const fits = columns
            .map((column, index) => ({ column, value: valueOf(wish.cells[index]), hint: hintOf(wish.cells[index]) }))
            .filter((entry) => entry.value > 0)
            .sort((a, b) => b.value - a.value);
          return (
            <li key={wish.key} className={`rounded-2xl border p-4 ${selected.includes(wish.key) ? "border-brand-accent bg-brand-accent-soft/20" : "border-brand-border bg-white"}`}>
              <p className="font-semibold text-brand-ink">{wish.label}</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {fits.map((entry) => (
                  <Link
                    key={entry.column.slug}
                    href={`/produkte/${entry.column.slug}`}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
                      entry.value === 2 ? "bg-brand-accent text-white" : "border border-brand-accent text-brand-accent"
                    }`}
                  >
                    <ProductIcon icon={entry.column.icon} className="h-3.5 w-3.5" />
                    {entry.column.name}
                    {entry.hint && <span className="font-normal opacity-80">({entry.hint})</span>}
                  </Link>
                ))}
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-brand-ink-soft">
        <span className="inline-flex items-center gap-1.5">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-white">
            <IconCheck className="h-2.5 w-2.5" strokeWidth={3} />
          </span>
          ideal
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand-accent text-brand-accent">
            <IconCheck className="h-2 w-2" strokeWidth={3} />
          </span>
          geeignet
        </span>
        <span>Raffstores, Rollläden und Markisen lassen sich außerdem motorisieren und per App oder Sensor steuern.</span>
      </div>
    </div>
  );
}
