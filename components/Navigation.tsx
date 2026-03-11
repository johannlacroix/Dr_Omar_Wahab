'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavigationProps {
  mobile?: boolean;
  onClose?: () => void;
}

export function Navigation({ mobile = false, onClose }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: 'Chirurgie Mammaire', href: '/chirurgie/mammaire' },
    { name: 'Chirurgie de la Silhouette', href: '/chirurgie/silhouette' },
    { name: 'Chirurgie du Visage', href: '/chirurgie/visage' },
    { name: 'Chirurgie dermatologique', href: '/chirurgie/dermatologique' },
    { name: 'Chirurgie intime', href: '/chirurgie/intime' },
    { name: 'Médecine Esthétique', href: '/medecine-esthetique' },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  if (mobile) {
    return (
      <div>
        <button
          onClick={handleToggle}
          className="flex items-center justify-between w-full text-[#4a4a4a] hover:text-[#d4af8c] transition-colors font-light text-sm tracking-wide py-2"
        >
          <span>Services</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="pl-4 mt-2 space-y-2 animate-fade-in">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block text-[#6b6b6b] hover:text-[#d4af8c] transition-colors text-sm font-light py-1"
                onClick={handleLinkClick}
              >
                {service.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative group">
      <button className="text-[#4a4a4a] hover:text-[#d4af8c] transition-colors font-light text-sm tracking-wide relative flex items-center">
        Services
        <svg
          className="w-3 h-3 ml-1 transition-transform group-hover:rotate-180 duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af8c] transition-all group-hover:w-full"></span>
      </button>
      <div className="absolute top-full left-0 mt-4 w-72 bg-white rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-[#f5f1ed]">
        <div className="py-2">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="block px-6 py-3 text-[#4a4a4a] hover:bg-[#f5f1ed] hover:text-[#d4af8c] transition-all font-light text-sm tracking-wide"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
