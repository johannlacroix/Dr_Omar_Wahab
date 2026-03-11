import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Témoignages - Dr. Omar Wahab | Avis patients',
  description:
    'Découvrez les témoignages et avis de patients suivis par le Dr Omar Wahab en chirurgie esthétique, plastique et reconstructrice.',
};

export default function TemoignagesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-background-soft py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light text-neutral-800 mb-6 tracking-tight">
              Témoignages
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-xl md:text-2xl text-neutral-600 font-light tracking-wide">
              Avis et retours d’expérience de patients
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-background-soft rounded-3xl p-10 md:p-12 border border-dashed border-neutral-300 text-center">
              <p className="text-neutral-600 text-lg font-light leading-relaxed mb-4">
                Cette page est dédiée aux témoignages de patients ayant bénéficié d’une prise en charge par le Dr Omar
                Wahab. Ils pourront être organisés par type d’intervention (chirurgie mammaire, silhouette, visage,
                médecine esthétique…).
              </p>
              <p className="text-neutral-500 text-sm font-light leading-relaxed">
                Les avis seront publiés ici dès qu’ils seront disponibles, avec l’accord des patient·e·s et dans le
                respect de leur anonymat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

