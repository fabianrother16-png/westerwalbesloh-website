/**
 * Dekoratives Lamellen-Motiv (angelehnt an Raffstore-/Jalousie-Lamellen) als
 * wiederkehrendes visuelles Element - Ersatz für echte Fotografie, die aktuell
 * nicht verfügbar ist (siehe README.md).
 */
export function SlatPattern({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const stroke = tone === "light" ? "rgba(255,255,255,0.14)" : "rgba(28,58,78,0.08)";

  return (
    <svg
      className={className}
      viewBox="0 0 400 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {Array.from({ length: 14 }).map((_, i) => (
        <line
          key={i}
          x1={-40 + i * 34}
          y1="220"
          x2={40 + i * 34}
          y2="-20"
          stroke={stroke}
          strokeWidth="10"
        />
      ))}
    </svg>
  );
}
