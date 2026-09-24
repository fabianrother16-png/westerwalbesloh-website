"use client";

import { useRef, useState } from "react";
import {
  DemoActions,
  DemoButton,
  DemoScene,
  DemoSlider,
  DemoStatus,
  OutdoorDefs,
  Sun,
  useAnimationLoop,
  useInView,
  usePrefersReducedMotion,
  useSvgIds,
} from "./DemoParts";

const PANE = { x: 90, y: 42, width: 220, height: 176 };

type Insect = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  /** 0 = far outside, 1 = at the window plane */
  depth: number;
  phase: number;
  inside: boolean;
  bump: number;
};

// Deterministic start positions, so server and browser render the same scene.
const START: Insect[] = Array.from({ length: 7 }, (_, index) => ({
  x: PANE.x + 25 + ((index * 53) % (PANE.width - 50)),
  y: PANE.y + 25 + ((index * 37) % (PANE.height - 60)),
  vx: index % 2 ? 0.7 : -0.6,
  vy: index % 3 ? 0.4 : -0.5,
  depth: (index * 0.13) % 0.8,
  phase: index * 0.9,
  inside: false,
  bump: 0,
}));

function InsectShape({ x, y, scale, flap }: { x: number; y: number; scale: number; flap: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="-3" cy={-2 - flap} rx="3.4" ry="1.8" fill="#ffffff" opacity="0.75" transform="rotate(-25)" />
      <ellipse cx="3" cy={-2 - flap} rx="3.4" ry="1.8" fill="#ffffff" opacity="0.75" transform="rotate(25)" />
      <ellipse cx="0" cy="0" rx="1.7" ry="3.2" fill="#2b2f36" />
    </g>
  );
}

/** Insect screen: slide it shut and watch midges bounce off while fresh air still flows in. */
export function InsektenschutzDemo() {
  const id = useSvgIds();
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root);
  const reduced = usePrefersReducedMotion();
  const [cover, setCover] = useState(100);
  const [insects, setInsects] = useState(START);
  const [time, setTime] = useState(0);
  const screenEdge = PANE.x + (PANE.width * cover) / 100;

  useAnimationLoop(inView && !reduced, (elapsed) => {
    setTime(elapsed);
    setInsects((list) =>
      list.map((insect) => {
        const next = { ...insect, bump: Math.max(0, insect.bump - 0.05) };
        if (insect.inside) {
          // Buzzing around the room
          next.vx += (Math.random() - 0.5) * 0.5;
          next.vy += (Math.random() - 0.5) * 0.5;
          next.vx = Math.max(-2, Math.min(2, next.vx));
          next.vy = Math.max(-2, Math.min(2, next.vy));
          next.x += next.vx;
          next.y += next.vy;
          if (next.x < 20 || next.x > 380) next.vx *= -1;
          if (next.y < 20 || next.y > 280) next.vy *= -1;
          return next;
        }
        next.vx += (Math.random() - 0.5) * 0.3;
        next.vy += (Math.random() - 0.5) * 0.3;
        next.vx = Math.max(-1.2, Math.min(1.2, next.vx));
        next.vy = Math.max(-1.2, Math.min(1.2, next.vy));
        next.x += next.vx;
        next.y += next.vy;
        if (next.x < PANE.x + 8 || next.x > PANE.x + PANE.width - 8) next.vx *= -1;
        if (next.y < PANE.y + 8 || next.y > PANE.y + PANE.height - 30) next.vy *= -1;
        next.phase += 0.016;
        next.depth = 0.5 + 0.5 * Math.sin(next.phase);
        if (next.depth > 0.985) {
          if (next.x < screenEdge) {
            // Hits the mesh and bounces back
            next.phase += Math.PI * 0.6;
            next.bump = 1;
          } else {
            next.inside = true;
          }
        }
        return next;
      })
    );
  });

  const inside = insects.filter((insect) => insect.inside).length;
  const flap = Math.sin(time / 30) * 1.2;
  const state =
    cover >= 99
      ? { title: "Fliegengitter geschlossen", text: "Frische Luft kommt herein, Mücken und Fliegen bleiben draußen." }
      : cover <= 1
        ? { title: "Offen ohne Schutz", text: "Lüften ja – aber Insekten fliegen ungehindert herein." }
        : { title: "Teilweise geschlossen", text: "Durch die offene Lücke finden Insekten noch ihren Weg herein." };

  return (
    <div ref={root} className="flex h-full flex-col">
      <DemoScene label={`Insektenschutz zu ${cover} Prozent geschlossen, ${inside} Insekten im Raum`}>
        <defs>
          <OutdoorDefs id={id} />
          <pattern id={id("mesh")} width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M0 0H4M0 0V4" stroke="#3c4650" strokeWidth="0.6" opacity="0.55" />
          </pattern>
          <clipPath id={id("pane")}>
            <rect x={PANE.x} y={PANE.y} width={PANE.width} height={PANE.height} rx="3" />
          </clipPath>
        </defs>

        <rect x="0" y="240" width="400" height="60" fill="#e7ddd0" />

        <g clipPath={`url(#${id("pane")})`}>
          <rect x={PANE.x} y={PANE.y} width={PANE.width} height={PANE.height} fill={`url(#${id("sky")})`} />
          <Sun id={id} x={270} y={80} />
          <ellipse cx={PANE.x + 50} cy={PANE.y + PANE.height + 12} rx="110" ry="50" fill="#9cc98a" />
          <ellipse cx={PANE.x + 190} cy={PANE.y + PANE.height + 18} rx="120" ry="52" fill="#86b877" />
          {insects
            .filter((insect) => !insect.inside)
            .map((insect, index) => (
              <InsectShape key={index} x={insect.x} y={insect.y} scale={0.8 + insect.depth * 0.8} flap={flap} />
            ))}
          {/* Insect screen sliding in from the left */}
          <rect x={PANE.x} y={PANE.y} width={screenEdge - PANE.x} height={PANE.height} fill={`url(#${id("mesh")})`} />
          <rect x={PANE.x} y={PANE.y} width={screenEdge - PANE.x} height={PANE.height} fill="#ffffff" opacity="0.08" />
          {insects
            .filter((insect) => !insect.inside && insect.bump > 0)
            .map((insect, index) => (
              <circle key={index} cx={insect.x} cy={insect.y} r={4 + (1 - insect.bump) * 10} fill="none" stroke="#ffffff" strokeWidth="1.5" opacity={insect.bump} />
            ))}
        </g>
        {cover > 0 && <rect x={screenEdge - 3} y={PANE.y - 2} width="6" height={PANE.height + 4} rx="2" fill="#f4f6f8" stroke="#aab4be" />}

        {/* Fresh air flowing into the room */}
        {[90, 140, 190].map((y, index) => {
          const offset = (time * 0.05 + index * 30) % 90;
          return (
            <path
              key={y}
              d={`M${PANE.x + 40 + offset} ${y} q 30 -8 60 0 t 60 0`}
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity={0.5 - offset / 220}
            />
          );
        })}

        {/* Frame and the opened sash */}
        <rect x={PANE.x - 6} y={PANE.y - 6} width={PANE.width + 12} height={PANE.height + 12} rx="6" fill="none" stroke="#ffffff" strokeWidth="8" />
        <polygon points={`${PANE.x + PANE.width + 6},${PANE.y - 6} ${PANE.x + PANE.width + 58},${PANE.y + 14} ${PANE.x + PANE.width + 58},${PANE.y + PANE.height - 14} ${PANE.x + PANE.width + 6},${PANE.y + PANE.height + 6}`} fill="#dbe8f4" stroke="#ffffff" strokeWidth="6" opacity="0.9" />
        <rect x={PANE.x - 16} y={PANE.y + PANE.height + 6} width={PANE.width + 32} height="8" rx="3" fill="#d4dbe3" />

        {insects
          .filter((insect) => insect.inside)
          .map((insect, index) => (
            <InsectShape key={index} x={insect.x} y={insect.y} scale={2.1} flap={flap} />
          ))}
      </DemoScene>

      <DemoStatus title={state.title} value={`Im Raum: ${inside} ${inside === 1 ? "Insekt" : "Insekten"}`} text={state.text} />
      <DemoSlider label="Insektenschutz schließen" value={cover} onChange={setCover} left="offen" right="geschlossen" />
      <DemoActions>
        <DemoButton onClick={() => setCover(100)} active={cover === 100}>
          Fliegengitter schließen
        </DemoButton>
        <DemoButton onClick={() => setInsects((list) => list.map((insect, index) => (insect.inside ? { ...(START[index] ?? insect), inside: false } : insect)))}>
          Insekten hinausbegleiten
        </DemoButton>
      </DemoActions>
    </div>
  );
}
