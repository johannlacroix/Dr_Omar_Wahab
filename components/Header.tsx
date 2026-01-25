'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { DoctolibButton } from './DoctolibButton';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 rounded-b-2xl ${
        mounted && isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl' 
          : 'bg-white shadow-md'
      }`}
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="flex flex-col">
              <h1 className="text-2xl lg:text-3xl font-light text-neutral-800 tracking-tight group-hover:text-primary transition-colors">
                Dr. Omar Wahab
              </h1>
              <span className="text-xs lg:text-sm text-neutral-600 font-light tracking-wider uppercase">
                Chirurgien Esthétique
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-neutral-600 hover:text-primary transition-colors font-light text-sm tracking-wide relative group"
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full"></span>
            </Link>
            <Navigation />
            <Link 
              href="/a-propos" 
              className="text-neutral-600 hover:text-primary transition-colors font-light text-sm tracking-wide relative group"
            >
              À propos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full"></span>
            </Link>
            <Link 
              href="/blog" 
              className="text-neutral-600 hover:text-primary transition-colors font-light text-sm tracking-wide relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full"></span>
            </Link>
            <Link 
              href="/contact" 
              className="text-neutral-600 hover:text-primary transition-colors font-light text-sm tracking-wide relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full rounded-full"></span>
            </Link>
            <div className="ml-4">
              <DoctolibButton />
            </div>
          </nav>

          <button
            className="lg:hidden p-2 text-neutral-600 hover:text-primary transition-colors rounded-lg"
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
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-neutral-200 animate-fade-in rounded-b-2xl">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-neutral-600 hover:text-primary transition-colors font-light text-sm tracking-wide py-2 rounded-lg hover:bg-neutral-50 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <div className="pl-4">
                <Navigation mobile onClose={() => setIsMenuOpen(false)} />
              </div>
              <Link
                href="/a-propos"
                className="text-neutral-600 hover:text-primary transition-colors font-light text-sm tracking-wide py-2 rounded-lg hover:bg-neutral-50 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                href="/blog"
                className="text-neutral-600 hover:text-primary transition-colors font-light text-sm tracking-wide py-2 rounded-lg hover:bg-neutral-50 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-neutral-600 hover:text-primary transition-colors font-light text-sm tracking-wide py-2 rounded-lg hover:bg-neutral-50 px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 px-2">
                <DoctolibButton />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
