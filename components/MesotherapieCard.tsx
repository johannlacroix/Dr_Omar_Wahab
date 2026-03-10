'use client';

import Image from 'next/image';
import { useState } from 'react';

interface MesotherapieCardProps {
  image: string;
}

export function MesotherapieCard({ image }: MesotherapieCardProps) {
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
              Mésothérapie
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
              aria-label="En savoir plus sur la mésothérapie"
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
            Micro-injections de vitamines, d’acide hyaluronique et d’antioxydants pour hydrater et revitaliser la peau.
          </p>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
          <Image src={image} alt="Mésothérapie" fill className="object-cover" />
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
              aria-label="Fermer la fenêtre d'information sur la mésothérapie"
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
              Mésothérapie du visage
            </h3>

            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>
                La mésothérapie esthétique (ou mésolift) consiste à injecter de très petites quantités de substances
                actives directement dans le derme : acide hyaluronique faiblement réticulé, vitamines, antioxydants et
                oligo-éléments. Elle agit en profondeur pour hydrater, redonner de l’éclat et revitaliser une peau
                terne ou fatiguée.
              </p>
              <p>
                Cette technique est particulièrement indiquée pour le visage, le cou et le décolleté, lorsque la peau
                manque d’hydratation, de tonicité ou présente des signes précoces de vieillissement.
              </p>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Bénéfices principaux
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <span className="font-medium">Hydratation</span> : amélioration de la souplesse et de la douceur de
                    la peau.
                  </li>
                  <li>
                    <span className="font-medium">Éclat</span> : effet « coup d’éclat » sur un teint terne ou stressé.
                  </li>
                  <li>
                    <span className="font-medium">Revitalisation</span> : peau plus tonique, plus homogène, moins
                    marquée par les ridules de déshydratation.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Déroulement et suites
                </h4>
                <p>
                  Une séance dure en moyenne 15 à 30 minutes. Le médecin réalise des micro-injections superficielles en
                  quadrillant la zone à traiter. La procédure est peu douloureuse ; elle peut être réalisée avec une
                  crème anesthésiante en cas de sensibilité.
                </p>
                <p>
                  Les suites se limitent à de petites rougeurs ou à de légers gonflements ponctuels qui disparaissent en
                  quelques heures à quelques jours. Une éviction sociale n’est généralement pas nécessaire.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>
                  L’amélioration de l’hydratation et de l’éclat apparaît progressivement au fil des séances. Un
                  protocole type comporte souvent plusieurs séances espacées de quelques semaines, puis des séances
                  d’entretien pour maintenir le bénéfice dans le temps.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Prise en charge par la Sécurité sociale
                </h4>
                <p>
                  La mésothérapie du visage, réalisée dans un but esthétique, ne relève pas d’une prise en charge par la
                  Sécurité sociale.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

