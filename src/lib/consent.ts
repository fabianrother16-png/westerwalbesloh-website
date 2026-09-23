"use client";

import { useSyncExternalStore } from "react";

export type ConsentState = {
  externalMedia: boolean;
  decidedAt: string;
};

const STORAGE_KEY = "ww-consent-v1";
const CHANGE_EVENT = "ww-consent-change";
export const OPEN_SETTINGS_EVENT = "ww-consent-open";

let memoryFallback: string | null = null;

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function parse(raw: string | null): ConsentState | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw) as Partial<ConsentState>;
    return typeof value.externalMedia === "boolean"
      ? { externalMedia: value.externalMedia, decidedAt: String(value.decidedAt ?? "") }
      : null;
  } catch {
    return null;
  }
}

export function saveConsent(externalMedia: boolean) {
  const state: ConsentState = { externalMedia, decidedAt: new Date().toISOString() };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage blocked (private mode): the choice still applies for this page view.
    memoryFallback = JSON.stringify(state);
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

const SERVER_SNAPSHOT = "__server__";

// undefined = not hydrated yet, null = visitor hasn't decided.
export function useConsent(): ConsentState | null | undefined {
  const raw = useSyncExternalStore(
    subscribe,
    () => readRaw() ?? memoryFallback,
    () => SERVER_SNAPSHOT
  );
  if (raw === SERVER_SNAPSHOT) return undefined;
  return parse(raw);
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
