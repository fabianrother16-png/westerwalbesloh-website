import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { HeatChart } from "@/components/interactive/HeatChart";

const facts = [
  { value: "bis 90 %", text: "der Sonnenwärme hält ein geschlossener Rollladen draußen." },
  { value: "bis 3×", text: "mehr Hitzeschutz als ein Rollo hinter der Scheibe – weil die Sonne gar nicht erst ans Glas kommt." },
];

export function KnowledgeSection() {
  return (
    <Section background="sand">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Einfach erklärt"
            title="Warum außen besser ist als innen"
            description="Scheint die Sonne auf die Scheibe, wird ihr Licht im Raum zu Wärme. Ein Rollo hinter dem Glas hält sie dann kaum noch auf. Ein Rollladen, Raffstore oder eine Markise fängt die Sonne dagegen ab, bevor sie das Fenster erreicht."
          />
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.value} className="rounded-2xl border border-brand-border bg-white p-5">
                <dt className="text-3xl font-bold tracking-tight text-brand-primary">{fact.value}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-brand-ink-soft">{fact.text}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={120} className="rounded-3xl border border-brand-border bg-white p-6 shadow-xl shadow-brand-ink/5 sm:p-8">
          <HeatChart />
        </Reveal>
      </div>
    </Section>
  );
}
