'use client';

import { useEffect, useState } from 'react';

type ConsentState = 'unknown' | 'accepted' | 'rejected';

const STORAGE_KEY = 'cookie-consent';

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>('unknown');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
      if (stored === 'accepted' || stored === 'rejected') {
        setConsent(stored);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  if (!mounted || consent !== 'unknown') {
    return null;
  }

  const handle = (value: ConsentState) => {
    setConsent(value);
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-6">
      <div className="max-w-4xl mx-auto bg-neutral-900 text-white rounded-2xl shadow-2xl border border-neutral-800 p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-xs md:text-sm font-light leading-relaxed">
          <p>
            Ce site utilise Google Analytics pour mesurer l&apos;audience de manière anonyme. Vous pouvez accepter ou
            refuser ce suivi. En l&apos;absence de consentement, aucun cookie de mesure d&apos;audience n&apos;est
            déposé.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handle('rejected')}
            className="px-4 py-2 rounded-full border border-neutral-600 text-xs md:text-sm font-light hover:bg-neutral-800 transition-colors"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => handle('accepted')}
            className="px-4 py-2 rounded-full bg-primary text-neutral-900 text-xs md:text-sm font-light hover:bg-primary/90 transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}

