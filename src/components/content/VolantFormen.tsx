// Gezeichnete Beispiele für Volant-Formen an der Vorderkante einer Markise.
const FORMS = [
  { label: "Gerade", path: "M0 0H120V26H0Z" },
  { label: "Welle", path: "M0 0H120V22C110 32 100 32 90 22C80 12 70 12 60 22C50 32 40 32 30 22C20 12 10 12 0 22Z" },
  { label: "Bogen", path: "M0 0H120V18Q105 36 90 18Q75 36 60 18Q45 36 30 18Q15 36 0 18Z" },
];

export function VolantFormen() {
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label="Beispiele für Volant-Formen: gerade, Welle und Bogen"
      className="h-full w-full bg-gradient-to-br from-brand-sand to-white"
    >
      {FORMS.map((form, index) => (
        <g key={form.label} transform={`translate(${30 + (index % 2) * 190} ${40 + Math.floor(index / 2) * 130})`}>
          {/* Markisenprofil und Tuchkante */}
          <rect x="-6" y="-14" width="132" height="14" rx="4" className="fill-brand-ink" />
          <path d={form.path} className="fill-brand-accent" />
          <path d={form.path} fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="4 6" transform="translate(0 3) scale(1 0.8)" />
          <text x="60" y="66" textAnchor="middle" className="fill-brand-ink text-[15px] font-bold">
            {form.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
