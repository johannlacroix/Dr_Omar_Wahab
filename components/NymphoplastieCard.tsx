'use client';

import Image from 'next/image';
import { useState } from 'react';

interface NymphoplastieCardProps {
  image: string;
}

export function NymphoplastieCard({ image }: NymphoplastieCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={image}
            alt="Nymphoplastie"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="w-12 h-0.5 bg-primary mb-4 rounded-full" />
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl md:text-2xl font-light text-neutral-800 tracking-tight">
              Nymphoplastie
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
              aria-label="En savoir plus sur la nymphoplastie"
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
            La nymphoplastie vise à réduire les petites lèvres en cas de gêne fonctionnelle ou esthétique, pour retrouver une anatomie intime harmonieuse.
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
              aria-label="Fermer la fenêtre d'information sur la nymphoplastie"
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
              Nymphoplastie
            </h3>

            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>
                La nymphoplastie est une chirurgie intime visant à réduire les petites lèvres lorsque leur volume ou
                leur forme provoque une gêne fonctionnelle, esthétique ou psychologique. Elle améliore le confort au
                quotidien, lors des activités sportives ou du port de certains vêtements, et permet de retrouver une
                anatomie intime harmonieuse.
              </p>
              <p>
                Réalisée avec des gestes précis et conservateurs, l’intervention recherche un résultat naturel et
                discret. La cicatrisation est en général rapide, avec un suivi adapté et des consignes de soins
                locales.
              </p>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Suites opératoires
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème (gonflement) : 2 à 3 semaines</li>
                  <li>Douleurs variables, soulagées par des antalgiques adaptés</li>
                  <li>Port d’habits amples : environ 10 jours</li>
                  <li>Reprise du travail : en général possible en quelques jours</li>
                  <li>Pas de rapports sexuels : 3 à 5 semaines</li>
                  <li>Pas de sport : 3 semaines</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>
                  Le résultat peut être apprécié à partir d’environ 1 mois, le temps que l’œdème se résorbe et que les
                  tissus se stabilisent. Les cicatrices s’estompent progressivement au fil des mois. En l’absence de
                  grossesse ultérieure ou de variation pondérale majeure, le résultat est généralement stable dans le
                  temps.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Prise en charge par la Sécurité sociale
                </h4>
                <p>
                  Selon les cas, notamment lorsqu’il existe une gêne fonctionnelle importante, la nymphoplastie peut
                  relever d’une prise en charge par la Sécurité sociale. Ce point est évalué et expliqué en
                  consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

