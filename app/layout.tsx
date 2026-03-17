import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr. Omar Wahab - Chirurgien esthétique à Bruges et Bordeaux",
  description: "Chirurgien esthétique à Bruges, spécialisé en chirurgie mammaire, silhouette, visage et médecine esthétique. Prenez rendez-vous en ligne.",
  keywords: "chirurgien esthétique, bruges, chirurgie mammaire, chirurgie visage, médecine esthétique, botox, acide hyaluronique",
  authors: [{ name: "Dr. Omar Wahab" }],
  openGraph: {
    title: "Dr. Omar Wahab - Chirurgien esthétique à Bruges et Bordeaux",
    description: "Chirurgien esthétique spécialisé en chirurgie mammaire, silhouette, visage et médecine esthétique.",
    type: "website",
    locale: "fr_FR",
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
        <GoogleAnalytics />
        <CookieConsent />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
