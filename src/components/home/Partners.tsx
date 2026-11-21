import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export function Partners() {
  const brands = company.partners.filter((partner) => partner.name !== "Somfy");

  return (
    <div className="border-y border-brand-border bg-white py-14">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink-soft">
            Zertifizierter Fachbetrieb mit starken Partnern
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
            {company.certificates.map((certificate) => (
              <Image
                key={certificate.name}
                src={certificate.image}
                alt={certificate.name}
                width={certificate.width}
                height={certificate.height}
                sizes="128px"
                className="h-20 w-auto"
              />
            ))}
          </div>
        </Reveal>
      </Container>

      <div className="marquee mt-10 overflow-hidden" aria-label="Unsere Herstellerpartner">
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex items-center gap-16 pr-16" aria-hidden={copy === 1}>
              {brands.map((partner) => (
                <li key={partner.name} className="shrink-0">
                  <Image
                    src={partner.logo}
                    alt={copy === 0 ? `${partner.name} – Fachpartner von Westerwalbesloh` : ""}
                    width={partner.width}
                    height={partner.height}
                    sizes="144px"
                    className="h-14 w-36 object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <Container>
        <p className="mt-10 text-center text-xs text-brand-ink-soft">
          Seit den 1980er-Jahren im Einsatz auch bei namhaften Unternehmen wie Miele, Claas und
          Bertelsmann.
        </p>
      </Container>
    </div>
  );
}
