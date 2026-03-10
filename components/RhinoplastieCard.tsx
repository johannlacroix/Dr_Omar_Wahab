'use client';

import Image from 'next/image';
import { useState } from 'react';

interface RhinoplastieCardProps {
  image: string;
}

export function RhinoplastieCard({ image }: RhinoplastieCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <Image src={image} alt="Rhinoplastie" fill className="object-cover" />
        </div>
        <div>
          <div className="w-12 h-0.5 bg-primary mb-4 rounded-full" />
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl md:text-2xl font-light text-neutral-800 tracking-tight">
              Rhinoplastie
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
              aria-label="En savoir plus sur la rhinoplastie"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p className="text-neutral-600 font-light leading-relaxed text-sm">
            Chirurgie du nez à visée esthétique ou fonctionnelle pour corriger une bosse, une asymétrie ou une déviation et améliorer l’harmonie du visage.
          </p>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={closeModal}>
          <div className="relative max-w-3xl w-full bg-white rounded-3xl shadow-xl shadow-neutral-900/15 p-6 md:p-8 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 transition-colors" onClick={closeModal} aria-label="Fermer">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h3 className="text-2xl md:text-3xl font-light text-neutral-800 mb-5 tracking-tight">Rhinoplastie</h3>
            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>La rhinoplastie est une chirurgie du nez à visée esthétique ou fonctionnelle. Elle permet de corriger une bosse, une asymétrie ou une déviation nasale. Le Dr Wahab, chirurgien esthétique à Bruges, privilégie un résultat naturel. L’intervention respecte l’harmonie du visage et peut également améliorer la respiration. Les résultats sont durables et personnalisés.</p>
              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Suites opératoires</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème (gonflement) : 8 à 10 jours</li>
                  <li>Ecchymoses (bleus) : 7 à 15 jours (très variable)</li>
                  <li>Peu ou pas de douleur</li>
                  <li>Quelques fils retirés au 8ᵉ jour</li>
                  <li>Ablation des drains et du plâtre au 8ᵉ jour</li>
                  <li>Éviction sociale : 15 jours</li>
                  <li>Pas de lunettes pendant 1 mois</li>
                  <li>Pas de sport : 3 semaines</li>
                  <li>Pas de sport de contact pendant 2 mois</li>
                </ul>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>À partir de 3 mois on commence à avoir une bonne idée du résultat, mais il faut attendre 1 an pour évaluer le résultat définitif. Dans tous les cas, s’il y a une retouche à prévoir, celle-ci n’intervient pas avant au moins 1 an. Dans la plupart des cas, une rhinoplastie médicale suffit à corriger des imperfections mineures.</p>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Prise en charge par la Sécurité sociale</h4>
                <p>Cette intervention peut parfois relever d’une prise en charge quand la déformation du nez est secondaire à un traumatisme. Une demande d’entente préalable est nécessaire.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
