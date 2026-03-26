'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CLEO_IMAGES = [
  '/CLEO/CLEO_1_1920px.webp',
  '/CLEO/CLEO_2_1920px.webp',
  '/CLEO/CLEO_3_1920px.webp',
  '/CLEO/CLEO_4_1920px.webp',
  '/CLEO/CLEO_5_1920px.webp',
  '/CLEO/CLEO_6_1920px.webp',
  '/CLEO/CLEO_7_1920px.webp',
  '/CLEO/CLEO_8_1920px.webp',
  '/CLEO/CLEO_9_1920px.webp',
  '/CLEO/CLEO_10_1920px.webp',
  '/CLEO/CLEO_11_1920px.webp',
  '/CLEO/CLEO_12_1920px.webp',
  '/CLEO/CLEO_13_1920px.webp',
  '/CLEO/CLEO_14_1920px.webp',
  '/CLEO/CLEO_15_1920px.webp',
  '/CLEO/CLEO_16_1920px.webp',
  '/CLEO/CLEO_17_1920px.webp',
];

export function CleoGallerySection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(6);

  const previousImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? CLEO_IMAGES.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === CLEO_IMAGES.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      } else if (event.key === 'ArrowLeft') {
        previousImage();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <>
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-neutral-200">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative h-64 md:h-80 w-full cursor-zoom-in text-left"
          aria-label="Ouvrir la galerie de la Clinique CLEO"
        >
          <Image
            src="/CLEO/CLEO_7_1920px.webp"
            alt="Clinique CLEO à Bordeaux"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/20 to-transparent"></div>
        </button>
        <div className="p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-light text-neutral-800 mb-8 tracking-tight">
            Coordonnées et adresses - Clinique CLEO
          </h2>
          <h3 className="font-light text-neutral-500 mb-3 tracking-wide uppercase text-sm">
            Clinique CLEO à Bordeaux
          </h3>
          <p className="text-neutral-600 font-light leading-relaxed text-sm">
            12 rue Falquet
            <br />
            33000 Bordeaux
          </p>
          <div className="mt-4">
            <Link
              href="https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-765036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-primary px-4 py-1.5 text-xs font-light text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Je prends rendez-vous à CLEO
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[70] bg-transparent flex items-start justify-center px-4 pt-36 pb-6"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Galerie photo Clinique CLEO"
        >
          <div
            className="relative w-full max-w-6xl rounded-2xl overflow-hidden bg-transparent"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-20 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Fermer la galerie"
            >
              ×
            </button>

            <div className="relative h-[72vh] min-h-[360px] flex items-center justify-center px-4 md:px-6">
              <img
                src={CLEO_IMAGES[currentIndex]}
                alt={`Clinique CLEO - photo ${currentIndex + 1}`}
                className="max-h-full max-w-full object-contain rounded-2xl"
              />

              <button
                type="button"
                onClick={previousImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-black/55 text-white hover:bg-black/75 transition-colors"
                aria-label="Image précédente"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-black/55 text-white hover:bg-black/75 transition-colors"
                aria-label="Image suivante"
              >
                ›
              </button>
            </div>

            <div className="px-4 py-3 text-center text-sm text-white/85 font-light">
              {currentIndex + 1} / {CLEO_IMAGES.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
