import Image from "next/image";

export function Logo({
  className = "h-14 w-auto",
  onDark = false,
  priority = false,
}: {
  className?: string;
  onDark?: boolean;
  priority?: boolean;
}) {
  const image = (
    <Image
      src="/images/brand/logo.png"
      alt="Westerwalbesloh – Das Schöne am Bau!"
      width={583}
      height={596}
      priority={priority}
      className={`${className} shrink-0 object-contain`}
    />
  );

  // The original logo has black lettering, so on dark backgrounds it sits on a white tile.
  if (onDark) {
    return <span className="inline-flex rounded-2xl bg-white p-3">{image}</span>;
  }
  return image;
}
