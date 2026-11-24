export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://sonnenschutz-westerwalbesloh.de").replace(
  /\/$/,
  ""
);

// Adresse des Cloudflare Workers für Chat und Kontaktformular (die Website selbst ist statisch).
export const apiUrl = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/$/, "");
