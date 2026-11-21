import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck, IconClose } from "@/components/icons/UiIcons";

const rows: { us: string; others: string }[] = [
  {
    us: "Kostenlose, persönliche Beratung direkt bei Ihnen vor Ort",
    others: "Beratung meist nur nach Katalog, ohne Vor-Ort-Termin",
  },
  {
    us: "Exaktes Aufmaß durch unser Fachpersonal",
    others: "Maße müssen Sie in der Regel selbst nehmen",
  },
  {
    us: "Markenqualität von Somfy & WAREMA",
    others: "Häufig No-Name-Ware ohne durchgängige Herstellergarantie",
  },
  {
    us: "Montage durch unser festangestelltes Team – kein Subunternehmer",
    others: "Montage in Eigenregie oder durch wechselnde Subunternehmer",
  },
  {
    us: "Service, Wartung und Reparatur auch Jahre nach dem Kauf",
    others: "Support nach dem Kauf oft schwer erreichbar",
  },
];

export function Comparison() {
  return (
    <Section background="sand">
      <SectionHeading
        eyebrow="Der Unterschied"
        title="Darum lohnt sich der Fachbetrieb"
        description="Was Sie bekommen, wenn Sie bei einem seit 1959 familiengeführten Meisterbetrieb kaufen – statt von der Stange."
      />
      <Reveal className="mt-12 overflow-hidden rounded-3xl border border-brand-border">
        <div className="grid sm:grid-cols-2">
          <div className="bg-brand-primary p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Westerwalbesloh
            </p>
            <ul className="mt-5 space-y-4">
              {rows.map((row) => (
                <li key={row.us} className="flex items-start gap-3 text-white">
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent-soft" />
                  <span className="leading-relaxed">{row.us}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-ink-soft">
              Baumarkt &amp; Online-Bestellung
            </p>
            <ul className="mt-5 space-y-4">
              {rows.map((row) => (
                <li key={row.others} className="flex items-start gap-3 text-brand-ink-soft">
                  <IconClose className="mt-0.5 h-5 w-5 shrink-0 text-brand-ink-soft/50" />
                  <span className="leading-relaxed">{row.others}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
