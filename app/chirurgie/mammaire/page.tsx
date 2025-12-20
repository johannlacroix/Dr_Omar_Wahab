import { DoctolibButton } from '@/components/DoctolibButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chirurgie Mammaire - Dr. Omar Wahab | Augmentation, Réduction, Lifting",
  description: "Chirurgie mammaire à Bruges : augmentation mammaire, réduction mammaire, lifting mammaire. Consultations avec le Dr. Omar Wahab.",
  keywords: "chirurgie mammaire, augmentation mammaire, réduction mammaire, lifting mammaire, bruges",
};

export default function MammairePage() {
  const interventions = [
    {
      title: 'Augmentation mammaire',
      description: 'Augmentation du volume mammaire par prothèses ou lipofilling pour retrouver une poitrine harmonieuse.',
    },
    {
      title: 'Réduction mammaire',
      description: 'Réduction du volume mammaire pour améliorer le confort et l\'esthétique.',
    },
    {
      title: 'Lifting mammaire',
      description: 'Remontée des seins pour corriger la ptose mammaire et redonner de la fermeté.',
    },
    {
      title: 'Correction de gynécomastie',
      description: 'Traitement de l\'hypertrophie mammaire chez l\'homme.',
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            Chirurgie Mammaire
          </h1>
          <p className="text-xl text-gray-700 text-center mb-12">
            Interventions esthétiques et reconstructrices de la poitrine
          </p>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 mb-6">
              La chirurgie mammaire regroupe l'ensemble des interventions 
              visant à modifier la forme, le volume ou la position des seins. 
              Le Dr. Omar Wahab propose différentes techniques adaptées à 
              chaque situation.
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
              Consultation préalable
            </h2>
            <p className="text-gray-700 mb-6">
              Chaque intervention nécessite une consultation préalable pour 
              évaluer vos attentes, discuter des différentes options et 
              déterminer la technique la plus adaptée à votre situation.
            </p>
            <p className="text-gray-700 mb-6">
              Le Dr. Wahab prendra le temps de répondre à toutes vos questions 
              et de vous expliquer le déroulement de l'intervention, les suites 
              opératoires et les résultats attendus.
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

