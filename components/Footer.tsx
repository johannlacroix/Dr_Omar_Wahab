import Link from 'next/link';
import { DoctolibButton } from './DoctolibButton';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Omar Wahab</h3>
            <p className="text-gray-400 text-sm">
              Chirurgien esthétique à Bruges, spécialisé en chirurgie mammaire, 
              silhouette, visage et médecine esthétique.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/chirurgie/mammaire" className="hover:text-white transition">
                  Chirurgie Mammaire
                </Link>
              </li>
              <li>
                <Link href="/chirurgie/silhouette" className="hover:text-white transition">
                  Chirurgie de la Silhouette
                </Link>
              </li>
              <li>
                <Link href="/chirurgie/visage" className="hover:text-white transition">
                  Chirurgie du Visage
                </Link>
              </li>
              <li>
                <Link href="/medecine-esthetique" className="hover:text-white transition">
                  Médecine Esthétique
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/a-propos" className="hover:text-white transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-white transition">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4">Prendre rendez-vous</h4>
            <p className="text-gray-400 text-sm mb-4">
              Réservez votre consultation en ligne
            </p>
            <DoctolibButton />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Dr. Omar Wahab. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

