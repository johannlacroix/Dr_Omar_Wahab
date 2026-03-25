import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white rounded-t-3xl">
      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div>
            <h3 className="text-xl font-light mb-6 text-primary tracking-tight">Dr. Omar Wahab</h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Chirurgien esthétique à Bruges et Bordeaux, spécialisé en chirurgie mammaire, 
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
                <a
                  href="https://www.google.com/search?sca_esv=b0109be66d9778c1&sxsrf=ANbL-n59Xg4zgZilsGzyVifWpmSrX2oANQ:1773322246305&q=dr+wahab&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOcaH2UvvokEDX8PBwgZjzbqOK5GrBde-oCbpiEbJOFjAx7TB_CFpC1JQta0OhcrPdL6kpcY%3D&uds=ALYpb_kiiUNHkONghgvqB_3sKPHuGxhmG5VPqDGcgAdxlg5rMgxHFTXsahyHeDWuC9wElkm1wnfD06AW4SxD1isrFUHAoX9yCCPSLWztAbkKUXyDllStsnc&sa=X&ved=2ahUKEwixt8CUvJqTAxUIdqQEHeriGzcQ3PALegQIFxAE&biw=1970&bih=897&dpr=0.97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary transition-colors font-light rounded-lg hover:bg-neutral-800/50 px-2 py-1 inline-block"
                >
                  Avis Google (GBP)
                </a>
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
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-61570"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-primary transition-colors font-light rounded-lg hover:bg-neutral-800/50 px-2 py-1 inline-block"
                >
                  A Bruges
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-765036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-primary transition-colors font-light rounded-lg hover:bg-neutral-800/50 px-2 py-1 inline-block"
                >
                  A Bordeaux
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center rounded-t-2xl">
          <p className="text-neutral-400 text-sm font-light">
            © {currentYear} Dr. Omar Wahab. Tous droits réservés.
          </p>
          <p className="text-neutral-500 text-xs font-light mt-1">
            Site conçu par Johann Lacroix, chef de projet digital – <a href="mailto:projlacroix@gmail.com" className="underline hover:text-primary">projlacroix@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
