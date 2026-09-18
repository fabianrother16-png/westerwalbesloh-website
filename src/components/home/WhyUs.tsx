import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconBriefcase, IconClock, IconMapPin, IconShield, IconUsers } from "@/components/icons/UiIcons";
import { IconReparatur } from "@/components/icons/ProductIcons";
import { company } from "@/data/company";

const icons = [IconUsers, IconClock, IconShield, IconMapPin, IconReparatur, IconBriefcase];

export function WhyUs() {
  return (
    <Section background="surface">
      <SectionHeading eyebrow="Warum Westerwalbesloh" title="Darauf können Sie sich verlassen" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {company.usps.map((usp, index) => {
          const Icon = icons[index % icons.length] ?? IconUsers;
          return (
            <Reveal key={usp.title} delay={index * 60}>
              <div className="h-full rounded-3xl border border-brand-border p-6">
                <Icon className="h-7 w-7 text-brand-accent" />
                <h3 className="mt-4 text-base font-bold text-brand-ink">{usp.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft">{usp.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
