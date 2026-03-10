'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ReductionMammaireCardProps {
  image: string;
}

export function ReductionMammaireCard({ image }: ReductionMammaireCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="w-12 h-0.5 bg-primary mb-4 rounded-full"></div>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl md:text-2xl font-light text-neutral-800 tracking-tight">
              Réduction mammaire
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
              aria-label="En savoir plus sur la réduction mammaire"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p className="text-neutral-600 font-light leading-relaxed text-sm">
            Diminution du volume mammaire pour soulager les douleurs et retrouver une poitrine plus légère,
            harmonieuse et adaptée à la morphologie.
          </p>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
          <Image
            src={image}
            alt="Réduction mammaire"
            fill
            className="object-cover"
          />
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
              aria-label="Fermer la fenêtre d'information sur la réduction mammaire"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl md:text-3xl font-light text-neutral-800 mb-5 tracking-tight">
              Réduction mammaire
            </h3>

            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>
                La réduction mammaire vise à diminuer un volume de poitrine jugé trop important, à l&apos;origine
                de douleurs dorsales ou cervicales, de gêne à l&apos;habilitation ou à la pratique sportive, et
                parfois d&apos;inconfort dans le regard de l&apos;autre. Elle permet d&apos;obtenir des seins plus
                légers, mieux positionnés et en harmonie avec la silhouette.
              </p>
              <p>
                Au cours de la consultation, le Dr Omar Wahab évalue l&apos;hypertrophie mammaire, la qualité de la
                peau et la morphologie globale pour proposer une technique adaptée à chaque patiente. Le geste
                chirurgical permet à la fois de réduire le volume, de remonter la poitrine et de la remodeler de
                façon naturelle.
              </p>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Suites opératoires
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème (gonflement) : environ 2 mois</li>
                  <li>Ecchymoses (bleus) : 7 à 15 jours</li>
                  <li>Douleurs modérées, gêne à l&apos;élévation des bras : 7 à 15 jours</li>
                  <li>Retrait de quelques fils vers le 15ᵉ jour</li>
                  <li>Port de la brassière de maintien : 4 semaines</li>
                  <li>Convalescence : 15 jours à 3 semaines</li>
                  <li>Pas de conduite de véhicule : environ 7 jours</li>
                  <li>Reprise progressive du sport : après 6 semaines</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>
                  Dans les suites immédiates, les seins peuvent paraître un peu trop bombés sur le dessus et plus
                  plats en bas : cette forme s&apos;adoucit progressivement. La silhouette se stabilise en général
                  entre 3 mois et 1 an, le temps que les tissus se relâchent légèrement et que les cicatrices
                  s&apos;aplanissent.
                </p>
                <p>
                  En l&apos;absence de grossesse ultérieure ou de variations de poids importantes, le résultat est
                  habituellement durable. Les cicatrices, initialement rosées, sont jugées définitives entre 1 et
                  2 ans, période pendant laquelle une protection solaire et des soins adaptés sont recommandés.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Prise en charge par la Sécurité sociale
                </h4>
                <p>
                  Une prise en charge est possible lorsque la demande est principalement fonctionnelle et que la
                  réduction de volume dépasse 300 g par sein. En dehors de ce cadre, la réduction mammaire est
                  considérée comme une intervention à visée esthétique et n&apos;ouvre pas droit à un remboursement
                  par l&apos;Assurance maladie.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

