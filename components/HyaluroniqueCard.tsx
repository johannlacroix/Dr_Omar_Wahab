'use client';

import Image from 'next/image';
import { useState } from 'react';

interface HyaluroniqueCardProps {
  image: string;
}

export function HyaluroniqueCard({ image }: HyaluroniqueCardProps) {
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
              Acide hyaluronique
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
              aria-label="En savoir plus sur l'acide hyaluronique"
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
            Injections d’acide hyaluronique pour restaurer les volumes, combler les rides et redessiner les contours du visage.
          </p>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
          <Image src={image} alt="Acide hyaluronique" fill className="object-cover" />
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
              aria-label="Fermer la fenêtre d'information sur l'acide hyaluronique"
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
              Injections d’acide hyaluronique
            </h3>

            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>
                Les injections d’acide hyaluronique restaurent les volumes du visage. Elles comblent les rides et
                redessinent les contours. Le Dr Wahab à Bruges utilise des produits résorbables et sécurisés. Le
                résultat est immédiat et naturel. Cette technique ne nécessite pas de chirurgie, la récupération est
                rapide et l’acide hyaluronique rajeunit le visage efficacement.
              </p>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Objectifs des injections
                </h4>
                <p>
                  L’injection d’acide hyaluronique permet de corriger certains signes du vieillissement ou des disgrâces
                  présentes au niveau du visage par un comblement ou une augmentation de volume là où cela est
                  nécessaire. Les corrections les plus fréquemment réalisées concernent :
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <span className="font-medium">Les sillons</span> : sillons naso-géniens, plis d’amertume, sillon
                    labio-mentonnier.
                  </li>
                  <li>
                    <span className="font-medium">Rides et ridules</span> : front, rides du lion, joues, menton, rides
                    péri-buccales.
                  </li>
                  <li>
                    <span className="font-medium">Lèvres</span> : redessiner l’ourlet (arc de Cupidon), augmenter le
                    volume.
                  </li>
                  <li>
                    <span className="font-medium">Dépressions</span> : pommettes, cernes, contour mandibulaire, nez,
                    fosses temporales, etc.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Suites opératoires
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème (gonflement) : 2 à 3 jours</li>
                  <li>Ecchymoses (bleus) : variables selon les patients et les zones traitées</li>
                  <li>Peu ou pas de douleur</li>
                  <li>Pas d’éviction sociale nécessaire dans la majorité des cas</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>
                  L’amélioration est immédiate, avec un visage plus lisse et mieux dessiné dès la fin de la séance. La
                  longévité du résultat est variable selon les produits et les zones, en général entre 8 et 24 mois. Une
                  séance d’entretien tous les 12 mois est souvent conseillée pour maintenir le bénéfice.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Prise en charge par la Sécurité sociale
                </h4>
                <p>
                  Ce geste médical réalisé à visée esthétique ne relève pas d’une prise en charge par la Sécurité
                  sociale.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

