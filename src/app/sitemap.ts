import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { products } from "@/data/products";
import { services } from "@/data/services";
import type { ContentSection, ImageRef } from "@/types";

const absolute = (path: string) => `${siteUrl}${path}`;

// Image sitemap entries help the photos show up in Google Images.
function sectionImages(sections: ContentSection[]): string[] {
  return sections.flatMap((section) =>
    section.type === "variants" ? section.items.map((item) => item.image.src) : section.image ? [section.image.src] : []
  );
}

function images(...groups: (ImageRef | string)[][]): string[] {
  const paths = groups.flat().map((entry) => (typeof entry === "string" ? entry : entry.src));
  return [...new Set(paths)].map(absolute);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      images: images(["/images/home/hero.jpg", "/images/home/team-treppe.jpg", "/images/home/montage-garten.jpg"]),
    },
    {
      url: `${siteUrl}/ueber-uns`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
      images: images(["/images/home/team-treppe.jpg"]),
    },
    { url: `${siteUrl}/produkte`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/leistungen`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/ratgeber`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${siteUrl}/kontakt`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
      images: images(["/images/kontakt/terrasse.jpg"]),
    },
    { url: `${siteUrl}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/produkte/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
    images: images([product.heroImage], sectionImages(product.sections), product.projectPhotos),
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/leistungen/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
    images: images([service.heroImage], sectionImages(service.sections)),
  }));

  return [...staticRoutes, ...productRoutes, ...serviceRoutes];
}
