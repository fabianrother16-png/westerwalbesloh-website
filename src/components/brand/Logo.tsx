export function Logo({
  className = "h-10 w-10",
  withWordmark = false,
  wordmarkLight = false,
}: {
  className?: string;
  withWordmark?: boolean;
  wordmarkLight?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        viewBox="0 0 48 48"
        className={`${className} shrink-0`}
        role="img"
        aria-label="Westerwalbesloh Logo"
      >
        <defs>
          <linearGradient id="ww-logo-grad" x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="var(--color-brand-primary-soft)" />
            <stop offset="100%" stopColor="var(--color-brand-primary-dark)" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="11" fill="url(#ww-logo-grad)" />
        <path
          d="M10 15 L16.5 33 L24 19 L31.5 33 L38 15"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="10" y="37.5" width="28" height="2.6" rx="1.3" fill="var(--color-brand-accent)" />
      </svg>
      {withWordmark && (
        <span className="flex flex-col leading-tight">
          <span
            className={`text-base font-bold tracking-tight ${
              wordmarkLight ? "text-white" : "text-brand-ink"
            }`}
          >
            Westerwalbesloh
          </span>
          <span
            className={`text-[0.65rem] font-medium uppercase tracking-wider ${
              wordmarkLight ? "text-white/70" : "text-brand-ink-soft"
            }`}
          >
            Rollladenbau
          </span>
        </span>
      )}
    </span>
  );
}
