"use client";

import { useState } from "react";
import { DemoActions, DemoButton, DemoScene, DemoSlider, DemoStatus, OutdoorDefs, Sun, clamp, useSvgIds, useTween } from "./DemoParts";

const PANE = { x: 80, y: 36, width: 240, height: 184 };
const PLEATS = 26;

const fabrics = {
  transparent: { label: "Transparent", color: "#f7f3ea", opacity: 0.45, light: 0.75, text: "zarter Blendschutz, viel Licht" },
  hell: { label: "Lichtdurchlässig", color: "#efe6d4", opacity: 0.75, light: 0.45, text: "blendfrei, angenehm helles Licht" },
  wabe: { label: "Wabenplissee", color: "#e9e2d6", opacity: 0.9, light: 0.3, text: "Luftkammern dämmen – im Sommer kühler, im Winter wärmer" },
  dunkel: { label: "Verdunkelnd", color: "#4d5866", opacity: 0.98, light: 0.03, text: "dunkel wie nachts – ideal fürs Schlafzimmer" },
} as const;

type FabricKey = keyof typeof fabrics;

function describe(top: number, bottom: number) {
  if (bottom - top < 10) return "Ganz geöffnet – das Plissee ist platzsparend zusammengeschoben.";
  if (top < 3 && bottom > 97) return "Ganz geschlossen – maximaler Blend- und Sichtschutz.";
  if (top > 25 && bottom > 97) return "Oben Licht, unten Sichtschutz – ideal fürs Bad oder Erdgeschoss.";
  if (top < 3) return "Oben beschattet, unten freie Sicht nach draußen.";
  return "Frei positioniert – das Plissee lässt sich von oben und von unten verschieben.";
}

/** Top-down/bottom-up pleated blind: move both rails and switch the fabric. */
export function PlisseeDemo() {
  const id = useSvgIds();
  const { values, set, animateTo } = useTween({ top: 35, bottom: 100 });
  const [fabric, setFabric] = useState<FabricKey>("hell");
  const chosen = fabrics[fabric];
  const top = Math.min(values.top, values.bottom - 6);
  const topY = PANE.y + (PANE.height * top) / 100;
  const bottomY = PANE.y + (PANE.height * values.bottom) / 100;
  const pleat = (bottomY - topY) / PLEATS;
  const coveredShare = clamp((values.bottom - top) / 100);
  const light = 1 - coveredShare * (1 - chosen.light);
  const text = describe(top, values.bottom);

  return (
    <div className="flex h-full flex-col">
      <DemoScene label={`Plissee von ${Math.round(top)} bis ${Math.round(values.bottom)} Prozent, Stoff ${chosen.label}`}>
        <defs>
          <OutdoorDefs id={id} />
          <linearGradient id={id("beam")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe08a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffe08a" stopOpacity="0" />
          </linearGradient>
          <clipPath id={id("pane")}>
            <rect x={PANE.x} y={PANE.y} width={PANE.width} height={PANE.height} rx="3" />
          </clipPath>
        </defs>

        <rect x="0" y="242" width="400" height="58" fill="#e7ddd0" />
        <polygon
          points={`${PANE.x},${PANE.y + PANE.height} ${PANE.x + PANE.width},${PANE.y + PANE.height} ${PANE.x + PANE.width + 36},300 ${PANE.x + 36},300`}
          fill={`url(#${id("beam")})`}
          opacity={light}
        />

        <g clipPath={`url(#${id("pane")})`}>
          <rect x={PANE.x} y={PANE.y} width={PANE.width} height={PANE.height} fill={`url(#${id("sky")})`} />
          <Sun id={id} x={255} y={78} />
          <ellipse cx={PANE.x + 60} cy={PANE.y + PANE.height + 10} rx="120" ry="46" fill="#9cc98a" />
          <ellipse cx={PANE.x + 200} cy={PANE.y + PANE.height + 16} rx="120" ry="48" fill="#86b877" />

          {/* Pleated fabric between the two rails */}
          {Array.from({ length: PLEATS }).map((_, index) => (
            <rect
              key={index}
              x={PANE.x}
              y={topY + index * pleat}
              width={PANE.width}
              height={pleat + 0.4}
              fill={chosen.color}
              opacity={chosen.opacity}
              style={{ filter: index % 2 ? "brightness(0.9)" : undefined }}
            />
          ))}
          {fabric === "wabe" &&
            Array.from({ length: PLEATS }).map((_, index) => (
              <line key={index} x1={PANE.x} x2={PANE.x + PANE.width} y1={topY + (index + 0.5) * pleat} y2={topY + (index + 0.5) * pleat} stroke="#ffffff" strokeWidth="0.8" opacity="0.7" />
            ))}
        </g>

        {/* Rails and tension cords */}
        <line x1={PANE.x + 6} x2={PANE.x + 6} y1={PANE.y} y2={PANE.y + PANE.height} stroke="#8a95a1" strokeWidth="1" />
        <line x1={PANE.x + PANE.width - 6} x2={PANE.x + PANE.width - 6} y1={PANE.y} y2={PANE.y + PANE.height} stroke="#8a95a1" strokeWidth="1" />
        <rect x={PANE.x - 2} y={topY - 4} width={PANE.width + 4} height="6" rx="2" fill="#9aa5b1" />
        <rect x={PANE.x - 2} y={bottomY - 3} width={PANE.width + 4} height="6" rx="2" fill="#9aa5b1" />
        <rect x={PANE.x + PANE.width / 2 - 10} y={bottomY + 3} width="20" height="4" rx="2" fill="#6d7a87" />

        <rect x={PANE.x - 6} y={PANE.y - 6} width={PANE.width + 12} height={PANE.height + 12} rx="6" fill="none" stroke="#ffffff" strokeWidth="8" />
        <rect x={PANE.x - 16} y={PANE.y + PANE.height + 6} width={PANE.width + 32} height="8" rx="3" fill="#d4dbe3" />
        <rect x="0" y="0" width="400" height="300" fill="#0b1626" opacity={(1 - light) * 0.28} pointerEvents="none" />
      </DemoScene>

      <DemoStatus title={chosen.label} value={`Tageslicht: ${Math.round(light * 100)} %`} text={`${text} Stoff: ${chosen.text}.`} />

      <div className="mt-3 flex flex-wrap gap-2">
        {(Object.keys(fabrics) as FabricKey[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setFabric(key)}
            aria-pressed={fabric === key}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              fabric === key ? "border-brand-accent bg-brand-accent text-white" : "border-brand-border bg-white text-brand-ink-soft hover:border-brand-primary"
            }`}
          >
            {fabrics[key].label}
          </button>
        ))}
      </div>

      <DemoSlider label="Obere Schiene" value={Math.round(top)} max={94} onChange={(value) => set({ top: Math.min(value, values.bottom - 6) })} left="ganz oben" right="weiter unten" />
      <DemoSlider label="Untere Schiene" value={Math.round(values.bottom)} onChange={(value) => set({ bottom: Math.max(value, top + 6) })} left="weiter oben" right="ganz unten" />
      <DemoActions>
        <DemoButton onClick={() => animateTo({ top: 40, bottom: 100 })}>Oben Licht, unten Sichtschutz</DemoButton>
        <DemoButton onClick={() => animateTo({ top: 0, bottom: 100 })}>Ganz schließen</DemoButton>
        <DemoButton onClick={() => animateTo({ top: 0, bottom: 7 })}>Öffnen</DemoButton>
      </DemoActions>
    </div>
  );
}

