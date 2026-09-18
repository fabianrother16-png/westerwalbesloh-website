import type { ReactNode } from "react";

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-t border-brand-border py-8 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-bold text-brand-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-brand-ink-soft">{children}</div>
    </div>
  );
}
