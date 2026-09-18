import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "sand",
}: {
  children: ReactNode;
  tone?: "sand" | "dark";
}) {
  const toneClasses =
    tone === "dark"
      ? "bg-white/10 text-white border border-white/20"
      : "bg-white text-brand-primary border border-brand-border";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium ${toneClasses}`}
    >
      {children}
    </span>
  );
}
