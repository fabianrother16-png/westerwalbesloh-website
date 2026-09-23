import { company } from "@/data/company";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { siteUrl } from "./site";
import type { FaqItem, Product, Service } from "@/types";

const businessId = `${siteUrl}/#business`;
const absolute = (path: string) => `${siteUrl}${path}`;

const provider = {
  "@type": "HomeAndConstructionBusiness",
  "@id": businessId,
  name: company.legalName,
};

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": businessId,
    name: company.legalName,
    alternateName: company.shortName,
    description:
      "Sonnenschutz-Fachbetrieb für Rollläden, Raffstores, Markisen, Insektenschutz, innenliegenden Sonnenschutz und Steuerungstechnik in Gütersloh und Ostwestfalen-Lippe.",
    slogan: company.slogan,
    url: `${siteUrl}/`,
    logo: absolute("/images/brand/logo.png"),
    image: [absolute("/images/home/team-treppe.jpg"), absolute("/images/home/hero.jpg")],
    telephone: company.phoneInternational,
    email: company.email,
    foundingDate: String(company.founded),
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.street,
      postalCode: company.zip,
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: company.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.geo.latitude,
      longitude: company.geo.longitude,
    },
    hasMap: company.social.googleProfile,
    areaServed: [
      ...company.serviceArea.map((name) => ({ "@type": "City", name })),
      { "@type": "AdministrativeArea", name: "Ostwestfalen-Lippe" },
    ],
    sameAs: [company.social.instagram, company.social.facebook],
    knowsAbout: products.map((product) => product.name),
    hasCredential: company.certificates.map((certificate) => ({
      "@type": "EducationalOccupationalCredential",
      name: certificate.name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sonnenschutz aus einer Hand",
      itemListElement: [
        ...products.map((product) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: product.name, url: absolute(`/produkte/${product.slug}`) },
        })),
        ...services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service.name, url: absolute(`/leistungen/${service.slug}`) },
        })),
      ],
    },
  };
}

/** Site name for Google search results; belongs on the home page only. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: company.shortName,
    alternateName: [company.legalName, "Sonnenschutz Westerwalbesloh"],
    url: `${siteUrl}/`,
    inLanguage: "de-DE",
    publisher: { "@id": businessId },
  };
}

// Made-to-measure systems have no fixed prices or on-page ratings, which Google's Product rich
// results require. Describing them as a Service avoids invalid Product items in Search Console.
export function productSchema(product: Product) {
  const url = absolute(`/produkte/${product.slug}`);
  const variants = product.sections.flatMap((section) => (section.type === "variants" ? section.items : []));
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: product.name,
    serviceType: product.name,
    description: product.metaDescription,
    url,
    image: absolute(product.heroImage.src),
    provider,
    areaServed: company.areaServed,
    brand: product.manufacturers.map((manufacturer) => ({
      "@type": "Brand",
      name: manufacturer.name.split(" – ")[0],
    })),
    ...(variants.length > 0 && {
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${product.name}: Ausführungen`,
        itemListElement: variants.map((variant) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: variant.title, description: variant.text },
        })),
      },
    }),
  };
}

export function serviceSchema(service: Service) {
  const url = absolute(`/leistungen/${service.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: service.name,
    name: service.name,
    description: service.metaDescription,
    url,
    image: absolute(service.heroImage.src),
    provider,
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
