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
          className="flex items-center justify-between w-full text-gray-700 hover:text-blue-900 transition"
        >
          <span>Services</span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="pl-4 mt-2 space-y-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block text-gray-600 hover:text-blue-900 transition text-sm"
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
      <button className="text-gray-700 hover:text-blue-900 transition flex items-center">
        Services
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-200">
        <div className="py-2">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

