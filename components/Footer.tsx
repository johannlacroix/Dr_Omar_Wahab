import Link from 'next/link';
import { DoctolibButton } from './DoctolibButton';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white rounded-t-3xl">
      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div>
            <h3 className="text-xl font-light mb-6 text-primary tracking-tight">Dr. Omar Wahab</h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Chirurgien esthétique à Bruges, spécialisé en chirurgie mammaire, 
              silhouette, visage et médecine esthétique.
            </p>
          </div>

          <div>
            <h4 className="font-light mb-6 text-white tracking-wide uppercase text-sm">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/chirurgie/mammaire" className="text-neutral-400 hover:text-primary transition-colors font-light rounded-lg hover:bg-neutral-800/50 px-2 py-1 inline-block">
                  Chirurgie Mammaire
                </Link>
              </li>
              <li>
                <Link href="/chirurgie/silhouette" className="text-neutral-400 hover:text-primary transition-colors font-light rounded-lg hover:bg-neutral-800/50 px-2 py-1 inline-block">
                  Chirurgie de la Silhouette
                </Link>
              </li>
              <li>
                <Link href="/chirurgie/visage" className="text-neutral-400 hover:text-primary transition-colors font-light rounded-lg hover:bg-neutral-800/50 px-2 py-1 inline-block">
                  Chirurgie du Visage
                </Link>
              </li>
              <li>
                <Link href="/medecine-esthetique" className="text-neutral-400 hover:text-primary transition-colors font-light rounded-lg hover:bg-neutral-800/50 px-2 py-1 inline-block">
                  Médecine Esthétique
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-light mb-6 text-white tracking-wide uppercase text-sm">Informations</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/a-propos" className="text-neutral-400 hover:text-primary transition-colors font-light rounded-lg hover:bg-neutral-800/50 px-2 py-1 inline-block">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-400 hover:text-primary transition-colors font-light rounded-lg hover:bg-neutral-800/50 px-2 py-1 inline-block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-primary transition-colors font-light rounded-lg hover:bg-neutral-800/50 px-2 py-1 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-neutral-400 hover:text-primary transition-colors font-light rounded-lg hover:bg-neutral-800/50 px-2 py-1 inline-block">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-light mb-6 text-white tracking-wide uppercase text-sm">Prendre rendez-vous</h4>
            <p className="text-neutral-400 text-sm mb-6 font-light leading-relaxed">
              Réservez votre consultation en ligne
            </p>
            <DoctolibButton />
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center rounded-t-2xl">
          <p className="text-neutral-400 text-sm font-light">© {currentYear} Dr. Omar Wahab. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
