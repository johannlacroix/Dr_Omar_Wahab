import { DoctolibButton } from '@/components/DoctolibButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact - Dr. Omar Wahab | Prendre rendez-vous",
  description: "Contactez le Dr. Omar Wahab, chirurgien esthétique à Bruges. Prenez rendez-vous en ligne via Doctolib.",
};

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
            Contact
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Informations */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informations de contact
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cabinet</h3>
                  <p className="text-gray-700">
                    Dr. Omar Wahab<br />
                    Chirurgien Esthétique<br />
                    Bruges
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Prise de rendez-vous</h3>
                  <p className="text-gray-700 mb-4">
                    Pour prendre rendez-vous, utilisez notre plateforme de réservation en ligne.
                  </p>
                  <DoctolibButton />
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Horaires de consultation
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Les consultations se font sur rendez-vous uniquement.
                </p>
                <p className="text-gray-700">
                  Veuillez réserver votre créneau via la plateforme Doctolib 
                  pour garantir votre disponibilité.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-900 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à prendre rendez-vous ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Réservez votre consultation en ligne en quelques clics
            </p>
            <DoctolibButton />
          </div>
        </div>
      </div>
    </div>
  );
}

