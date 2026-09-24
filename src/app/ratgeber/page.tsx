import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { KnowledgeSection } from "@/components/home/KnowledgeSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { FaqSection } from "@/components/shared/FaqSection";
import { SunCalculator } from "@/components/interactive/SunCalculator";
import { ComparisonMatrix } from "@/components/interactive/ComparisonMatrix";
import { ProductIcon } from "@/components/icons/ProductIcons";
import { IconArrowRight } from "@/components/icons/UiIcons";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, definedTermSetSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { company } from "@/data/company";
import { glossary } from "@/data/glossary";
import type { FaqItem } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Sonnenschutz-Ratgeber: Sonnenstand-Rechner & Vergleich | Westerwalbesloh",
  absoluteTitle: true,
  description:
    "Wann scheint die Sonne auf Ihr Fenster? Sonnenstand-Rechner für Gütersloh, Hitzeschutz im Vergleich und Sonnenschutz-Lexikon – einfach erklärt vom Fachbetrieb.",
  path: "/ratgeber",
});

const jumpLinks = [
  { href: "#sonnenstand", label: "Sonnenstand-Rechner" },
  { href: "#hitzeschutz", label: "Hitzeschutz im Vergleich" },
  { href: "#vergleich", label: "Welcher Sonnenschutz passt?" },
  { href: "#lexikon", label: "Lexikon" },
];

const faq: FaqItem[] = [
  {
    question: "Welche Seite des Hauses braucht am dringendsten Sonnenschutz?",
    answer:
      "Meist die Süd-, Südwest- und Westseite. Nach Süden steht die Sonne mittags hoch und scheint viele Stunden aufs Fenster, nach Westen kommt sie am Nachmittag flach herein – genau dann, wenn es draußen ohnehin am wärmsten ist. Mit unserem Sonnenstand-Rechner sehen Sie für jede Himmelsrichtung, wann die Sonne Ihr Fenster erreicht.",
  },
  {
    question: "Warum hält außenliegender Sonnenschutz mehr Hitze ab als ein Rollo innen?",
    answer:
      "Weil er die Sonne abfängt, bevor sie die Scheibe erreicht. Ein Rollo innen sitzt hinter dem Glas – die Wärme ist dann schon im Raum. Nach den Richtwerten der DIN 4108-2 hält ein geschlossener Rollladen rund 90 % der Sonnenwärme draußen, ein weißes Rollo innen nur etwa 30 %.",
  },
  {
    question: "Lohnt sich Sonnenschutz auch im Winter?",
    answer:
      "Ja. Tagsüber lassen Sie die Wintersonne einfach herein und nutzen ihre Wärme. Abends geschlossen, bilden Rollläden ein zusätzliches Luftpolster vor dem Fenster und helfen, die Wärme im Haus zu halten. Wabenplissees wirken innen ähnlich dämmend.",
  },
  {
    question: "Kann ich Sonnenschutz an meinem bestehenden Haus nachrüsten?",
    answer:
      "In den allermeisten Fällen ja. Vorbaurollläden und Vorbau-Raffstores werden vor das Fenster gesetzt, Markisen an Wand oder Decke montiert, Plissees und Insektenschutz passgenau im Fenster. Wir schauen uns die Situation kostenlos bei Ihnen vor Ort an.",
  },
  {
    question: "Wie genau ist der Sonnenstand-Rechner?",
    answer:
      "Die Sonnenposition berechnen wir nach anerkannten astronomischen Formeln für Gütersloh – auf wenige Minuten genau. Die Wärmeangabe ist ein Richtwert für ein 2 m² großes Fenster bei wolkenlosem Himmel. Bäume, Nachbarhäuser oder Dachüberstände berücksichtigt der Rechner nicht – das prüfen wir bei der Beratung vor Ort.",
  },
];

function RatgeberHero() {
  return (
    <section className="relative overflow-hidden bg-brand-primary-dark text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-brand-accent/30 blur-3xl" />
      <Container className="relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-accent-soft">Ratgeber</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">Sonnenschutz einfach erklärt</h1>
          <p className="mt-5 max-w-xl text-lg text-white/75">
            Wann scheint die Sonne auf Ihre Fenster? Wie viel Hitze hält welcher Sonnenschutz ab? Und was ist eigentlich ein Raffstore?
            Hier finden Sie die Antworten – zum Ausprobieren und in einfachen Worten.
          </p>
          <nav aria-label="Inhalt des Ratgebers" className="mt-8 flex flex-wrap gap-2.5">
            {jumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                {link.label}
                <IconArrowRight className="h-4 w-4 rotate-90" />
              </a>
            ))}
          </nav>
        </Reveal>

        {/* Decorative: the sun travels over a house across the day. */}
        <div aria-hidden="true" className="relative mx-auto w-full max-w-md">
          <svg viewBox="0 0 400 300" className="w-full">
            <defs>
              <radialGradient id="ratgeber-glow">
                <stop offset="0%" stopColor="#fff6c7" />
                <stop offset="45%" stopColor="#ffd86b" />
                <stop offset="100%" stopColor="#ffd86b" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path d="M40 250 A 160 160 0 0 1 360 250" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="4 8" />
            <g className="sun-orbit">
              <circle cx="200" cy="90" r="40" fill="url(#ratgeber-glow)" />
              <circle cx="200" cy="90" r="16" fill="#ffd24d" />
            </g>
            <rect x="20" y="250" width="360" height="4" rx="2" fill="#ffffff" fillOpacity="0.3" />
            <polygon points="130,176 200,130 270,176" fill="#ffffff" fillOpacity="0.9" />
            <rect x="142" y="174" width="116" height="76" fill="#ffffff" />
            <rect x="156" y="190" width="34" height="30" rx="2" fill="#b8d5f2" />
            {[0, 1, 2, 3, 4].map((index) => (
              <rect key={index} x="156" y={192 + index * 6} width="34" height="3" fill="#376fb2" />
            ))}
            <rect x="152" y="185" width="42" height="5" rx="1.5" fill="#1e3f66" />
            <rect x="210" y="190" width="34" height="30" rx="2" fill="#b8d5f2" />
            <rect x="206" y="185" width="42" height="5" rx="1.5" fill="#1e3f66" />
            <rect x="210" y="190" width="34" height="14" fill="#9aa5b1" />
            <rect x="191" y="226" width="18" height="24" rx="1.5" fill="#1e3f66" fillOpacity="0.8" />
          </svg>
        </div>
      </Container>
    </section>
  );
}

export default function RatgeberPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Ratgeber", path: "/ratgeber" },
        ])}
      />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd data={definedTermSetSchema("Sonnenschutz-Lexikon", "/ratgeber#lexikon", glossary)} />

      <RatgeberHero />

      <Section id="sonnenstand" background="surface" className="scroll-mt-24">
        <SectionHeading
          eyebrow="Sonnenstand-Rechner"
          title="Wann scheint die Sonne auf Ihr Fenster?"
          description="Wählen Sie die Himmelsrichtung Ihres Fensters und den Monat. Der Rechner zeigt, wann die Sonne kommt, wie viel Wärme sie mitbringt – und welcher Sonnenschutz dazu passt."
        />
        <Reveal className="mt-10 rounded-3xl border border-brand-border bg-white p-5 shadow-xl shadow-brand-ink/5 sm:p-8">
          <SunCalculator latitude={company.geo.latitude} longitude={company.geo.longitude} />
        </Reveal>
      </Section>

      <KnowledgeSection id="hitzeschutz" showGuideLink={false} />

      <Section id="vergleich" background="surface" className="scroll-mt-24">
        <SectionHeading
          eyebrow="Produktvergleich"
          title="Welcher Sonnenschutz kann was?"
          description="Tippen Sie an, was Ihnen wichtig ist – die Übersicht zeigt sofort, welche Produkte dafür ideal sind."
        />
        <Reveal className="mt-10">
          <ComparisonMatrix />
        </Reveal>
      </Section>

      <Section id="lexikon" background="sand" className="scroll-mt-24">
        <SectionHeading
          eyebrow="Lexikon"
          title="Fachbegriffe in einem Satz erklärt"
          description="Kassette, Fc-Wert, Windwächter? Hier steht, was dahintersteckt – ohne Fachchinesisch."
        />
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {glossary.map((item, index) => (
            <Reveal key={item.term} delay={(index % 3) * 60} className="flex flex-col rounded-2xl border border-brand-border bg-white p-5">
              <dt className="flex items-center gap-3 text-lg font-bold text-brand-ink">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent-soft/40 text-brand-primary">
                  <ProductIcon icon={item.icon} className="h-5 w-5" />
                </span>
                {item.term}
              </dt>
              <dd className="mt-3 flex flex-1 flex-col text-sm leading-relaxed text-brand-ink-soft">
                {item.text}
                {item.slug && (
                  <Link href={`/produkte/${item.slug}`} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-accent hover:text-brand-primary">
                    Mehr dazu
                    <IconArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section background="surface">
        <FaqSection title="Häufige Fragen rund um Sonnen- und Hitzeschutz" items={faq} contactHref="/kontakt" />
      </Section>

      <CtaBanner />
    </>
  );
}
