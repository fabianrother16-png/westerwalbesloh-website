"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState, type PointerEvent } from "react";
import { ProductIcon } from "@/components/icons/ProductIcons";
import { facadeIncidence, sunPosition } from "@/lib/sun";
import type { ProductIconKey } from "@/types";
import { useAnimationLoop, useInView, usePrefersReducedMotion } from "./demo/DemoParts";

type Direction = { key: string; label: string; deg: number };

const directions: Direction[] = [
  { key: "N", label: "Nord", deg: 0 },
  { key: "NO", label: "Nordost", deg: 45 },
  { key: "O", label: "Ost", deg: 90 },
  { key: "SO", label: "Südost", deg: 135 },
  { key: "S", label: "Süd", deg: 180 },
  { key: "SW", label: "Südwest", deg: 225 },
  { key: "W", label: "West", deg: 270 },
  { key: "NW", label: "Nordwest", deg: 315 },
];

const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

type Product = { slug: string; name: string; icon: ProductIconKey };
const raffstore: Product = { slug: "raffstore", name: "Raffstore", icon: "raffstore" };
const rollladen: Product = { slug: "rollladen", name: "Rollladen", icon: "rollladen" };
const markise: Product = { slug: "markisen", name: "Markise", icon: "markise" };
const plissee: Product = { slug: "sonnenschutz", name: "Plissee", icon: "innensonnenschutz" };
const insekten: Product = { slug: "insektentschutz", name: "Insektenschutz", icon: "insektenschutz" };
const steuerung: Product = { slug: "steuerung-antriebe", name: "Sonnenautomatik", icon: "steuerung" };

const advice: Record<string, { title: string; text: string; products: Product[] }> = {
  N: {
    title: "Nordseite: kaum direkte Sonne",
    text: "Hierhin kommt die Sonne nur im Hochsommer, ganz früh und ganz spät – und dann sehr flach. Hitzeschutz ist selten nötig. Ideal zum Lüften mit Insektenschutz, abends sorgen Rollladen oder Plissee für Sichtschutz.",
    products: [insekten, rollladen, plissee],
  },
  NO: {
    title: "Nordost: nur kurz Morgensonne",
    text: "Direkte Sonne gibt es hier nur im Sommer am frühen Morgen. Meist genügt ein Plissee als Blend- und Sichtschutz. Im Schlafzimmer hält ein Rollladen das erste Tageslicht draußen.",
    products: [plissee, rollladen, insekten],
  },
  O: {
    title: "Ostseite: flache Morgensonne",
    text: "Morgens scheint die Sonne flach und direkt ins Fenster – oft genau ins Schlafzimmer. Ein Vordach hilft dagegen kaum. Rollläden und Raffstores direkt vor dem Fenster halten sie zuverlässig draußen; per Zeitschaltuhr öffnen sie erst, wenn Sie es möchten.",
    products: [rollladen, raffstore, plissee],
  },
  SO: {
    title: "Südost: Sonne bis zum frühen Nachmittag",
    text: "Morgens flach, mittags hoch: Ein Raffstore passt sich mit seinen Lamellen jeder Sonnenhöhe an. Auf der Terrasse sorgt eine Markise für Schatten beim Frühstück und Mittagessen.",
    products: [raffstore, markise, rollladen],
  },
  S: {
    title: "Südseite: hohe Mittagssonne",
    text: "Die Sonne steht mittags hoch und scheint viele Stunden aufs Fenster. Hier lohnt sich außenliegender Sonnenschutz am meisten: Raffstores lenken das Licht, eine Markise hält die hoch stehende Sonne schon über der Terrasse ab.",
    products: [raffstore, markise, rollladen],
  },
  SW: {
    title: "Südwest: oft die heißeste Seite",
    text: "Die Sonne scheint vom Mittag bis in den Abend aufs Fenster – genau dann, wenn es draußen am wärmsten ist. Außenliegender Sonnenschutz mit Sonnenautomatik fährt rechtzeitig herunter, auch wenn niemand zu Hause ist.",
    products: [raffstore, rollladen, steuerung],
  },
  W: {
    title: "Westseite: flache Abendsonne",
    text: "Am Nachmittag und Abend kommt die Sonne flach von vorn und heizt die Räume auf, wenn es draußen ohnehin warm ist. Ein Vordach hilft dann wenig – besser wirkt senkrechter Sonnenschutz direkt vor dem Fenster: Raffstore, Rollladen oder Senkrechtmarkise.",
    products: [raffstore, rollladen, markise],
  },
  NW: {
    title: "Nordwest: nur kurz Abendsonne",
    text: "Direkte Sonne gibt es hier nur an Sommerabenden, dann aber sehr flach und blendend. Ein Plissee oder Rollladen schafft Abhilfe, Insektenschutz sorgt für ungestörtes Lüften am Abend.",
    products: [plissee, rollladen, insekten],
  },
};

// Chart frame (SVG user units)
const START = 4;
const END = 23;
const STEP = 5 / 60;
const MAX_ELEVATION = 70;
/** Assumptions for the heat estimate: 2 m² of glass with a g-value of 0.6, clear sky, direct sun only. */
const WINDOW_AREA = 2;
const G_VALUE = 0.6;

/** The chart is drawn in real pixels of its container, so labels stay readable on phones. */
function chartScales(width: number) {
  const height = width < 480 ? 250 : 282;
  const plot = { left: 36, right: width - 14, top: 44, bottom: height - 36 };
  const x = (hour: number) => plot.left + ((hour - START) / (END - START)) * (plot.right - plot.left);
  const y = (elevation: number) => plot.bottom - (Math.max(0, elevation) / MAX_ELEVATION) * (plot.bottom - plot.top);
  const ticks = width < 480 ? [6, 12, 18] : [6, 9, 12, 15, 18, 21];
  return { width, height, plot, x, y, ticks };
}

type Scales = ReturnType<typeof chartScales>;

function formatTime(hour: number) {
  const minutes = Math.round(hour * 60);
  return `${Math.floor(minutes / 60)}:${String(minutes % 60).padStart(2, "0")}`;
}

function formatDuration(hours: number) {
  const minutes = Math.round((hours * 60) / 5) * 5;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} Min.`;
  return m === 0 ? `${h} Std.` : `${h} Std. ${m} Min.`;
}

function compassLabel(azimuth: number) {
  const labels = ["N", "NNO", "NO", "ONO", "O", "OSO", "SO", "SSO", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return labels[Math.round(azimuth / 22.5) % 16];
}

/** Clear-sky direct sunlight in W/m² (Meinel model with Kasten-Young air mass). */
function directSunlight(elevation: number) {
  if (elevation <= 0) return 0;
  const airMass = 1 / (Math.sin((elevation * Math.PI) / 180) + 0.50572 * (elevation + 6.07995) ** -1.6364);
  return 1353 * 0.7 ** (airMass ** 0.678);
}

type Sample = { hour: number; elevation: number; azimuth: number; watts: number; onWindow: boolean };

function computeDay(latitude: number, longitude: number, month: number, facing: number) {
  const samples: Sample[] = [];
  for (let hour = START; hour <= END + 1e-9; hour += STEP) {
    const sun = sunPosition({ latitude, longitude, month, day: 21, hour });
    const incidence = facadeIncidence(sun, facing);
    // Ignore grazing light that barely touches the glass.
    const onWindow = incidence > 0.05 && sun.elevation > 1;
    const watts = onWindow ? directSunlight(sun.elevation) * incidence * WINDOW_AREA * G_VALUE : 0;
    samples.push({ hour, ...sun, watts, onWindow });
  }

  const runs: { from: number; to: number }[] = [];
  for (const sample of samples) {
    const last = runs[runs.length - 1];
    if (!sample.onWindow) continue;
    if (last && Math.abs(sample.hour - STEP - last.to) < 1e-6) last.to = sample.hour;
    else runs.push({ from: sample.hour, to: sample.hour });
  }

  const day = samples.filter((sample) => sample.elevation > 0);
  const sunrise = day[0]?.hour ?? 12;
  const sunset = day[day.length - 1]?.hour ?? 12;
  const peak = samples.reduce((best, sample) => (sample.watts > best.watts ? sample : best), samples[0]!);
  const hoursOnWindow = runs.reduce((sum, run) => sum + (run.to - run.from + STEP), 0);

  return { samples, runs, sunrise, sunset, peak, hoursOnWindow };
}

function pathFor(points: Sample[], { x, y }: Scales) {
  return points.map((point, index) => `${index === 0 ? "M" : "L"}${x(point.hour).toFixed(1)} ${y(point.elevation).toFixed(1)}`).join(" ");
}

/** Where is the sun, when does it reach my window and how much heat comes in? Calculated for Gütersloh. */
export function SunCalculator({ latitude, longitude }: { latitude: number; longitude: number }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const root = useRef<HTMLDivElement>(null);
  const chart = useRef<SVGSVGElement>(null);
  const chartBox = useRef<HTMLDivElement>(null);
  const inView = useInView(root);
  const reduced = usePrefersReducedMotion();
  const [facing, setFacing] = useState(270);
  const [month, setMonth] = useState(7);
  const [time, setTime] = useState(16);
  const [playing, setPlaying] = useState(false);
  const [chartWidth, setChartWidth] = useState(640);

  useEffect(() => {
    const node = chartBox.current;
    if (!node) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) setChartWidth(Math.round(width));
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const scales = chartScales(chartWidth);
  const { plot: PLOT, x, y } = scales;

  const day = useMemo(() => computeDay(latitude, longitude, month, facing), [latitude, longitude, month, facing]);
  const direction = directions.find((item) => item.deg === facing) ?? directions[6]!;
  const tip = advice[direction.key]!;

  useAnimationLoop(playing && inView && !reduced, (elapsed) => {
    const span = day.sunset - day.sunrise + 1;
    setTime(day.sunrise - 0.5 + ((elapsed / 9000) * span) % span);
  });

  const current = day.samples.reduce((best, sample) => (Math.abs(sample.hour - time) < Math.abs(best.hour - time) ? sample : best), day.samples[0]!);
  const isDay = current.elevation > 0;
  const peakWatts = Math.round(day.peak.watts / 10) * 10;
  const people = Math.round(day.peak.watts / 100);
  const windowText =
    day.runs.length === 0
      ? "keine direkte Sonne"
      : day.runs.map((run) => `${formatTime(run.from)}–${formatTime(run.to)}`).join(" und ");

  const scrub = (event: PointerEvent<SVGSVGElement>) => {
    const svg = chart.current;
    if (!svg) return;
    const box = svg.getBoundingClientRect();
    const svgX = ((event.clientX - box.left) / box.width) * scales.width;
    const hour = START + ((svgX - PLOT.left) / (PLOT.right - PLOT.left)) * (END - START);
    setPlaying(false);
    setTime(Math.min(END, Math.max(START, Math.round(hour * 12) / 12)));
  };

  // Compass geometry (top view, north up)
  const C = 130;
  const R = 96;
  const polar = (azimuth: number, radius: number) => ({
    x: C + radius * Math.sin((azimuth * Math.PI) / 180),
    y: C - radius * Math.cos((azimuth * Math.PI) / 180),
  });
  const sunDot = polar(current.azimuth, R);
  const daySamples = day.samples.filter((sample) => sample.elevation > 0);
  const labelRun = day.runs.reduce<{ from: number; to: number } | null>((best, run) => (!best || run.to - run.from > best.to - best.from ? run : best), null);

  return (
    <div ref={root} className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-10">
      {/* Controls and compass */}
      <div>
        <p id={`${uid}-dir`} className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink-soft">
          1. In welche Richtung zeigt Ihr Fenster?
        </p>
        <div className="relative mx-auto mt-3 max-w-[260px]">
          <svg viewBox="0 0 260 260" className="w-full" aria-hidden="true">
            <circle cx={C} cy={C} r={R + 18} fill="#f5f8fb" />
            <circle cx={C} cy={C} r={R} fill="#eef3f8" stroke="#dce3ea" />
            {/* Clickable direction sectors */}
            {directions.map((item) => {
              const a = polar(item.deg - 22.5, R + 18);
              const b = polar(item.deg + 22.5, R + 18);
              return (
                <path
                  key={item.key}
                  d={`M${C} ${C} L${a.x} ${a.y} A ${R + 18} ${R + 18} 0 0 1 ${b.x} ${b.y} Z`}
                  fill={item.deg === facing ? "#376fb2" : "transparent"}
                  fillOpacity={item.deg === facing ? 0.12 : 0}
                  className="cursor-pointer"
                  onClick={() => setFacing(item.deg)}
                />
              );
            })}
            {/* Today's path of the sun around the house */}
            {daySamples.map((sample, index) => {
              const next = daySamples[index + 1];
              if (!next) return null;
              const a = polar(sample.azimuth, R);
              const b = polar(next.azimuth, R);
              return (
                <line key={sample.hour} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={sample.onWindow ? "#f5b400" : "#c3ccd6"} strokeWidth={sample.onWindow ? 7 : 4} strokeLinecap="round" />
              );
            })}
            {["N", "O", "S", "W"].map((label, index) => {
              const point = polar(index * 90, R + 11);
              return (
                <text key={label} x={point.x} y={point.y + 4} textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a5a63">
                  {label}
                </text>
              );
            })}
            {/* House, rotated so the blue window side faces the chosen direction */}
            <g transform={`rotate(${facing - 180} ${C} ${C})`} style={{ transition: reduced ? undefined : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}>
              <rect x={C - 34} y={C - 26} width="68" height="52" rx="4" fill="#ffffff" stroke="#9aa6b2" strokeWidth="1.5" />
              <line x1={C} y1={C - 26} x2={C} y2={C + 26} stroke="#dce3ea" strokeWidth="1.5" />
              <rect x={C - 22} y={C + 22} width="44" height="7" rx="2" fill="#376fb2" />
            </g>
            {/* Sun rays hitting the window */}
            {isDay && current.onWindow &&
              [-12, 0, 12].map((offset) => {
                const perpendicular = { x: Math.cos((current.azimuth * Math.PI) / 180), y: Math.sin((current.azimuth * Math.PI) / 180) };
                const from = { x: sunDot.x + perpendicular.x * offset, y: sunDot.y + perpendicular.y * offset };
                const to = polar(current.azimuth, 40);
                return <line key={offset} x1={from.x} y1={from.y} x2={to.x + perpendicular.x * offset} y2={to.y + perpendicular.y * offset} stroke="#f5b400" strokeWidth="2" strokeDasharray="4 5" opacity="0.8" />;
              })}
            {isDay ? (
              <g>
                <circle cx={sunDot.x} cy={sunDot.y} r="17" fill="#ffd86b" opacity="0.35" />
                <circle cx={sunDot.x} cy={sunDot.y} r="10" fill="#ffc933" stroke="#ffffff" strokeWidth="2" />
              </g>
            ) : (
              <text x={C} y={C + 52} textAnchor="middle" fontSize="12" fill="#4a5a63">
                Nacht – die Sonne ist untergegangen
              </text>
            )}
          </svg>
        </div>
        <div role="radiogroup" aria-labelledby={`${uid}-dir`} className="mt-3 grid grid-cols-4 gap-1.5">
          {directions.map((item) => (
            <button
              key={item.key}
              type="button"
              role="radio"
              aria-checked={item.deg === facing}
              onClick={() => setFacing(item.deg)}
              className={`rounded-lg px-1 py-2 text-xs font-semibold transition-colors ${
                item.deg === facing ? "bg-brand-accent text-white" : "bg-brand-sand text-brand-ink-soft hover:bg-brand-accent-soft/40 hover:text-brand-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <label htmlFor={`${uid}-month`} className="mt-6 block text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink-soft">
          2. Monat: <span className="text-brand-primary">{monthNames[month - 1]}</span>
        </label>
        <input
          id={`${uid}-month`}
          type="range"
          min={1}
          max={12}
          value={month}
          onChange={(event) => setMonth(Number(event.target.value))}
          aria-valuetext={monthNames[month - 1]}
          className="mt-2 w-full accent-brand-accent"
        />
        <div className="flex justify-between text-[11px] text-brand-ink-soft" aria-hidden="true">
          {monthNames.map((name) => (
            <span key={name}>{name[0]}</span>
          ))}
        </div>
      </div>

      {/* Chart and results */}
      <div className="min-w-0">
        <p className="text-lg font-bold text-brand-ink">
          Die Sonne am 21. {monthNames[month - 1]} über Gütersloh
        </p>
        <p className="mt-1 text-sm text-brand-ink-soft">
          Sonnenhöhe im Tagesverlauf – <span className="font-semibold text-amber-600">gelb</span>: Die Sonne scheint auf Ihr {direction.label}fenster.
        </p>

        <div ref={chartBox} className="mt-4">
          <svg
            ref={chart}
            viewBox={`0 0 ${scales.width} ${scales.height}`}
            className="w-full touch-pan-y select-none"
            role="img"
            aria-label={`Sonnenverlauf am 21. ${monthNames[month - 1]}: Aufgang ${formatTime(day.sunrise)} Uhr, Untergang ${formatTime(day.sunset)} Uhr, Sonne auf dem Fenster: ${windowText}.`}
            onPointerDown={scrub}
            onPointerMove={(event) => {
              if (event.pointerType === "mouse" || event.buttons === 1) scrub(event);
            }}
          >
            <defs>
              <linearGradient id={`${uid}-fill`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffc933" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ffc933" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            {/* Grid */}
            {[20, 40, 60].map((value) => (
              <g key={value}>
                <line x1={PLOT.left} x2={PLOT.right} y1={y(value)} y2={y(value)} stroke="#e6ebf0" />
                <text x={PLOT.left - 8} y={y(value) + 4} textAnchor="end" fontSize="11" fill="#6b7a84">
                  {value}°
                </text>
              </g>
            ))}
            {scales.ticks.map((hour) => (
              <text key={hour} x={x(hour)} y={PLOT.bottom + 22} textAnchor="middle" fontSize="11" fill="#6b7a84">
                {hour} Uhr
              </text>
            ))}
            {/* Sun on the window: filled area under the curve */}
            {day.runs.map((run) => {
              const points = day.samples.filter((sample) => sample.hour >= run.from - 1e-6 && sample.hour <= run.to + 1e-6);
              return (
                <path
                  key={run.from}
                  d={`${pathFor(points, scales)} L${x(run.to)} ${PLOT.bottom} L${x(run.from)} ${PLOT.bottom} Z`}
                  fill={`url(#${uid}-fill)`}
                />
              );
            })}
            <path d={pathFor(daySamples, scales)} fill="none" stroke="#c3ccd6" strokeWidth="3" strokeLinecap="round" />
            {day.runs.map((run) => {
              const points = day.samples.filter((sample) => sample.hour >= run.from - 1e-6 && sample.hour <= run.to + 1e-6);
              return <path key={run.from} d={pathFor(points, scales)} fill="none" stroke="#f5b400" strokeWidth="5" strokeLinecap="round" />;
            })}
            <line x1={PLOT.left} x2={PLOT.right} y1={PLOT.bottom} y2={PLOT.bottom} stroke="#9aa6b2" strokeWidth="1.5" />
            {/* Direct label: a bracket above the chart marks when the sun reaches the window */}
          {labelRun ? (
            day.runs.map((run) => {
              const from = x(run.from);
              const to = x(run.to);
              const center = Math.min(PLOT.right - 72, Math.max(PLOT.left + 72, (from + to) / 2));
              return (
                <g key={run.from}>
                  <path d={`M${from} 34 V28 H${to} V34`} fill="none" stroke="#f5b400" strokeWidth="2.5" strokeLinejoin="round" />
                  {run === labelRun && (
                    <text x={center} y="19" textAnchor="middle" fontSize="12" fontWeight="700" fill="#8a5d00">
                      Sonne auf Ihrem Fenster
                    </text>
                  )}
                </g>
              );
            })
          ) : (
            <text x={(PLOT.left + PLOT.right) / 2} y={PLOT.bottom - 12} textAnchor="middle" fontSize="12" fontWeight="700" fill="#4a5a63">
              In diesem Monat keine direkte Sonne auf dem Fenster
            </text>
          )}
          <text x={x(day.sunrise)} y={PLOT.bottom - 8} textAnchor="start" fontSize="10.5" fill="#6b7a84">
              ↑ {formatTime(day.sunrise)}
            </text>
            <text x={x(day.sunset)} y={PLOT.bottom - 8} textAnchor="end" fontSize="10.5" fill="#6b7a84">
              {formatTime(day.sunset)} ↓
            </text>
            {/* Current time */}
            <line x1={x(current.hour)} x2={x(current.hour)} y1={PLOT.top} y2={PLOT.bottom} stroke="#1e3f66" strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />
            {isDay && (
              <g>
                <circle cx={x(current.hour)} cy={y(current.elevation)} r="14" fill="#ffd86b" opacity="0.4" />
                <circle cx={x(current.hour)} cy={y(current.elevation)} r="8" fill="#ffc933" stroke="#ffffff" strokeWidth="2" />
              </g>
            )}
          </svg>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
          <label htmlFor={`${uid}-time`} className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink-soft">
            3. Uhrzeit
          </label>
          <input
            id={`${uid}-time`}
            type="range"
            min={START}
            max={END}
            step={0.25}
            value={Math.round(time * 4) / 4}
            onChange={(event) => {
              setPlaying(false);
              setTime(Number(event.target.value));
            }}
            aria-valuetext={`${formatTime(time)} Uhr`}
            className="min-w-40 flex-1 accent-brand-accent"
          />
          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            aria-pressed={playing}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
              playing ? "border-brand-accent bg-brand-accent text-white" : "border-brand-border bg-white text-brand-primary hover:border-brand-primary"
            }`}
          >
            <span className={`h-2 w-2 rounded-full ${playing ? "animate-pulse bg-amber-300" : "bg-brand-accent"}`} />
            {playing ? "Stopp" : "Tag abspielen"}
          </button>
        </div>

        <p className="mt-3 rounded-xl bg-brand-sand px-4 py-3 text-sm text-brand-ink" aria-live="polite">
          <span className="font-bold tabular-nums">{formatTime(current.hour)} Uhr:</span>{" "}
          {isDay
            ? `Sonne im ${compassLabel(current.azimuth)}, ${Math.round(current.elevation)}° hoch – ${
                current.onWindow ? `sie scheint auf Ihr Fenster (ca. ${Math.round(current.watts / 10) * 10} W Wärme).` : "Ihr Fenster liegt im Schatten."
              }`
            : "Die Sonne ist untergegangen."}
        </p>

        <dl className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-brand-border p-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink-soft">Sonne auf dem Fenster</dt>
            <dd className="mt-1 text-lg font-bold leading-snug text-brand-ink">{day.runs.length ? `${windowText} Uhr` : "keine direkte Sonne"}</dd>
          </div>
          <div className="rounded-2xl border border-brand-border p-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink-soft">Dauer</dt>
            <dd className="mt-1 text-lg font-bold text-brand-ink">{day.hoursOnWindow > 0 ? formatDuration(day.hoursOnWindow) : "–"}</dd>
          </div>
          <div className="rounded-2xl border border-brand-border p-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink-soft">Wärme ohne Sonnenschutz</dt>
            <dd className="mt-1 text-lg font-bold text-brand-ink">{peakWatts > 0 ? `bis ca. ${peakWatts.toLocaleString("de-DE")} W` : "–"}</dd>
            {people > 0 && <dd className="text-xs text-brand-ink-soft">so viel wie {people === 1 ? "eine zusätzliche Person" : `${people} zusätzliche Personen`} im Raum</dd>}
          </div>
        </dl>

        <div className="mt-5 rounded-2xl bg-brand-primary-dark p-5 text-white sm:p-6">
          <p className="text-lg font-bold">{tip.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-white/80">{tip.text}</p>
          {(month <= 2 || month >= 11) && (
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Im Winter ist die Sonne willkommen: Sonnenschutz tagsüber offen lassen und abends schließen – so bleibt die Wärme länger im Haus.
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {tip.products.map((product) => (
              <Link
                key={product.slug}
                href={`/produkte/${product.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                <ProductIcon icon={product.icon} className="h-4 w-4" />
                {product.name}
              </Link>
            ))}
          </div>
        </div>

        <details className="mt-4 text-sm text-brand-ink-soft">
          <summary className="cursor-pointer font-semibold text-brand-accent">Werte als Tabelle</summary>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[420px] text-left">
              <thead>
                <tr className="border-b border-brand-border text-xs uppercase tracking-wide">
                  <th className="py-2 pr-3 font-semibold">Uhrzeit</th>
                  <th className="py-2 pr-3 font-semibold">Sonnenhöhe</th>
                  <th className="py-2 pr-3 font-semibold">Richtung</th>
                  <th className="py-2 font-semibold">Auf dem Fenster</th>
                </tr>
              </thead>
              <tbody>
                {day.samples
                  .filter((sample) => Math.abs(sample.hour - Math.round(sample.hour)) < 1e-6 && sample.elevation > 0)
                  .map((sample) => (
                    <tr key={sample.hour} className="border-b border-brand-border/60">
                      <td className="py-1.5 pr-3 tabular-nums">{formatTime(sample.hour)} Uhr</td>
                      <td className="py-1.5 pr-3 tabular-nums">{Math.round(sample.elevation)}°</td>
                      <td className="py-1.5 pr-3">{compassLabel(sample.azimuth)}</td>
                      <td className="py-1.5 tabular-nums">{sample.onWindow ? `ja, ca. ${Math.round(sample.watts / 10) * 10} W` : "nein"}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </details>
        <p className="mt-3 text-xs leading-relaxed text-brand-ink-soft">
          Berechnet für Gütersloh am 21. des Monats bei wolkenlosem Himmel. Wärme: direkte Sonne auf 2 m² Fensterglas mit g-Wert 0,6;
          eine Person gibt rund 100 W Wärme ab. Richtwerte zur Orientierung – die genaue Situation prüfen wir gern bei Ihnen vor Ort.
        </p>
      </div>
    </div>
  );
}
