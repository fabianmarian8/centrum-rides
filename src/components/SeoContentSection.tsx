'use client';

import type { ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SeoSection {
  title: string;
  paragraphs: ReactNode[];
}

const translations: Record<
  'en' | 'es',
  {
    heading: string;
    intro: ReactNode;
    sections: SeoSection[];
  }
> = {
  en: {
    heading: 'Military taxi service from Lešť Slavia NATO base',
    intro:
      'TaxiForce is a dedicated military taxi service in Slovakia supporting Spanish personnel stationed at the Lešť military base (Slavia 1) and nearby NATO facilities in central Slovakia.',
    sections: [
      {
        title: 'Taxi Lešť military base specialists',
        paragraphs: [
          'Our taxi Lešť military base operations follow NATO security procedures, offering vetted English- and Spanish-speaking drivers familiar with duty schedules. The team understands the requirements of every taxi Slavia NATO base Slovakia assignment, ensuring secure pick-ups and discreet returns to the barracks.',
        ],
      },
      {
        title: 'Coverage for Zvolen, Banská Bystrica and Bratislava airport',
        paragraphs: [
          'We coordinate daily missions to Zvolen Castle, SNP Square, Europa Shopping Center, OC Terminal and the main dining zones in Banská Bystrica. Dedicated coordinators also arrange airport transfer Bratislava military requests with fixed pricing, flight monitoring and standby return rides back to the training area.',
        ],
      },
      {
        title: 'English speaking taxi near Lešť military base',
        paragraphs: [
          (
            <>
              Our <strong>English speaking taxi Slovakia</strong> service bridges communication gaps for international NATO personnel. Every <strong>Spanish speaking driver Slovakia</strong> assignment includes multilingual support, ensuring clear coordination for complex military schedules and secure transportation protocols.
            </>
          ),
        ],
      },
      {
        title: '24/7 military taxi service central Slovakia',
        paragraphs: [
          (
            <>
              Operating as a <strong>24 hour military taxi</strong> service, TaxiForce maintains round-the-clock readiness for urgent deployments, late-night returns, and early morning missions. Our <strong>cash taxi military</strong> options provide flexibility for personnel without card payment systems.
            </>
          ),
        ],
      },
      {
        title: 'Focused NATO base transportation in Slovakia',
        paragraphs: [
          (
            <>
              TaxiForce actively optimises content around <strong>military taxi service Slovakia</strong> and <strong>NATO base transportation Slovakia</strong>, combining field experience with rapid <strong>WhatsApp taxi booking</strong>. The result is a trusted logistics partner for allied troops requiring reliable movements between Lešť, Slavia 1, Zvolen and other mission-critical locations.
            </>
          ),
        ],
      },
    ],
  },
  es: {
    heading: 'Taxi militar desde la base Lešť Slavia para tropas españolas',
    intro:
      'TaxiForce es un servicio de taxi base militar en Eslovaquia que acompaña al personal español desplegado en la base NATO Lešť-Slavia y en las instalaciones aliadas del centro del país.',
    sections: [
      {
        title: 'Transporte militar Lešť Slavia con protocolos OTAN',
        paragraphs: [
          'Nuestros coordinadores gestionan cada transporte militar Lešť Slavia siguiendo procedimientos de seguridad, con conductores acreditados y bilingües. El equipo conoce las necesidades de los destacamentos españoles y ofrece discreción total en cada trayecto puerta a puerta.',
        ],
      },
      {
        title: 'Cobertura hacia Zvolen, Banská Bystrica y aeropuerto de Bratislava',
        paragraphs: [
          'Organizamos traslados diarios al Castillo de Zvolen, Plaza SNP, Europa Shopping Center, OC Terminal y los restaurantes clave de Banská Bystrica. Para cada taxi aeropuerto Bratislava militar realizamos seguimiento de vuelos, tarifas cerradas y coordinación del viaje de regreso a la base de instrucción.',
        ],
      },
      {
        title: 'Conductor español base OTAN Eslovaquia',
        paragraphs: [
          (
            <>
              Nuestro servicio de <strong>taxi militar español</strong> elimina barreras idiomáticas para el personal destacado. Cada <strong>conductor habla español</strong> y entiende protocolos militares, garantizando comunicación fluida en cada <strong>taxi para militares</strong> y <strong>servicio taxi soldados</strong>.
            </>
          ),
        ],
      },
      {
        title: 'Taxi 24 horas militar con precio fijo',
        paragraphs: [
          (
            <>
              Operando como <strong>taxi 24 horas militar</strong>, TaxiForce mantiene disponibilidad continua para despliegues urgentes y misiones tempranas. Nuestro <strong>precio fijo taxi militar</strong> y <strong>reserva WhatsApp taxi</strong> proporcionan transparencia total en costos y booking instantáneo.
            </>
          ),
        ],
      },
      {
        title: 'Visibilidad online enfocada al personal español',
        paragraphs: [
          (
            <>
              TaxiForce posiciona expresiones como <strong>taxi base militar Eslovaquia</strong>, <strong>transporte militar Lešť Slavia</strong> y <strong>taxi aeropuerto Bratislava militar</strong>, reforzando testimonios reales y contacto inmediato por WhatsApp. Así garantizamos un aliado logístico fiable para las misiones españolas en territorio eslovaco.
            </>
          ),
        ],
      },
    ],
  },
};

const SeoContentSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-background">
      <article className="max-w-5xl mx-auto space-y-8 sm:space-y-10 text-muted-foreground leading-relaxed text-sm sm:text-base">
        <header className="space-y-3 sm:space-y-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-gold">{content.heading}</h2>
          <p className="text-sm sm:text-base md:text-lg">{content.intro}</p>
        </header>

        {content.sections.map((section) => (
          <section key={section.title} className="space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-secondary">{section.title}</h3>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>
    </section>
  );
};

export default SeoContentSection;
