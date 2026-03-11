'use client';

import { useState } from 'react';

export function ReferencesCard() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="bg-white rounded-3xl shadow-xl border border-neutral-200 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-xl md:text-2xl font-light text-neutral-800 mb-3 tracking-tight">
            Parcours &amp; références
          </h2>
          <p className="text-neutral-600 font-light text-sm leading-relaxed">
            Chirurgien plasticien qualifié en chirurgie esthétique, plastique et reconstructrice, le Dr Omar Wahab
            exerce en secteur privé à Bruges et à Bordeaux, avec un suivi postopératoire de proximité et une pratique
            fondée sur une solide formation hospitalo-universitaire.
          </p>
        </div>
        <div className="mt-6 md:mt-0 md:ml-8">
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-2 text-sm font-light text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Voir le parcours complet
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
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
              aria-label="Fermer la fenêtre « Parcours & références »"
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl md:text-3xl font-light text-neutral-800 mb-5 tracking-tight">
              Le Dr Wahab en quelques références
            </h3>

            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Activité actuelle</h4>
                <p>
                  Le Dr Omar Wahab exerce son activité de chirurgie esthétique, plastique et reconstructrice en secteur
                  privé à Bruges, près de Bordeaux. Il reçoit ses patient·e·s dans son cabinet situé à Bruges, à
                  proximité de la clinique Jean Villar où sont réalisées les interventions chirurgicales, et consulte
                  également depuis 2026 au sein de l’établissement CLEO, 12 rue Falquet à Bordeaux. Ce mode
                  d’organisation lui permet d’assurer un suivi postopératoire de qualité, grâce à une grande
                  disponibilité.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Parcours hospitalier</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Ancien Chef d’unité de chirurgie plastique et reconstructrice – Hôpital Victor Provo, Roubaix</li>
                  <li>Ancien Praticien Hospitalier en chirurgie plastique et reconstructrice – Hôpital Victor Provo</li>
                  <li>Ancien Chef de clinique, service de chirurgie plastique – CHRU de Lille</li>
                  <li>Ancien Assistant en Anatomie – CHRU de Lille</li>
                  <li>Membre de la SOFCEP (Société Française des Chirurgiens Esthétiques Plasticiens)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Diplômes</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>DESC de chirurgie plastique, reconstructrice et esthétique – 2011</li>
                  <li>DU de Pédagogie en Anatomie (Université Lille II) – 2010</li>
                  <li>DU de microchirurgie (Université Lille II) – 2010</li>
                  <li>DIU d’anatomie appliquée à la chirurgie plastique (Paris V) – 2009</li>
                  <li>DIU d’anatomie appliquée à la chirurgie de la tête et du cou (Paris V) – 2008</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Publications &amp; présentations
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <span className="font-medium">
                      Surgical and prosthetic treatment for microphthalmia syndromes
                    </span>{' '}
                    – British Journal of Oral &amp; Maxillofacial Surgery, 2012
                  </li>
                  <li>
                    <span className="font-medium">Dermatofibrosarcoma in children</span> – Annales de Chirurgie
                    Plastique, 2011
                  </li>
                  <li>
                    <span className="font-medium">Tissue expansion in children : A 20 years experience in Lille</span>{' '}
                    – présentation clinique (expérience de 20 ans)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

