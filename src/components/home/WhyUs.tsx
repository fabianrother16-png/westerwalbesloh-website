import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck } from "@/components/icons/UiIcons";
import { company } from "@/data/company";
import { localImage } from "@/lib/media";

export function WhyUs() {
  const photo = localImage("projekte/montage-balkon-gt.jpg");

  return (
    <Section background="surface">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <SectionHeading eyebrow="Warum Westerwalbesloh" title="Darauf können Sie sich verlassen" />
          <dl className="mt-10 space-y-7">
            {company.usps.map((usp) => (
              <div key={usp.title} className="flex gap-4">
                <IconCheck className="mt-1 h-5 w-5 shrink-0 text-brand-accent" />
                <div>
                  <dt className="text-base font-bold text-brand-ink">{usp.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-brand-ink-soft">{usp.text}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        {photo && (
          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:aspect-[4/3] lg:aspect-[3/4]">
              <Image
                src={photo}
                alt="Westerwalbesloh-Monteur bei der Sonnenschutz-Montage in Gütersloh"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
