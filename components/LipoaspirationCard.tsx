'use client';

import Image from 'next/image';
import { useState } from 'react';

interface LipoaspirationCardProps {
  image: string;
}

export function LipoaspirationCard({ image }: LipoaspirationCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={image}
            alt="Lipoaspiration"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <div className="w-12 h-0.5 bg-primary mb-4 rounded-full" />
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl md:text-2xl font-light text-neutral-800 tracking-tight">
              Lipoaspiration
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
              aria-label="En savoir plus sur la lipoaspiration"
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
            La liposuccion élimine les amas graisseux localisés et permet de remodeler la silhouette de manière ciblée.
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
              aria-label="Fermer la fenêtre d'information sur la lipoaspiration"
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
              Lipoaspiration
            </h3>

            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>
                La liposuccion, ou lipoaspiration, vise à éliminer les amas graisseux résistants aux régimes et à
                l’activité physique. Elle peut cibler notamment l’abdomen, les hanches, les cuisses ou les bras, afin de
                redessiner les contours du corps.
              </p>
              <p>
                Le Dr Omar Wahab à Bruges sculpte la silhouette avec précision pour obtenir un résultat harmonieux et
                adapté à chaque morphologie. La graisse retirée l’est de façon définitive, sous réserve du maintien d’un
                poids stable.
              </p>
              <p>
                Les résultats sont progressifs et naturels : au fil des semaines, la silhouette s’affine et
                l’harmonie corporelle est améliorée.
              </p>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Suites opératoires
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème (gonflement) : environ 3 semaines</li>
                  <li>Ecchymoses (bleus) : 7 à 21 jours</li>
                  <li>Douleurs modérées : 7 à 15 jours</li>
                  <li>Pas de fils à retirer</li>
                  <li>Port d’un vêtement de contention : 4 semaines</li>
                  <li>Convalescence : 3 à 8 jours</li>
                  <li>Pas de conduite de véhicule : 7 jours</li>
                  <li>Pas de sport : 4 semaines</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>
                  Le résultat commence à apparaître après environ 3 semaines, lorsque l’œdème commence à se résorber. La
                  peau met 3 à 6 mois à se redraper sur les nouveaux galbes et à s’adapter à la nouvelle silhouette.
                </p>
                <p>
                  En l’absence de fluctuations pondérales importantes, le résultat d’une lipoaspiration est stable et
                  durable.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Prise en charge par la Sécurité sociale
                </h4>
                <p>
                  La lipoaspiration est considérée comme une intervention esthétique et ne relève pas d’une prise en
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

