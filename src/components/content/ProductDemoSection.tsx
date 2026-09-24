import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck, IconSparkles } from "@/components/icons/UiIcons";
import { DemoRenderer } from "@/components/interactive/demo/DemoRenderer";
import { demoCopy, type DemoKey } from "@/components/interactive/demo/demoConfig";

/** Dark "try it yourself" band on a product page with the product's interactive demo. */
export function ProductDemoSection({ demo }: { demo: DemoKey }) {
  const copy = demoCopy[demo];

  return (
    <section id="ausprobieren" className="relative scroll-mt-20 overflow-hidden md:scroll-mt-40 bg-brand-primary-dark py-16 text-white sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-32 h-96 w-96 rounded-full bg-brand-accent/30 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-accent-soft/10 blur-3xl" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <SectionHeading light eyebrow="Zum Ausprobieren" title={copy.title} description={copy.description} />
          <ul className="mt-8 space-y-3">
            {copy.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent">
                  <IconCheck className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-white/90">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm leading-relaxed text-white/75">
            <IconSparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
            {copy.note}
          </p>
        </Reveal>
        <Reveal delay={120} className="relative rounded-3xl bg-white p-5 text-brand-ink shadow-2xl shadow-black/25 sm:p-7">
          <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-amber-300 px-3 py-1 text-xs font-bold text-brand-ink shadow-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-ink" />
            Live-Demo – probieren Sie es aus
          </span>
          <DemoRenderer demo={demo} />
        </Reveal>
      </Container>
    </section>
  );
}
