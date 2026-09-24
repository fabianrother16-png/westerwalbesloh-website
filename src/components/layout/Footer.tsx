import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { ConsentSettingsButton } from "@/components/consent/ConsentSettingsButton";
import { IconMail, IconMapPin, IconPhone, IconStar } from "@/components/icons/UiIcons";
import { company } from "@/data/company";
import { products } from "@/data/products";
import { services } from "@/data/services";

const headingClass = "text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent";
const linkClass = "text-brand-ink-soft transition-colors hover:text-brand-primary";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    // Light footer: the logo is shown exactly as designed, on white, without an extra frame.
    <footer className="border-t border-brand-border bg-white">
      <div className="mx-auto max-w-(--container-content) px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr] lg:gap-16">
          <div>
            <Logo className="h-24 w-auto" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-brand-ink-soft">
              {company.slogan}
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-brand-ink">
              <a href={company.phoneHref} className="flex items-center gap-2.5 font-semibold hover:text-brand-primary">
                <IconPhone className="h-4 w-4 text-brand-accent" />
                {company.phoneDisplay}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 break-all hover:text-brand-primary">
                <IconMail className="h-4 w-4 shrink-0 text-brand-accent" />
                {company.email}
              </a>
              <span className="flex items-start gap-2.5">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                {company.street}, {company.zip} {company.city}
              </span>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {company.certificates.map((certificate) => (
                <Image
                  key={certificate.name}
                  src={certificate.image}
                  alt={certificate.name}
                  width={certificate.width}
                  height={certificate.height}
                  sizes="96px"
                  className="h-12 w-auto rounded-md border border-brand-border"
                />
              ))}
              <a
                href={company.social.googleProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-sand px-3.5 py-2 text-sm font-medium text-brand-ink transition-colors hover:bg-brand-accent-soft/40"
              >
                <IconStar className="h-4 w-4 text-brand-accent" />
                {company.reviews.label}
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className={headingClass}>Produkte</p>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link href={`/produkte/${product.slug}`} className={linkClass}>
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className={headingClass}>Leistungen</p>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/leistungen/${service.slug}`} className={linkClass}>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className={headingClass}>Unternehmen</p>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                <li>
                  <Link href="/ueber-uns" className={linkClass}>
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link href="/ratgeber" className={linkClass}>
                    Ratgeber
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className={linkClass}>
                    Kontakt
                  </Link>
                </li>
                <li>
                  <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href={company.social.googleProfile} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Google-Profil
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Extra bottom padding on phones keeps the legal links clear of the sticky call/offer bar. */}
      <div className="bg-brand-primary-dark text-white/70">
        <div className="mx-auto flex max-w-(--container-content) flex-col gap-3 px-5 pt-6 pb-28 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pb-6">
          <p>
            © {year} {company.legalName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
            <ConsentSettingsButton className="hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}
