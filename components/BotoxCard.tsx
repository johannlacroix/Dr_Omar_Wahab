'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BotoxCardProps {
  image: string;
}

export function BotoxCard({ image }: BotoxCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src={image} alt="Injection de Botox" fill className="object-cover" />
        </div>
        <div>
          <div className="w-12 h-0.5 bg-primary mb-4 rounded-full" />
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl md:text-2xl font-light text-neutral-800 tracking-tight">
              Injection de Botox
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
              aria-label="En savoir plus sur les injections de Botox"
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
            Les injections de Botox traitent les rides d’expression du visage (front, ride du lion, pattes d’oie) pour un résultat naturel et discret.
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
              aria-label="Fermer la fenêtre d'information sur le Botox"
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
              Injections de Botox
            </h3>

            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>
                Les injections de Botox traitent les rides d’expression du visage. Elles ciblent notamment le front, la
                ride du lion et les pattes d’oie. Le Dr Wahab, chirurgien esthétique à Bruges, réalise des injections
                précises afin d’obtenir un visage reposé sans figer les expressions. Les résultats apparaissent en
                quelques jours et l’effet dure plusieurs mois, pour un rajeunissement naturel et discret.
              </p>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Objectifs et déroulement
                </h4>
                <p>
                  L’objectif principal est de diminuer les rides induites par une contraction musculaire répétée. Une
                  consultation est nécessaire en amont pour évaluer les zones à traiter et vérifier l’absence de
                  contre-indications.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Une consultation préalable est nécessaire (à prévoir lors de la prise de rendez-vous).</li>
                  <li>Le geste est réalisé au cabinet.</li>
                  <li>Les injections sont généralement bien tolérées, avec peu ou pas de douleur.</li>
                  <li>L’effet optimal est observé autour du 10ᵉ jour.</li>
                  <li>La durée d’action est de l’ordre de 4 à 6 mois.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Informations complémentaires
                </h4>
                <p>
                  Tous ces éléments sont donnés à titre indicatif en l’absence de toute complication. Un entretien
                  personnalisé avec le Dr Wahab permet d’adapter le traitement à chaque patient, d’expliquer les
                  bénéfices attendus et de détailler les éventuels effets secondaires.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Prise en charge par la Sécurité sociale
                </h4>
                <p>
                  Les injections de Botox réalisées à visée esthétique ne relèvent habituellement pas d’une prise en
                  charge par la Sécurité sociale.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

