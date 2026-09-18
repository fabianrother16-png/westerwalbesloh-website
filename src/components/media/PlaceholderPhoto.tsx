/**
 * Bewusst gestalteter Bild-Platzhalter (kein Stockfoto, keine Fremdpersonen) für
 * Team- und Projektfotos, die dem Kunden noch nicht digital vorliegen. Sobald echte
 * Fotos verfügbar sind, hier durch next/image mit den echten Dateien ersetzen -
 * siehe README.md, Abschnitt "Bilder ergänzen".
 */
export function PlaceholderPhoto({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  const initials = label
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-primary-soft to-brand-primary-dark ${className}`}
      role="img"
      aria-label={label}
    >
      <svg className="absolute inset-0 h-full w-full opacity-20" preserveAspectRatio="none" viewBox="0 0 200 200" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1={-20 + i * 30} y1="220" x2={40 + i * 30} y2="-20" stroke="white" strokeWidth="8" />
        ))}
      </svg>
      <span className="relative text-2xl font-bold text-white">{initials}</span>
    </div>
  );
}
