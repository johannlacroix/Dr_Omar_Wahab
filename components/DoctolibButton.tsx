import Link from 'next/link';

const DOCTOLIB_URL =
  'https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-61570';

export function DoctolibButton() {
  return (
    <Link
      href={DOCTOLIB_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-light text-sm tracking-wide rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 uppercase"
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
          Je prends rendez-vous
    </Link>
  );
}
