import Image from 'next/image';
import type { Metadata } from 'next';
import { DoctolibButton } from '@/components/DoctolibButton';
import { NymphoplastieCard } from '@/components/NymphoplastieCard';

export const metadata: Metadata = {
  title: 'Chirurgie Intime - Dr. Omar Wahab | Femme et Homme',
  description:
    'Chirurgie intime à Bruges : prise en charge discrète et personnalisée des demandes féminines et masculines. Consultations avec le Dr Omar Wahab.',
};

export default function ChirurgieIntimePage() {
  const actes = [
    {
      title: 'Chirurgie intime féminine',
      description:
        'Prise en charge des gênes fonctionnelles ou esthétiques intimes (lèvres, volume, cicatrices) dans le respect de l’anatomie et des attentes de chaque patiente.',
    },
    {
      title: 'Chirurgie intime masculine',
      description:
        'Correction de certaines anomalies de forme ou de volume, ainsi que de séquelles cicatricielles, avec une information précise sur les bénéfices et les limites.',
    },
    {
      title: 'Séquelles et cicatrices',
      description:
        'Traitement de cicatrices ou d’inconforts consécutifs à des interventions ou à des pathologies antérieures, avec une approche globale du confort intime.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/Intime/pexels-pixabay-414362_opti_800px.webp"
            alt="Chirurgie intime"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-900/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Chirurgie Intime
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
              Une prise en charge discrète et personnalisée
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <NymphoplastieCard image="/Intime/pexels-jonaorle-12746161_opti_800px - Nympho_opti_800px.webp" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-neutral-600 mb-8 font-light leading-relaxed">
                Les demandes de chirurgie intime nécessitent une écoute attentive, une information claire et un grand
                respect de la confidentialité. Le Dr Omar Wahab aborde ces interventions avec prudence et bienveillance,
                en veillant à l’équilibre entre confort, fonction et esthétique.
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
                Consultation en toute confiance
              </h2>
              <p className="text-neutral-600 mb-4 font-light leading-relaxed text-sm">
                La première consultation permet de comprendre précisément la gêne ressentie, d’expliquer les options
                possibles et de vérifier les indications médicales. Un temps particulier est accordé à l’information sur
                les suites et le résultat attendu.
              </p>
              <p className="text-neutral-600 font-light leading-relaxed text-sm">
                Certaines interventions peuvent relever d’une prise en charge partielle par l’Assurance maladie lorsqu’il
                existe une pathologie identifiée ; ce point est discuté au cas par cas en consultation.
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
              Réservez une consultation dans un cadre confidentiel pour évoquer vos questions de chirurgie intime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <DoctolibButton
                label="Je prends rendez-vous à Bruges"
                href="https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-61570"
                className="w-full sm:w-64"
              />
              <DoctolibButton
                label="Je prends rendez-vous à Bordeaux"
                href="https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-765036"
                className="w-full sm:w-64"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

