'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

type ConsentState = 'unknown' | 'accepted' | 'rejected';

const STORAGE_KEY = 'cookie-consent';
const GA_ID = 'G-5E45GRMKCD';

export function GoogleAnalytics() {
  const [consent, setConsent] = useState<ConsentState>('unknown');

  useEffect(() => {
    try {
      const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
      if (stored === 'accepted' || stored === 'rejected') {
        setConsent(stored);
      } else {
        setConsent('unknown');
      }
    } catch {
      setConsent('unknown');
    }
  }, []);

  if (consent !== 'accepted') {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}

