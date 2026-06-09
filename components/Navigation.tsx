'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface NavigationProps {
  mobile?: boolean;
  onClose?: () => void;
}

const services = [
  { name: 'Chirurgie Mammaire', href: '/chirurgie/mammaire' },
  { name: 'Chirurgie de la Silhouette', href: '/chirurgie/silhouette' },
  { name: 'Chirurgie du Visage', href: '/chirurgie/visage' },
  { name: 'Chirurgie dermatologique', href: '/chirurgie/dermatologique' },
  { name: 'Chirurgie intime', href: '/chirurgie/intime' },
  { name: 'Médecine Esthétique', href: '/medecine-esthetique' },
];

export function Navigation({ mobile = false, onClose }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setIsOpen(false);

  const handleLinkClick = () => {
    closeMenu();
    onClose?.();
  };

  useEffect(() => {
    if (!isOpen || mobile) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, mobile]);

  if (mobile) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-interventions-menu"
          className="flex items-center justify-between w-full text-neutral-600 hover:text-primary-dark transition-colors font-light text-sm tracking-wide py-2"
        >
          <span>Interventions</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div id="mobile-interventions-menu" className="pl-4 mt-2 space-y-2 animate-fade-in">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block text-neutral-500 hover:text-primary-dark transition-colors text-sm font-light py-1"
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
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        ref={buttonRef}
        type="button"
        className="text-neutral-600 hover:text-primary-dark transition-colors font-light text-sm tracking-wide relative flex items-center"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="desktop-interventions-menu"
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
      >
        Interventions
        <svg
          className={`w-3 h-3 ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
      </button>
      <div
        id="desktop-interventions-menu"
        className={`absolute top-full left-0 mt-4 w-72 bg-white rounded-sm shadow-xl transition-all duration-300 border border-neutral-100 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="py-2" role="menu">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              role="menuitem"
              className="block px-6 py-3 text-neutral-600 hover:bg-neutral-50 hover:text-primary-dark transition-all font-light text-sm tracking-wide"
              onClick={closeMenu}
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
