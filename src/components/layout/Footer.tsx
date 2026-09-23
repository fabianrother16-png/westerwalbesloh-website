import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { ConsentSettingsButton } from "@/components/consent/ConsentSettingsButton";
import { IconMail, IconMapPin, IconPhone, IconStar } from "@/components/icons/UiIcons";
import { company } from "@/data/company";
import { products } from "@/data/products";
import { services } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-primary-dark text-white/80">
      <div className="mx-auto max-w-(--container-content) px-5 pt-16 pb-28 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo className="h-11 w-auto" withWordmark wordmarkLight />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              {company.slogan}
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a href={company.phoneHref} className="flex items-center gap-2.5 hover:text-white">
                <IconPhone className="h-4 w-4 text-brand-accent-soft" />
                {company.phoneDisplay}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 hover:text-white"
              >
                <IconMail className="h-4 w-4 text-brand-accent-soft" />
                {company.email}
              </a>
              <span className="flex items-start gap-2.5">
                <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent-soft" />
                {company.street}, {company.zip} {company.city}
              </span>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-sm text-white/70">
              <IconStar className="h-4 w-4 text-brand-accent-soft" />
              {company.reviews.label}
            </div>
            <div className="mt-6 flex items-center gap-3">
              {company.certificates.map((certificate) => (
                <Image
                  key={certificate.name}
                  src={certificate.image}
                  alt={certificate.name}
                  width={certificate.width}
                  height={certificate.height}
                  className="h-14 w-auto rounded-md"
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Produkte
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link href={`/produkte/${product.slug}`} className="hover:text-white">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Leistungen
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/leistungen/${service.slug}`} className="hover:text-white">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Unternehmen
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/ueber-uns" className="hover:text-white">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-white">
                  Kontakt
                </Link>
              </li>
              <li>
                <a href={company.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={company.social.facebookSearch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={company.social.googleProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Google-Profil
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
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
