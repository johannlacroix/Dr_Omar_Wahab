import Image from 'next/image';
import { DoctolibButton } from '@/components/DoctolibButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact - Dr. Omar Wahab | Prendre rendez-vous",
  description: "Contactez le Dr. Omar Wahab, chirurgien esthétique à Bruges. Prenez rendez-vous en ligne via Doctolib.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/Cabinet/pexels-mart-production-7088483_opti_800px.webp"
            alt="Contact"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/50 to-neutral-900/70"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              Contact
            </h1>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-neutral-200">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/Silouhette/pexels-toni-8294697_opti_800px.webp"
                  alt="Cabinet"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/20 to-transparent"></div>
              </div>
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-light text-neutral-800 mb-8 tracking-tight">
                  Informations de contact
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-light text-neutral-500 mb-3 tracking-wide uppercase text-sm">Cabinet</h3>
                    <p className="text-neutral-600 font-light leading-relaxed text-lg">
                      Dr. Omar Wahab<br />
                      Chirurgien Esthétique<br />
                      Bruges
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-neutral-200">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/Cabinet/pexels-ivan-s-4989167_opti_800px.webp"
                  alt="Horaires"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/20 to-transparent"></div>
              </div>
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-light text-neutral-800 mb-8 tracking-tight">
                  Horaires de consultation
                </h2>
                <div className="bg-background-soft rounded-xl p-6 mb-8">
                  <p className="text-neutral-600 mb-4 font-light leading-relaxed text-lg">
                    Les consultations se font sur rendez-vous uniquement.
                  </p>
                  <p className="text-neutral-600 font-light leading-relaxed text-lg">
                    Veuillez réserver votre créneau via la plateforme Doctolib 
                    pour garantir votre disponibilité.
                  </p>
                </div>
                <div>
                  <h3 className="font-light text-neutral-500 mb-4 tracking-wide uppercase text-sm">Prise de rendez-vous</h3>
                  <p className="text-neutral-600 mb-6 font-light leading-relaxed text-lg">
                    Pour prendre rendez-vous, utilisez notre plateforme de réservation en ligne.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <DoctolibButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-10 md:p-12 text-center shadow-xl border border-neutral-200">
              <h2 className="text-3xl md:text-4xl font-light text-neutral-800 mb-6 tracking-tight">
                Prêt à prendre rendez-vous ?
              </h2>
              <div className="w-16 h-0.5 bg-primary mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-neutral-600 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                Réservez votre consultation en ligne en quelques clics
              </p>
              <div className="flex justify-center">
                <DoctolibButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
