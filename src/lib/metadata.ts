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
  // Setting openGraph on a page replaces the inherited preview image, so pages without a photo
  // fall back to the generated brand image explicitly.
  const images = image ? [{ url: image }] : [{ url: "/opengraph-image", width: 1200, height: 630 }];

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
      card: "summary_large_image",
      title,
      description,
      images: images.map((entry) => entry.url),
    },
  };
}
