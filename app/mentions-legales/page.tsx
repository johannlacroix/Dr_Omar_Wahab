import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions Légales - Dr. Omar Wahab",
  description: "Mentions légales du site du Dr. Omar Wahab, chirurgien esthétique à Bruges.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Éditeur du site</h2>
            <p>
              Le site www.dr-omar-wahab.fr est édité par le Dr. Omar Wahab,
              chirurgien esthétique exerçant à Bruges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Directeur de publication</h2>
            <p>Dr. Omar Wahab</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Hébergement</h2>
            <p>
              Le site est hébergé par Vercel Inc.
              <br />
              Adresse: 340 S Lemon Ave #4133, Walnut, CA 91789, USA
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, etc.) 
              est la propriété du Dr. Omar Wahab et est protégé par les lois 
              sur la propriété intellectuelle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Protection des données personnelles</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), 
              vous disposez d'un droit d'accès, de rectification, de suppression 
              et d'opposition aux données personnelles vous concernant.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. 
              En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Responsabilité</h2>
            <p>
              Le Dr. Omar Wahab s'efforce d'assurer l'exactitude des informations 
              diffusées sur ce site. Cependant, il ne peut garantir l'exactitude, 
              la complétude ou l'actualité des informations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
            <p>
              Pour toute question concernant ce site, vous pouvez nous contacter 
              via la page de contact ou prendre rendez-vous via Doctolib.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}



