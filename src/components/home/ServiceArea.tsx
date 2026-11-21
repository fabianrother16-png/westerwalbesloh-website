import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconMapPin } from "@/components/icons/UiIcons";
import { company } from "@/data/company";

export function ServiceArea() {
  return (
    <Section background="sand">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Einsatzgebiet"
            title="Sonnenschutz vom Fachbetrieb in Gütersloh, Bielefeld und ganz OWL"
          />
          <p className="mt-6 text-lg leading-relaxed text-brand-ink-soft">
            Von unserem Standort an der {company.street} in {company.city} sind wir im gesamten Kreis
            Gütersloh, in Bielefeld und in ganz Ostwestfalen-Lippe für Sie im Einsatz – für
            Beratung und Aufmaß vor Ort, Montage, Reparatur und Wartung.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Orte in unserem Einsatzgebiet">
            {company.serviceArea.map((town) => (
              <li
                key={town}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-white px-3.5 py-1.5 text-sm font-medium text-brand-ink"
              >
                <IconMapPin className="h-3.5 w-3.5 text-brand-accent" />
                {town}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-brand-ink-soft">
            Ihr Ort ist nicht dabei? Sprechen Sie uns gerne an – wir sind in ganz OWL für Sie unterwegs.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button href="/kontakt">Beratung vor Ort anfragen</Button>
            <a href={company.phoneHref} className="text-sm font-semibold text-brand-primary hover:text-brand-accent">
              {company.phoneDisplay}
            </a>
          </div>
        </Reveal>
        <Reveal delay={120} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/images/projekte/firmenwagen-objekt.jpg"
              alt="Firmenwagen von Westerwalbesloh im Einsatz bei einem Kunden in Ostwestfalen-Lippe"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-white px-6 py-4 shadow-xl shadow-brand-ink/10 sm:left-auto sm:-right-6">
            <p className="text-sm font-semibold text-brand-ink">{company.legalName}</p>
            <p className="mt-1 text-sm text-brand-ink-soft">
              {company.street}, {company.zip} {company.city}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
