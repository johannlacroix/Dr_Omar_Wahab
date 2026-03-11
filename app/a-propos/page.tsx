import Image from 'next/image';
import { DoctolibButton } from '@/components/DoctolibButton';
import type { Metadata } from 'next';
import { ReferencesCard } from '@/components/ReferencesCard';

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
                  Diplômé en chirurgie plastique, reconstructrice et esthétique, le Dr Omar Wahab a été formé au CHRU de Lille,
                  puis a exercé comme praticien hospitalier et chef d’unité de chirurgie plastique à l’hôpital de Roubaix avant
                  de s’installer à Orthopole à Bruges en 2019. Il propose aujourd’hui une activité dédiée à la poitrine, au visage
                  et à la silhouette à Bruges et à Bordeaux.
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

      {/* Section Parcours & Références */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ReferencesCard />
          </div>
        </div>
      </section>

      {/* Section L'équipe */}
      <section className="py-16 md:py-24 bg-background-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl md:text-2xl font-light text-neutral-800 mb-6 tracking-tight">
              L&apos;équipe autour du Dr Wahab
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-6 md:p-7">
                <h3 className="text-lg md:text-xl font-light text-neutral-800 mb-2 tracking-tight">
                  Anne-Sophie, aide opératoire
                </h3>
                <p className="text-neutral-600 font-light text-sm leading-relaxed">
                  Collaboratrice expérimentée, elle assiste le Dr Wahab au bloc opératoire, veille aux mesures d’hygiène
                  optimales et contribue à la sécurité de chaque geste.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-6 md:p-7">
                <h3 className="text-lg md:text-xl font-light text-neutral-800 mb-2 tracking-tight">
                  Émilie, secrétaire médicale
                </h3>
                <p className="text-neutral-600 font-light text-sm leading-relaxed">
                  Véritable organisatrice du parcours de soins, elle vous accueille en consultation et facilite l’ensemble des
                  démarches administratives et pratiques.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-6 md:p-7">
                <h3 className="text-lg md:text-xl font-light text-neutral-800 mb-2 tracking-tight">
                  Dr Astrid Ballanger, associée
                </h3>
                <p className="text-neutral-600 font-light text-sm leading-relaxed">
                  Associée du Dr Wahab à Orthopole, elle intervient en complémentarité sur certains dossiers complexes afin
                  d’offrir une prise en charge concertée et bienveillante.
                </p>
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
                  src="/Cabinet/Couloir_cabinet.png"
                  alt="Couloir du cabinet"
                  fill
                  className="object-cover"
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
                  Mon approche
                </h3>
                <p className="text-neutral-600 font-light leading-relaxed text-sm">
                  Avant tout geste, le Dr Wahab accorde un temps important à l’écoute et à l’information afin
                  d’établir un climat de confiance mutuelle et de définir avec vous un projet réellement adapté à
                  votre situation. La consultation est un temps d’échange où la gêne exprimée est analysée dans sa
                  globalité, sur les plans physique et psychique.
                </p>
                <p className="text-neutral-600 font-light leading-relaxed text-sm mt-4">
                  Son approche est volontairement conservatrice et la moins invasive possible, avec pour objectif de
                  limiter les douleurs et l’inconfort postopératoire tout en recherchant des résultats naturels,
                  efficaces et sûrs.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
                <Image
                  src="/Cabinet/Emilie_Secrétaire (1).png"
                  alt="Accueil par Émilie, secrétaire médicale"
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
                  src="/Cabinet/Int_Cabinet.png"
                  alt="Intérieur du cabinet"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight">
                  Le cabinet et la clinique
                </h3>
                <p className="text-neutral-600 font-light leading-relaxed text-sm">
                  Les consultations ont lieu à Orthopole, à Bruges, au sein d’une structure médicale dédiée à la
                  chirurgie plastique, disposant d’un bloc de petite chirurgie pour les gestes sous anesthésie locale
                  et d’une équipe formée au suivi des cicatrices et au matériel postopératoire sur mesure.
                </p>
                <p className="text-neutral-600 font-light leading-relaxed text-sm mt-4">
                  Les interventions de chirurgie esthétique non conventionnées sont réalisées à la clinique Jean
                  Villar, établissement certifié par la Haute Autorité de Santé, doté d’un plateau technique complet
                  et d’un service d’anesthésie spécialisé.
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
