"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IconArrowRight } from "@/components/icons/UiIcons";
import { sunPosition } from "@/lib/sun";

type Now = { month: number; day: number; hour: number; offset: number };

/** Current date and time in Gütersloh (Europe/Berlin), including the real UTC offset. */
function berlinNow(date: Date): Now {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Berlin",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23",
      timeZoneName: "shortOffset",
    })
      .formatToParts(date)
      .map((part) => [part.type, part.value])
  );
  const offset = Number((parts.timeZoneName ?? "GMT+1").replace("GMT", "") || 0);
  return { month: Number(parts.month), day: Number(parts.day), hour: Number(parts.hour) + Number(parts.minute) / 60, offset };
}

function formatTime(hour: number) {
  const minutes = Math.round(hour * 60);
  return `${Math.floor(minutes / 60)}:${String(minutes % 60).padStart(2, "0")}`;
}

/** Small live card: where the sun stands over Gütersloh right now. Rendered only in the browser (it depends on the clock). */
export function LiveSun({ latitude, longitude }: { latitude: number; longitude: number }) {
  const [now, setNow] = useState<Now | null>(null);

  useEffect(() => {
    const update = () => setNow(berlinNow(new Date()));
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  if (!now) return null;

  const at = (hour: number) => sunPosition({ latitude, longitude, month: now.month, day: now.day, hour, offset: now.offset });
  const current = at(now.hour);
  // Sunrise and sunset: the minutes at which the sun's upper edge crosses the horizon (refraction included).
  let sunrise = 0;
  let sunset = 0;
  for (let minute = 0; minute < 24 * 60; minute += 2) {
    const up = at(minute / 60).elevation > -0.833;
    if (up && !sunrise) sunrise = minute / 60;
    if (up) sunset = minute / 60;
  }
  const isDay = current.elevation > 0;
  const progress = Math.min(1, Math.max(0, (now.hour - sunrise) / (sunset - sunrise)));

  return (
    <Link
      href="/ratgeber#sonnenstand"
      className="swap-in group block w-72 rounded-3xl border border-white/20 bg-white/10 p-5 text-white shadow-2xl shadow-black/20 backdrop-blur-md transition-colors hover:bg-white/15"
    >
      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent-soft">
        <span className={`h-2 w-2 rounded-full ${isDay ? "animate-pulse bg-amber-300" : "bg-white/50"}`} />
        Live aus Gütersloh
      </span>
      {/* Mini sun path: the dot shows where the sun stands between sunrise and sunset. */}
      <svg viewBox="0 0 200 70" className="mt-3 w-full" aria-hidden="true">
        <path d="M10 62 Q 100 -18 190 62" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="3 5" />
        <line x1="4" x2="196" y1="62" y2="62" stroke="currentColor" strokeOpacity="0.4" />
        {isDay && (
          <g>
            <circle
              cx={10 + 180 * progress}
              cy={62 - 160 * progress * (1 - progress)}
              r="10"
              fill="#ffd86b"
              opacity="0.35"
            />
            <circle cx={10 + 180 * progress} cy={62 - 160 * progress * (1 - progress)} r="5.5" fill="#ffc933" />
          </g>
        )}
      </svg>
      <span className="mt-2 block text-lg font-bold leading-snug">
        {isDay ? `Die Sonne steht ${Math.round(current.elevation)}° hoch` : "Die Sonne ist untergegangen"}
      </span>
      <span className="mt-1 block text-sm text-white/75">
        {isDay ? `Sonnenuntergang um ${formatTime(sunset)} Uhr` : `Sonnenaufgang um ${formatTime(sunrise)} Uhr`}
      </span>
      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent-soft">
        Wann scheint sie auf Ihr Fenster?
        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
