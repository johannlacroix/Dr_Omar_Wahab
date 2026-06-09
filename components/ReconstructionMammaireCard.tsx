'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AccessibleModal } from '@/components/AccessibleModal';

interface ReconstructionMammaireCardProps {
  image: string;
  imagePosition?: 'left' | 'right';
}

export function ReconstructionMammaireCard({ image, imagePosition = 'left' }: ReconstructionMammaireCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const imageOrderClass = imagePosition === 'right' ? 'md:order-2' : '';
  const textOrderClass = imagePosition === 'right' ? 'md:order-1' : '';

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className={`relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl ${imageOrderClass}`}>
          <Image
            src={image}
            alt="Reconstruction et malformations mammaires"
            fill
            className="object-cover"
          />
        </div>
        <div className={textOrderClass}>
          <div className="w-12 h-0.5 bg-primary mb-4 rounded-full" />
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl md:text-2xl font-light text-neutral-800 tracking-tight">
              Reconstruction & malformations mammaires
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary-text hover:text-primary-dark transition-colors"
              aria-label="En savoir plus sur la reconstruction et les malformations mammaires"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p className="text-neutral-600 font-light leading-relaxed text-sm">
            Prise en charge des malformations mammaires congénitales et des asymétries pour restaurer volume,
            galbe et équilibre de la silhouette.
          </p>
        </div>
      </div>

      <AccessibleModal
        isOpen={isOpen}
        onClose={closeModal}
        title="Reconstruction & malformations mammaires"
        closeLabel="Fermer la fenêtre d'information sur la reconstruction et les malformations mammaires"
      >
        <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>
                Le Dr Omar Wahab prend en charge la reconstruction mammaire principalement dans le cadre des
                malformations mammaires congénitales (seins tubéreux, hypoplasie sévère, agénésie mammaire) et des
                asymétries mammaires importantes. L’objectif est de restaurer le volume, la forme et l’équilibre de
                la poitrine, et de contribuer au mieux-être de la patiente.
              </p>
              <p>
                La démarche est toujours personnalisée : qualité de la peau, morphologie générale, antécédents et
                souhaits de la patiente sont pris en compte pour proposer la technique la plus adaptée. Selon les
                situations, la prise en charge peut associer des prothèses, du lipofilling (graisse autologue) et/ou
                des gestes de symétrisation du sein controlatéral, parfois en plusieurs étapes, afin d’obtenir un
                résultat naturel et harmonieux.
              </p>
              <p>
                NB : la reconstruction mammaire immédiate dans le cadre d’un traitement oncologique (au cours de la
                mastectomie) n’est pas réalisée dans le cabinet. Les reconstructions à distance d’une chirurgie du
                cancer du sein peuvent en revanche être discutées au cas par cas.
              </p>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Suites opératoires
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème (gonflement) : 2 à 3 mois selon la technique utilisée</li>
                  <li>Ecchymoses (bleus) : 10 à 21 jours</li>
                  <li>Douleurs modérées, contrôlées par des antalgiques simples</li>
                  <li>Gêne à l’élévation des bras : 2 à 3 semaines</li>
                  <li>Port d’un soutien-gorge de contention : 4 à 6 semaines</li>
                  <li>Convalescence moyenne : 2 à 4 semaines</li>
                  <li>Reprise progressive des activités sportives : à partir de 6 semaines, selon l’avis du chirurgien</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>
                  Le sein reconstruit évolue progressivement dans les mois qui suivent l’intervention : le volume se
                  stabilise, l’œdème diminue et les cicatrices s’assouplissent. L’aspect final est généralement apprécié
                  entre 6 et 12 mois, délai nécessaire pour que les tissus se mettent en place et que la symétrie avec le
                  sein controlatéral soit mieux jugée.
                </p>
                <p>
                  Des retouches ou des séances complémentaires de lipofilling peuvent parfois être proposées pour
                  affiner le galbe, améliorer la souplesse ou corriger de petites asymétries. Les cicatrices deviennent
                  en règle générale plus discrètes au fil du temps, avec un aspect jugé définitif entre 1 et 2 ans.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Prise en charge par la Sécurité sociale
                </h4>
                <p>
                  Les malformations mammaires congénitales (seins tubéreux, hypoplasie sévère, agénésie) et les
                  asymétries mammaires majeures peuvent relever d’une prise en charge par la Sécurité sociale, après
                  évaluation au cas par cas.
                </p>
                <p>
                  Les gestes de reconstruction et de symétrisation à distance d’une chirurgie du cancer du sein peuvent
                  également être pris en charge, dans le cadre du parcours de soins. Les interventions strictement
                  esthétiques, sans contexte reconstructeur, ne sont en revanche pas remboursées.
                </p>
              </div>
            </div>
      </AccessibleModal>
    </>
  );
}

