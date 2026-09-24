"use client";

import { useEffect, useId, useRef, useState } from "react";

const SLATS = 12;
const PANE = { x: 60, y: 28, width: 280, height: 172 };
const DAY_MS = 9000;

function describe(angle: number) {
  if (angle < 15) return { title: "Offen", text: "Volles Tageslicht und freie Sicht nach draußen." };
  if (angle < 50) return { title: "Lichtlenkung", text: "Hell, aber blendfrei – ideal fürs Arbeiten am Bildschirm." };
  if (angle < 82) return { title: "Hitzeschutz", text: "Die Sonne bleibt draußen, der Raum bleibt angenehm kühl." };
  return { title: "Geschlossen", text: "Sicht- und Hitzeschutz, abends auch als Verdunkelung." };
}

/**
 * Interactive raffstore: the slider turns the slats (0° = horizontal/open, 90° = closed). The "Sonnenautomatik"
 * plays a sunny day in which a sun sensor closes the slats around noon and opens them again in the evening.
 */
export function LamellenDemo() {
  // Unique SVG ids, so gradients never clash with another instance on the page.
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const id = (name: string) => `${uid}-${name}`;
  const [angle, setAngle] = useState(35);
  const [playing, setPlaying] = useState(false);
  const [sun, setSun] = useState({ x: 290, y: 62 });
  const frame = useRef(0);

  useEffect(() => {
    if (!playing) return;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = ((now - start) % DAY_MS) / DAY_MS;
      const height = Math.sin(Math.PI * progress);
      setSun({ x: PANE.x + 24 + progress * (PANE.width - 48), y: PANE.y + PANE.height - 26 - height * (PANE.height - 70) });
      // The sensor closes the slats the higher (and hotter) the sun stands.
      setAngle(Math.round(Math.max(0, Math.min(82, (height - 0.25) * 110))));
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [playing]);

  const radians = (angle * Math.PI) / 180;
  const spacing = PANE.height / SLATS;
  const slatHeight = 2.5 + (spacing + 0.8 - 2.5) * Math.sin(radians);
  const light = Math.cos(radians);
  const state = describe(angle);

  return (
    <div className="flex h-full flex-col">
      <svg viewBox="0 0 400 300" className="w-full rounded-2xl bg-[#eef2f6]" role="img" aria-label={`Raffstore mit ${angle} Grad Lamellenstellung: ${state.title}`}>
        <defs>
          <linearGradient id={id("sky")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8fc3f2" />
            <stop offset="100%" stopColor="#dff0fd" />
          </linearGradient>
          <radialGradient id={id("sun")}>
            <stop offset="0%" stopColor="#fff6c7" />
            <stop offset="45%" stopColor="#ffd86b" />
            <stop offset="100%" stopColor="#ffd86b" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={id("slat")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#aeb8c2" />
            <stop offset="100%" stopColor="#6d7a87" />
          </linearGradient>
          <linearGradient id={id("beam")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe08a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffe08a" stopOpacity="0" />
          </linearGradient>
          <clipPath id={id("pane")}>
            <rect x={PANE.x} y={PANE.y} width={PANE.width} height={PANE.height} rx="4" />
          </clipPath>
        </defs>

        {/* Floor with sunlight falling through the slats */}
        <rect x="0" y="228" width="400" height="72" fill="#e7ddd0" />
        <polygon
          points={`${PANE.x},${PANE.y + PANE.height} ${PANE.x + PANE.width},${PANE.y + PANE.height} ${PANE.x + PANE.width + 50},300 ${PANE.x + 50},300`}
          fill={`url(#${id("beam")})`}
          opacity={light}
        />
        {Array.from({ length: 5 }).map((_, index) => (
          <polygon
            key={index}
            points={`${80 + index * 56},246 ${118 + index * 56},246 ${136 + index * 56},292 ${98 + index * 56},292`}
            fill="#ffd86b"
            opacity={0.45 * light * light}
          />
        ))}

        {/* View outside: sky, sun and a hint of garden */}
        <g clipPath={`url(#${id("pane")})`}>
          <rect x={PANE.x} y={PANE.y} width={PANE.width} height={PANE.height} fill={`url(#${id("sky")})`} />
          <circle cx={sun.x} cy={sun.y} r="34" fill={`url(#${id("sun")})`} />
          <circle cx={sun.x} cy={sun.y} r="13" fill="#ffd24d" />
          <ellipse cx="120" cy="212" rx="120" ry="40" fill="#9cc98a" />
          <ellipse cx="300" cy="218" rx="130" ry="44" fill="#86b877" />

          {Array.from({ length: SLATS }).map((_, index) => {
            const center = PANE.y + spacing * (index + 0.5);
            return (
              <rect
                key={index}
                x={PANE.x}
                y={center - slatHeight / 2}
                width={PANE.width}
                height={slatHeight}
                rx="1.5"
                fill={`url(#${id("slat")})`}
              />
            );
          })}
        </g>

        {/* Frame, guide rails and head box */}
        <rect x={PANE.x - 6} y={PANE.y - 6} width={PANE.width + 12} height={PANE.height + 12} rx="7" fill="none" stroke="#ffffff" strokeWidth="8" />
        <rect x={PANE.x + PANE.width / 2 - 3} y={PANE.y} width="6" height={PANE.height} fill="#ffffff" />
        <rect x={PANE.x - 4} y={PANE.y - 2} width="5" height={PANE.height + 4} rx="2" fill="#4f5b67" />
        <rect x={PANE.x + PANE.width - 1} y={PANE.y - 2} width="5" height={PANE.height + 4} rx="2" fill="#4f5b67" />
        <rect x={PANE.x - 10} y={PANE.y - 20} width={PANE.width + 20} height="14" rx="4" fill="#5d6975" />
        <rect x={PANE.x - 14} y={PANE.y + PANE.height + 6} width={PANE.width + 28} height="8" rx="3" fill="#d4dbe3" />
      </svg>

      <div className="mt-5">
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-lg font-bold text-brand-ink">{state.title}</p>
          <p className="text-sm tabular-nums text-brand-ink-soft">Lamellen: {angle}°</p>
        </div>
        <p className="mt-1 min-h-10 text-sm text-brand-ink-soft" aria-live="polite">
          {state.text}
        </p>

        <label htmlFor="lamellen-winkel" className="sr-only">
          Lamellenwinkel einstellen
        </label>
        <input
          id="lamellen-winkel"
          type="range"
          min={0}
          max={90}
          value={angle}
          onChange={(event) => {
            setPlaying(false);
            setAngle(Number(event.target.value));
          }}
          className="mt-3 w-full accent-brand-accent"
        />
        <div className="mt-1 flex justify-between text-xs text-brand-ink-soft">
          <span>offen</span>
          <span>geschlossen</span>
        </div>

        <button
          type="button"
          onClick={() => setPlaying((value) => !value)}
          aria-pressed={playing}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-5 py-2.5 text-sm font-semibold text-brand-primary transition-colors hover:border-brand-primary"
        >
          <span className={`h-2.5 w-2.5 rounded-full ${playing ? "animate-pulse bg-amber-400" : "bg-brand-accent"}`} />
          {playing ? "Sonnenautomatik stoppen" : "Sonnenautomatik abspielen"}
        </button>
      </div>
    </div>
  );
}
