import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LamellenDemo } from "@/components/interactive/LamellenDemo";
import { HeatChart } from "@/components/interactive/HeatChart";

export function TechShowcase() {
  return (
    <section className="relative overflow-hidden bg-brand-primary-dark py-16 text-white sm:py-24">
      {/* Soft light spots give the dark section some depth. */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-32 h-96 w-96 rounded-full bg-brand-accent/30 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-brand-accent-soft/15 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Wissen & Technik"
          title="Sonnenschutz, der mitdenkt"
          description="Drehen Sie selbst an den Lamellen eines Raffstores – und sehen Sie, warum außenliegender Sonnenschutz so viel mehr Hitze abhält als ein Rollo hinter der Scheibe."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl bg-white p-6 text-brand-ink shadow-2xl shadow-black/20 sm:p-8">
            <LamellenDemo />
          </Reveal>
          <Reveal delay={120} className="rounded-3xl bg-white p-6 text-brand-ink shadow-2xl shadow-black/20 sm:p-8">
            <HeatChart />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
