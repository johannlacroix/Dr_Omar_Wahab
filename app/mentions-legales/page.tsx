import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mentions Légales - Dr Omar Wahab",
  description: "Mentions légales du site du Dr Omar Wahab, chirurgien esthétique à Bruges et Bordeaux.",
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
              Le site dromarwahab.com est édité par le Dr Omar Wahab,
              chirurgien esthétique exerçant à Bruges et Bordeaux.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Directeur de publication</h2>
            <p>Dr Omar Wahab</p>
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
            <h2 className="text-2xl font-bold mb-4">4. Conception et réalisation</h2>
            <p>
              Conception et réalisation du site : Johann Lacroix, chef de projet digital.
              <br />
              Contact : <a href="mailto:projlacroix@gmail.com">projlacroix@gmail.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, etc.) 
              est la propriété du Dr Omar Wahab et est protégé par les lois 
              sur la propriété intellectuelle.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Protection des données personnelles</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), 
              vous disposez d'un droit d'accès, de rectification, de suppression 
              et d'opposition aux données personnelles vous concernant.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
            <p>
              Ce site utilise Google Analytics pour mesurer l&apos;audience de manière anonyme, uniquement
              après votre consentement explicite via la bannière affichée lors de votre première visite.
              Vous pouvez accepter ou refuser ce suivi à tout moment en effaçant les données de navigation
              de votre navigateur (cookies et stockage local) puis en rechargeant le site.
            </p>
            <p className="mt-4">
              En l&apos;absence de consentement, aucun cookie de mesure d&apos;audience n&apos;est déposé.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Responsabilité</h2>
            <p>
              Le Dr Omar Wahab s'efforce d'assurer l'exactitude des informations 
              diffusées sur ce site. Cependant, il ne peut garantir l'exactitude, 
              la complétude ou l'actualité des informations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
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



