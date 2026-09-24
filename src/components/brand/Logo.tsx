import Image from "next/image";

/**
 * Horizontal version of the original logo (emblem, wordmark and slogan side by side), so the company
 * name stays legible at header size. The light version is for dark backgrounds such as the footer.
 * Both are generated from public/images/brand/logo.png, which remains the stacked master logo.
 */
export function Logo({
  className = "h-12 w-auto",
  onDark = false,
  priority = false,
}: {
  className?: string;
  onDark?: boolean;
  priority?: boolean;
}) {
  return (
    <Image
      src={onDark ? "/images/brand/logo-quer-hell.png" : "/images/brand/logo-quer.png"}
      alt="Westerwalbesloh – Das Schöne am Bau!"
      width={891}
      height={177}
      loading={priority ? "eager" : undefined}
      sizes="320px"
      className={`${className} shrink-0 object-contain`}
    />
  );
}
