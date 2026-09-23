import type { Metadata } from "next";
import { siteUrl } from "./site";

export function buildMetadata({
  title,
  absoluteTitle = false,
  description,
  path,
  image,
}: {
  title: string;
  /** Use the title as-is, without the site-wide " | Westerwalbesloh GmbH Rollladenbau" suffix. */
  absoluteTitle?: boolean;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const images = image ? [{ url: image }] : undefined;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Westerwalbesloh GmbH Rollladenbau",
      locale: "de_DE",
      type: "website",
      images,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}
