'use client';

import { useState } from 'react';

type TabKey = 'orthopole' | 'cleo';

const TABS: { key: TabKey; label: string; description: string; iframeSrc: string }[] = [
  {
    key: 'orthopole',
    label: 'Orthopôle à Bruges',
    description: 'Cabinet principal du Dr Wahab à Orthopôle, 53 bis avenue Maryse Bastié, 33520 Bruges.',
    iframeSrc:
      'https://www.google.com/maps?q=Orthopole%2053%20Bis%20Avenue%20Maryse%20Basti%C3%A9%2033520%20Bruges&output=embed',
  },
  {
    key: 'cleo',
    label: 'Clinique CLEO à Bordeaux',
    description: 'Consultations à la clinique CLEO, 12 rue Falquet, 33200 Bordeaux.',
    iframeSrc: 'https://www.google.com/maps?q=12%20Rue%20Falquet%2033200%20Bordeaux&output=embed',
  },
];

export function MapTabs() {
  const [active, setActive] = useState<TabKey>('orthopole');
  const current = TABS.find((tab) => tab.key === active)!;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8 md:p-10 flex flex-col">
      <h2 className="text-2xl md:text-3xl font-light text-neutral-800 mb-4 tracking-tight">
        Localisation du cabinet
      </h2>

      <div className="inline-flex mb-4 rounded-full border border-neutral-200 bg-neutral-50 p-1 text-xs md:text-sm">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className={`px-3 md:px-4 py-1.5 rounded-full transition-colors ${
              tab.key === active
                ? 'bg-primary text-white'
                : 'text-neutral-700 hover:bg-white hover:text-neutral-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm">{current.description}</p>

      <div className="flex-1 rounded-2xl overflow-hidden border border-neutral-200 bg-background-soft mb-4">
        <iframe
          title={current.label}
          src={current.iframeSrc}
          className="w-full h-64 md:h-72 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(current.label)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-primary px-4 py-1.5 text-xs font-light text-primary hover:bg-primary hover:text-white transition-colors"
        >
          Ouvrir dans Google Maps
        </a>
      </div>
    </div>
  );
}

