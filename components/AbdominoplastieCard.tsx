'use client';

import Image from 'next/image';
import { useState } from 'react';

interface AbdominoplastieCardProps {
  image: string;
}

export function AbdominoplastieCard({ image }: AbdominoplastieCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="w-12 h-0.5 bg-primary mb-4 rounded-full" />
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl md:text-2xl font-light text-neutral-800 tracking-tight">
              Abdominoplastie
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
              aria-label="En savoir plus sur l'abdominoplastie"
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
            L’abdominoplastie corrige le relâchement abdominal important pour retrouver un ventre plus plat et ferme.
          </p>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
          <Image
            src={image}
            alt="Abdominoplastie"
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
              aria-label="Fermer la fenêtre d'information sur l'abdominoplastie"
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
              Abdominoplastie
            </h3>

            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>
                L’abdominoplastie corrige le relâchement abdominal important, souvent consécutif à des grossesses ou à
                une perte de poids importante. Elle permet de retirer l’excès de peau et de graisse afin de redonner un
                ventre plus plat et plus ferme.
              </p>
              <p>
                Le Dr Omar Wahab, chirurgien esthétique à Bruges, adapte la technique à chaque patient en fonction de la
                morphologie, de la qualité cutanée et, si nécessaire, d’un éventuel relâchement musculaire de la paroi
                abdominale. L’intervention peut être associée à une lipoaspiration pour affiner encore la silhouette.
              </p>
              <p>
                L’abdominoplastie redessine durablement la silhouette et améliore le confort au quotidien, en particulier
                en cas de tablier abdominal gênant.
              </p>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Suites opératoires
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème (gonflement) : 2 à 3 mois</li>
                  <li>Douleurs variables, soulagées par des antalgiques adaptés</li>
                  <li>Port de bas de contention : 7 jours</li>
                  <li>Port d’une gaine de contention : 4 semaines</li>
                  <li>Reprise du travail : 15 à 21 jours</li>
                  <li>Pas de conduite de véhicule : environ 10 jours</li>
                  <li>Pas de sport : 4 semaines (jusqu’à 8 semaines en cas de diastasis réparé)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>
                  L’amélioration de la silhouette est visible dès les premiers jours, malgré l’œdème. Le résultat est
                  considéré comme définitif entre 6 mois et 1 an, lorsque les tissus se sont assouplis et que la paroi
                  abdominale a retrouvé sa souplesse.
                </p>
                <p>
                  Les cicatrices, comparables à une césarienne étendue vers les hanches, sont jugées définitives après
                  1 à 2 ans. Elles sont généralement positionnées de façon à être dissimulées dans les sous-vêtements ou
                  sous un maillot de bain.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Prise en charge par la Sécurité sociale
                </h4>
                <p>
                  L’abdominoplastie peut relever d’une prise en charge lorsqu’il existe une dégradation majeure de la
                  paroi abdominale avec tablier recouvrant au moins partiellement le pubis. Dans ce cas, une demande
                  d’entente préalable auprès de la Sécurité sociale est obligatoire.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

