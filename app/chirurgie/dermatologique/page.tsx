import Image from 'next/image';
import type { Metadata } from 'next';
import { DoctolibButton } from '@/components/DoctolibButton';

export const metadata: Metadata = {
  title: 'Chirurgie Dermatologique - Dr. Omar Wahab | Lésions cutanées, nævus, tumeurs bénignes',
  description:
    'Chirurgie dermatologique à Bruges : exérèse de lésions cutanées, nævus, tumeurs bénignes et cicatrices. Consultations avec le Dr Omar Wahab.',
};

export default function ChirurgieDermatologiquePage() {
  const actes = [
    {
      title: 'Exérèse de nævus et lésions bénignes',
      description:
        'Retrait localisé de grains de beauté, kystes ou autres lésions bénignes gênantes ou inesthétiques, avec analyse anatomopathologique si nécessaire.',
    },
    {
      title: 'Chirurgie des tumeurs cutanées bénignes et malignes',
      description:
        'Prise en charge chirurgicale de certaines tumeurs de la peau, avec marges de sécurité adaptées et reconstruction locale soignée.',
    },
    {
      title: 'Correction de cicatrices',
      description:
        'Reprise de cicatrices disgracieuses ou rétractiles afin d’améliorer l’aspect esthétique et le confort fonctionnel.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/Dermato/freepik_young-woman-getting-beauty-procedure-wellness-center_opti_800px.webp"
            alt="Chirurgie dermatologique"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-900/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Chirurgie Dermatologique
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
              Prise en charge des lésions cutanées et cicatrices
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-neutral-600 mb-8 font-light leading-relaxed">
                La chirurgie dermatologique permet de retirer ou de corriger des lésions cutanées tout en recherchant un
                résultat esthétique soigné. Le Dr Omar Wahab adapte la technique à chaque situation afin de conjuguer
                sécurité et qualité de cicatrisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {actes.map((acte) => (
              <div
                key={acte.title}
                className="bg-white rounded-3xl shadow-xl border border-neutral-200 p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-0.5 bg-primary mb-4 rounded-full" />
                  <h2 className="text-xl md:text-2xl font-light text-neutral-800 mb-3 tracking-tight">
                    {acte.title}
                  </h2>
                  <p className="text-neutral-600 font-light text-sm leading-relaxed">{acte.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background-soft rounded-3xl p-10 md:p-12 border border-neutral-200">
              <h2 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight">
                Consultation et prise en charge
              </h2>
              <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm">
                Chaque lésion cutanée fait l’objet d’un examen clinique attentif. Selon le contexte, une collaboration
                avec votre dermatologue ou votre médecin traitant peut être proposée afin de définir la meilleure
                stratégie thérapeutique.
              </p>
              <p className="text-neutral-600 font-light leading-relaxed text-sm">
                Un bilan précis des cicatrices attendues, des suites opératoires et des modalités de prise en charge
                (éventuelle couverture par l’Assurance maladie en fonction des indications) est réalisé en consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-light text-neutral-800 mb-4 tracking-tight">
              Prendre rendez-vous
            </h2>
            <p className="text-neutral-600 mb-8 font-light text-sm">
              Réservez une consultation pour évaluer une lésion cutanée ou discuter d’une correction cicatricielle.
            </p>
            <div className="flex justify-center">
              <DoctolibButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

