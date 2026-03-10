'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OtoplastieCardProps {
  image: string;
}

export function OtoplastieCard({ image }: OtoplastieCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src={image} alt="Otoplastie" fill className="object-cover" />
        </div>
        <div>
          <div className="w-12 h-0.5 bg-primary mb-4 rounded-full" />
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl md:text-2xl font-light text-neutral-800 tracking-tight">
              Otoplastie
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
              aria-label="En savoir plus sur l'otoplastie"
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
            Correction des oreilles décollées pour rétablir un positionnement naturel et harmonieux par rapport au visage.
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
              aria-label="Fermer la fenêtre d'information sur l'otoplastie"
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
              Otoplastie
            </h3>

            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>
                L’otoplastie est l’intervention qui corrige les oreilles décollées ou une asymétrie marquée du pavillon
                auriculaire. Elle s’adresse aux patients gênés par l’aspect de leurs oreilles, souvent depuis l’enfance,
                avec un retentissement important sur l’estime de soi.
              </p>
              <p>
                L’objectif est de repositionner l’oreille plus près du crâne et de recréer des reliefs naturels sans
                aspect « plaqué ». Le Dr Wahab adapte la technique à la morphologie de chaque oreille pour obtenir un
                résultat harmonieux et discret.
              </p>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Suites opératoires
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème (gonflement) et légère rougeur : 1 à 3 semaines</li>
                  <li>Ecchymoses (bleus) possibles autour des oreilles : 7 à 15 jours</li>
                  <li>Douleurs modérées, bien contrôlées par des antalgiques simples</li>
                  <li>Port d’un bandeau de contention : généralement 3 à 4 semaines, surtout la nuit</li>
                  <li>Reprise des activités calmes : quelques jours après l’intervention</li>
                  <li>Reprise du travail ou de l’école : en général après 7 à 10 jours</li>
                  <li>Éviter les sports de contact : pendant 4 à 6 semaines</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>
                  Le changement est visible immédiatement malgré l’œdème initial. Le résultat se stabilise au fil des
                  semaines, une fois le gonflement résorbé et les tissus assouplis.
                </p>
                <p>
                  Les cicatrices sont dissimulées dans le sillon derrière l’oreille et deviennent progressivement très
                  peu visibles. Elles sont en général jugées définitives entre 6 mois et 1 an.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Prise en charge par la Sécurité sociale
                </h4>
                <p>
                  L’otoplastie peut, dans certains cas, bénéficier d’une prise en charge par la Sécurité sociale, en
                  particulier lorsqu’il existe un retentissement psychologique important chez l’enfant ou l’adolescent.
                  La demande est étudiée au cas par cas dans le cadre d’une entente préalable.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

