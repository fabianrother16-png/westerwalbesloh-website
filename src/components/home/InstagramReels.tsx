"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { openConsentSettings, useConsent } from "@/lib/consent";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

const REEL_URLS = [
  "https://www.instagram.com/reel/DVqh8VRjIs9/",
  "https://www.instagram.com/reel/DXerfA6DJmk/",
  "https://www.instagram.com/reel/DSXTbMXDPJ-/",
  "https://www.instagram.com/reel/DRMfvxfjTgH/",
  "https://www.instagram.com/reel/DSFIYrQABrD/",
  "https://www.instagram.com/reel/DKJ7QezsyTn/",
];

const cardClass =
  "flex aspect-[9/16] w-full flex-col items-center justify-center rounded-3xl border border-brand-border bg-white p-6 text-center";

export function InstagramReels() {
  const consent = useConsent();
  const [loadOnce, setLoadOnce] = useState(false);
  const enabled = loadOnce || Boolean(consent?.externalMedia);

  useEffect(() => {
    if (enabled) window.instgrm?.Embeds.process();
  }, [enabled]);

  return (
    <Section background="sand">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Instagram"
          title="Direkt aus unserem Instagram-Feed"
          description="Ein Klick auf ein Reel führt Sie direkt zu @westerwalbesloh_gmbh auf Instagram."
        />
        <Button href={company.social.instagram} size="md" variant="secondary">
          @westerwalbesloh_gmbh folgen
        </Button>
      </div>

      {!enabled && (
        <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-brand-border bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-brand-ink-soft">
            Zum Anzeigen der Reels wird eine Verbindung zu Instagram (Meta) hergestellt, dabei
            werden Daten wie Ihre IP-Adresse übertragen.{" "}
            <button
              type="button"
              onClick={openConsentSettings}
              className="font-semibold text-brand-primary underline"
            >
              Dauerhaft erlauben
            </button>
          </p>
          <button
            type="button"
            onClick={() => setLoadOnce(true)}
            className="shrink-0 rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-dark"
          >
            Reels laden
          </button>
        </div>
      )}

      <Reveal className="mt-8">
        <div className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2">
          {REEL_URLS.map((url) => (
            <div key={url} className="w-[85%] shrink-0 snap-center sm:w-[360px]">
              {enabled ? (
                <blockquote
                  className={`instagram-media ${cardClass}`}
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{ margin: 0, maxWidth: "360px", minWidth: "280px" }}
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-brand-primary hover:text-brand-accent"
                  >
                    Reel auf Instagram ansehen
                  </a>
                </blockquote>
              ) : (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardClass} transition-colors hover:border-brand-primary`}
                >
                  <span className="text-sm font-semibold text-brand-primary">
                    Reel auf Instagram ansehen
                  </span>
                </a>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      {enabled && (
        <Script
          src="https://www.instagram.com/embed.js"
          strategy="afterInteractive"
          onLoad={() => window.instgrm?.Embeds.process()}
        />
      )}
    </Section>
  );
}
