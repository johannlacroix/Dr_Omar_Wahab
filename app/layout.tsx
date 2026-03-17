import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dr. Omar Wahab - Chirurgien Esthétique à Bruges",
  description: "Chirurgien esthétique à Bruges, spécialisé en chirurgie mammaire, silhouette, visage et médecine esthétique. Prenez rendez-vous en ligne.",
  keywords: "chirurgien esthétique, bruges, chirurgie mammaire, chirurgie visage, médecine esthétique, botox, acide hyaluronique",
  authors: [{ name: "Dr. Omar Wahab" }],
  openGraph: {
    title: "Dr. Omar Wahab - Chirurgien Esthétique à Bruges",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5E45GRMKCD"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5E45GRMKCD');
          `}
        </Script>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
