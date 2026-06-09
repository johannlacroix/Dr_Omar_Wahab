'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AccessibleModal } from '@/components/AccessibleModal';

interface LiftingCuissesCardProps {
  image: string;
}

export function LiftingCuissesCard({ image }: LiftingCuissesCardProps) {
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
              Lifting des cuisses
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary-text hover:text-primary-dark transition-colors"
              aria-label="En savoir plus sur le lifting des cuisses"
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
            Le lifting des cuisses corrige le relâchement cutané de la face interne ou externe des cuisses après amaigrissement ou avec l’âge.
          </p>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
          <Image
            src={image}
            alt="Lifting des cuisses"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <AccessibleModal
        isOpen={isOpen}
        onClose={closeModal}
        title="Lifting des cuisses"
        closeLabel="Fermer la fenêtre d'information sur le lifting des cuisses"
      >
        <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>
                Le lifting des cuisses corrige le relâchement cutané de la face interne ou externe des cuisses. Il est
                particulièrement indiqué après une perte de poids importante ou avec le vieillissement, lorsque la peau
                ne parvient plus à se retendre spontanément.
              </p>
              <p>
                L’intervention permet de retirer l’excès de peau et de retendre les tissus, afin d’affiner la silhouette
                et d’améliorer le galbe des cuisses. Les cicatrices sont positionnées de manière à être adaptées à chaque
                morphologie et à rester aussi discrètes que possible.
              </p>
              <p>
                Le lifting des cuisses améliore le confort, la mobilité et la confiance en soi grâce à une silhouette
                plus harmonieuse.
              </p>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Suites opératoires
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème : 2 à 3 mois</li>
                  <li>Douleurs variables, soulagées par des antalgiques adaptés</li>
                  <li>Port d’un vêtement de contention : 4 semaines</li>
                  <li>Reprise du travail : 15 à 21 jours</li>
                  <li>Pas de sport : 6 semaines</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>
                  L’amélioration de la silhouette des cuisses est visible rapidement, mais le résultat définitif
                  s’apprécie entre 6 mois et 1 an, une fois l’œdème résorbé et les tissus assouplis.
                </p>
                <p>
                  Les cicatrices sont jugées définitives entre 1 et 2 ans. Leur qualité dépend notamment de la
                  cicatrisation propre à chaque patient et du respect des consignes post-opératoires.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Prise en charge par la Sécurité sociale
                </h4>
                <p>
                  Le lifting des cuisses peut relever d’une prise en charge lorsqu’il existe un relâchement important
                  faisant suite à des séquelles d’amaigrissement majeur. Une entente préalable auprès de la Sécurité
                  sociale est alors nécessaire.
                </p>
              </div>
            </div>
      </AccessibleModal>
    </>
  );
}

