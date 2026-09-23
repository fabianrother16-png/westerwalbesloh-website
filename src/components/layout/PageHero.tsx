import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SlatPattern } from "@/components/ui/SlatPattern";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  image,
  imageAlt,
  imagePosition = "object-center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  image?: string | null;
  imageAlt?: string;
  imagePosition?: string;
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
        <SlatPattern className="pointer-events-none absolute inset-0 h-full w-full" />
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
      </div>
    </section>
  );
}
