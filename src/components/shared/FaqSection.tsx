import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FaqList } from "@/components/shared/FaqList";
import { IconPhone } from "@/components/icons/UiIcons";
import { company } from "@/data/company";
import type { FaqItem } from "@/types";

export function FaqSection({
  title,
  items,
  contactHref,
}: {
  title: string;
  items: FaqItem[];
  contactHref: string;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <Reveal className="lg:sticky lg:top-32 lg:self-start">
        <SectionHeading
          eyebrow="FAQ"
          title={title}
          description="Hier finden Sie Antworten auf die wichtigsten Fragen. Ist Ihre Frage nicht dabei? Melden Sie sich gerne persönlich bei uns."
        />
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Button href={contactHref}>Persönlich nachfragen</Button>
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-accent"
          >
            <IconPhone className="h-4 w-4" />
            {company.phoneDisplay}
          </a>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <FaqList items={items} />
      </Reveal>
    </div>
  );
}
