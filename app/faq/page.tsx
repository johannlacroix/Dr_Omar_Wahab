import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Questions fréquentes - Dr. Omar Wahab | FAQ',
  description:
    'Questions fréquentes sur la chirurgie esthétique, la convalescence, les risques et le déroulement des consultations avec le Dr Omar Wahab.',
};

const faqs = [
  {
    question: 'Quels sont les risques associés aux interventions de chirurgie esthétique ?',
    answer:
      'Comme toute intervention chirurgicale, la chirurgie esthétique comporte des risques (hématome, infection, retard de cicatrisation, etc.). Ils sont expliqués en détail en consultation, en fonction de votre état de santé, du type de geste envisagé et des recommandations scientifiques en vigueur.',
  },
  {
    question: 'Combien de temps dure la convalescence après une intervention ?',
    answer:
      'La durée de la convalescence varie selon le type d’intervention. Certaines procédures de médecine esthétique permettent une reprise quasi immédiate des activités, tandis qu’une chirurgie mammaire ou de la silhouette peut nécessiter plusieurs jours à quelques semaines de repos. Un calendrier précis des suites vous est remis en consultation.',
  },
  {
    question: 'Comment savoir quelle procédure est la plus adaptée à ma situation ?',
    answer:
      'La première consultation est dédiée à l’écoute de vos attentes et à l’examen clinique. Le Dr Omar Wahab vous explique les différentes options possibles, leurs bénéfices, leurs limites et leurs risques, afin de choisir avec vous la solution la plus adaptée à votre morphologie et à votre projet.',
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-background-soft py-20 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light text-neutral-800 mb-6 tracking-tight">
              Questions fréquentes
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-xl md:text-2xl text-neutral-600 font-light tracking-wide">
              Quelques réponses aux questions les plus courantes
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="bg-background-soft rounded-2xl p-6 md:p-8 border border-neutral-200"
              >
                <h2 className="text-lg md:text-xl font-light text-neutral-800 mb-3 tracking-tight">
                  {item.question}
                </h2>
                <p className="text-neutral-600 font-light text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

