"use client";

import { useRef, useState } from "react";
import { DemoActions, DemoButton, DemoScene, DemoSlider, DemoStatus, OutdoorDefs, clamp, lerp, useAnimationLoop, useInView, useSvgIds } from "./DemoParts";

const GROUND = 250;
const MAST_X = 84;
const HUB = { x: 236, y: 74 };
const SEAT = { from: 178, to: 300 };
const DAY_MS = 12000;

type Point = { x: number; y: number };

function rotate(point: Point, center: Point, degrees: number): Point {
  const r = (degrees * Math.PI) / 180;
  const dx = point.x - center.x;
  const dy = point.y - center.y;
  return { x: center.x + dx * Math.cos(r) - dy * Math.sin(r), y: center.y + dx * Math.sin(r) + dy * Math.cos(r) };
}

function geometry(open: number, tilt: number, hour: number) {
  const radius = lerp(16, 120, open);
  const droop = (lerp(78, 16, open) * Math.PI) / 180;
  const left = rotate({ x: HUB.x - Math.cos(droop) * radius, y: HUB.y + Math.sin(droop) * radius }, HUB, tilt);
  const right = rotate({ x: HUB.x + Math.cos(droop) * radius, y: HUB.y + Math.sin(droop) * radius }, HUB, tilt);
  const progress = clamp((hour - 7) / 13);
  const elevation = 12 + 50 * Math.sin(Math.PI * progress);
  const sun = { x: 30 + 340 * progress, y: GROUND - 30 - Math.sin((elevation * Math.PI) / 180) * 196 };
  // Parallel sun rays: the horizontal part follows the sun from east (left, morning) to west (right, evening),
  // the vertical part its elevation - at noon the shadow falls straight below the canopy.
  const radians = (elevation * Math.PI) / 180;
  const direction = { x: Math.cos(radians) * Math.cos(Math.PI * progress), y: Math.sin(radians) };
  const project = (point: Point) => point.x + direction.x * ((GROUND - point.y) / Math.max(direction.y, 0.05));
  const shadow = [project(left), project(right)].sort((a, b) => a - b) as [number, number];
  const overlap = Math.max(0, Math.min(shadow[1], SEAT.to) - Math.max(shadow[0], SEAT.from));
  return { left, right, sun, shadow, coverage: overlap / (SEAT.to - SEAT.from) };
}

function bestTilt(open: number, hour: number) {
  let best = { tilt: 0, coverage: -1 };
  for (let tilt = -30; tilt <= 30; tilt += 2) {
    const { coverage } = geometry(open, tilt, hour);
    if (coverage > best.coverage + 0.001) best = { tilt, coverage };
  }
  return best.tilt;
}

/** Cantilever parasol: open it, tilt it and follow the sun across the day. */
export function SonnenschirmDemo() {
  const id = useSvgIds();
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root);
  const [open, setOpen] = useState(100);
  const [tilt, setTilt] = useState(0);
  const [hour, setHour] = useState(13);
  const [follow, setFollow] = useState(false);

  useAnimationLoop(follow && inView, (elapsed) => {
    const nextHour = 8 + ((elapsed % DAY_MS) / DAY_MS) * 11;
    setHour(nextHour);
    setTilt((current) => current + (bestTilt(open / 100, nextHour) - current) * 0.12);
  });

  const { left, right, sun, shadow, coverage } = geometry(open / 100, tilt, hour);
  const percent = Math.round(coverage * 100);
  const title = percent >= 80 ? "Sitzplatz im Schatten" : percent >= 40 ? "Teilweise Schatten" : "Sitzplatz in der Sonne";
  const time = `${Math.floor(hour)}:${String(Math.floor((hour % 1) * 60)).padStart(2, "0")} Uhr`;

  return (
    <div ref={root} className="flex h-full flex-col">
      <DemoScene label={`Sonnenschirm um ${time}: ${title}, ${percent} Prozent Schatten auf der Sitzgruppe`}>
        <defs>
          <OutdoorDefs id={id} />
          <linearGradient id={id("canopy")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f4ecdc" />
            <stop offset="100%" stopColor="#d9c9a9" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="400" height={GROUND} fill={`url(#${id("sky")})`} />
        <circle cx={sun.x} cy={sun.y} r="30" fill={`url(#${id("sunglow")})`} />
        <circle cx={sun.x} cy={sun.y} r="12" fill="#ffd24d" />
        <ellipse cx="80" cy={GROUND + 6} rx="160" ry="30" fill="#9cc98a" />
        <ellipse cx="340" cy={GROUND + 6} rx="150" ry="28" fill="#86b877" />

        {/* Terrace, shadow and seating */}
        <rect x="0" y={GROUND} width="400" height="12" fill="#c9a67a" />
        <rect x="0" y={GROUND + 12} width="400" height={300 - GROUND - 12} fill="#e7ddd0" />
        <rect x={SEAT.from} y={GROUND - 1} width={SEAT.to - SEAT.from} height="3" fill="#1e3f66" opacity="0.25" />
        {shadow[1] > shadow[0] && (
          <ellipse cx={(shadow[0] + shadow[1]) / 2} cy={GROUND + 5} rx={(shadow[1] - shadow[0]) / 2} ry="7" fill="#1e3f66" opacity="0.3" />
        )}
        <g fill="#5d6975">
          <rect x="186" y="228" width="44" height="5" rx="2" />
          <rect x="190" y="233" width="4" height="17" />
          <rect x="222" y="233" width="4" height="17" />
          <rect x="226" y="208" width="4" height="25" rx="1.5" transform="rotate(-12 228 233)" />
          <rect x="248" y="222" width="36" height="5" rx="2" />
          <rect x="264" y="227" width="5" height="23" />
        </g>

        {/* Parasol: base, mast, arm and canopy */}
        <rect x={MAST_X - 26} y={GROUND - 6} width="52" height="8" rx="3" fill="#4f5b67" />
        <rect x={MAST_X - 3} y="54" width="6" height={GROUND - 56} fill="#4f5b67" />
        <path d={`M${MAST_X} 60 Q ${(MAST_X + HUB.x) / 2} 44 ${HUB.x} ${HUB.y - 12}`} fill="none" stroke="#4f5b67" strokeWidth="5" strokeLinecap="round" />
        <line x1={HUB.x} y1={HUB.y - 12} x2={HUB.x} y2={HUB.y} stroke="#4f5b67" strokeWidth="3" />
        <path
          d={`M${left.x} ${left.y} L ${HUB.x} ${HUB.y - 6} L ${right.x} ${right.y} Q ${HUB.x} ${(left.y + right.y) / 2 + 6} ${left.x} ${left.y} Z`}
          fill={`url(#${id("canopy")})`}
          stroke="#bfae8c"
          strokeWidth="1"
        />
        <circle cx={HUB.x} cy={HUB.y - 6} r="3.5" fill="#4f5b67" />
      </DemoScene>

      <DemoStatus title={title} value={`${time} · Schatten: ${percent} %`} text="Ampelschirme lassen sich öffnen, neigen und drehen – so folgt der Schatten der Sonne, ohne dass ein Mast im Weg steht." />
      <DemoSlider label="Schirm öffnen" value={open} onChange={(value) => { setFollow(false); setOpen(value); }} left="zu" right="offen" />
      <DemoSlider label="Neigen" value={Math.round(tilt)} min={-30} max={30} onChange={(value) => { setFollow(false); setTilt(value); }} left="zur Morgensonne" right="zur Abendsonne" />
      <DemoSlider label="Uhrzeit" value={Math.round(hour * 4) / 4} min={7} max={20} onChange={(value) => { setFollow(false); setHour(value); }} left="7 Uhr" right="20 Uhr" />
      <DemoActions>
        <DemoButton active={follow} onClick={() => setFollow((value) => !value)}>
          {follow ? "Stopp" : "Schatten folgt der Sonne"}
        </DemoButton>
      </DemoActions>
    </div>
  );
}
