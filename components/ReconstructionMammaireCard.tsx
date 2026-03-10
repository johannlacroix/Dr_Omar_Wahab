'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ReconstructionMammaireCardProps {
  image: string;
}

export function ReconstructionMammaireCard({ image }: ReconstructionMammaireCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={image}
            alt="Reconstruction mammaire"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="w-12 h-0.5 bg-primary mb-4 rounded-full" />
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl md:text-2xl font-light text-neutral-800 tracking-tight">
              Reconstruction mammaire
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
              aria-label="En savoir plus sur la reconstruction mammaire"
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
            Reconstruction du sein après mastectomie ou malformation congénitale pour restaurer volume, galbe et équilibre de la silhouette.
          </p>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={closeModal}>
          <div
            className="relative max-w-3xl w-full bg-white rounded-3xl shadow-xl shadow-neutral-900/15 p-6 md:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 transition-colors"
              onClick={closeModal}
              aria-label="Fermer la fenêtre d'information sur la reconstruction mammaire"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl md:text-3xl font-light text-neutral-800 mb-5 tracking-tight">
              Reconstruction mammaire
            </h3>

            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>
                La reconstruction mammaire a pour objectif de redonner un volume et une forme au sein après une
                mastectomie, une tumorectomie étendue ou en cas de malformation congénitale. Elle permet de restaurer
                l’équilibre de la silhouette et de contribuer au mieux-être psychologique de la patiente.
              </p>
              <p>
                Selon chaque situation, la reconstruction peut utiliser des prothèses, la propre graisse de la patiente
                (lipofilling) et/ou des lambeaux de tissus, éventuellement associés entre eux. La démarche est toujours
                personnalisée : le Dr Omar Wahab prend en compte le traitement oncologique réalisé, la qualité de la
                peau, la morphologie générale et les souhaits de la patiente.
              </p>
              <p>
                La reconstruction peut être réalisée dans le même temps que la mastectomie (reconstruction immédiate) ou
                à distance, lorsque les tissus sont stabilisés (reconstruction différée). Un travail de symétrisation du
                sein controlatéral peut être proposé pour obtenir un résultat le plus harmonieux possible.
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
                  La reconstruction mammaire après cancer du sein, ainsi que les gestes de symétrisation du sein
                  controlatéral, relèvent d’une prise en charge par la Sécurité sociale, sous réserve d’un accord dans le
                  cadre du parcours de soins.
                </p>
                <p>
                  En cas de malformation congénitale importante (comme des seins tubéreux ou une asymétrie majeure), une
                  prise en charge peut également être discutée au cas par cas après avis du chirurgien et, si besoin, de
                  l’Assurance maladie. Les interventions strictement esthétiques, sans contexte reconstructeur, ne sont
                  en revanche pas remboursées.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

