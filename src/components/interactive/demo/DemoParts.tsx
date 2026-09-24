"use client";

import { useEffect, useId, useRef, useState, type ReactNode, type RefObject } from "react";

/** Unique, SVG-safe id prefix so gradients of several demos never clash on one page. */
export function useSvgIds() {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  return (name: string) => `${uid}-${name}`;
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return reduced;
}

/** True while the element is (at least partly) on screen - used to pause animations off screen. */
export function useInView(ref: RefObject<Element | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver((entries) => setInView(Boolean(entries[0]?.isIntersecting)), { threshold: 0.05 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

/** Calls `onFrame(elapsedMs)` on every animation frame while `active` is true. */
export function useAnimationLoop(active: boolean, onFrame: (elapsed: number) => void) {
  const callback = useRef(onFrame);
  useEffect(() => {
    callback.current = onFrame;
  });
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      callback.current(now - start);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active]);
}

export const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
export const lerp = (from: number, to: number, t: number) => from + (to - from) * t;
export const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

/**
 * A set of numeric values that can be set directly (slider) or animated smoothly to a target (scene buttons).
 * With reduced motion, animations jump straight to the target.
 */
export function useTween<T extends Record<string, number>>(initial: T) {
  const [values, setValues] = useState(initial);
  const [animating, setAnimating] = useState(false);
  const current = useRef(initial);
  const frame = useRef(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    current.current = values;
  }, [values]);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const stop = () => {
    cancelAnimationFrame(frame.current);
    setAnimating(false);
  };

  const set = (patch: Partial<T>) => {
    stop();
    setValues((previous) => ({ ...previous, ...patch }));
  };

  const animateTo = (target: Partial<T>, duration = 1800, onDone?: () => void) => {
    cancelAnimationFrame(frame.current);
    const from = { ...current.current };
    const to = { ...from, ...target } as T;
    if (reduced) {
      setValues(to);
      setAnimating(false);
      onDone?.();
      return;
    }
    setAnimating(true);
    const start = performance.now();
    const tick = (now: number) => {
      const t = clamp((now - start) / duration);
      const eased = easeInOut(t);
      const next = { ...from };
      for (const key of Object.keys(to) as (keyof T)[]) {
        next[key] = lerp(from[key] as number, to[key] as number, eased) as T[keyof T];
      }
      setValues(next);
      if (t < 1) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setAnimating(false);
        onDone?.();
      }
    };
    frame.current = requestAnimationFrame(tick);
  };

  return { values, set, animateTo, stop, animating };
}

export function DemoScene({ label, children }: { label: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 400 300" className="w-full rounded-2xl bg-[#eef2f6]" role="img" aria-label={label}>
      {children}
    </svg>
  );
}

export function DemoStatus({ title, value, text }: { title: string; value?: string; text: string }) {
  return (
    <div className="mt-5">
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-lg font-bold text-brand-ink">{title}</p>
        {value && <p className="shrink-0 text-sm tabular-nums text-brand-ink-soft">{value}</p>}
      </div>
      <p className="mt-1 min-h-10 text-sm text-brand-ink-soft" aria-live="polite">
        {text}
      </p>
    </div>
  );
}

export function DemoSlider({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  left,
  right,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  left: string;
  right: string;
}) {
  const inputId = useId();
  return (
    <div className="mt-3">
      <label htmlFor={inputId} className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-ink-soft">
        {label}
      </label>
      <input
        id={inputId}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-1 w-full accent-brand-accent"
      />
      <div className="flex justify-between text-xs text-brand-ink-soft">
        <span>{left}</span>
        <span>{right}</span>
      </div>
    </div>
  );
}

export function DemoButton({
  onClick,
  active = false,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
        active
          ? "border-brand-accent bg-brand-accent text-white"
          : "border-brand-border bg-white text-brand-primary hover:border-brand-primary"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${active ? "animate-pulse bg-amber-300" : "bg-brand-accent"}`} />
      {children}
    </button>
  );
}

export function DemoActions({ children }: { children: ReactNode }) {
  return <div className="mt-5 flex flex-wrap gap-2.5">{children}</div>;
}

/** Sky gradient, sun glow and a soft green garden hint, reused by the outdoor scenes. */
export function OutdoorDefs({ id }: { id: (name: string) => string }) {
  return (
    <>
      <linearGradient id={id("sky")} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#8fc3f2" />
        <stop offset="100%" stopColor="#dff0fd" />
      </linearGradient>
      <linearGradient id={id("night")} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1c2f4d" />
        <stop offset="100%" stopColor="#3d5a80" />
      </linearGradient>
      <radialGradient id={id("sunglow")}>
        <stop offset="0%" stopColor="#fff6c7" />
        <stop offset="45%" stopColor="#ffd86b" />
        <stop offset="100%" stopColor="#ffd86b" stopOpacity="0" />
      </radialGradient>
    </>
  );
}

export function Sun({ id, x, y, opacity = 1 }: { id: (name: string) => string; x: number; y: number; opacity?: number }) {
  return (
    <g opacity={opacity}>
      <circle cx={x} cy={y} r="34" fill={`url(#${id("sunglow")})`} />
      <circle cx={x} cy={y} r="13" fill="#ffd24d" />
    </g>
  );
}
