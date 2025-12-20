import { DoctolibButton } from '@/components/DoctolibButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "À propos - Dr. Omar Wahab | Chirurgien Esthétique",
  description: "Découvrez le parcours et l'expertise du Dr. Omar Wahab, chirurgien esthétique à Bruges.",
};

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
            À propos du Dr. Omar Wahab
          </h1>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Le Dr. Omar Wahab est un chirurgien esthétique expérimenté, 
              spécialisé dans les interventions de chirurgie plastique, 
              reconstructrice et esthétique.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Formation et Expertise
            </h2>
            <p className="text-gray-700 mb-4">
              Diplômé et formé dans les meilleures institutions, le Dr. Wahab 
              possède une expertise approfondie dans plusieurs domaines de la 
              chirurgie esthétique :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Chirurgie mammaire (augmentation, réduction, lifting)</li>
              <li>Chirurgie de la silhouette (lipoaspiration, abdominoplastie)</li>
              <li>Chirurgie du visage (rhinoplastie, blépharoplastie, lifting)</li>
              <li>Médecine esthétique (injections, traitements non invasifs)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Approche Personnalisée
            </h2>
            <p className="text-gray-700 mb-4">
              Chaque patient est unique. Le Dr. Wahab privilégie une approche 
              personnalisée, prenant le temps d'écouter vos attentes et de vous 
              proposer les solutions les plus adaptées à votre situation.
            </p>
            <p className="text-gray-700 mb-4">
              Lors de la consultation, vous bénéficierez d'un accompagnement 
              complet, depuis l'analyse de vos besoins jusqu'au suivi post-opératoire, 
              pour garantir les meilleurs résultats.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Engagement Qualité
            </h2>
            <p className="text-gray-700 mb-4">
              Le Dr. Wahab s'engage à utiliser les techniques les plus modernes 
              et les plus sûres, dans le respect des normes de sécurité les plus 
              strictes. Votre bien-être et votre satisfaction sont au cœur de 
              sa pratique.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Consultation sur rendez-vous
            </h3>
            <p className="text-gray-700 mb-6">
              Prenez rendez-vous pour une consultation personnalisée et discuter 
              de vos projets esthétiques.
            </p>
            <DoctolibButton />
          </div>
        </div>
      </div>
    </div>
  );
}

