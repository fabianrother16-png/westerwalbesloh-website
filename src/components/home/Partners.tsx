import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export function Partners() {
  return (
    <div className="border-y border-brand-border bg-white py-12">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink-soft/70">
            Starke Partnerschaften mit führenden Herstellern
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {company.partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center gap-1 rounded-2xl border border-brand-border px-8 py-4"
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
