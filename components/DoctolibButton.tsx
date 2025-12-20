import Link from 'next/link';

const DOCTOLIB_URL = 'https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab/booking/motive-categories?specialityId=18&telehealth=false&placeId=practice-61570&bookingFunnelSource=profile';

export function DoctolibButton() {
  return (
    <Link
      href={DOCTOLIB_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      Prendre RDV
    </Link>
  );
}

