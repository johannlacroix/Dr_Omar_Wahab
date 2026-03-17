import Image from 'next/image';
import Link from 'next/link';
import { DoctolibButton } from '@/components/DoctolibButton';
import { MapTabs } from '@/components/MapTabs';
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
            src="/Cabinet/Plaque_signal.png"
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
            {/* Coordonnées et adresses */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-neutral-200">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/Cabinet/Omar_Wahab_Salle d_attente_4.jpeg"
                  alt="Orthopole - cabinet du Dr Wahab"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/20 to-transparent"></div>
              </div>
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-light text-neutral-800 mb-8 tracking-tight">
                  Coordonnées et adresses
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-light text-neutral-500 mb-3 tracking-wide uppercase text-sm">
                      Orthopôle à Bruges
                    </h3>
                    <p className="text-neutral-600 font-light leading-relaxed text-sm">
                      53 bis avenue Maryse Bastié<br />
                      33520 Bruges
                    </p>
                    <div className="mt-4">
                      <Link
                        href="https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-61570"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-primary px-4 py-1.5 text-xs font-light text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        Je prends rendez-vous à Orthopôle
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-light text-neutral-500 mb-3 tracking-wide uppercase text-sm">
                      Clinique CLEO à Bordeaux
                    </h3>
                    <p className="text-neutral-600 font-light leading-relaxed text-sm">
                      12 rue Falquet<br />
                      33000 Bordeaux
                    </p>
                    <div className="mt-4">
                      <Link
                        href="https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-765036"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-primary px-4 py-1.5 text-xs font-light text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        Je prends rendez-vous à CLEO
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Horaires et prise de rendez-vous */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-neutral-200">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/Cabinet/fde2da89-ce24-440d-92b9-0ed06952926a.png"
                  alt="Horaires et accueil du cabinet"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 35%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/20 to-transparent"></div>
              </div>
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-light text-neutral-800 mb-8 tracking-tight">
                  Horaires et prise de rendez-vous
                </h2>
                <div className="bg-background-soft rounded-xl p-6 mb-8">
                  <p className="text-neutral-600 mb-4 font-light leading-relaxed text-lg">
                    Les consultations se font sur rendez-vous uniquement, principalement à Orthopole à Bruges.
                  </p>
                  <div className="text-neutral-600 font-light leading-relaxed text-sm space-y-1.5">
                    <p className="font-semibold text-neutral-700">Horaires indicatifs à Orthopole :</p>
                    <p>Lundi : 14h00 – 17h00</p>
                    <p>Jeudi : 9h00 – 20h00</p>
                    <p>Vendredi : 9h00 – 17h00</p>
                    <p>Samedi (une semaine sur deux) : 9h00 – 12h00</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-light text-neutral-500 mb-4 tracking-wide uppercase text-sm">
                    Prendre rendez-vous en ligne
                  </h3>
                  <p className="text-neutral-600 mb-6 font-light leading-relaxed text-lg">
                    Pour réserver une consultation, utilisez la plateforme de réservation en ligne Doctolib.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-2">
                    <DoctolibButton
                      label="Je prends rendez-vous à Bruges"
                      href="https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-61570"
                      className="w-full sm:w-auto"
                    />
                    <DoctolibButton
                      label="Je prends rendez-vous à Bordeaux"
                      href="https://www.doctolib.fr/chirurgien-plastique/bruges/omar-wahab?pid=practice-765036"
                      className="w-full sm:w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact et cartes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-light text-neutral-800 mb-6 tracking-tight">
                  Formulaire de contact
                </h2>
                <p className="text-neutral-600 mb-6 font-light leading-relaxed text-sm">
                  Pour toute question ou demande d’information, vous pouvez également nous écrire via ce formulaire.
                  Pour la prise de rendez-vous, merci de privilégier Doctolib. Pendant votre délai de réflexion avant
                  une éventuelle intervention, ce formulaire et l’e-mail du cabinet peuvent aussi être utilisés pour
                  poser des questions complémentaires.
                </p>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-light text-neutral-700 mb-1.5">Nom</label>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm font-light focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-light text-neutral-700 mb-1.5">Prénom</label>
                      <input
                        type="text"
                        className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm font-light focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-white"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-light text-neutral-700 mb-1.5">E-mail</label>
                      <input
                        type="email"
                        className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm font-light focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-light text-neutral-700 mb-1.5">Téléphone</label>
                      <input
                        type="tel"
                        className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm font-light focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-light text-neutral-700 mb-1.5">
                      Type d&apos;intervention (indicatif)
                    </label>
                    <select className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm font-light focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-white">
                      <option>Chirurgie mammaire</option>
                      <option>Chirurgie de la silhouette</option>
                      <option>Chirurgie du visage</option>
                      <option>Chirurgie dermatologique</option>
                      <option>Chirurgie intime</option>
                      <option>Médecine esthétique / injections</option>
                      <option>Autre / à préciser</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-light text-neutral-700 mb-1.5">Votre message</label>
                    <textarea
                      rows={4}
                      className="w-full rounded-xl border border-neutral-300 px-3 py-2 text-sm font-light focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary bg-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-2.5 text-sm font-light text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>

              <MapTabs />
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
        </div>
      </section>
    </div>
  );
}
