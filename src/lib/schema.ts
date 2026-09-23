import { company } from "@/data/company";
import { siteUrl } from "./site";
import type { FaqItem, Product, Service } from "@/types";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#business`,
    name: company.legalName,
    alternateName: company.shortName,
    description:
      "Sonnenschutz-Fachbetrieb für Rollläden, Raffstores, Markisen, Insektenschutz, innenliegenden Sonnenschutz und Steuerungstechnik in Gütersloh und Ostwestfalen-Lippe.",
    slogan: company.slogan,
    url: siteUrl,
    telephone: company.phoneDisplay,
    email: company.email,
    foundingDate: String(company.founded),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.street,
      postalCode: company.zip,
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: company.country,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: company.areaServed,
    },
    sameAs: [company.social.instagram],
    hasCredential: company.certificates.map((certificate) => ({
      "@type": "EducationalOccupationalCredential",
      name: certificate.name,
    })),
  };
}

export function productSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteUrl}/produkte/${product.slug}#product`,
    name: product.name,
    description: product.metaDescription,
    url: `${siteUrl}/produkte/${product.slug}`,
    category: "Sonnenschutz",
    brand: {
      "@type": "Brand",
      name: company.shortName,
    },
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/leistungen/${service.slug}#service`,
    serviceType: service.name,
    name: service.name,
    description: service.metaDescription,
    url: `${siteUrl}/leistungen/${service.slug}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: company.legalName,
    },
    areaServed: company.areaServed,
  };
}

export function faqSchema(faq: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
