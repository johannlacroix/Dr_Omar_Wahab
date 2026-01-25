import Link from 'next/link';
import Image from 'next/image';
import { DoctolibButton } from '@/components/DoctolibButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Accueil - Dr. Omar Wahab | Chirurgien Esthétique à Bruges",
  description: "Dr. Omar Wahab, chirurgien esthétique à Bruges. Spécialisé en chirurgie mammaire, silhouette, visage et médecine esthétique. Consultation sur rendez-vous.",
};

export default function Home() {
  const services = [
    {
      title: 'Chirurgie Mammaire',
      description: 'Augmentation, réduction, lifting mammaire et corrections diverses pour retrouver une poitrine harmonieuse.',
      href: '/chirurgie/mammaire',
      image: '/Visage/pexels-shiny-diamond-3373716_opti_800px.webp',
    },
    {
      title: 'Chirurgie de la Silhouette',
      description: 'Lipoaspiration, abdominoplastie, lifting des bras et des cuisses pour sculpter votre silhouette.',
      href: '/chirurgie/silhouette',
      image: '/Cabinet/pexels-karola-g-5207029_opti_800px.webp',
    },
    {
      title: 'Chirurgie du Visage',
      description: 'Rhinoplastie, blépharoplastie, lifting facial et lipofilling pour rajeunir et harmoniser.',
      href: '/chirurgie/visage',
      image: '/Visage/pexels-shiny-diamond-3373732_opti_800px.webp',
    },
    {
      title: 'Médecine Esthétique',
      description: 'Injections de Botox, acide hyaluronique et traitements non invasifs pour un rajeunissement naturel.',
      href: '/medecine-esthetique',
      image: '/Visage/pexels-shiny-diamond-3762408_opti_800px.webp',
    },
  ];

  const values = [
    {
      title: 'Expertise reconnue',
      description: 'Formation approfondie et expérience en chirurgie esthétique',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Consultation personnalisée',
      description: 'Écoute attentive et accompagnement tout au long de votre parcours',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: 'Résultats naturels',
      description: 'Techniques modernes pour des résultats harmonieux et naturels',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Hero Section - Vertical, centré */}
      <section className="relative min-h-screen flex items-center py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Cabinet/pexels-ivan-s-4989167_opti_800px.webp"
            alt="Dr. Omar Wahab"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/60 to-neutral-900/80"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
              Dr. Omar Wahab
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-2xl md:text-3xl text-white/95 font-light tracking-wide mb-4">
              Chirurgien Esthétique à Bruges
            </p>
            <p className="text-lg md:text-xl text-white/85 font-light max-w-2xl mx-auto leading-relaxed mb-12">
              Spécialisé en chirurgie mammaire, silhouette, visage et médecine esthétique. 
              Accompagnement personnalisé pour votre bien-être et votre confiance.
            </p>
            <div className="flex justify-center">
              <DoctolibButton />
            </div>
          </div>
        </div>
      </section>

      {/* Section Services - Vertical, une carte par ligne sur mobile */}
      <section className="py-20 md:py-32 bg-background-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-4 tracking-tight">
                Nos Services
              </h2>
              <div className="w-16 h-0.5 bg-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
                Des interventions personnalisées pour répondre à vos attentes
              </p>
            </div>
            
            <div className="space-y-8 md:space-y-12">
              {services.map((service, index) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 hover:border-primary">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-80 overflow-hidden order-2 md:order-1">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/40 to-transparent"></div>
                      </div>
                      <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
                        <div className="w-12 h-0.5 bg-primary mb-6 group-hover:w-16 transition-all duration-300 rounded-full"></div>
                        <h3 className="text-3xl md:text-4xl font-light text-neutral-800 mb-4 group-hover:text-primary transition-colors tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-neutral-600 font-light text-lg leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="text-primary font-light text-sm tracking-wide flex items-center group-hover:translate-x-2 transition-transform">
                          En savoir plus
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir - Vertical */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-4 tracking-tight">
                Pourquoi choisir le Dr. Omar Wahab ?
              </h2>
              <div className="w-16 h-0.5 bg-primary mx-auto mb-6 rounded-full"></div>
            </div>
            
            <div className="space-y-12 md:space-y-16">
              {values.map((value, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
                      <div className="relative text-primary">
                        {value.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-light text-neutral-800 mb-4 tracking-tight">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600 font-light text-lg leading-relaxed max-w-2xl">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Cabinet - Vertical avec image */}
      <section className="py-20 md:py-32 bg-background-warm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src="/Esthétique/pexels-cottonbro-7581581_opti_800px.webp"
                  alt="Cabinet"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent"></div>
              </div>
              <div className="p-8 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-light text-neutral-800 mb-6 tracking-tight">
                  Excellence et confiance
                </h3>
                <p className="text-neutral-600 font-light text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Un cabinet moderne et accueillant pour vous accompagner dans votre parcours esthétique
                </p>
                <Link
                  href="/a-propos"
                  className="inline-block px-8 py-3 bg-transparent border-2 border-primary text-primary font-light text-sm tracking-wide hover:bg-primary hover:text-white transition-all duration-300 rounded-lg"
                >
                  En savoir plus sur le Dr. Wahab
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Vertical, centré */}
      <section className="py-20 md:py-32 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Prêt à commencer votre parcours ?
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Prenez rendez-vous pour une consultation personnalisée
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
