import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd } from "@/components/JsonLd";
import { SkipLink } from "@/components/SkipLink";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dromarwahab.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dr Omar Wahab - Chirurgien esthétique à Bruges et Bordeaux",
  description:
    "Chirurgien esthétique à Bruges et Bordeaux, spécialisé en chirurgie mammaire, silhouette, visage et médecine esthétique. Prenez rendez-vous en ligne.",
  keywords:
    "chirurgien esthétique, bruges, bordeaux, chirurgie mammaire, chirurgie visage, médecine esthétique, botox, acide hyaluronique",
  authors: [{ name: "Dr Omar Wahab" }],
  openGraph: {
    title: "Dr Omar Wahab - Chirurgien esthétique à Bruges et Bordeaux",
    description:
      "Chirurgien esthétique spécialisé en chirurgie mammaire, silhouette, visage et médecine esthétique.",
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    images: [
      {
        url: "/Silouhette/wellness-beauty-concept-beautiful-slim-woman-white-underwear-sitting-white-floor_opti_800px.webp",
        width: 800,
        height: 600,
        alt: "Dr Omar Wahab - Chirurgien esthétique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Omar Wahab - Chirurgien esthétique à Bruges et Bordeaux",
    description:
      "Chirurgien esthétique spécialisé en chirurgie mammaire, silhouette, visage et médecine esthétique.",
    images: [
      "/Silouhette/wellness-beauty-concept-beautiful-slim-woman-white-underwear-sitting-white-floor_opti_800px.webp",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <SkipLink />
        <JsonLd />
        <GoogleAnalytics />
        <CookieConsent />
        <Header />
        <main id="main-content" tabIndex={-1} className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
