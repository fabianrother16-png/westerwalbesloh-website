"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { useConsent } from "@/lib/consent";

// "off" disables a tracker (e.g. for preview deployments). The IDs end up inside inline scripts,
// so any value that doesn't look like an ID disables the tracker as well.
function trackerId(value: string | undefined, fallback: string, pattern: RegExp) {
  const id = (value ?? fallback).trim();
  return id !== "off" && pattern.test(id) ? id : null;
}

// Same Google Analytics property and Clarity project as the previous site, so the statistics continue.
const gaId = trackerId(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, "G-7DVDHX6NLD", /^G-[A-Z0-9]+$/);
const clarityId = trackerId(process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID, "utosndrm9n", /^[a-z0-9]+$/);

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

function removeAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((part) => part.split("=")[0]?.trim() ?? "")
    .filter((name) => name.startsWith("_ga") || name === "_clck" || name === "_clsk");
  // The trackers set their cookies on the parent domain (e.g. ".sonnenschutz-westerwalbesloh.de").
  const labels = window.location.hostname.split(".");
  const domains = labels.map((_, index) => labels.slice(index).join(".")).filter((domain) => domain.includes("."));
  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${domain}`;
    }
  }
}

/** Loads Google Analytics and Microsoft Clarity only after the visitor opted in to statistics. */
export function Analytics() {
  const consent = useConsent();
  const enabled = Boolean(consent?.statistics) && process.env.NODE_ENV === "production";
  const wasEnabled = useRef(false);

  useEffect(() => {
    if (enabled) {
      wasEnabled.current = true;
      return;
    }
    if (!wasEnabled.current) return;
    // Consent was withdrawn while the trackers were running: stop them, delete their cookies and
    // reload, so that no tracking code stays active on the page.
    window.gtag?.("consent", "update", { analytics_storage: "denied" });
    window.clarity?.("consent", false);
    removeAnalyticsCookies();
    window.location.reload();
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {gaId && (
        <>
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'granted' });
gtag('js', new Date());
gtag('config', '${gaId}');`}
          </Script>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
        </>
      )}
      {clarityId && (
        <>
          <Script id="clarity-init" strategy="afterInteractive">
            {`window.clarity = window.clarity || function(){(window.clarity.q = window.clarity.q || []).push(arguments);};
window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' });`}
          </Script>
          <Script src={`https://www.clarity.ms/tag/${clarityId}`} strategy="afterInteractive" />
        </>
      )}
    </>
  );
}
