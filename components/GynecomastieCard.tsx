'use client';

import Image from 'next/image';
import { useState } from 'react';

interface GynecomastieCardProps {
  image: string;
}

export function GynecomastieCard({ image }: GynecomastieCardProps) {
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
              Correction de gynécomastie
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
              aria-label="En savoir plus sur la gynécomastie"
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
            Traitement de l’hypertrophie mammaire chez l’homme pour retrouver un thorax plus plat et harmonieux.
          </p>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
          <Image
            src={image}
            alt="Correction de gynécomastie"
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
              aria-label="Fermer la fenêtre d'information sur la gynécomastie"
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
              Correction de gynécomastie
            </h3>

            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Suites opératoires
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème (gonflement) : environ 2 mois</li>
                  <li>Ecchymoses (bleus) : 7 à 15 jours</li>
                  <li>Sensibilité des seins possible pendant 6 à 12 mois</li>
                  <li>Port du gilet de contention : 4 semaines</li>
                  <li>Reprise du travail : 7 à 15 jours</li>
                  <li>Convalescence : 7 à 15 jours</li>
                  <li>Reprise d’une activité sportive : à partir de 4 semaines</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>
                  L’amélioration est souvent nette et rapide, avec un thorax plus plat dès les premiers jours malgré la
                  présence d’un œdème. Un délai de 2 à 3 mois est cependant nécessaire pour apprécier le résultat
                  définitif.
                </p>
                <p>
                  Dans la majorité des cas, le résultat de la cure de gynécomastie est stable et durable en l’absence de
                  fluctuation pondérale importante ou de cause hormonale persistante. Une récidive reste possible en cas
                  de gynécomastie essentiellement glandulaire.
                </p>
                <p>
                  Les cicatrices sont généralement jugées définitives au bout d’environ 1 an.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Prise en charge par la Sécurité sociale
                </h4>
                <p>
                  La correction de gynécomastie peut relever d’une prise en charge lorsque la composante glandulaire est
                  confirmée à l’imagerie et que le retentissement psychologique est important. La demande est alors
                  étudiée au cas par cas dans le cadre du parcours de soins.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

