'use client';

import Image from 'next/image';
import { useState } from 'react';

interface AntiAgeCardProps {
  image: string;
}

export function AntiAgeCard({ image }: AntiAgeCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src={image} alt="Traitements anti-âge" fill className="object-cover" />
        </div>
        <div>
          <div className="w-12 h-0.5 bg-primary mb-4 rounded-full" />
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl md:text-2xl font-light text-neutral-800 tracking-tight">
              Traitements anti-âge
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
              aria-label="En savoir plus sur les traitements anti-âge"
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
            Protocoles combinés pour préserver la jeunesse de la peau : hydratation, stimulation et prévention des rides.
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
              aria-label="Fermer la fenêtre d'information sur les traitements anti-âge"
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
              Traitements anti-âge
            </h3>

            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>
                Les traitements anti-âge de médecine esthétique visent à ralentir les signes du vieillissement cutané,
                à améliorer la qualité de la peau et à préserver l’harmonie du visage. Ils associent souvent plusieurs
                techniques complémentaires afin d’obtenir un résultat global et naturel.
              </p>
              <p>
                En fonction des besoins, ils peuvent cibler les rides, la perte de volume, le relâchement cutané, le
                teint terne ou les irrégularités de texture. L’objectif est d’accompagner le vieillissement de la peau
                en douceur, sans modifier l’identité du visage.
              </p>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Principales approches
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <span className="font-medium">Hydratation profonde</span> : protocoles à base d’acide hyaluronique
                    faiblement réticulé ou de skinboosters pour améliorer l’éclat et la souplesse.
                  </li>
                  <li>
                    <span className="font-medium">Stimulation</span> : traitements qui favorisent la production de
                    collagène et d’élastine (mésothérapie, peelings légers, soins ciblés).
                  </li>
                  <li>
                    <span className="font-medium">Prévention des rides</span> : prise en charge précoce des rides
                    d’expression et des zones de fragilité.
                  </li>
                  <li>
                    <span className="font-medium">Entretien</span> : programme personnalisé de suivi pour maintenir les
                    résultats dans le temps.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Déroulement et suites
                </h4>
                <p>
                  La plupart des traitements anti-âge de médecine esthétique se déroulent au cabinet, sans anesthésie
                  générale. Ils sont peu invasifs et compatibles avec une activité sociale quasi normale : les suites se
                  limitent souvent à de légères rougeurs ou à un discret œdème transitoire.
                </p>
                <p>
                  Un plan de traitement sur mesure est défini en consultation avec le Dr Wahab, en tenant compte de
                  l’historique de la peau, du mode de vie et des attentes de chaque patient.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Prise en charge par la Sécurité sociale
                </h4>
                <p>
                  Les traitements anti-âge de médecine esthétique sont réalisés à visée esthétique et ne relèvent pas
                  d’une prise en charge par la Sécurité sociale.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

