import Image from 'next/image';
import { DoctolibButton } from '@/components/DoctolibButton';
import type { Metadata } from 'next';
import { LipoaspirationCard } from '@/components/LipoaspirationCard';
import { AbdominoplastieCard } from '@/components/AbdominoplastieCard';
import { LiftingBrasCard } from '@/components/LiftingBrasCard';
import { LiftingCuissesCard } from '@/components/LiftingCuissesCard';
import { BodyLiftCard } from '@/components/BodyLiftCard';

export const metadata: Metadata = {
  title: "Chirurgie de la Silhouette - Dr. Omar Wahab | Lipoaspiration, Abdominoplastie",
  description: "Chirurgie de la silhouette à Bruges : lipoaspiration, abdominoplastie, lifting des bras et cuisses. Consultations avec le Dr. Omar Wahab.",
  keywords: "chirurgie silhouette, lipoaspiration, abdominoplastie, lifting bras, bruges",
};

export default function SilhouettePage() {
  const interventions: {
    title: string;
    description: string;
    image: string;
    position: 'left' | 'right';
    objectPosition?: string;
  }[] = [
    {
      title: 'Lipoaspiration',
      description: 'Élimination des amas graisseux localisés pour remodeler la silhouette.',
      image: '/Silouhette/pexels-karola-g-6642975_opti_800px.webp',
      position: 'left' as const,
    },
    {
      title: 'Abdominoplastie',
      description: 'Remodelage de l\'abdomen pour éliminer l\'excès de peau et de graisse.',
      image: '/Silouhette/pexels-agafonova-photo-3500249-5460753_opti_800px.webp',
      position: 'right' as const,
    },
    {
      title: 'Lifting des bras',
      description: 'Correction de la ptose cutanée des bras pour retrouver des bras fermes.',
      image: '/Silouhette/pexels-mikhail-nilov-8157145_opti_800px.webp',
      position: 'left' as const,
    },
    {
      title: 'Lifting des cuisses',
      description: 'Remodelage des cuisses pour améliorer la silhouette et la fermeté cutanée.',
      image: '/Silouhette/pexels-rocketmann-prod-9486624_opti_800px.webp',
      position: 'right' as const,
      objectPosition: 'center 100%',
    },
    {
      title: 'Body lift',
      description: 'Remodelage complet du corps après perte de poids importante.',
      image: '/Silouhette/pexels-diana-akhmedova-84744860-18980551_opti_1080px.webp',
      position: 'left' as const,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/Silouhette/pexels-pixabay-206369_opti_800px.webp"
            alt="Chirurgie de la Silhouette"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-900/80"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Chirurgie de la Silhouette
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
              Remodelage et affinement de la silhouette
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-neutral-600 mb-8 font-light leading-relaxed">
                La chirurgie de la silhouette regroupe différentes interventions 
                visant à remodeler et affiner le corps. Le Dr. Omar Wahab propose 
                des techniques modernes et adaptées à chaque morphologie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Interventions - Horizontal avec alternance */}
      <section className="py-16 md:py-24 bg-background-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {interventions.map((intervention, index) =>
              intervention.title === 'Lipoaspiration' ? (
                <LipoaspirationCard key={index} image={intervention.image} />
              ) : intervention.title === 'Abdominoplastie' ? (
                <AbdominoplastieCard key={index} image={intervention.image} />
              ) : intervention.title === 'Lifting des bras' ? (
                <LiftingBrasCard key={index} image={intervention.image} />
              ) : intervention.title === 'Lifting des cuisses' ? (
                <LiftingCuissesCard key={index} image={intervention.image} />
              ) : intervention.title === 'Body lift' ? (
                <BodyLiftCard key={index} image={intervention.image} />
              ) : (
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
                          style={
                            intervention.objectPosition ? { objectPosition: intervention.objectPosition } : undefined
                          }
                        />
                      </div>
                      <div>
                        <div className="w-12 h-0.5 bg-primary mb-4 rounded-full"></div>
                        <h3 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight">
                          {intervention.title}
                        </h3>
                        <p className="text-neutral-600 font-light leading-relaxed text-sm">
                          {intervention.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="order-2 md:order-1">
                        <div className="w-12 h-0.5 bg-primary mb-4 rounded-full"></div>
                        <h3 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight">
                          {intervention.title}
                        </h3>
                        <p className="text-neutral-600 font-light leading-relaxed text-sm">
                          {intervention.description}
                        </p>
                      </div>
                      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
                        <Image
                          src={intervention.image}
                          alt={intervention.title}
                          fill
                          className="object-cover"
                          style={
                            intervention.objectPosition ? { objectPosition: intervention.objectPosition } : undefined
                          }
                        />
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
                Techniques modernes
              </h2>
              <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm">
                Le Dr. Wahab utilise les techniques les plus récentes pour 
                garantir des résultats naturels et harmonieux, avec un minimum 
                de cicatrices et une récupération optimisée.
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
