'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    heading: 'About TaxiForce',
    sections: [
      {
        title: 'Your local taxi partner near Lešť base',
        text: 'TaxiForce provides professional taxi service for military personnel stationed at the Lešť training area in central Slovakia. We understand the unique needs of NATO troops - from flexible schedules to discreet transportation.',
      },
      {
        title: 'Connecting base to city',
        text: 'Our drivers know every route between Slavia 1 gate and the cities of Zvolen and Banská Bystrica. Whether you need a ride to dinner, a night out, or an airport transfer to Bratislava, we have got you covered.',
      },
      {
        title: 'English-speaking service',
        text: 'Communication is never a problem. Our dispatchers and drivers speak English and understand military terminology. Book via phone call or WhatsApp - whatever works best for you.',
      },
    ],
  },
  es: {
    heading: 'Sobre TaxiForce',
    sections: [
      {
        title: 'Tu taxi local cerca de la base de Lešť',
        text: 'TaxiForce ofrece servicio de taxi profesional para el personal militar destacado en el área de entrenamiento de Lešť en el centro de Eslovaquia. Entendemos las necesidades únicas de las tropas OTAN - desde horarios flexibles hasta transporte discreto.',
      },
      {
        title: 'Conectando base y ciudad',
        text: 'Nuestros conductores conocen cada ruta entre la puerta Slavia 1 y las ciudades de Zvolen y Banská Bystrica. Ya sea para ir a cenar, salir de noche o transfer al aeropuerto de Bratislava, estamos a tu servicio.',
      },
      {
        title: 'Servicio en inglés',
        text: 'La comunicación nunca es un problema. Nuestros operadores y conductores hablan inglés y entienden terminología militar. Reserva por teléfono o WhatsApp - lo que te resulte más cómodo.',
      },
    ],
  },
} as const;

const SeoContentSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-lg text-foreground text-center mb-12">{content.heading}</h2>

        <div className="space-y-8">
          {content.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-bold text-foreground mb-3">{section.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoContentSection;
