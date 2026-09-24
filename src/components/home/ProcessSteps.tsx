import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { DrawLine } from "@/components/ui/DrawLine";
import { company } from "@/data/company";

export function ProcessSteps() {
  return (
    <Section background="sand">
      <SectionHeading
        eyebrow="So arbeiten wir"
        title="In fünf Schritten zu Ihrer neuen Anlage"
        align="center"
      />
      <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <DrawLine className="absolute top-11 right-[10%] left-[10%] hidden h-0.5 lg:block" />
        {company.process.map((item, index) => (
          <Reveal key={item.step} delay={index * 80}>
            <div className="relative h-full rounded-3xl border border-brand-border bg-white p-6">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary text-base font-bold text-white ring-4 ring-brand-sand">
                {item.step}
              </span>
              <h3 className="mt-4 text-base font-bold text-brand-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
