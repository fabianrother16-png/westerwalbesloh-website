import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SonnenschutzFinder } from "@/components/finder/SonnenschutzFinder";

export function FinderSection() {
  return (
    <Section id="finder" background="surface">
      <SectionHeading
        eyebrow="Sonnenschutz-Finder"
        title="In wenigen Klicks zur passenden Empfehlung"
        description="Beantworten Sie fünf kurze Fragen – wir zeigen Ihnen, welches Produkt zu Ihrem Vorhaben passt."
        align="center"
      />
      <Reveal className="mt-12">
        <SonnenschutzFinder />
      </Reveal>
    </Section>
  );
}
