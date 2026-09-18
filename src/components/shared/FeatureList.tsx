import { IconCheck } from "@/components/icons/UiIcons";

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-brand-ink-soft">
          <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
