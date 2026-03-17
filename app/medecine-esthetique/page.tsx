import Image from 'next/image';
import { DoctolibButton } from '@/components/DoctolibButton';
import type { Metadata } from 'next';
import { BotoxCard } from '@/components/BotoxCard';
import { HyaluroniqueCard } from '@/components/HyaluroniqueCard';
import { AntiAgeCard } from '@/components/AntiAgeCard';
import { MesotherapieCard } from '@/components/MesotherapieCard';

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
      image: '/Visage/pexels-shiny-diamond-3762408_opti_800px.webp',
      position: 'left' as const,
    },
    {
      title: 'Acide hyaluronique',
      description: 'Comblement des rides, augmentation des lèvres, modelage du visage.',
      image: '/Esthétique/pexels-cottonbro-7581581_opti_800px.webp',
      position: 'right' as const,
    },
    {
      title: 'Traitements anti-âge',
      description: 'Soins et traitements pour préserver la jeunesse de la peau.',
      image: '/Esthétique/pexels-cottonbro-7582560_opti_800px.webp',
      position: 'left' as const,
    },
    {
      title: 'Mésothérapie',
      description: 'Injection de vitamines et principes actifs pour revitaliser la peau.',
      image: '/Esthétique/pexels-cottonbro-7582568_opti_800px.webp',
      position: 'right' as const,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/Visage/pexels-shiny-diamond-3762408_opti_800px.webp"
            alt="Médecine Esthétique"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-900/80"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Médecine Esthétique
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
              Traitements non invasifs pour rajeunir et embellir
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-neutral-600 mb-8 font-light leading-relaxed">
                La médecine esthétique offre des solutions non chirurgicales 
                pour améliorer l'apparence et rajeunir le visage. Ces traitements 
                sont peu invasifs, avec des résultats visibles rapidement et 
                une récupération minimale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Traitements - Horizontal avec alternance */}
      <section className="py-16 md:py-24 bg-background-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {traitements.map((traitement, index) =>
              traitement.title === 'Injection de Botox' ? (
                <BotoxCard key={index} image={traitement.image} />
              ) : traitement.title === 'Acide hyaluronique' ? (
                <HyaluroniqueCard key={index} image={traitement.image} />
              ) : traitement.title === 'Traitements anti-âge' ? (
                <AntiAgeCard key={index} image={traitement.image} />
              ) : traitement.title === 'Mésothérapie' ? (
                <MesotherapieCard key={index} image={traitement.image} />
              ) : (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                    traitement.position === 'right' ? 'bg-white' : ''
                  }`}
                >
                  {traitement.position === 'left' ? (
                    <>
                      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                        <Image src={traitement.image} alt={traitement.title} fill className="object-cover" />
                      </div>
                      <div>
                        <div className="w-12 h-0.5 bg-primary mb-4 rounded-full"></div>
                        <h3 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight">
                          {traitement.title}
                        </h3>
                        <p className="text-neutral-600 font-light leading-relaxed text-sm">
                          {traitement.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="order-2 md:order-1">
                        <div className="w-12 h-0.5 bg-primary mb-4 rounded-full"></div>
                        <h3 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight">
                          {traitement.title}
                        </h3>
                        <p className="text-neutral-600 font-light leading-relaxed text-sm">
                          {traitement.description}
                        </p>
                      </div>
                      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
                        <Image src={traitement.image} alt={traitement.title} fill className="object-cover" />
                      </div>
                    </>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background-soft rounded-3xl p-10 md:p-12 border border-neutral-200">
              <h2 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight">
                Avantages de la médecine esthétique
              </h2>
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                  <span className="text-neutral-600 font-light text-sm">Résultats rapides et visibles</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                  <span className="text-neutral-600 font-light text-sm">Peu ou pas d'arrêt de travail</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                  <span className="text-neutral-600 font-light text-sm">Techniques peu invasives</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                  <span className="text-neutral-600 font-light text-sm">Effets réversibles si nécessaire</span>
                </li>
              </ul>
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <DoctolibButton
                label="Je prends rendez-vous à Bruges"
                href="https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-61570"
                className="w-full sm:w-64"
              />
              <DoctolibButton
                label="Je prends rendez-vous à Bordeaux"
                href="https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-765036"
                className="w-full sm:w-64"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
