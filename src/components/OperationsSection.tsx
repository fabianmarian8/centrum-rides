'use client';

import { Target, ShieldCheck, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    heading: 'Our track record',
    description: 'Numbers that speak for themselves. We have been serving military personnel since day one.',
    metrics: [
      { value: '4.9/5', label: 'Average rating', detail: 'Based on real feedback from riders' },
      { value: '120+', label: 'Monthly transfers', detail: 'Regular service for the military community' },
      { value: '0', label: 'Incidents', detail: '24 months of safe, reliable service' },
    ],
    pillars: [
      {
        icon: Target,
        title: 'Precision',
        description: 'Every transfer is planned. We confirm pickup time, route, and return - no surprises.',
      },
      {
        icon: ShieldCheck,
        title: 'Discretion',
        description: 'What happens on the ride stays on the ride. Professional, confidential service.',
      },
      {
        icon: Users,
        title: 'Community',
        description: 'We work with local businesses to give you access to trusted venues and services.',
      },
    ],
  },
  es: {
    heading: 'Nuestro historial',
    description: 'Números que hablan por sí solos. Servimos al personal militar desde el primer día.',
    metrics: [
      { value: '4.9/5', label: 'Valoración media', detail: 'Basada en opiniones reales de pasajeros' },
      { value: '120+', label: 'Traslados mensuales', detail: 'Servicio regular para la comunidad militar' },
      { value: '0', label: 'Incidentes', detail: '24 meses de servicio seguro y fiable' },
    ],
    pillars: [
      {
        icon: Target,
        title: 'Precisión',
        description: 'Cada traslado está planificado. Confirmamos hora, ruta y regreso - sin sorpresas.',
      },
      {
        icon: ShieldCheck,
        title: 'Discreción',
        description: 'Lo que pasa en el viaje, se queda en el viaje. Servicio profesional y confidencial.',
      },
      {
        icon: Users,
        title: 'Comunidad',
        description: 'Colaboramos con negocios locales para darte acceso a lugares de confianza.',
      },
    ],
  },
} as const;

const OperationsSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="heading-lg text-foreground mb-2">{content.heading}</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">{content.description}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 sm:gap-6 mb-6 sm:mb-10">
          {content.metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-2xl sm:text-4xl font-black text-primary mb-1">{metric.value}</p>
              <p className="text-xs sm:text-sm font-semibold text-foreground">{metric.label}</p>
              <p className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">{metric.detail}</p>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {content.pillars.map((pillar) => (
            <div key={pillar.title} className="card-warm p-3 sm:p-5 text-center">
              <div className="icon-container w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3">
                <pillar.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-base font-bold text-foreground mb-1">{pillar.title}</h3>
              <p className="text-muted-foreground text-[10px] sm:text-sm hidden sm:block">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
