'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AccessibleModal } from '@/components/AccessibleModal';

interface BlepharoplastieCardProps {
  image: string;
}

export function BlepharoplastieCard({ image }: BlepharoplastieCardProps) {
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
              Blépharoplastie
            </h3>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center text-primary-text hover:text-primary-dark transition-colors"
              aria-label="En savoir plus sur la blépharoplastie"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p className="text-neutral-600 font-light leading-relaxed text-sm">
            Chirurgie des paupières supérieures et inférieures pour corriger les paupières tombantes et les poches sous les yeux et rajeunir le regard.
          </p>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
          <Image src={image} alt="Blépharoplastie" fill className="object-cover" />
        </div>
      </div>

      <AccessibleModal
        isOpen={isOpen}
        onClose={closeModal}
        title="Blépharoplastie"
        closeLabel="Fermer"
      >
        <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              <p>La blépharoplastie est la chirurgie des paupières supérieures et inférieures. Elle corrige les paupières tombantes et les poches sous les yeux. Le Dr Wahab, chirurgien esthétique à Bruges, réalise une approche sur mesure. Le regard est rajeuni et reposé. L’intervention est rapide et précise, les cicatrices quasi invisibles.</p>
              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Suites opératoires</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème (gonflement) : 8 à 10 jours (surtout paupières inférieures)</li>
                  <li>Ecchymoses (bleus) : 7 à 21 jours (très variable)</li>
                  <li>Peu ou pas de douleur</li>
                  <li>Éviction sociale : quelques jours pour une blépharoplastie supérieure, environ 10 jours pour une blépharoplastie inférieure</li>
                  <li>Pas de sport : 3 semaines</li>
                </ul>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>À partir de quelques semaines on commence à avoir une bonne idée du résultat définitif, mais il faut attendre 6 mois pour juger celui-ci. Les cicatrices sont souvent invisibles après quelques semaines.</p>
              </div>
              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Prise en charge par la Sécurité sociale</h4>
                <p>Une blépharoplastie supérieure peut parfois être prise en charge par la Sécurité sociale quand l’excédent cutané entraîne une diminution du champ visuel (confirmé par un examen ophtalmologique).</p>
              </div>
            </div>
      </AccessibleModal>
    </>
  );
}
