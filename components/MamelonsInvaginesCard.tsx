'use client';

import Image from 'next/image';
import { useState } from 'react';

interface MamelonsInvaginesCardProps {
  image: string;
}

export function MamelonsInvaginesCard({ image }: MamelonsInvaginesCardProps) {
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
              Mamelons invaginés
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
              aria-label="En savoir plus sur la correction des mamelons invaginés"
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
            La correction des mamelons invaginés traite un mamelon rentré ou ombiliqué afin de restaurer une
            projection naturelle et d’améliorer l’esthétique de la poitrine.
          </p>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
          <Image
            src={image}
            alt="Correction des mamelons invaginés"
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
              aria-label="Fermer la fenêtre d'information sur les mamelons invaginés"
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
              Correction des mamelons invaginés
            </h3>

            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <div>
                <p>
                  La correction des mamelons invaginés vise à traiter un mamelon rentré ou ombiliqué, qu’il soit
                  présent depuis la naissance ou apparu secondairement. Cette anomalie peut être source de gêne
                  esthétique ou fonctionnelle.
                </p>
                <p>
                  L’intervention permet de libérer le mamelon et de restaurer une projection plus naturelle. La
                  technique est adaptée au degré d’invagination et tient compte de la qualité des tissus, ainsi que
                  des attentes de la patiente.
                </p>
                <p>
                  Le geste chirurgical est précis et discret, avec des cicatrices limitées, dans le but d’améliorer
                  l’esthétique de la poitrine et la confiance en soi.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Suites opératoires</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème (gonflement) : en principe absent</li>
                  <li>Ecchymoses (bleus) : 7 à 10 jours</li>
                  <li>Douleurs : faibles, soulagées par des antalgiques simples</li>
                  <li>Fils à retirer : vers le 8ᵉ jour</li>
                  <li>Convalescence : pas d’arrêt d’activité spécifique en dehors des soins locaux</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>
                  La projection du mamelon évolue progressivement au fil des mois. Le résultat est considéré comme
                  stabilisé environ 1 an après l’intervention, une fois les phénomènes rétractiles tissulaires
                  résorbés.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Prise en charge par la Sécurité sociale
                </h4>
                <p>
                  Selon le contexte et le retentissement fonctionnel ou psychologique, la correction des mamelons
                  invaginés peut relever d’une prise en charge partielle par la Sécurité sociale. Ce point est discuté
                  en consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

