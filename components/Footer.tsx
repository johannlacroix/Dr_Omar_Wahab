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
                <Link href="/chirurgie/dermatologique" className="text-neutral-400 hover:text-primary transition-colors font-light rounded-lg hover:bg-neutral-800/50 px-2 py-1 inline-block">
                  Chirurgie Dermatologique
                </Link>
              </li>
              <li>
                <Link href="/chirurgie/intime" className="text-neutral-400 hover:text-primary transition-colors font-light rounded-lg hover:bg-neutral-800/50 px-2 py-1 inline-block">
                  Chirurgie Intime
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
                <Link href="/temoignages" className="text-neutral-400 hover:text-primary transition-colors font-light rounded-lg hover:bg-neutral-800/50 px-2 py-1 inline-block">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link href="/avant-apres" className="text-neutral-400 hover:text-primary transition-colors font-light rounded-lg hover:bg-neutral-800/50 px-2 py-1 inline-block">
                  Avant / Après
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-neutral-400 hover:text-primary transition-colors font-light rounded-lg hover:bg-neutral-800/50 px-2 py-1 inline-block">
                  Questions fréquentes
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
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-2">
              <DoctolibButton
                label="Je prends rendez-vous à Bruges"
                href="https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-61570"
                className="w-full sm:w-auto"
              />
              <DoctolibButton
                label="Je prends rendez-vous à Bordeaux"
                href="https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-765036"
                className="w-full sm:w-auto"
              />
            </div>
            <div className="mt-8">
              <h4 className="font-light mb-4 text-white tracking-wide uppercase text-sm">Réseaux sociaux</h4>
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com"
                  className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-200 hover:text-white hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17" cy="7" r="1" fill="currentColor" />
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com"
                  className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-200 hover:text-white hover:bg-primary transition-colors"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                    <path
                      d="M14 8h2V4h-2a4 4 0 0 0-4 4v2H8v4h2v6h4v-6h2v-4h-2V8a1 1 0 0 1 1-1Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com"
                  className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-200 hover:text-white hover:bg-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                    <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="7" y="10" width="2" height="6" fill="currentColor" />
                    <circle cx="8" cy="8" r="1" fill="currentColor" />
                    <path d="M12 16v-4a2 2 0 0 1 4 0v4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center rounded-t-2xl">
          <p className="text-neutral-400 text-sm font-light">© {currentYear} Dr. Omar Wahab. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
