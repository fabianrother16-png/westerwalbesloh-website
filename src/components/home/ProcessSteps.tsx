import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

export function ProcessSteps() {
  return (
    <Section background="sand">
      <SectionHeading
        eyebrow="So arbeiten wir"
        title="In fünf Schritten zu Ihrer neuen Anlage"
        align="center"
      />
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {company.process.map((item, index) => (
          <Reveal key={item.step} delay={index * 80}>
            <div className="relative h-full rounded-3xl border border-brand-border bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
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
