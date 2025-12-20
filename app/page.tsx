import Link from 'next/link';
import { DoctolibButton } from '@/components/DoctolibButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Accueil - Dr. Omar Wahab | Chirurgien Esthétique à Bruges",
  description: "Dr. Omar Wahab, chirurgien esthétique à Bruges. Spécialisé en chirurgie mammaire, silhouette, visage et médecine esthétique. Consultation sur rendez-vous.",
};

export default function Home() {
  const services = [
    {
      title: 'Chirurgie Mammaire',
      description: 'Augmentation, réduction, lifting mammaire et corrections diverses.',
      href: '/chirurgie/mammaire',
      icon: '👩‍⚕️',
    },
    {
      title: 'Chirurgie de la Silhouette',
      description: 'Lipoaspiration, abdominoplastie, lifting des bras et des cuisses.',
      href: '/chirurgie/silhouette',
      icon: '💪',
    },
    {
      title: 'Chirurgie du Visage',
      description: 'Rhinoplastie, blépharoplastie, lifting facial et lipofilling.',
      href: '/chirurgie/visage',
      icon: '✨',
    },
    {
      title: 'Médecine Esthétique',
      description: 'Injections de Botox, acide hyaluronique et traitements non invasifs.',
      href: '/medecine-esthetique',
      icon: '💉',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Dr. Omar Wahab
            </h1>
            <p className="text-2xl text-gray-700 mb-4">
              Chirurgien Esthétique à Bruges
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Spécialisé en chirurgie mammaire, silhouette, visage et médecine esthétique. 
              Accompagnement personnalisé pour votre bien-être et votre confiance.
            </p>
            <DoctolibButton />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4 text-blue-600 font-medium group-hover:underline">
                  En savoir plus →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Pourquoi choisir le Dr. Omar Wahab ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-2">Expertise reconnue</h3>
                <p className="text-gray-600">
                  Formation approfondie et expérience en chirurgie esthétique
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold mb-2">Consultation personnalisée</h3>
                <p className="text-gray-600">
                  Écoute attentive et accompagnement tout au long de votre parcours
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-2">Résultats naturels</h3>
                <p className="text-gray-600">
                  Techniques modernes pour des résultats harmonieux et naturels
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/a-propos"
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                En savoir plus sur le Dr. Wahab
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à commencer votre parcours ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Prenez rendez-vous pour une consultation personnalisée
          </p>
          <DoctolibButton />
        </div>
      </section>
    </div>
  );
}
