'use client';

import Image from 'next/image';
import { useState } from 'react';

interface LiftingFacialCardProps {
  image: string;
}

export function LiftingFacialCard({ image }: LiftingFacialCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src={image} alt="Lifting cervico-facial" fill className="object-cover" />
        </div>
        <div>
          <div className="w-12 h-0.5 bg-primary mb-4 rounded-full" />
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl md:text-2xl font-light text-neutral-800 tracking-tight">
              Lifting cervico-facial
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
              aria-label="En savoir plus sur le lifting facial"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p className="text-neutral-600 font-light leading-relaxed text-sm">
            Le lifting facial corrige le relâchement cutané du visage et du cou pour redéfinir l’ovale et rajeunir les traits de façon naturelle.
          </p>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={closeModal}>
          <div className="relative max-w-3xl w-full bg-white rounded-3xl shadow-xl shadow-neutral-900/15 p-6 md:p-8 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 transition-colors" onClick={closeModal} aria-label="Fermer">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="text-2xl md:text-3xl font-light text-neutral-800 mb-5 tracking-tight">Lifting cervico-facial</h3>
            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>Le lifting facial corrige le relâchement cutané du visage et du cou. Il s’adresse aux signes visibles du vieillissement. Le Dr Wahab à Bruges privilégie des techniques modernes et naturelles. L’intervention retend la peau et redéfinit l’ovale du visage. Les traits sont rajeunis sans aspect figé, les résultats durables.</p>
              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Suites opératoires</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème (gonflement) : 8 à 10 jours</li>
                  <li>Ecchymoses (bleus) : 7 à 15 jours (très variable)</li>
                  <li>Peu ou pas de douleur</li>
                  <li>Quelques fils retirés au 8ᵉ jour</li>
                  <li>Éviction sociale : 15 jours</li>
                  <li>Pas de sport : 3 semaines</li>
                </ul>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>À partir de 1 à 3 mois on commence à avoir une bonne idée du résultat définitif. Il faut attendre 1 an pour évaluer les cicatrices. Cette intervention peut éventuellement être répétée après une dizaine d’années. Cette perspective doit s’inscrire dans un entretien du visage par des techniques complémentaires plus légères (injection de botox ou d’acide hyaluronique), qui retarderont d’autant une nouvelle intervention qu’elles auront été effectuées régulièrement.</p>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Prise en charge par la Sécurité sociale</h4>
                <p>Cette intervention ne relève pas d’une prise en charge par la Sécurité sociale.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
