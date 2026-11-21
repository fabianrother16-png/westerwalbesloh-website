"use client";

import { useState } from "react";
import { company } from "@/data/company";
import { useConsent } from "@/lib/consent";

export function MapEmbed() {
  const consent = useConsent();
  const [clicked, setClicked] = useState(false);
  const query = encodeURIComponent(`${company.legalName}, ${company.street}, ${company.zip} ${company.city}`);

  if (!clicked && !consent?.externalMedia) {
    return (
      <div className="flex h-72 flex-col items-center justify-center gap-3 rounded-3xl border border-brand-border bg-brand-sand p-6 text-center">
        <p className="text-sm text-brand-ink-soft">
          Beim Laden der Karte wird eine Verbindung zu Google Maps hergestellt. Dabei können Daten
          an Google übertragen werden.
        </p>
        <button
          onClick={() => setClicked(true)}
          className="rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primary-dark"
        >
          Karte laden
        </button>
      </div>
    );
  }

  return (
    <iframe
      title="Anfahrt zu Westerwalbesloh GmbH Rollladenbau"
      src={`https://www.google.com/maps?q=${query}&output=embed`}
      className="h-72 w-full rounded-3xl border border-brand-border"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
