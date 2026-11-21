import type { FaqItem } from "@/types";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-brand-border overflow-hidden rounded-3xl border border-brand-border bg-white">
      {items.map((item) => (
        <details key={item.question} className="group p-6 open:bg-brand-sand/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-brand-ink marker:content-none">
            {item.question}
            <span
              aria-hidden="true"
              className="shrink-0 text-xl leading-none text-brand-accent transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-brand-ink-soft">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
