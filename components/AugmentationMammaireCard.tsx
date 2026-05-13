'use client';

import Image from 'next/image';
import { useState } from 'react';

export type AugmentationMammaireVariant = 'protheses' | 'lipofilling';

interface AugmentationMammaireCardProps {
  image: string;
  variant: AugmentationMammaireVariant;
  /** Image à gauche (défaut) ou à droite sur desktop */
  imagePosition?: 'left' | 'right';
  /** Crédit photo sous l’image (ex. lien vers la source) */
  imageCredit?: { href: string; label: string };
  /** Texte alternatif de l’image (override du libellé par défaut) */
  imageAlt?: string;
}

const copy = {
  protheses: {
    title: 'Augmentation mammaire par prothèses',
    teaser:
      'Augmentation durable du volume par implants mammaires choisis selon votre morphologie et vos attentes.',
    imageAlt: 'Augmentation mammaire par prothèses',
    modalTitle: 'Augmentation mammaire par prothèses',
    ariaMore: "En savoir plus sur l'augmentation mammaire par prothèses",
    ariaClose: "Fermer la fenêtre d'information sur l'augmentation mammaire par prothèses",
  },
  lipofilling: {
    title: 'Augmentation mammaire par lipofilling',
    teaser:
      'Augmentation ou remodelage par transfert de graisse autologue, pour un rendu naturel sans implant.',
    imageAlt: 'Augmentation mammaire par lipofilling',
    modalTitle: 'Augmentation mammaire par lipofilling',
    ariaMore: "En savoir plus sur l'augmentation mammaire par lipofilling",
    ariaClose: "Fermer la fenêtre d'information sur l'augmentation mammaire par lipofilling",
  },
} as const;

export function AugmentationMammaireCard({
  image,
  variant,
  imagePosition = 'left',
  imageCredit,
  imageAlt,
}: AugmentationMammaireCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const c = copy[variant];

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const imageCol = (
    <div className={imagePosition === 'right' ? 'md:order-2' : ''}>
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={image}
          alt={imageAlt ?? c.imageAlt}
          fill
          className="object-cover"
          style={{ objectPosition: 'center 50%' }}
        />
      </div>
      {imageCredit ? (
        <p className="mt-2 text-xs text-neutral-500 font-light leading-snug">
          <a
            href={imageCredit.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-neutral-700 transition-colors"
          >
            {imageCredit.label}
          </a>
        </p>
      ) : null}
    </div>
  );

  const textCol = (
    <div className={imagePosition === 'right' ? 'md:order-1' : ''}>
      <div className="w-12 h-0.5 bg-primary mb-4 rounded-full"></div>
      <div className="flex items-center gap-3 mb-4">
        <h3 className="text-xl md:text-2xl font-light text-neutral-800 tracking-tight">{c.title}</h3>
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center justify-center text-primary/80 hover:text-primary transition-colors"
          aria-label={c.ariaMore}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <p className="text-neutral-600 font-light leading-relaxed text-sm">{c.teaser}</p>
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {imagePosition === 'left' ? (
          <>
            {imageCol}
            {textCol}
          </>
        ) : (
          <>
            {textCol}
            {imageCol}
          </>
        )}
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
              aria-label={c.ariaClose}
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
            <h3 className="text-2xl md:text-3xl font-light text-neutral-800 mb-5 tracking-tight">{c.modalTitle}</h3>

            <div className="space-y-5 text-xs md:text-sm text-neutral-700 font-light leading-snug">
              {variant === 'protheses' ? (
                <>
                  <p>
                    L&apos;autre technique d&apos;augmentation, le lipofilling (transfert de graisse), est présentée
                    dans la section dédiée sur cette page.
                  </p>
                  <div>
                    <p>
                      L&apos;augmentation mammaire par prothèses permet d&apos;augmenter le volume de la poitrine de
                      façon durable.
                    </p>
                    <p>
                      Le Dr Wahab, chirurgien esthétique à Bruges, propose une prise en charge personnalisée. Les
                      implants mammaires sont choisis selon la morphologie et les attentes de la patiente.
                    </p>
                    <p>
                      Cette intervention améliore la forme, le galbe et la symétrie des seins. Les résultats sont
                      visibles rapidement et naturels. La chirurgie est réalisée dans un cadre sécurisé.
                      L&apos;augmentation mammaire par prothèses améliore la confiance en soi.
                    </p>

                    <h5 className="text-sm md:text-base font-normal text-neutral-800 mt-4 mb-2">
                      Suites opératoires
                    </h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Œdème (gonflement) : 2 mois</li>
                      <li>Ecchymoses (bleus) : souvent absent</li>
                      <li>
                        Douleurs (en particulier pour les implants en position rétropectorale) : 7 à 15 jours
                      </li>
                      <li>Port de la brassière : 4 à 6 semaines</li>
                      <li>Pas de conduite de véhicule : 7 jours</li>
                      <li>Pas de sport : 6 semaines</li>
                    </ul>

                    <h5 className="text-sm md:text-base font-normal text-neutral-800 mt-4 mb-2">Résultats</h5>
                    <p>
                      Dans les suites immédiates, les seins sont gonflés et il faut attendre 3 mois que l&apos;œdème
                      disparaisse. La forme définitive peut être évaluée vers 6 mois. Cicatrices jugées définitives en
                      1 an. Ce résultat d&apos;augmentation mammaire est stable et définitif en l&apos;absence de
                      grossesse ultérieure ou de fluctuation pondérale importante.
                    </p>

                    <h5 className="text-sm md:text-base font-normal text-neutral-800 mt-4 mb-2">
                      Prise en charge par la Sécurité sociale
                    </h5>
                    <p>
                      Cette intervention peut relever d&apos;une prise en charge quand il y a une hypoplasie
                      bilatérale sévère avec une taille de bonnet inférieure à A.
                    </p>
                    <p>
                      NB : Les hypoplasies mammaires faisant suite à une grossesse et un allaitement ne sont pas prises
                      en charge.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <p>
                    L&apos;autre technique d&apos;augmentation, par implants mammaires (prothèses), est présentée dans
                    la section dédiée sur cette page.
                  </p>
                  <div>
                    <p>
                      Le lipofilling du sein utilise la graisse autologue pour augmenter ou remodeler la poitrine. Il
                      permet une augmentation mammaire naturelle, sans prothèse. La graisse est prélevée sur les zones
                      excédentaires du corps. Le résultat est harmonieux et progressif. Cette technique améliore
                      également la qualité des tissus mammaires. Elle est idéale pour corriger des asymétries. Le
                      lipofilling mammaire offre un rendu naturel et durable.
                    </p>

                    <h5 className="text-sm md:text-base font-normal text-neutral-800 mt-4 mb-2">
                      Suites opératoires
                    </h5>
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

                    <h5 className="text-sm md:text-base font-normal text-neutral-800 mt-4 mb-2">Résultats</h5>
                    <p>
                      Le résultat peut être évalué comme stable et définitif entre 3 et 6 mois. En effet, le volume
                      immédiat est majoré par l&apos;œdème (qui se résorbe totalement) et par la graisse injectée (dont
                      la prise de greffe est partielle, de l&apos;ordre de 50 à 70 %). La silhouette est également
                      affinée par la liposuccion. Parfois, une deuxième séance de transfert de graisse est nécessaire
                      pour obtenir le volume et la forme souhaités.
                    </p>
                    <p>
                      NB : Le volume des seins se modifie normalement avec les variations de poids de la patiente. Un
                      amaigrissement entraînera une diminution du volume mammaire, et une prise pondérale une
                      augmentation du volume mammaire.
                    </p>

                    <h5 className="text-sm md:text-base font-normal text-neutral-800 mt-4 mb-2">
                      Prise en charge par la Sécurité sociale
                    </h5>
                    <p>
                      Cette intervention ne peut relever d&apos;une prise en charge que dans le cadre de reconstruction
                      mammaire après cancer du sein ou dans les asymétries mammaires majeures.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
