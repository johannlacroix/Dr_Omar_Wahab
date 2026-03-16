import Link from 'next/link';

const DEFAULT_DOCTOLIB_URL =
  'https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-61570';

interface DoctolibButtonProps {
  label?: string;
  href?: string;
  /** Variante de taille : 'hero' ou 'default' */
  size?: 'hero' | 'default';
  /** Classes supplémentaires (par ex. largeur forcée) */
  className?: string;
}

export function DoctolibButton({
  label = 'Je prends rendez-vous',
  href = DEFAULT_DOCTOLIB_URL,
  size = 'default',
  className,
}: DoctolibButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center bg-primary text-white font-light tracking-wide rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 uppercase';
  const sizeClasses =
    size === 'hero'
      ? 'px-3 md:px-4 lg:px-6 py-2 md:py-2.5 text-[9px] md:text-[11px] lg:text-xs'
      : 'px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm';

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses} ${className ?? ''}`}
    >
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      {label}
    </Link>
  );
}
