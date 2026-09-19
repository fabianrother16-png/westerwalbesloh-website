import Image from "next/image";

export function Logo({
  className = "h-10 w-auto",
  withWordmark = false,
  wordmarkLight = false,
  priority = false,
}: {
  className?: string;
  withWordmark?: boolean;
  wordmarkLight?: boolean;
  priority?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/images/brand/logo-emblem.png"
        alt="Westerwalbesloh Logo"
        width={169}
        height={96}
        priority={priority}
        className={`${className} shrink-0 object-contain`}
      />
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
