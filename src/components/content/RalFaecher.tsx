// Gezeichneter RAL-Farbfächer (keine Fotovorlage nötig). Farbwerte sind Bildschirm-Näherungen.
const COLORS = [
  { ral: "9016", hex: "#f1f0ea" },
  { ral: "1015", hex: "#e6d2b5" },
  { ral: "7035", hex: "#cbd0cc" },
  { ral: "9006", hex: "#a1a1a0" },
  { ral: "9007", hex: "#878581" },
  { ral: "7039", hex: "#6c6960" },
  { ral: "6005", hex: "#114232" },
  { ral: "5011", hex: "#1a2b3c" },
  { ral: "3004", hex: "#6b1c23" },
  { ral: "8019", hex: "#3d3635" },
  { ral: "7016", hex: "#383e42" },
  { ral: "9005", hex: "#0e0e10" },
];

const isLight = (hex: string) => parseInt(hex.slice(1, 3), 16) > 150;

export function RalFaecher({ className = "" }: { className?: string }) {
  const start = -50;
  const step = 100 / (COLORS.length - 1);
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label="RAL-Farbfächer mit Farbtönen von Verkehrsweiß bis Tiefschwarz"
      className={`h-full w-full bg-gradient-to-br from-brand-sand to-white ${className}`}
    >
      <g transform="translate(200 270)">
        {COLORS.map((color, index) => {
          const angle = start + index * step;
          // Beschriftung auf der linken Seite andersherum, damit sie nicht auf dem Kopf steht.
          const label = angle < 0 ? "translate(-5 -200) rotate(90)" : "translate(5 -120) rotate(-90)";
          return (
          <g key={color.ral} transform={`rotate(${angle})`}>
            <rect x="-17" y="-228" width="34" height="228" rx="7" fill={color.hex} stroke="#17242c" strokeOpacity="0.12" />
            <text
              transform={label}
              fontSize="13"
              fontWeight="700"
              letterSpacing="0.5"
              fill={isLight(color.hex) ? "#17242c" : "#ffffff"}
            >
              RAL {color.ral}
            </text>
          </g>
          );
        })}
        <circle r="11" fill="#9d9d9c" stroke="#ffffff" strokeWidth="3" />
      </g>
    </svg>
  );
}
