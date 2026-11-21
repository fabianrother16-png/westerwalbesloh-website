import type { IllustrationKey } from "@/types";

// Gezeichnete Mini-Skizzen zu den Schritten beim Aufmaß (Fenster im Schnitt, Kabel, Kasten, Mauerwerk).
const stroke = { stroke: "currentColor", strokeWidth: 2.5, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function Einbautiefe() {
  return (
    <>
      {/* Laibung im Schnitt mit Maßpfeil für die Tiefe */}
      <rect x="20" y="18" width="34" height="84" rx="3" className="fill-brand-sand" stroke="currentColor" strokeWidth="2.5" />
      <rect x="54" y="18" width="10" height="84" className="fill-brand-accent-soft" stroke="currentColor" strokeWidth="2.5" />
      <path d="M24 112h40" {...stroke} className="text-brand-accent" />
      <path d="M24 106v12M64 106v12" {...stroke} className="text-brand-accent" />
      <path d="M86 40h58M86 40l8-6M86 40l8 6" {...stroke} className="text-brand-ink-soft" />
      <text x="96" y="62" className="fill-brand-ink text-[13px] font-bold">165 mm</text>
      <circle cx="59" cy="30" r="4" className="fill-brand-accent" />
      <circle cx="59" cy="90" r="4" className="fill-brand-accent" />
    </>
  );
}

function Leitungswege() {
  return (
    <>
      {/* Fenster mit Kasten, Kabelweg zu Schalter und Steckdose */}
      <rect x="22" y="26" width="58" height="12" rx="2" className="fill-brand-accent-soft" stroke="currentColor" strokeWidth="2.5" />
      <rect x="26" y="38" width="50" height="62" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <path d="M51 38v62M26 69h50" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <path d="M80 32h28v34h20" {...stroke} strokeDasharray="5 5" className="text-brand-accent" />
      <rect x="128" y="56" width="20" height="22" rx="4" className="fill-white" stroke="currentColor" strokeWidth="2.5" />
      <path d="M134 63l4-3 4 3M134 71l4 3 4-3" {...stroke} strokeWidth="2" />
      <path d="M108 66v40h30" {...stroke} strokeDasharray="5 5" className="text-brand-accent" />
      <circle cx="144" cy="106" r="8" className="fill-white" stroke="currentColor" strokeWidth="2.5" />
    </>
  );
}

function Platzbedarf() {
  return (
    <>
      {/* Kasten und Schienen mit Breiten- und Höhenmaß */}
      <rect x="40" y="28" width="80" height="22" rx="3" className="fill-brand-accent-soft" stroke="currentColor" strokeWidth="2.5" />
      <path d="M46 50v58M114 50v58" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M52 62h56M52 74h56M52 86h56M52 98h56" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      <path d="M40 16h80M40 11v10M120 11v10" {...stroke} className="text-brand-accent" />
      <path d="M134 28v22M129 28h10M129 50h10" {...stroke} className="text-brand-accent" />
      <text x="62" y="12" className="fill-brand-ink text-[11px] font-bold">Breite</text>
      <text x="140" y="44" className="fill-brand-ink text-[11px] font-bold">H</text>
    </>
  );
}

function Bausubstanz() {
  return (
    <>
      {/* Mauerwerk mit Dübel und Schraube */}
      {[0, 1, 2, 3, 4].map((row) => (
        <g key={row}>
          {[0, 1, 2].map((col) => (
            <rect
              key={col}
              x={18 + col * 36 - (row % 2) * 18}
              y={18 + row * 19}
              width="34"
              height="17"
              rx="2"
              className={(row + col) % 3 === 0 ? "fill-brand-accent-soft" : "fill-brand-sand"}
              stroke="currentColor"
              strokeWidth="1.8"
            />
          ))}
        </g>
      ))}
      <rect x="112" y="56" width="34" height="9" rx="2" className="fill-brand-accent" />
      <path d="M146 60.5h14M112 56l-6 4.5 6 4.5" {...stroke} />
      <path d="M118 56v9M124 56v9M130 56v9M136 56v9" stroke="white" strokeWidth="1.5" />
    </>
  );
}

const DRAWINGS: Record<IllustrationKey, () => React.JSX.Element> = {
  einbautiefe: Einbautiefe,
  leitungswege: Leitungswege,
  platzbedarf: Platzbedarf,
  bausubstanz: Bausubstanz,
};

export function AufmassIllustration({ kind }: { kind: IllustrationKey }) {
  const Drawing = DRAWINGS[kind];
  return (
    <svg viewBox="0 0 170 124" aria-hidden="true" className="h-28 w-full text-brand-primary">
      <Drawing />
    </svg>
  );
}
