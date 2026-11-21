import type { ReactNode } from "react";
import { Container } from "./Container";

const backgrounds = {
  sand: "bg-brand-sand",
  surface: "bg-brand-surface",
  primary: "bg-brand-primary text-white",
  none: "",
} as const;

export function Section({
  children,
  className = "",
  containerClassName = "",
  background = "none",
  id,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: keyof typeof backgrounds;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${backgrounds[background]} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
