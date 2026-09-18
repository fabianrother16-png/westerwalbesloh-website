import type { Metadata } from "next";
import { siteUrl } from "./site";

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Westerwalbesloh GmbH Rollladenbau",
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
