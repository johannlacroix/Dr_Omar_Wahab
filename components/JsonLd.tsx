const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dromarwahab.com";

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr Omar Wahab",
  url: siteUrl,
  medicalSpecialty: "PlasticSurgery",
  description:
    "Chirurgien esthétique à Bruges et Bordeaux, spécialisé en chirurgie mammaire, silhouette, visage et médecine esthétique.",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "53 bis avenue Maryse Bastié",
      addressLocality: "Bruges",
      postalCode: "33520",
      addressCountry: "FR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "12 rue Falquet",
      addressLocality: "Bordeaux",
      postalCode: "33200",
      addressCountry: "FR",
    },
  ],
  areaServed: ["Bruges", "Bordeaux"],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
    />
  );
}
