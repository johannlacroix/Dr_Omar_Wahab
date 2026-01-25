import Image from 'next/image';
import { DoctolibButton } from '@/components/DoctolibButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "À propos - Dr. Omar Wahab | Chirurgien Esthétique",
  description: "Découvrez le parcours et l'expertise du Dr. Omar Wahab, chirurgien esthétique à Bruges.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Horizontal */}
      <section className="py-16 md:py-24 bg-background-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h1 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight" style={{ fontWeight: 300 }}>
                  Dr. Omar Wahab
                </h1>
                <p className="text-neutral-600 text-sm font-light leading-relaxed" style={{ fontWeight: 300 }}>
                  Diplômé en chirurgie plastique et esthétique à Lille en 2011, le Dr. Omar Wahab a exercé comme chef de service au Centre Hospitalier de Roubaix de 2012 à 2018, puis comme chef de clinique au CHU de Lille. Depuis 2019, il exerce en cabinet à Bruges et est membre de la Société Française des Chirurgiens Esthétiques Plasticiens (SOFCEP).
                </p>
              </div>
              <div className="relative w-full flex justify-center">
                <div className="relative w-full max-w-xs aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/Cabinet/Dr_Omar_Wahab_portrait.webp"
                    alt="Dr. Omar Wahab"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section Formation et Expertise - Photo à gauche */}
      <section className="py-16 md:py-24 bg-background-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Silouhette/pexels-toni-8294697_opti_800px.webp"
                  alt="Dr. Omar Wahab"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 10%' }}
                />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight">
                  Formation et Expertise
                </h2>
                <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm">
                  Diplômé et formé dans les meilleures institutions, le Dr. Wahab 
                  possède une expertise approfondie dans plusieurs domaines de la 
                  chirurgie esthétique :
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                    <span className="text-neutral-600 font-light text-sm">Chirurgie mammaire (augmentation, réduction, lifting)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                    <span className="text-neutral-600 font-light text-sm">Chirurgie de la silhouette (lipoaspiration, abdominoplastie)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                    <span className="text-neutral-600 font-light text-sm">Chirurgie du visage (rhinoplastie, blépharoplastie, lifting)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                    <span className="text-neutral-600 font-light text-sm">Médecine esthétique (injections, traitements non invasifs)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Approche Personnalisée - Photo à droite */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight">
                  Approche Personnalisée
                </h3>
                <p className="text-neutral-600 font-light leading-relaxed text-sm">
                  Chaque patient est unique. Le Dr. Wahab privilégie une approche 
                  personnalisée, prenant le temps d'écouter vos attentes et de vous 
                  proposer les solutions les plus adaptées à votre situation.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
                <Image
                  src="/Cabinet/pexels-karola-g-5207029_opti_800px.webp"
                  alt="Approche personnalisée"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Engagement Qualité - Photo à gauche */}
      <section className="py-16 md:py-24 bg-background-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Cabinet/pexels-mart-production-7088483_opti_800px.webp"
                  alt="Engagement qualité"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight">
                  Engagement Qualité
                </h3>
                <p className="text-neutral-600 font-light leading-relaxed text-sm">
                  Le Dr. Wahab s'engage à utiliser les techniques les plus modernes 
                  et les plus sûres, dans le respect des normes de sécurité les plus 
                  strictes. Votre bien-être et votre satisfaction sont au cœur de 
                  sa pratique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Vertical */}
      <section className="py-16 md:py-24 bg-background-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-10 md:p-12 text-center shadow-xl border border-neutral-200">
              <h3 className="text-2xl md:text-3xl font-light text-neutral-800 mb-6 tracking-tight">
                Consultation sur rendez-vous
              </h3>
              <p className="text-neutral-600 mb-8 font-light leading-relaxed text-lg max-w-2xl mx-auto">
                Prenez rendez-vous pour une consultation personnalisée et discuter 
                de vos projets esthétiques.
              </p>
              <div className="flex justify-center">
                <DoctolibButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
