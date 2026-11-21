import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Showroom } from "@/components/interactive/demo/Showroom";

export function ShowroomSection() {
  return (
    <section id="showroom" className="relative scroll-mt-24 overflow-hidden bg-brand-primary-dark py-16 text-white sm:py-24">
      {/* Soft light spots give the dark section some depth. */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-32 h-96 w-96 rounded-full bg-brand-accent/30 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-brand-accent-soft/15 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          light
          eyebrow="Digitaler Showroom"
          title="Sonnenschutz zum Ausprobieren"
          description="Sieben Produkte, sieben kleine Simulationen: Regler ziehen, Szenen starten – und sofort sehen, was jedes Produkt bei Ihnen zu Hause leistet."
        />
        <Reveal className="mt-10">
          <Showroom />
        </Reveal>
      </Container>
    </section>
  );
}
