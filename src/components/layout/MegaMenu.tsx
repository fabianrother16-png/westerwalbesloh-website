"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProductIcon, ServiceIcon } from "@/components/icons/ProductIcons";
import { IconArrowRight, IconChevronDown } from "@/components/icons/UiIcons";
import type { ProductIconKey, ServiceIconKey } from "@/types";

export type MegaMenuEntry = {
  href: string;
  label: string;
  description: string;
  image?: { src: string; alt: string };
  productIcon?: ProductIconKey;
  serviceIcon?: ServiceIconKey;
};

/**
 * Header dropdown that opens on hover or keyboard focus. Product entries show a photo; the photos are only
 * requested once the menu is opened for the first time, so they never slow down the page itself.
 */
export function MegaMenu({
  label,
  overviewHref,
  entries,
  promo,
  wide = false,
}: {
  label: string;
  overviewHref: string;
  entries: MegaMenuEntry[];
  promo?: { href: string; title: string; text: string };
  wide?: boolean;
}) {
  const [armed, setArmed] = useState(false);
  const [suppressed, setSuppressed] = useState(false);

  const close = () => {
    setSuppressed(true);
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  };

  return (
    <div
      className={`group flex h-full items-center ${wide ? "" : "relative"}`}
      onPointerEnter={() => setArmed(true)}
      onFocus={() => setArmed(true)}
    >
      <Link
        href={overviewHref}
        onClick={close}
        // After a click the menu stays closed until the trigger is hovered or focused again.
        onPointerEnter={() => setSuppressed(false)}
        onFocus={() => setSuppressed(false)}
        className="flex items-center gap-1 py-2 text-sm font-medium text-brand-ink-soft transition-colors hover:text-brand-primary"
      >
        {label}
        <IconChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
      </Link>

      <div
        className={`invisible absolute top-full z-50 translate-y-1 opacity-0 transition-all duration-150 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
          wide ? "inset-x-0" : "left-1/2 w-[30rem] -translate-x-1/2"
        } ${suppressed ? "!invisible !opacity-0" : ""}`}
      >
        <div className={wide ? "mx-auto max-w-(--container-content) px-5 sm:px-8" : ""}>
          <div className="rounded-3xl border border-brand-border bg-white p-3 shadow-2xl shadow-brand-ink/10">
            <div className={`grid gap-1.5 ${wide ? "grid-cols-4" : "grid-cols-1"}`}>
              {entries.map((entry) => (
                <Link
                  key={entry.href}
                  href={entry.href}
                  onClick={close}
                  className={`group/item flex rounded-2xl p-2.5 transition-colors hover:bg-brand-sand ${wide ? "flex-col" : "items-start gap-3.5"}`}
                >
                  {entry.image ? (
                    <span className="relative block aspect-[16/9] w-full overflow-hidden rounded-xl bg-brand-sand">
                      {armed && (
                        <Image
                          src={entry.image.src}
                          alt=""
                          fill
                          sizes="260px"
                          className="object-cover transition-transform duration-500 group-hover/item:scale-105"
                        />
                      )}
                    </span>
                  ) : (
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft/40 text-brand-primary">
                      {entry.serviceIcon && <ServiceIcon icon={entry.serviceIcon} className="h-5 w-5" />}
                      {entry.productIcon && <ProductIcon icon={entry.productIcon} className="h-5 w-5" />}
                    </span>
                  )}
                  <span className={wide ? "mt-2.5 px-1" : ""}>
                    <span className="flex items-center gap-2 text-sm font-bold text-brand-ink group-hover/item:text-brand-primary">
                      {wide && entry.productIcon && <ProductIcon icon={entry.productIcon} className="h-4 w-4 text-brand-accent" />}
                      {entry.label}
                    </span>
                    <span className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-brand-ink-soft">{entry.description}</span>
                  </span>
                </Link>
              ))}
              {promo && (
                <Link
                  href={promo.href}
                  onClick={close}
                  className="flex flex-col justify-between rounded-2xl bg-brand-primary-dark p-4 text-white transition-colors hover:bg-brand-primary"
                >
                  <span>
                    <span className="block text-sm font-bold">{promo.title}</span>
                    <span className="mt-1.5 block text-xs leading-relaxed text-white/75">{promo.text}</span>
                  </span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent-soft">
                    Jetzt ausprobieren <IconArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              )}
            </div>
            <Link
              href={overviewHref}
              onClick={close}
              className="mt-2 flex items-center justify-between rounded-2xl px-3.5 py-2.5 text-sm font-semibold text-brand-accent hover:bg-brand-sand"
            >
              Alle {label} im Überblick
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
