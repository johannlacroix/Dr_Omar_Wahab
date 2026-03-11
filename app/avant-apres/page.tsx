import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Avant / Après - Dr. Omar Wahab | Résultats',
  description:
    'Galerie avant / après du Dr Omar Wahab, présentant des cas cliniques anonymisés avec consentement, en chirurgie esthétique et reconstructrice.',
};

const placeholderCases = [
  {
    category: 'Chirurgie mammaire',
    description:
      'Exemples de résultats après augmentation, réduction ou lifting mammaire. Les photos seront présentées de manière anonymisée avec consentement.',
  },
  {
    category: 'Chirurgie de la silhouette',
    description:
      'Avant / après de lipoaspiration, abdominoplastie ou lifting de la silhouette, illustrant l’amélioration des contours corporels.',
  },
  {
    category: 'Chirurgie du visage',
    description:
      'Résultats de rhinoplastie, blépharoplastie ou lifting facial, montrant un rajeunissement naturel du visage.',
  },
];

export default function AvantApresPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-background-soft py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light text-neutral-800 mb-6 tracking-tight">
              Avant / Après
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-xl md:text-2xl text-neutral-600 font-light tracking-wide">
              Exemples de résultats en chirurgie esthétique et reconstructrice
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="bg-background-soft rounded-3xl p-10 md:p-12 border border-dashed border-neutral-300 text-center mb-4">
              <p className="text-neutral-600 text-lg font-light leading-relaxed mb-4">
                La galerie avant / après présentera des cas cliniques réels, anonymisés et publiés avec le consentement
                des patient·e·s. Elle permettra de visualiser concrètement les résultats possibles des différentes
                interventions.
              </p>
              <p className="text-neutral-500 text-sm font-light leading-relaxed">
                Les photos seront ajoutées progressivement, dans le respect des règles déontologiques et de la
                confidentialité.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {placeholderCases.map((item) => (
                <div
                  key={item.category}
                  className="bg-white rounded-3xl shadow-xl border border-neutral-200 overflow-hidden flex flex-col"
                >
                  <div className="relative h-40 bg-neutral-100">
                    <Image
                      src="/Esthétique/pexels-cottonbro-7581581_opti_800px.webp"
                      alt={item.category}
                      fill
                      className="object-cover opacity-60"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="w-10 h-0.5 bg-primary mb-4 rounded-full" />
                    <h2 className="text-xl md:text-2xl font-light text-neutral-800 mb-3 tracking-tight">
                      {item.category}
                    </h2>
                    <p className="text-neutral-600 font-light text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

