import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { Analytics } from "@/components/consent/Analytics";
import { CookieBanner } from "@/components/consent/CookieBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { siteUrl } from "@/lib/site";
import { company } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sonnenschutz Gütersloh: Maßarbeit & Montage | Westerwalbesloh",
    template: "%s | Westerwalbesloh",
  },
  description:
    "Zu viel Hitze im Haus? Entdecken Sie maßgeschneiderten Sonnenschutz für Fenster & Terrassen in Gütersloh & OWL. Jetzt kostenlose Beratung anfragen!",
  keywords: [
    "Sonnenschutz Gütersloh",
    "Rollladenbau Gütersloh",
    "Raffstore Gütersloh",
    "Markisen Gütersloh",
    "Insektenschutz Gütersloh",
    "Somfy Experte Gütersloh",
  ],
  authors: [{ name: company.legalName }],
  robots: { index: true, follow: true },
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    title: "Sonnenschutz Gütersloh: Maßarbeit & Montage | Westerwalbesloh",
    description:
      "Rollläden, Raffstores, Markisen, Insektenschutz und Sonnenschirme vom Familienbetrieb seit 1959 – Beratung, Aufmaß und Montage in Gütersloh und ganz OWL.",
    url: `${siteUrl}/`,
    siteName: company.legalName,
    locale: "de_DE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  // Token from Google Search Console ("HTML-Tag" method), only needed if the domain isn't verified via DNS.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="flex min-h-screen flex-col pb-16 antialiased sm:pb-0">
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <JsonLd data={localBusinessSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <ChatWidget />
        <MobileStickyBar />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
