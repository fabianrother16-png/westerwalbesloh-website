import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { products } from "@/data/products";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/ueber-uns`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/produkte`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/leistungen`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteUrl}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/produkte/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/leistungen/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...serviceRoutes];
}
