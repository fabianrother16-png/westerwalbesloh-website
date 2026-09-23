"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { OPEN_SETTINGS_EVENT, saveConsent, useConsent } from "@/lib/consent";

export function CookieBanner() {
  const consent = useConsent();
  const [reopened, setReopened] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [externalMedia, setExternalMedia] = useState(false);

  useEffect(() => {
    function open() {
      setExternalMedia(Boolean(consent?.externalMedia));
      setShowSettings(true);
      setReopened(true);
    }
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, [consent]);

  if (consent === undefined) return null;
  if (consent !== null && !reopened) return null;

  function decide(value: boolean) {
    saveConsent(value);
    setReopened(false);
    setShowSettings(false);
  }

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-md sm:p-0"
    >
      <div className="rounded-3xl border border-brand-border bg-white p-6 shadow-2xl shadow-brand-ink/15">
        <p id="cookie-banner-title" className="text-base font-bold text-brand-ink">
          Cookies &amp; externe Inhalte
        </p>
        <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">
          Wir speichern nur, was für den Betrieb der Seite nötig ist. Mit Ihrer Zustimmung laden
          wir zusätzlich Inhalte von Instagram (Meta) und Google Maps – dabei werden Daten wie
          Ihre IP-Adresse an diese Anbieter übertragen. Mehr dazu in der{" "}
          <Link href="/datenschutz" className="font-semibold text-brand-primary underline">
            Datenschutzerklärung
          </Link>
          .
        </p>

        {showSettings && (
          <div className="mt-5 space-y-3">
            <label className="flex items-start gap-3 rounded-2xl border border-brand-border bg-brand-sand p-4">
              <input type="checkbox" checked disabled className="mt-1 h-4 w-4 accent-brand-primary" />
              <span className="text-sm">
                <span className="block font-semibold text-brand-ink">Notwendig</span>
                <span className="text-brand-ink-soft">
                  Speichert Ihre Auswahl in diesem Banner. Immer aktiv.
                </span>
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-brand-border p-4">
              <input
                type="checkbox"
                checked={externalMedia}
                onChange={(event) => setExternalMedia(event.target.checked)}
                className="mt-1 h-4 w-4 accent-brand-primary"
              />
              <span className="text-sm">
                <span className="block font-semibold text-brand-ink">Externe Medien</span>
                <span className="text-brand-ink-soft">
                  Instagram-Reels auf der Startseite und die Google-Maps-Karte auf der
                  Kontaktseite.
                </span>
              </span>
            </label>
          </div>
        )}

        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => decide(false)}
            className="rounded-full bg-brand-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => decide(true)}
            className="rounded-full bg-brand-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-dark"
          >
            Alle akzeptieren
          </button>
        </div>
        {showSettings ? (
          <button
            type="button"
            onClick={() => decide(externalMedia)}
            className="mt-2.5 w-full rounded-full border border-brand-border px-4 py-3 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-primary"
          >
            Auswahl speichern
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setShowSettings(true)}
            className="mt-3 w-full text-center text-sm font-semibold text-brand-ink-soft underline-offset-4 hover:text-brand-primary hover:underline"
          >
            Einstellungen
          </button>
        )}
      </div>
    </div>
  );
}
