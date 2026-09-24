"use client";

import { useState } from "react";
import { DemoScene, DemoStatus, OutdoorDefs, Sun, lerp, useSvgIds, useTween } from "./DemoParts";

type Scene = "morgen" | "hitze" | "nacht";
type Sensors = { sonne: boolean; wind: boolean; regen: boolean };

const scenes: { key: Scene; label: string }[] = [
  { key: "morgen", label: "Guten Morgen" },
  { key: "hitze", label: "Hitzeschutz" },
  { key: "nacht", label: "Gute Nacht" },
];

const sensorLabels: { key: keyof Sensors; label: string }[] = [
  { key: "sonne", label: "Sonnensensor" },
  { key: "wind", label: "Windsensor" },
  { key: "regen", label: "Regensensor" },
];

function targetFor(scene: Scene, sensors: Sensors) {
  const base =
    scene === "nacht"
      ? { shutters: 1, raffDown: 1, raffAngle: 88, awning: 0, night: 1 }
      : scene === "hitze" || sensors.sonne
        ? { shutters: 0.55, raffDown: 1, raffAngle: 55, awning: 1, night: 0 }
        : { shutters: 0, raffDown: 0, raffAngle: 0, awning: 0, night: 0 };
  // Safety first: in wind the awning and the raffstore retract, in rain the awning goes in.
  if (sensors.wind) return { ...base, awning: 0, raffDown: 0, raffAngle: 0 };
  if (sensors.regen) return { ...base, awning: 0 };
  return base;
}

function message(scene: Scene, sensors: Sensors) {
  if (sensors.wind) return "Wind erkannt: Markise und Raffstore fahren automatisch in die sichere Position.";
  if (sensors.regen) return "Regen erkannt: Die Markise fährt ein, damit sich kein Wasser im Tuch sammelt.";
  if (scene === "nacht") return "Gute Nacht: Alle Rollläden und Raffstores schließen mit einem Fingertipp.";
  if (scene === "hitze" || sensors.sonne) return "Hitzeschutz: Raffstores kippen, Rollläden fahren halb herunter, die Markise spendet Schatten.";
  return "Guten Morgen: Alles fährt hoch, Tageslicht flutet das Haus.";
}

function Shutter({ x, y, width, height, amount }: { x: number; y: number; width: number; height: number; amount: number }) {
  const covered = height * amount;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill="#bcd4e9" />
      {Array.from({ length: Math.ceil(covered / 5) }).map((_, index) => (
        <rect key={index} x={x} y={y + index * 5} width={width} height="4" fill="#9aa5b1" />
      ))}
      <rect x={x - 3} y={y - 7} width={width + 6} height="7" rx="1.5" fill="#5d6975" />
    </g>
  );
}

/** Smart home: one app controls all shutters, raffstores and the awning - scenes and sensors included. */
export function SmartHomeDemo() {
  const id = useSvgIds();
  const [scene, setScene] = useState<Scene>("morgen");
  const [sensors, setSensors] = useState<Sensors>({ sonne: false, wind: false, regen: false });
  const { values, animateTo } = useTween(targetFor("morgen", { sonne: false, wind: false, regen: false }));

  const apply = (nextScene: Scene, nextSensors: Sensors) => {
    setScene(nextScene);
    setSensors(nextSensors);
    animateTo(targetFor(nextScene, nextSensors), 1700);
  };

  const raffSlat = 1.5 + 3.3 * Math.sin((values.raffAngle * Math.PI) / 180);
  const raffHeight = 72 * values.raffDown;

  return (
    <div className="flex h-full flex-col">
      <DemoScene label={`Smart Home: ${message(scene, sensors)}`}>
        <defs>
          <OutdoorDefs id={id} />
        </defs>
        <rect x="0" y="0" width="400" height="300" fill={`url(#${id("sky")})`} />
        <rect x="0" y="0" width="400" height="300" fill={`url(#${id("night")})`} opacity={values.night} />
        <Sun id={id} x={336} y={lerp(52, 160, values.night)} opacity={(1 - values.night) * (sensors.regen ? 0.4 : 1)} />
        {values.night > 0.5 && <circle cx="62" cy="50" r="10" fill="#f4f1d0" />}
        {sensors.regen &&
          Array.from({ length: 24 }).map((_, index) => (
            <line key={index} x1={(index * 37) % 400} y1={(index * 23) % 80} x2={(index * 37) % 400 - 4} y2={((index * 23) % 80) + 12} stroke="#6f8fb3" strokeWidth="1.5" strokeLinecap="round" />
          ))}
        {sensors.wind &&
          [36, 70].map((y) => <path key={y} d={`M20 ${y} q 30 -10 60 0 t 60 0`} fill="none" stroke="#7fa3c7" strokeWidth="2.5" strokeLinecap="round" />)}

        <rect x="0" y="262" width="400" height="38" fill="#9cc98a" />
        {/* House */}
        <polygon points="50,110 200,40 350,110" fill="#8a5a44" />
        <rect x="64" y="108" width="272" height="156" fill="#f7f4ee" />
        <Shutter x={96} y={128} width={62} height={46} amount={values.shutters} />
        <Shutter x={242} y={128} width={62} height={46} amount={values.shutters} />

        {/* Large window with raffstore */}
        <rect x="88" y="190" width="120" height="72" fill="#bcd4e9" />
        {Array.from({ length: Math.round(raffHeight / 6) }).map((_, index) => (
          <rect key={index} x="88" y={190 + index * 6 + (6 - raffSlat) / 2} width="120" height={raffSlat} fill="#6d7a87" />
        ))}
        <rect x="84" y="183" width="128" height="7" rx="1.5" fill="#5d6975" />

        {/* Terrace door with awning */}
        <rect x="252" y="196" width="50" height="66" fill="#bcd4e9" />
        <rect x="236" y="176" width="82" height="8" rx="2" fill="#5d6975" />
        {values.awning > 0.02 && (
          <polygon points={`238,184 316,184 ${316 + 14 * values.awning},${184 + 30 * values.awning} ${238 - 14 * values.awning},${184 + 30 * values.awning}`} fill="#e9dcc3" stroke="#cdbb97" />
        )}
        <rect x="0" y="0" width="400" height="300" fill="#0b1626" opacity={values.night * 0.25} pointerEvents="none" />
        {values.night > 0.5 && (
          <g fill="#ffd86b" opacity="0.8">
            <rect x="99" y={128 + 46 * values.shutters - 2} width="56" height="2" />
            <rect x="245" y={128 + 46 * values.shutters - 2} width="56" height="2" />
          </g>
        )}
      </DemoScene>

      <DemoStatus title="Ein Fingertipp, alles fährt" value="Somfy Smart Home" text={message(scene, sensors)} />

      <div className="mt-2 rounded-2xl border border-brand-border bg-brand-sand p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink-soft">Szenen</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {scenes.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => apply(item.key, sensors)}
              aria-pressed={scene === item.key}
              className={`rounded-xl px-2 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${
                scene === item.key ? "bg-brand-accent text-white shadow" : "bg-white text-brand-primary hover:bg-brand-accent-soft/40"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink-soft">Sensoren</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {sensorLabels.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => apply(scene, { ...sensors, [item.key]: !sensors[item.key] })}
              aria-pressed={sensors[item.key]}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                sensors[item.key] ? "border-brand-accent bg-white text-brand-primary" : "border-brand-border bg-white text-brand-ink-soft"
              }`}
            >
              <span className={`h-3.5 w-6 rounded-full p-0.5 transition-colors ${sensors[item.key] ? "bg-brand-accent" : "bg-brand-border"}`}>
                <span className={`block h-2.5 w-2.5 rounded-full bg-white transition-transform ${sensors[item.key] ? "translate-x-2.5" : ""}`} />
              </span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
