"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

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

export function InstagramReels() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, []);

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

      <Reveal className="mt-12">
        <div
          ref={trackRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2"
        >
          {REEL_URLS.map((url) => (
            <div key={url} className="w-[85%] shrink-0 snap-center sm:w-[360px]">
              <blockquote
                className="instagram-media flex aspect-[9/16] w-full flex-col items-center justify-center rounded-3xl border border-brand-border bg-white p-6 text-center"
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
            </div>
          ))}
        </div>
      </Reveal>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.instgrm?.Embeds.process()}
      />
    </Section>
  );
}
