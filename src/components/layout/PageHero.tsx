import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

// Pages without a photo of their own (legal pages, 404) get a subdued company photo instead of a flat colour.
const fallbackImage = "/images/projekte/firmenwagen-objekt.jpg";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  image,
  imageAlt,
  imagePosition = "object-center",
  highlights,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  image?: string | null;
  imageAlt?: string;
  imagePosition?: string;
  /** Key facts shown as glass tiles below the text. */
  highlights?: { value: string; label: string }[];
}) {
  return (
    <section
      className={`relative flex items-end overflow-hidden bg-brand-primary text-white ${
        image ? "min-h-[26rem] sm:min-h-[34rem]" : ""
      }`}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className={`hero-zoom object-cover ${imagePosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-dark/90 via-brand-primary-dark/60 to-brand-primary-dark/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark/60 via-transparent to-transparent" />
        </>
      ) : (
        <>
          <Image src={fallbackImage} alt="" fill sizes="100vw" className="object-cover object-[center_35%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-dark/95 via-brand-primary-dark/85 to-brand-primary-dark/50" />
        </>
      )}
      <div className="relative mx-auto w-full max-w-(--container-content) px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-accent-soft">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          {description && <p className="mt-5 max-w-xl text-lg text-white/75">{description}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
        {highlights && highlights.length > 0 && (
          <Reveal delay={150}>
            <dl className="mt-10 grid max-w-4xl grid-cols-2 gap-3 lg:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.value} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 backdrop-blur-md">
                  <dt className="text-lg font-bold leading-tight text-white sm:text-xl">{item.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-white/75 sm:text-sm">{item.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
      </div>
    </section>
  );
}
