import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/icons/UiIcons";
import { products } from "@/data/products";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
};

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Fehler 404"
        title="Diese Seite gibt es leider nicht (mehr)"
        description="Vielleicht hat sich die Adresse geändert. Über die Links unten geht es direkt weiter – oder Sie rufen uns einfach an."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/" size="lg">
            Zur Startseite
          </Button>
          <Button href="/kontakt" variant="ghost" size="lg">
            Kontakt aufnehmen
          </Button>
        </div>
      </PageHero>
      <Section background="surface">
        <div className="grid gap-12 sm:grid-cols-2">
          {[
            { title: "Produkte", items: products.map((item) => ({ name: item.name, href: `/produkte/${item.slug}` })) },
            { title: "Leistungen", items: services.map((item) => ({ name: item.name, href: `/leistungen/${item.slug}` })) },
          ].map((group) => (
            <div key={group.title}>
              <h2 className="text-xl font-bold text-brand-ink">{group.title}</h2>
              <ul className="mt-4 divide-y divide-brand-border border-y border-brand-border">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between gap-4 py-3.5 font-medium text-brand-ink transition-colors hover:text-brand-primary"
                    >
                      {item.name}
                      <IconArrowRight className="h-4 w-4 shrink-0 text-brand-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
