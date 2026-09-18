import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SlatPattern } from "@/components/ui/SlatPattern";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-primary text-white">
      <SlatPattern className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="relative mx-auto max-w-(--container-content) px-5 py-20 sm:px-8 sm:py-28">
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
