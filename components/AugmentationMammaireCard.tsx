'use client';

import Image from 'next/image';
import { useState } from 'react';

interface AugmentationMammaireCardProps {
  image: string;
}

export function AugmentationMammaireCard({ image }: AugmentationMammaireCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div
          className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
          onMouseEnter={openModal}
          onClick={openModal}
        >
          <Image
            src={image}
            alt="Augmentation mammaire"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 50%' }}
          />
        </div>
        <div>
          <div className="w-12 h-0.5 bg-primary mb-4 rounded-full"></div>
          <h3
            className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight cursor-pointer"
            onMouseEnter={openModal}
            onClick={openModal}
          >
            Augmentation mammaire
          </h3>
          <p className="text-neutral-600 font-light leading-relaxed text-sm">
            Augmentation du volume mammaire par prothèses ou lipofilling pour retrouver une poitrine
            harmonieuse.
          </p>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-3xl shadow-xl shadow-neutral-900/15 p-6 md:p-8 max-h-[90vh] overflow-y-auto"
            onMouseLeave={closeModal}
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className="text-2xl md:text-3xl font-light text-neutral-800 mb-4 tracking-tight">
              Augmentation mammaire par lipofilling
            </h3>

            <div className="space-y-4 text-sm md:text-base text-neutral-700 font-light leading-relaxed">
              <p>
                Le lipofilling du sein utilise la graisse autologue pour augmenter ou remodeler la poitrine.
                Il permet une augmentation mammaire naturelle, sans prothèse. La graisse est prélevée sur les
                zones excédentaires du corps. Le résultat est harmonieux et progressif. Cette technique
                améliore également la qualité des tissus mammaires. Elle est idéale pour corriger des
                asymétries. Le lipofilling mammaire offre un rendu naturel et durable.
              </p>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Suites opératoires
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Œdème (gonflement) : 2 à 3 mois</li>
                  <li>Ecchymoses (bleus) : 7 à 21 jours</li>
                  <li>Peu de douleur : 7 à 15 jours (principalement due à la lipoaspiration)</li>
                  <li>Quelques fils sont à retirer</li>
                  <li>Port de la brassière : 3 semaines</li>
                  <li>Panty à porter : 4 semaines</li>
                  <li>Convalescence : 7 jours</li>
                  <li>Pas de conduite de véhicule : 7 jours</li>
                  <li>Pas de sport : 4 semaines</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">Résultats</h4>
                <p>
                  Le résultat peut être évalué comme stable et définitif entre 3 et 6 mois. En effet, le volume
                  immédiat est majoré par l’œdème (qui se résorbe totalement) et par la graisse injectée (dont la
                  prise de greffe est partielle, de l’ordre de 50 à 70 %). La silhouette est également affinée par
                  la liposuccion. Parfois, une deuxième séance de transfert de graisse est nécessaire pour obtenir
                  le volume et la forme souhaités.
                </p>
                <p>
                  NB : Le volume des seins se modifie normalement avec les variations de poids de la patiente. Un
                  amaigrissement entraînera une diminution du volume mammaire, et une prise pondérale une
                  augmentation du volume mammaire.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-normal text-neutral-800 mb-2">
                  Prise en charge par la Sécurité sociale
                </h4>
                <p>
                  Cette intervention ne peut relever d’une prise en charge que dans le cadre de reconstruction
                  mammaire après cancer du sein ou dans les asymétries mammaires majeures.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

