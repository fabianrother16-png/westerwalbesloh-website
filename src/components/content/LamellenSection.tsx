import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck } from "@/components/icons/UiIcons";
import { LamellenDemo } from "@/components/interactive/LamellenDemo";

const positions = [
  "Waagerecht: volles Tageslicht und freie Sicht",
  "Schräg gestellt: hell, aber ohne Blendung",
  "Geschlossen: Hitze-, Sicht- und Blendschutz",
];

export function LamellenSection() {
  return (
    <section className="relative overflow-hidden bg-brand-primary-dark py-16 text-white sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-32 h-96 w-96 rounded-full bg-brand-accent/30 blur-3xl" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Zum Ausprobieren"
            title="Licht lenken per Fingertipp"
            description="Ziehen Sie den Regler und drehen Sie die Lamellen – genau so lenken Raffstores das Tageslicht und halten die Hitze draußen."
          />
          <ul className="mt-8 space-y-3">
            {positions.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent">
                  <IconCheck className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-white/70">
            Die Sonnenautomatik zeigt, wie ein Sonnensensor die Anlage im Tagesverlauf ganz von
            selbst steuert – auf Wunsch per Somfy Smart Home.
          </p>
        </Reveal>
        <Reveal delay={120} className="rounded-3xl bg-white p-6 text-brand-ink shadow-2xl shadow-black/20 sm:p-8">
          <LamellenDemo />
        </Reveal>
      </Container>
    </section>
  );
}
