import { DoctolibButton } from '@/components/DoctolibButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chirurgie du Visage - Dr. Omar Wahab | Rhinoplastie, Blépharoplastie, Lifting",
  description: "Chirurgie esthétique du visage à Bruges : rhinoplastie, blépharoplastie, lifting facial. Consultations avec le Dr. Omar Wahab.",
  keywords: "chirurgie visage, rhinoplastie, blépharoplastie, lifting visage, bruges",
};

export default function VisagePage() {
  const interventions = [
    {
      title: 'Rhinoplastie',
      description: 'Remodelage du nez pour améliorer l\'harmonie du visage.',
    },
    {
      title: 'Blépharoplastie',
      description: 'Correction des paupières pour rajeunir le regard.',
    },
    {
      title: 'Lifting facial',
      description: 'Remontée des tissus du visage pour atténuer les signes de l\'âge.',
    },
    {
      title: 'Lipofilling du visage',
      description: 'Injection de graisse autologue pour redonner du volume au visage.',
    },
    {
      title: 'Otoplastie',
      description: 'Correction des oreilles décollées.',
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            Chirurgie du Visage
          </h1>
          <p className="text-xl text-gray-700 text-center mb-12">
            Interventions esthétiques du visage pour rajeunir et harmoniser
          </p>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 mb-6">
              La chirurgie esthétique du visage permet de corriger, améliorer 
              ou rajeunir les traits du visage. Le Dr. Omar Wahab maîtrise 
              différentes techniques pour des résultats naturels et harmonieux.
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
              Résultats naturels
            </h2>
            <p className="text-gray-700 mb-6">
              Le Dr. Wahab privilégie des techniques préservatrices pour 
              obtenir des résultats naturels qui respectent l'identité 
              de chaque patient.
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

