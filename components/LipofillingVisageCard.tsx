'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AccessibleModal } from '@/components/AccessibleModal';

interface LipofillingVisageCardProps {
  image: string;
}

export function LipofillingVisageCard({ image }: LipofillingVisageCardProps) {
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
              Lipofilling du visage
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary-text hover:text-primary-dark transition-colors"
              aria-label="En savoir plus sur le lipofilling du visage"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p className="text-neutral-600 font-light leading-relaxed text-sm">
            Réinjection de la graisse du patient pour restaurer les volumes, corriger les creux et les signes du vieillissement.
          </p>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
          <Image src={image} alt="Lipofilling du visage" fill className="object-cover" />
        </div>
      </div>

      <AccessibleModal
        isOpen={isOpen}
        onClose={closeModal}
        title="Lipofilling du visage"
        closeLabel="Fermer"
      >
        <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>Le lipofilling du visage consiste à réinjecter la graisse du patient pour restaurer les volumes. Il corrige les creux, les rides et les signes du vieillissement. La graisse est prélevée par liposuccion puis purifiée. Le résultat est naturel et durable. Cette technique améliore la qualité de la peau et peut être associée à un lifting du visage.</p>
              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Suites opératoires</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème (gonflement) : 15 à 21 jours</li>
                  <li>Ecchymoses (bleus) : 15 jours</li>
                  <li>Peu ou pas de douleur</li>
                  <li>Aucun fil à retirer</li>
                  <li>Éviction sociale : 15 jours</li>
                  <li>Pas de sport : 10 jours</li>
                </ul>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>Le résultat immédiat est souvent majoré par l’œdème qui met 15 jours à 3 semaines avant de se résorber, et par la perte graisseuse classique située entre 20 et 40 %. Il faut donc attendre au moins 3 mois pour avoir une bonne idée du résultat. Cette intervention peut éventuellement être répétée après 6 mois pour obtenir le résultat souhaité.</p>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Prise en charge par la Sécurité sociale</h4>
                <p>Cette intervention ne relève pas d’une prise en charge par la Sécurité sociale.</p>
              </div>
            </div>
      </AccessibleModal>
    </>
  );
}
