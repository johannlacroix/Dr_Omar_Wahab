'use client';

import Image from 'next/image';
import { useState } from 'react';

interface LiftingMammaireCardProps {
  image: string;
}

export function LiftingMammaireCard({ image }: LiftingMammaireCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={image}
            alt="Lifting mammaire"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="w-12 h-0.5 bg-primary mb-4 rounded-full"></div>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl md:text-2xl font-light text-neutral-800 tracking-tight">
              Lifting mammaire
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
              aria-label="En savoir plus sur le lifting mammaire"
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
            Remontée de la poitrine pour corriger la ptôse mammaire et redonner un galbe harmonieux aux seins.
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
              aria-label="Fermer la fenêtre d'information sur le lifting mammaire"
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
              Lifting mammaire
            </h3>

            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>
                La ptôse mammaire correspond à un affaissement des seins lié à l’âge, aux grossesses ou aux variations
                de poids. Le lifting mammaire permet de remonter la poitrine et de lui redonner une forme harmonieuse
                en corrigeant l’excès de peau et en repositionnant l’aréole.
              </p>
              <p>
                Cette intervention peut être réalisée seule ou associée à une augmentation mammaire ou à une réduction
                des seins pour ajuster simultanément le volume et la forme. Les résultats recherchés sont naturels et
                durables, avec un galbe de la poitrine visiblement amélioré.
              </p>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Suites opératoires
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème (gonflement) : environ 2 mois</li>
                  <li>Ecchymoses (bleus) : 7 à 15 jours</li>
                  <li>Peu de douleur, gêne à l’élévation des bras : 7 à 15 jours</li>
                  <li>Retrait de quelques fils autour du 10ᵉ jour</li>
                  <li>Port de la brassière : 4 semaines</li>
                  <li>Convalescence : 1 à 2 semaines</li>
                  <li>Pas de conduite de véhicule : environ 7 jours</li>
                  <li>Pas de sport : 6 semaines</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>
                  Dans les suites immédiates, les seins apparaissent souvent plus bombés sur le dessus et un peu plus
                  plats en bas ; cette forme s’adoucit progressivement avec le temps. La forme de la poitrine devient
                  plus stable à partir de 3 mois et est considérée comme définitive entre 6 mois et 1 an.
                </p>
                <p>
                  En l’absence de grossesse ultérieure ou de variations pondérales importantes, le résultat du lifting
                  mammaire est habituellement durable. Les cicatrices, d’abord rosées, sont jugées définitives entre 1
                  et 2 ans.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Prise en charge par la Sécurité sociale
                </h4>
                <p>
                  Le lifting mammaire isolé ne relève pas d’une prise en charge par la Sécurité sociale. Une exception
                  peut être envisagée uniquement lorsqu’il existe une hypertrophie mammaire importante associée,
                  répondant aux critères de réduction mammaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

