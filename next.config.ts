import type { NextConfig } from "next";

// Erlaubte Quellen: eigene Seite plus die Dienste, die erst nach Einwilligung laden (Google Analytics, Microsoft Clarity, Google Maps, Instagram).
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.clarity.ms https://*.clarity.ms https://www.instagram.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.clarity.ms https://c.bing.com",
  "frame-src https://www.google.com https://www.instagram.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // URLs of the pre-Framer site that Google still has indexed.
  async redirects() {
    return [
      { source: "/produkt/insektenschutz-:variant", destination: "/produkte/insektentschutz", permanent: true },
      { source: "/produkt/:model(.*markise.*)", destination: "/produkte/markisen", permanent: true },
      { source: "/produkt/:path*", destination: "/produkte", permanent: true },
      { source: "/produkte/markisen/:path+", destination: "/produkte/markisen", permanent: true },
      { source: "/produkte/jalousien/:path*", destination: "/produkte/sonnenschutz", permanent: true },
      { source: "/produkte/innenliegender-sonnenschutz/:path*", destination: "/produkte/sonnenschutz", permanent: true },
      { source: "/produkte/insektenschutz", destination: "/produkte/insektentschutz", permanent: true },
      { source: "/service/:path*", destination: "/leistungen", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: contentSecurityPolicy },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Strict-Transport-Security", value: "max-age=31536000" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(self), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
