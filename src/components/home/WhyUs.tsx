import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck } from "@/components/icons/UiIcons";
import { company } from "@/data/company";

export function WhyUs() {
  return (
    <Section background="surface">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Tradition trifft Innovation"
            title="Warum Westerwalbesloh?"
            description="Seit über 60 Jahren sind wir Ihr zuverlässiger Partner im Raum Gütersloh & OWL: ehrliches Handwerk, erstklassige Markenqualität und ein Service, der dort weitermacht, wo andere aufhören."
          />
          <ul className="mt-10 grid gap-7 sm:grid-cols-2">
            {company.usps.map((usp) => (
              <li key={usp.title} className="flex gap-4">
                <IconCheck className="mt-1 h-5 w-5 shrink-0 text-brand-accent" />
                <div>
                  <h3 className="text-base font-bold text-brand-ink">{usp.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-ink-soft">{usp.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:aspect-[4/3] lg:aspect-[3/4]">
            <Image
              src="/images/home/montage-garten.jpg"
              alt="Zwei Monteure von Westerwalbesloh bei der Montage einer Gelenkarmmarkise im Garten"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
