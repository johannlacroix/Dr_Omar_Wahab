import { DoctolibButton } from '@/components/DoctolibButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chirurgie de la Silhouette - Dr. Omar Wahab | Lipoaspiration, Abdominoplastie",
  description: "Chirurgie de la silhouette à Bruges : lipoaspiration, abdominoplastie, lifting des bras et cuisses. Consultations avec le Dr. Omar Wahab.",
  keywords: "chirurgie silhouette, lipoaspiration, abdominoplastie, lifting bras, bruges",
};

export default function SilhouettePage() {
  const interventions = [
    {
      title: 'Lipoaspiration',
      description: 'Élimination des amas graisseux localisés pour remodeler la silhouette.',
    },
    {
      title: 'Abdominoplastie',
      description: 'Remodelage de l\'abdomen pour éliminer l\'excès de peau et de graisse.',
    },
    {
      title: 'Lifting des bras',
      description: 'Correction de la ptose cutanée des bras pour retrouver des bras fermes.',
    },
    {
      title: 'Lifting des cuisses',
      description: 'Remodelage des cuisses pour améliorer la silhouette et la fermeté cutanée.',
    },
    {
      title: 'Body lift',
      description: 'Remodelage complet du corps après perte de poids importante.',
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            Chirurgie de la Silhouette
          </h1>
          <p className="text-xl text-gray-700 text-center mb-12">
            Remodelage et affinement de la silhouette
          </p>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 mb-6">
              La chirurgie de la silhouette regroupe différentes interventions 
              visant à remodeler et affiner le corps. Le Dr. Omar Wahab propose 
              des techniques modernes et adaptées à chaque morphologie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {interventions.map((intervention, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {intervention.title}
                </h3>
                <p className="text-gray-600">{intervention.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Techniques modernes
            </h2>
            <p className="text-gray-700 mb-6">
              Le Dr. Wahab utilise les techniques les plus récentes pour 
              garantir des résultats naturels et harmonieux, avec un minimum 
              de cicatrices et une récupération optimisée.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Prendre rendez-vous
            </h2>
            <p className="text-gray-700 mb-8">
              Réservez votre consultation pour discuter de votre projet
            </p>
            <DoctolibButton />
          </div>
        </div>
      </div>
    </div>
  );
}

