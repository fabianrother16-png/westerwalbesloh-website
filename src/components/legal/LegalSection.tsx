import type { ReactNode } from "react";

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-t border-brand-border py-8 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-bold text-brand-ink">{title}</h2>
      <div className="mt-3 space-y-3 break-words text-sm leading-relaxed text-brand-ink-soft">{children}</div>
    </div>
  );
}

/** Long URLs in legal texts: clickable and allowed to wrap on narrow screens. */
export function ExternalLink({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="break-all font-medium text-brand-primary underline">
      {href.replace(/^https:\/\//, "")}
    </a>
  );
}
