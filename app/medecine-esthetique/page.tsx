import { DoctolibButton } from '@/components/DoctolibButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Médecine Esthétique - Dr. Omar Wahab | Botox, Acide Hyaluronique",
  description: "Médecine esthétique à Bruges : injections de Botox, acide hyaluronique, traitements non invasifs. Consultations avec le Dr. Omar Wahab.",
  keywords: "médecine esthétique, botox, acide hyaluronique, injections, bruges",
};

export default function MedecineEsthetiquePage() {
  const traitements = [
    {
      title: 'Injection de Botox',
      description: 'Réduction des rides d\'expression et rajeunissement du visage.',
    },
    {
      title: 'Acide hyaluronique',
      description: 'Comblement des rides, augmentation des lèvres, modelage du visage.',
    },
    {
      title: 'Traitements anti-âge',
      description: 'Soins et traitements pour préserver la jeunesse de la peau.',
    },
    {
      title: 'Mésothérapie',
      description: 'Injection de vitamines et principes actifs pour revitaliser la peau.',
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            Médecine Esthétique
          </h1>
          <p className="text-xl text-gray-700 text-center mb-12">
            Traitements non invasifs pour rajeunir et embellir
          </p>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 mb-6">
              La médecine esthétique offre des solutions non chirurgicales 
              pour améliorer l'apparence et rajeunir le visage. Ces traitements 
              sont peu invasifs, avec des résultats visibles rapidement et 
              une récupération minimale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {traitements.map((traitement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {traitement.title}
                </h3>
                <p className="text-gray-600">{traitement.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Avantages de la médecine esthétique
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Résultats rapides et visibles</li>
              <li>Peu ou pas d'arrêt de travail</li>
              <li>Techniques peu invasives</li>
              <li>Effets réversibles si nécessaire</li>
            </ul>
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

