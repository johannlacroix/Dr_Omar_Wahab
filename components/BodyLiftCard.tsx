'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BodyLiftCardProps {
  image: string;
}

export function BodyLiftCard({ image }: BodyLiftCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={image}
            alt="Body lift"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="w-12 h-0.5 bg-primary mb-4 rounded-full" />
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl md:text-2xl font-light text-neutral-800 tracking-tight">
              Body lift
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
              aria-label="En savoir plus sur le body lift"
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
            Le bodylift corrige le relâchement cutané du tronc après amaigrissement massif pour redessiner la silhouette.
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
              aria-label="Fermer la fenêtre d'information sur le body lift"
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
              Body lift
            </h3>

            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>
                Le bodylift est une chirurgie globale du relâchement cutané du tronc. Il est principalement indiqué
                après une chirurgie de l’obésité ou un amaigrissement massif, lorsque la peau excédentaire persiste
                malgré la perte de poids.
              </p>
              <p>
                L’intervention traite l’abdomen, les hanches, les fesses et parfois les cuisses en retirant l’excès de
                peau sur tout le pourtour du corps. La silhouette est alors redessinée de façon spectaculaire, avec un
                effet liftant circulaire.
              </p>
              <p>
                Les résultats sont visibles et durables, à condition que le poids reste stable et que les consignes
                post-opératoires soient bien respectées. Le bodylift améliore la qualité de vie et l’image corporelle.
              </p>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Suites opératoires
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème (gonflement) : 2 à 3 mois</li>
                  <li>Douleurs variables, prises en charge par des antalgiques adaptés</li>
                  <li>Port de bas de contention : 7 jours</li>
                  <li>Port d’une gaine de contention : 4 semaines</li>
                  <li>Reprise du travail : environ 21 jours</li>
                  <li>Pas de conduite de véhicule : environ 10 jours</li>
                  <li>Pas de sport : 6 semaines (jusqu’à 8 semaines en cas de geste associé sur la paroi abdominale)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>
                  L’amélioration est visible dès les premiers jours, mais il faut attendre 6 mois à 1 an pour juger le
                  résultat définitif, le temps que l’œdème se résorbe et que les tissus se repositionnent.
                </p>
                <p>
                  Les cicatrices, étendues mais positionnées pour être le plus discrètes possible, sont jugées
                  définitives entre 1 et 2 ans. Le résultat est stable et durable en l’absence de nouvelles variations
                  de poids importantes ou de grossesse ultérieure.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Prise en charge par la Sécurité sociale
                </h4>
                <p>
                  Un bodylift peut relever d’une prise en charge lorsqu’il existe une dégradation majeure de la paroi
                  abdominale antérieure avec tablier abdominal recouvrant partiellement le pubis et des séquelles
                  importantes d’amaigrissement. La réalisation d’une entente préalable est obligatoire.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

