import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export function Partners() {
  return (
    <div className="border-y border-brand-border bg-white py-12">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink-soft/70">
            Zertifizierter Fachbetrieb mit starken Partnern
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {company.certificates.map((certificate) => (
              <Image
                key={certificate.name}
                src={certificate.image}
                alt={certificate.name}
                width={certificate.width}
                height={certificate.height}
                className="h-20 w-auto"
              />
            ))}
            {company.partners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-20 flex-col items-center justify-center gap-1 rounded-2xl border border-brand-border px-8"
              >
                <span className="text-xl font-bold tracking-tight text-brand-primary">
                  {partner.name}
                </span>
                <span className="text-xs text-brand-ink-soft">{partner.note}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-brand-ink-soft/70">
            Seit den 1980er-Jahren im Einsatz auch bei namhaften Unternehmen wie Miele, Claas
            und Bertelsmann.
          </p>
        </Reveal>
      </Container>
    </div>
  );
}
