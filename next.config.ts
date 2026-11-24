import type { NextConfig } from "next";

// Statischer Export für das Webhosting bei All-Inkl (Apache): `npm run build` legt die fertige Seite in out/.
// Weiterleitungen alter URLs und Sicherheits-Header stehen deshalb in public/.htaccess, Chat und Kontaktformular laufen über worker/.
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
