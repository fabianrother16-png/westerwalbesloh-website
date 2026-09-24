"use client";

import { useRef, useState } from "react";
import { DemoActions, DemoButton, DemoScene, DemoSlider, DemoStatus, OutdoorDefs, useAnimationLoop, useInView, useSvgIds, useTween } from "./DemoParts";

const GROUND = 250;
const WALL = 60;
const MOUNT = { x: 62, y: 86 };
const MAX_LENGTH = 290;
const PITCH = (13 * Math.PI) / 180;
/** Drawing scale: about 70 px per metre, so a fully extended awning projects roughly 4 m. */
const PX_PER_M = 70;
const DAY_MS = 11000;

function sunPosition(elevationDeg: number) {
  const radians = (elevationDeg * Math.PI) / 180;
  return { x: 348, y: GROUND - 20 - Math.sin(radians) * 210 };
}

/** Side view of a terrace awning: extend it, watch the shade, let the sun and wind automation take over. */
export function MarkiseDemo() {
  const id = useSvgIds();
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root);
  const { values, set, animateTo } = useTween({ extension: 70, elevation: 48 });
  const [mode, setMode] = useState<"manual" | "sun" | "wind">("manual");
  const [windTime, setWindTime] = useState(0);

  // Sun automation: the sun climbs and sinks, the sensor extends the awning while it is strong.
  useAnimationLoop(mode === "sun" && inView, (elapsed) => {
    const progress = (elapsed % DAY_MS) / DAY_MS;
    const elevation = 8 + 54 * Math.sin(Math.PI * progress);
    const target = elevation > 24 ? 100 : 0;
    set({ elevation, extension: values.extension + (target - values.extension) * 0.06 });
  });

  // Wind: the fabric flutters until the wind sensor has pulled the awning in.
  useAnimationLoop(mode === "wind" && inView, setWindTime);

  const startWind = () => {
    setMode("wind");
    animateTo({ extension: 0 }, 2400, () => {
      setWindTime(0);
      setMode("manual");
    });
  };

  const extension = values.extension / 100;
  const flutter = mode === "wind" ? Math.sin(windTime / 55) * extension * 5 : 0;
  const length = 24 + (MAX_LENGTH - 24) * extension;
  const front = { x: MOUNT.x + Math.cos(PITCH) * length, y: MOUNT.y + Math.sin(PITCH) * length + flutter };
  const armMount = { x: WALL + 4, y: 120 };
  const elbowDrop = 8 + 26 * (1 - extension);
  const elbow = { x: (armMount.x + front.x) / 2, y: (armMount.y + front.y) / 2 + elbowDrop };
  const sun = sunPosition(values.elevation);
  const shadowEnd = Math.max(WALL, front.x + 6 - (GROUND - front.y) / Math.tan((values.elevation * Math.PI) / 180));
  const shadeMeters = (shadowEnd - WALL) / PX_PER_M;

  const state =
    mode === "wind"
      ? { title: "Wind erkannt", text: "Der Windwächter fährt die Markise automatisch ein – das Tuch ist geschützt." }
      : extension < 0.05
        ? { title: "Eingefahren", text: "Das Tuch liegt geschützt in der Kassette." }
        : {
            title: extension < 0.6 ? "Halb ausgefahren" : "Ausgefahren",
            text:
              shadeMeters > 0.2
                ? `Rund ${shadeMeters.toLocaleString("de-DE", { maximumFractionDigits: 1 })} m Schatten auf der Terrasse${values.elevation < 25 ? " – bei tief stehender Sonne wird der Schatten kürzer" : ""}.`
                : "Die Sonne steht so tief, dass sie unter die Markise scheint.",
          };

  return (
    <div ref={root} className="flex h-full flex-col">
      <DemoScene label={`Markise zu ${Math.round(values.extension)} Prozent ausgefahren: ${state.title}`}>
        <defs>
          <OutdoorDefs id={id} />
          <linearGradient id={id("fabric")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f1e6cf" />
            <stop offset="100%" stopColor="#d6c6a4" />
          </linearGradient>
        </defs>

        {/* Sky, sun and garden */}
        <rect x="0" y="0" width="400" height={GROUND} fill={`url(#${id("sky")})`} />
        <circle cx={sun.x} cy={sun.y} r="34" fill={`url(#${id("sunglow")})`} />
        <circle cx={sun.x} cy={sun.y} r="13" fill="#ffd24d" />
        <ellipse cx="330" cy={GROUND + 4} rx="140" ry="26" fill="#9cc98a" />

        {/* Sun rays hitting the terrace outside the shade */}
        {[0, 1, 2, 3, 4].map((index) => {
          const x = 380 - index * 46;
          if (x < shadowEnd + 10) return null;
          const dx = (GROUND - 40) / Math.tan((values.elevation * Math.PI) / 180);
          return <line key={index} x1={x + dx} y1={40} x2={x} y2={GROUND} stroke="#ffd86b" strokeWidth="2" strokeOpacity="0.35" />;
        })}

        {/* Terrace deck with shade */}
        <rect x={WALL} y={GROUND} width={400 - WALL} height="12" fill="#c9a67a" />
        <rect x="0" y={GROUND + 12} width="400" height={300 - GROUND - 12} fill="#e7ddd0" />
        <rect x={WALL} y={GROUND - 2} width={shadowEnd - WALL} height="16" fill="#1e3f66" opacity="0.28" rx="2" />
        {/* The shaded volume between the fabric and its shadow on the deck */}
        {shadowEnd > WALL + 2 && (
          <polygon points={`${MOUNT.x},${MOUNT.y} ${front.x},${front.y} ${shadowEnd},${GROUND} ${WALL},${GROUND}`} fill="#1e3f66" opacity="0.09" />
        )}

        {/* Furniture */}
        <g fill="#5d6975">
          <rect x="178" y="214" width="62" height="5" rx="2" />
          <rect x="206" y="219" width="6" height="31" />
          <rect x="150" y="226" width="20" height="4" rx="1.5" />
          <rect x="152" y="230" width="3" height="20" />
          <rect x="165" y="230" width="3" height="20" />
          <rect x="166" y="206" width="3" height="24" />
          <rect x="250" y="226" width="20" height="4" rx="1.5" />
          <rect x="252" y="230" width="3" height="20" />
          <rect x="265" y="230" width="3" height="20" />
          <rect x="251" y="206" width="3" height="24" />
        </g>

        {/* House wall with terrace door */}
        <rect x="0" y="20" width={WALL} height={GROUND - 20} fill="#f7f4ee" />
        <rect x={WALL - 8} y="20" width="8" height={GROUND - 20} fill="#e3ddd2" />
        <rect x="12" y="140" width="34" height={GROUND - 140} rx="2" fill="#bcd4e9" stroke="#ffffff" strokeWidth="3" />

        {/* Wind lines */}
        {mode === "wind" &&
          [70, 120, 170].map((y, index) => (
            <path
              key={y}
              d={`M${420 - ((windTime * 0.28 + index * 140) % 460)} ${y} q 20 -8 40 0 t 40 0`}
              fill="none"
              stroke="#7fa3c7"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.8"
            />
          ))}

        {/* Awning: arm, fabric, front profile with valance and wind sensor */}
        {extension > 0.04 && (
          <polyline
            points={`${armMount.x},${armMount.y} ${elbow.x},${elbow.y} ${front.x},${front.y + 4}`}
            fill="none"
            stroke="#4f5b67"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        )}
        <polygon
          points={`${MOUNT.x},${MOUNT.y - 4} ${front.x},${front.y - 4} ${front.x},${front.y + 4} ${MOUNT.x},${MOUNT.y + 4}`}
          fill={`url(#${id("fabric")})`}
        />
        <rect x={front.x - 4} y={front.y - 5} width="10" height="10" rx="2" fill="#4f5b67" />
        <path d={`M${front.x - 3} ${front.y + 5} h 8 v 14 l -4 -3 l -4 3 z`} fill="#d6c6a4" />
        {extension > 0.04 && <rect x={front.x + 6} y={front.y - 12} width="7" height="9" rx="1.5" fill="#ffffff" stroke="#4f5b67" strokeWidth="1.5" />}
        <rect x={MOUNT.x - 4} y={MOUNT.y - 12} width="26" height="18" rx="4" fill="#4f5b67" />
      </DemoScene>

      <DemoStatus title={state.title} value={`Ausfahrt: ${Math.round(values.extension)} %`} text={state.text} />
      <DemoSlider
        label="Markise ausfahren"
        value={Math.round(values.extension)}
        onChange={(value) => {
          setMode("manual");
          set({ extension: value });
        }}
        left="eingefahren"
        right="ganz ausgefahren"
      />
      <DemoActions>
        <DemoButton active={mode === "sun"} onClick={() => setMode(mode === "sun" ? "manual" : "sun")}>
          {mode === "sun" ? "Sonnenautomatik stoppen" : "Sonnenautomatik"}
        </DemoButton>
        <DemoButton active={mode === "wind"} onClick={startWind}>
          Windböe simulieren
        </DemoButton>
      </DemoActions>
    </div>
  );
}

