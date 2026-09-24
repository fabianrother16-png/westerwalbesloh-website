"use client";

import { useState } from "react";
import { DemoActions, DemoButton, DemoScene, DemoSlider, DemoStatus, OutdoorDefs, Sun, clamp, lerp, useSvgIds, useTween } from "./DemoParts";

const PANE = { x: 70, y: 44, width: 260, height: 168 };
const PITCH = 10;
/** Share of the travel after which the curtain has reached the sill and only the light slits close. */
const SILL = 0.86;

function describe(position: number) {
  if (position < 5) return { title: "Offen", text: "Volles Tageslicht und freie Sicht nach draußen." };
  if (position < 60) return { title: "Beschattet von oben", text: "Die hoch stehende Sonne bleibt draußen, unten bleibt der Blick frei." };
  if (position < SILL * 100) return { title: "Fast geschlossen", text: "Blend- und Sichtschutz – etwas Tageslicht kommt noch herein." };
  if (position < 99) return { title: "Lichtschlitze offen", text: "Der Panzer ist unten, durch die Lichtschlitze kommen noch Licht und Luft." };
  return { title: "Geschlossen", text: "Verdunkelung, Sicht- und Einbruchschutz – im Winter hält das Luftpolster zusätzlich Wärme im Haus." };
}

/** Roller shutter: lower it with the slider, or let the evening/morning scene run. */
export function RollladenDemo() {
  const id = useSvgIds();
  const { values, set, animateTo } = useTween({ position: 25, night: 0 });
  const [scene, setScene] = useState<"night" | "morning" | null>(null);
  const play = (name: "night" | "morning") => {
    setScene(name);
    animateTo(name === "night" ? { position: 100, night: 1 } : { position: 0, night: 0 }, 2600, () => setScene(null));
  };
  const travel = values.position / 100;
  const curtainBottom = PANE.y + PANE.height * clamp(travel / SILL);
  const slit = travel <= SILL ? 2.2 : lerp(2.2, 0, clamp((travel - SILL) / (1 - SILL)));
  const covered = clamp(travel / SILL);
  const light = (1 - covered) * (1 - values.night) + (covered === 1 ? slit / 2.2 : 0) * 0.15 * (1 - values.night);
  const state = describe(values.position);

  // Profiles are stacked upwards from the bottom rail, so the visible curtain always ends in the bottom rail.
  const profiles: number[] = [];
  for (let y = curtainBottom - 8; y > PANE.y - PITCH; y -= PITCH) profiles.push(y);

  return (
    <div className="flex h-full flex-col">
      <DemoScene label={`Rollladen zu ${Math.round(values.position)} Prozent geschlossen: ${state.title}`}>
        <defs>
          <OutdoorDefs id={id} />
          <linearGradient id={id("profile")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c4ccd4" />
            <stop offset="55%" stopColor="#9aa5b1" />
            <stop offset="100%" stopColor="#7c8894" />
          </linearGradient>
          <linearGradient id={id("beam")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe08a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffe08a" stopOpacity="0" />
          </linearGradient>
          <clipPath id={id("pane")}>
            <rect x={PANE.x} y={PANE.y} width={PANE.width} height={PANE.height} rx="3" />
          </clipPath>
        </defs>

        {/* Room: floor with daylight patches */}
        <rect x="0" y="236" width="400" height="64" fill="#e7ddd0" />
        <polygon
          points={`${PANE.x},${PANE.y + PANE.height} ${PANE.x + PANE.width},${PANE.y + PANE.height} ${PANE.x + PANE.width + 40},300 ${PANE.x + 40},300`}
          fill={`url(#${id("beam")})`}
          opacity={light}
        />

        {/* Outside view, fading from day to night */}
        <g clipPath={`url(#${id("pane")})`}>
          <rect x={PANE.x} y={PANE.y} width={PANE.width} height={PANE.height} fill={`url(#${id("sky")})`} />
          <rect x={PANE.x} y={PANE.y} width={PANE.width} height={PANE.height} fill={`url(#${id("night")})`} opacity={values.night} />
          <Sun id={id} x={285} y={lerp(80, 170, values.night)} opacity={1 - values.night} />
          <g opacity={values.night}>
            <circle cx="120" cy="80" r="11" fill="#f4f1d0" />
            <circle cx="126" cy="76" r="10" fill="#2a4166" />
            {[[170, 70], [215, 95], [250, 62], [300, 110], [95, 120], [190, 130]].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="1.3" fill="#ffffff" />
            ))}
          </g>
          <ellipse cx="130" cy="222" rx="120" ry="38" fill={values.night > 0.5 ? "#35553f" : "#9cc98a"} />
          <ellipse cx="300" cy="228" rx="130" ry="42" fill={values.night > 0.5 ? "#2f4d38" : "#86b877"} />

          {profiles.map((y) => (
            <rect key={y} x={PANE.x} y={y} width={PANE.width} height={PITCH - slit} fill={`url(#${id("profile")})`} />
          ))}
          {travel > 0.01 && <rect x={PANE.x} y={curtainBottom - 9} width={PANE.width} height="9" rx="1.5" fill="#5f6b77" />}
        </g>

        {/* Window frame, guide rails and shutter box */}
        <rect x={PANE.x - 6} y={PANE.y - 6} width={PANE.width + 12} height={PANE.height + 12} rx="6" fill="none" stroke="#ffffff" strokeWidth="8" />
        <rect x={PANE.x - 5} y={PANE.y - 2} width="6" height={PANE.height + 4} rx="2" fill="#4f5b67" />
        <rect x={PANE.x + PANE.width - 1} y={PANE.y - 2} width="6" height={PANE.height + 4} rx="2" fill="#4f5b67" />
        <rect x={PANE.x - 12} y={PANE.y - 30} width={PANE.width + 24} height="26" rx="5" fill="#5d6975" />
        <rect x={PANE.x - 16} y={PANE.y + PANE.height + 6} width={PANE.width + 32} height="8" rx="3" fill="#d4dbe3" />
        {/* Dim the room at night */}
        <rect x="0" y="0" width="400" height="300" fill="#0b1626" opacity={values.night * 0.35} pointerEvents="none" />
      </DemoScene>

      <DemoStatus title={state.title} value={`Rollladen: ${Math.round(values.position)} %`} text={state.text} />
      <DemoSlider
        label="Rollladen"
        value={Math.round(values.position)}
        onChange={(position) => {
          setScene(null);
          set({ position });
        }}
        left="offen"
        right="geschlossen"
      />
      <DemoActions>
        <DemoButton active={scene === "night"} onClick={() => play("night")}>
          Gute-Nacht-Szene
        </DemoButton>
        <DemoButton active={scene === "morning"} onClick={() => play("morning")}>
          Guten-Morgen-Szene
        </DemoButton>
      </DemoActions>
    </div>
  );
}
