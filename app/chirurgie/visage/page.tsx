import Image from 'next/image';
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
      image: '/Visage/pexels-shiny-diamond-3373732_opti_800px.webp',
      position: 'left' as const,
    },
    {
      title: 'Blépharoplastie',
      description: 'Correction des paupières pour rajeunir le regard.',
      image: '/Visage/pexels-cottonbro-7585314_opti_800px.webp',
      position: 'right' as const,
    },
    {
      title: 'Lifting facial',
      description: 'Remontée des tissus du visage pour atténuer les signes de l\'âge.',
      image: '/Esthétique/pexels-hywel-jones-1421886-2744193_opti_800px.webp',
      position: 'left' as const,
    },
    {
      title: 'Lipofilling du visage',
      description: 'Injection de graisse autologue pour redonner du volume au visage.',
      image: '/Esthétique/pexels-itslauravillela-35261735_opti_800px.webp',
      position: 'right' as const,
    },
    {
      title: 'Otoplastie',
      description: 'Correction des oreilles décollées.',
      image: '/Silouhette/pexels-jess-vide-9269433_opti_800px.webp',
      position: 'left' as const,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/Visage/pexels-shiny-diamond-3373732_opti_800px.webp"
            alt="Chirurgie du Visage"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-900/80"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Chirurgie du Visage
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
              Interventions esthétiques du visage pour rajeunir et harmoniser
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-neutral-600 mb-8 font-light leading-relaxed">
                La chirurgie esthétique du visage permet de corriger, améliorer 
                ou rajeunir les traits du visage. Le Dr. Omar Wahab maîtrise 
                différentes techniques pour des résultats naturels et harmonieux.
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
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background-soft rounded-3xl p-10 md:p-12 border border-neutral-200">
              <h2 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight">
                Résultats naturels
              </h2>
              <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm">
                Le Dr. Wahab privilégie des techniques préservatrices pour 
                obtenir des résultats naturels qui respectent l'identité 
                de chaque patient.
              </p>
            </div>
          </div>
        </div>
      </section>

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
