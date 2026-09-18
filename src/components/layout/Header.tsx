import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { IconChevronDown, IconPhone } from "@/components/icons/UiIcons";
import { company } from "@/data/company";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { MobileNav } from "./MobileNav";

function NavDropdown({
  label,
  overviewHref,
  items,
}: {
  label: string;
  overviewHref: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div className="group relative">
      <Link
        href={overviewHref}
        className="flex items-center gap-1 py-2 text-sm font-medium text-brand-ink-soft transition-colors hover:text-brand-primary"
      >
        {label}
        <IconChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-1 rounded-2xl border border-brand-border bg-white p-2 opacity-0 shadow-xl shadow-brand-ink/5 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-xl px-3.5 py-2.5 text-sm text-brand-ink-soft hover:bg-brand-sand hover:text-brand-primary"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href={overviewHref}
          className="mt-1 block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-brand-accent hover:bg-brand-sand"
        >
          Alle {label} im Überblick
        </Link>
      </div>
    </div>
  );
}

export function Header() {
  const productLinks = products.map((product) => ({
    href: `/produkte/${product.slug}`,
    label: product.name,
  }));
  const serviceLinks = services.map((service) => ({
    href: `/leistungen/${service.slug}`,
    label: service.name,
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-brand-border/70 bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/70">
      <div className="mx-auto flex h-18 max-w-(--container-content) items-center justify-between px-5 sm:px-8">
        <Link href="/" className="shrink-0">
          <Logo className="h-10 w-10" withWordmark />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            href="/ueber-uns"
            className="text-sm font-medium text-brand-ink-soft transition-colors hover:text-brand-primary"
          >
            Über uns
          </Link>
          <NavDropdown label="Produkte" overviewHref="/produkte" items={productLinks} />
          <NavDropdown label="Leistungen" overviewHref="/leistungen" items={serviceLinks} />
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
