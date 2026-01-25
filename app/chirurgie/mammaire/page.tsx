import Image from 'next/image';
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
      image: '/Mammaire/pexels-jotavaz-27659535_opti_800px.webp',
      position: 'left' as const,
    },
    {
      title: 'Réduction mammaire',
      description: 'Réduction du volume mammaire pour améliorer le confort et l\'esthétique.',
      image: '/Mammaire/pexels-koprivakart-3925819_opti_800px.webp',
      position: 'right' as const,
    },
    {
      title: 'Lifting mammaire',
      description: 'Remontée des seins pour corriger la ptose mammaire et redonner de la fermeté.',
      image: '/Mammaire/pexels-cottonbro-5701008_opti_800px.webp',
      position: 'left' as const,
    },
    {
      title: 'Correction de gynécomastie',
      description: 'Traitement de l\'hypertrophie mammaire chez l\'homme.',
      image: '/Silouhette/pexels-cottonbro-5103853_opti_800px.webp',
      position: 'right' as const,
    },
    {
      title: 'Reconstruction mammaire',
      description: 'Reconstruction après mastectomie ou malformation congénitale.',
      image: '/Mammaire/pexels-vtnt2-21045058_opti_800px.webp',
      position: 'left' as const,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Vertical */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/Mammaire/pexels-79380313-9112046_opti_800px.webp"
            alt="Chirurgie Mammaire"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 30%' }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-900/80"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Chirurgie Mammaire
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
              Interventions esthétiques et reconstructrices de la poitrine
            </p>
          </div>
        </div>
      </section>

      {/* Section Introduction - Vertical */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-neutral-600 mb-8 font-light leading-relaxed">
                La chirurgie mammaire regroupe l'ensemble des interventions 
                visant à modifier la forme, le volume ou la position des seins. 
                Le Dr. Omar Wahab propose différentes techniques adaptées à 
                chaque situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Interventions - Horizontal avec alternance */}
      <section className="py-16 md:py-24 bg-background-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {interventions.map((intervention, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  intervention.position === 'right' ? 'bg-white' : ''
                }`}
              >
                {intervention.position === 'left' ? (
                  <>
                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={intervention.image}
                        alt={intervention.title}
                        fill
                        className="object-cover"
                        style={intervention.title === 'Augmentation mammaire' ? { objectPosition: 'center 50%' } : undefined}
                      />
                    </div>
                    <div>
                      <div className="w-12 h-0.5 bg-primary mb-4 rounded-full"></div>
                      <h3 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight">
                        {intervention.title}
                      </h3>
                      <p className="text-neutral-600 font-light leading-relaxed text-sm">{intervention.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 md:order-1">
                      <div className="w-12 h-0.5 bg-primary mb-4 rounded-full"></div>
                      <h3 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight">
                        {intervention.title}
                      </h3>
                      <p className="text-neutral-600 font-light leading-relaxed text-sm">{intervention.description}</p>
                    </div>
                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
                      <Image
                        src={intervention.image}
                        alt={intervention.title}
                        fill
                        className="object-cover"
                        style={intervention.title === 'Augmentation mammaire' ? { objectPosition: 'center 50%' } : undefined}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Consultation - Vertical */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background-soft rounded-3xl p-10 md:p-12 border border-neutral-200">
              <h2 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight">
                Consultation préalable
              </h2>
              <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm">
                Chaque intervention nécessite une consultation préalable pour 
                évaluer vos attentes, discuter des différentes options et 
                déterminer la technique la plus adaptée à votre situation.
              </p>
              <p className="text-neutral-600 font-light leading-relaxed text-sm">
                Le Dr. Wahab prendra le temps de répondre à toutes vos questions 
                et de vous expliquer le déroulement de l'intervention, les suites 
                opératoires et les résultats attendus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Vertical */}
      <section className="py-16 md:py-24 bg-background-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight">
              Prendre rendez-vous
            </h2>
            <p className="text-neutral-600 mb-8 font-light text-sm">
              Réservez votre consultation pour discuter de votre projet
            </p>
            <div className="flex justify-center">
              <DoctolibButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
