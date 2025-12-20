'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Navigation } from './Navigation';
import { DoctolibButton } from './DoctolibButton';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-blue-900">
              Dr. Omar Wahab
            </h1>
            <span className="text-sm text-gray-600">Chirurgien Esthétique</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition">
              Accueil
            </Link>
            <Navigation />
            <Link href="/a-propos" className="text-gray-700 hover:text-blue-900 transition">
              À propos
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-900 transition">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 transition">
              Contact
            </Link>
            <DoctolibButton />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-900 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <div className="pl-4">
                <Navigation mobile onClose={() => setIsMenuOpen(false)} />
              </div>
              <Link
                href="/a-propos"
                className="text-gray-700 hover:text-blue-900 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-blue-900 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-900 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <DoctolibButton />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

