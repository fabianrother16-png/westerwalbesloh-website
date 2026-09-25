import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { IconPhone } from "@/components/icons/UiIcons";
import { company } from "@/data/company";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { MegaMenu, type MegaMenuEntry } from "./MegaMenu";
import { MobileNav } from "./MobileNav";

export function Header() {
  const productLinks = products.map((product) => ({
    href: `/produkte/${product.slug}`,
    label: product.name,
  }));
  const serviceLinks = services.map((service) => ({
    href: `/leistungen/${service.slug}`,
    label: service.name,
  }));
  const productEntries: MegaMenuEntry[] = products.map((product) => ({
    href: `/produkte/${product.slug}`,
    label: product.name,
    description: product.shortDescription,
    image: { src: product.cardImage.src, alt: product.cardImage.alt },
    productIcon: product.icon,
  }));
  const serviceEntries: MegaMenuEntry[] = services.map((service) => ({
    href: `/leistungen/${service.slug}`,
    label: service.name,
    description: service.shortDescription,
    serviceIcon: service.icon,
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-brand-border/70 bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/70">
      <div className="mx-auto flex h-18 max-w-(--container-content) items-center justify-between px-5 sm:h-22 sm:px-8">
        <Link href="/" className="shrink-0" aria-label="Westerwalbesloh – zur Startseite">
          <Logo className="h-14 w-auto sm:h-[4.5rem]" priority />
        </Link>

        <nav className="hidden h-full items-center gap-7 lg:flex">
          <Link
            href="/ueber-uns"
            className="text-sm font-medium text-brand-ink-soft transition-colors hover:text-brand-primary"
          >
            Über uns
          </Link>
          <MegaMenu
            label="Produkte"
            overviewHref="/produkte"
            entries={productEntries}
            wide
            promo={{
              href: "/ratgeber#vergleich",
              title: "Unsicher, was passt?",
              text: "Wählen Sie, was Ihnen wichtig ist – der Produktvergleich zeigt sofort die passende Lösung.",
            }}
          />
          <MegaMenu label="Leistungen" overviewHref="/leistungen" entries={serviceEntries} />
          <Link
            href="/ratgeber"
            className="text-sm font-medium text-brand-ink-soft transition-colors hover:text-brand-primary"
          >
            Ratgeber
          </Link>
          <Link
            href="/kontakt"
            className="text-sm font-medium text-brand-ink-soft transition-colors hover:text-brand-primary"
          >
            Kontakt
          </Link>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-brand-ink transition-colors hover:text-brand-primary"
          >
            <IconPhone className="h-4 w-4 text-brand-accent" />
            {company.phoneDisplay}
          </a>
          <Button href="/kontakt">Kostenloses Angebot anfordern</Button>
        </div>

        <MobileNav productLinks={productLinks} serviceLinks={serviceLinks} />
      </div>
    </header>
  );
}
