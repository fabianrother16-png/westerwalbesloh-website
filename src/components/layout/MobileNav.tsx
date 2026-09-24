"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { IconClose, IconMenu, IconPhone } from "@/components/icons/UiIcons";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

type NavLink = { href: string; label: string };

export function MobileNav({
  productLinks,
  serviceLinks,
}: {
  productLinks: NavLink[];
  serviceLinks: NavLink[];
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Portale dürfen erst nach der Hydration ins DOM geschrieben werden;
    // dieses einmalige Client-Flag ist die anerkannte Ausnahme von der Regel.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Menü öffnen"
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border text-brand-ink"
      >
        <IconMenu className="h-5 w-5" />
      </button>

      {mounted && open && createPortal(
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex h-18 shrink-0 items-center justify-between border-b border-brand-border px-5">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-ink-soft">
              Menü
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Menü schließen"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border"
            >
              <IconClose className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-1 flex-col overflow-y-auto px-5 py-6">
            <nav className="flex flex-col gap-1 text-base">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 font-medium text-brand-ink hover:bg-brand-sand"
              >
                Startseite
              </Link>
              <Link
                href="/ueber-uns"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 font-medium text-brand-ink hover:bg-brand-sand"
              >
                Über uns
              </Link>

              <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-wider text-brand-ink-soft">
                Produkte
              </p>
              <Link
                href="/produkte"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 font-medium text-brand-primary hover:bg-brand-sand"
              >
                Alle Produkte im Überblick
              </Link>
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-brand-ink-soft hover:bg-brand-sand hover:text-brand-primary"
                >
                  {link.label}
                </Link>
              ))}

              <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-wider text-brand-ink-soft">
                Leistungen
              </p>
              <Link
                href="/leistungen"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 font-medium text-brand-primary hover:bg-brand-sand"
              >
                Alle Leistungen im Überblick
              </Link>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-brand-ink-soft hover:bg-brand-sand hover:text-brand-primary"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/ratgeber"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-xl px-3 py-3 font-medium text-brand-ink hover:bg-brand-sand"
              >
                Ratgeber & Sonnenstand-Rechner
              </Link>
              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 font-medium text-brand-ink hover:bg-brand-sand"
              >
                Kontakt
              </Link>
            </nav>

            <div className="mt-8 flex flex-col gap-3 border-t border-brand-border pt-6">
              <a
                href={company.phoneHref}
                className="flex items-center gap-2 text-sm font-semibold text-brand-ink"
              >
                <IconPhone className="h-4 w-4 text-brand-accent" />
                {company.phoneDisplay}
              </a>
              <Button href="/kontakt" onClick={() => setOpen(false)}>
                Kostenloses Angebot anfordern
              </Button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
