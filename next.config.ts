import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
