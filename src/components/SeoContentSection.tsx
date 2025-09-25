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
    heading: 'Taxi for Spanish troops from Lešť base (Slavia 1)',
    intro:
      'TaxiForce is a specialised transfer service based in central Slovakia. Since 2022 we have ensured safe and comfortable links between the Lešť training area, Slavia 1, the city of Zvolen and Banská Bystrica.',
    sections: [
      {
        title: 'Professional focus on NATO missions',
        paragraphs: [
          'Our vehicles meet strict maintenance standards and are equipped for long transfers and night returns. Every driver is vetted, experienced with international units and familiar with military terminology. The service is tailored to the Spanish contingent while respecting confidentiality protocols.',
        ],
      },
      {
        title: 'Coverage for Zvolen and Banská Bystrica',
        paragraphs: [
          'We frequently arrange transfers to Zvolen Castle, SNP Square, Europa Shopping Center, OC Terminal, downtown Banská Bystrica restaurants and popular venues such as Ministry of Fun, Klub 77 or Bar Murgaš. Upon request we organise trips to the Tatras or Budapest.',
        ],
      },
      {
        title: 'SEO and online visibility',
        paragraphs: [
          (
            <>
              TaxiForce targets key phrases such as <strong>taxi Lešť Zvolen</strong>, <strong>military taxi Slovakia</strong>, <strong>transport Spanish Army Slovakia</strong>, <strong>Lešť Banská Bystrica transfer</strong> and <strong>Slavia 1 taxi pickup</strong>. With optimised content, reviews and rapid contact, we provide a trusted logistics partner for international units in Slovakia.
            </>
          ),
        ],
      },
    ],
  },
  es: {
    heading: 'Taxi para las tropas españolas desde la base de Lešť (Slavia 1)',
    intro:
      'TaxiForce es un servicio de traslados especializado con base en el centro de Eslovaquia. Desde 2022 garantizamos conexiones seguras y cómodas entre el área de entrenamiento de Lešť, Slavia 1, la ciudad de Zvolen y Banská Bystrica.',
    sections: [
      {
        title: 'Profesionalidad enfocada en misiones de la OTAN',
        paragraphs: [
          'Nuestros vehículos cumplen exigentes estándares técnicos y están preparados para traslados largos y regresos nocturnos. Cada conductor está verificado, trabaja con unidades internacionales y domina la terminología militar. El servicio se adapta al contingente español respetando los protocolos de confidencialidad.',
        ],
      },
      {
        title: 'Cobertura para Zvolen y Banská Bystrica',
        paragraphs: [
          'Realizamos traslados frecuentes al Castillo de Zvolen, la Plaza SNP, Europa Shopping Center, OC Terminal, restaurantes del centro de Banská Bystrica y locales populares como Ministry of Fun, Klub 77 o Bar Murgaš. También organizamos excursiones a los Tatras o Budapest bajo solicitud.',
        ],
      },
      {
        title: 'SEO y visibilidad online',
        paragraphs: [
          (
            <>
              TaxiForce trabaja palabras clave como <strong>taxi Lešť Zvolen</strong>, <strong>military taxi Slovakia</strong>, <strong>transport Spanish Army Slovakia</strong>, <strong>Lešť Banská Bystrica transfer</strong> y <strong>taxi Slavia 1 base</strong>. Con contenido optimizado, reseñas y contacto inmediato, ofrecemos un socio logístico fiable para unidades internacionales en Eslovaquia.
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
