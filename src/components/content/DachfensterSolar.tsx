// Gezeichnete Skizze: Dachfenster im Schrägdach mit Außenrollladen, Solarmodul am Kasten und Funksignal.
export function DachfensterSolar() {
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label="Skizze: Dachfenster mit Außenrollladen, Solarmodul und Funksteuerung"
      className="h-full w-full bg-gradient-to-b from-sky-100 to-white"
    >
      {/* Sonne */}
      <circle cx="338" cy="58" r="22" className="fill-amber-300" />
      {/* Dachfläche mit Ziegelreihen */}
      <polygon points="0,300 0,170 400,40 400,300" className="fill-brand-ink-soft" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1="0" y1={190 + i * 22} x2="400" y2={60 + i * 22} stroke="white" strokeOpacity="0.15" strokeWidth="2" />
      ))}
      <g transform="translate(150 118) rotate(-18)">
        {/* Fensterrahmen */}
        <rect x="0" y="0" width="120" height="120" rx="6" className="fill-brand-ink" />
        {/* halb geschlossener Rollladenpanzer */}
        <rect x="8" y="16" width="104" height="96" className="fill-sky-200" />
        <rect x="8" y="16" width="104" height="58" className="fill-brand-gray" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line key={i} x1="8" y1={24 + i * 8} x2="112" y2={24 + i * 8} stroke="white" strokeOpacity="0.45" strokeWidth="1.5" />
        ))}
        {/* Kasten mit Solarmodul */}
        <rect x="-4" y="-14" width="128" height="22" rx="4" className="fill-brand-primary-dark" />
        <rect x="18" y="-11" width="84" height="16" rx="2" className="fill-brand-primary" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={i} x1={32 + i * 14} y1="-11" x2={32 + i * 14} y2="5" stroke="white" strokeOpacity="0.5" strokeWidth="1" />
        ))}
      </g>
      {/* Funksignal zum Handsender */}
      <g className="text-brand-accent" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <path d="M76 214a20 20 0 0 1 20-20" />
        <path d="M66 214a30 30 0 0 1 30-30" />
      </g>
      <rect x="58" y="214" width="22" height="44" rx="6" className="fill-white" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="69" cy="228" r="4" className="fill-brand-accent" />
      <text x="96" y="262" className="fill-white text-[13px] font-bold">Funk + Solar</text>
    </svg>
  );
}
