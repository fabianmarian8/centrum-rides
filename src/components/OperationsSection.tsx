'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    heading: 'TaxiForce operational readiness',
    description:
      'We combine military-grade logistics with the comfort of a private chauffeur service. Every deployment is planned in detail.',
    metrics: [
      {
        value: '4.9/5',
        label: 'Military contingent rating',
        detail: 'Based on real feedback reports after night deployments',
      },
      {
        value: '120+',
        label: 'monthly transfers',
        detail: 'Dedicated driver roster with reinforcements during exercises',
      },
      {
        value: '0 incidents',
        label: 'in 24 months of service',
        detail: 'Strict compliance with NATO security protocols and local law',
      },
    ],
    pillars: [
      {
        title: 'Military precision',
        description:
          'We operate according to mission plans. Each transfer receives a mission number and confirmed return time.',
        icon: '⏱️',
      },
      {
        title: 'Discretion & security',
        description:
          'Non-disclosure agreements, anonymous payments and unmarked vehicles. Drivers are experienced with escorts and VIP transfers.',
        icon: '🕶️',
      },
      {
        title: 'Community support',
        description:
          'Local partnerships ensure military troops have access to trusted services during downtime.',
        icon: '🤝',
      },
    ],
  },
  es: {
    heading: 'Preparación operativa de TaxiForce',
    description:
      'Combinamos logística de nivel militar con el confort de un servicio de chofer privado. Cada despliegue se planifica al detalle.',
    metrics: [
      {
        value: '4.9/5',
        label: 'Valoración del contingente militar',
        detail: 'Basada en informes reales tras salidas nocturnas',
      },
      {
        value: '120+',
        label: 'traslados mensuales',
        detail: 'Equipo fijo de conductores con refuerzos durante ejercicios',
      },
      {
        value: '0 incidentes',
        label: 'en 24 meses de servicio',
        detail: 'Cumplimos los protocolos de seguridad OTAN y la normativa local',
      },
    ],
    pillars: [
      {
        title: 'Precisión militar',
        description:
          'Trabajamos siguiendo planes operativos. Cada traslado recibe número de misión y hora de regreso confirmada.',
        icon: '⏱️',
      },
      {
        title: 'Discreción y seguridad',
        description:
          'Acuerdos de confidencialidad, pagos anónimos y vehículos sin distintivos. Conductores expertos en escoltas y traslados VIP.',
        icon: '🕶️',
      },
      {
        title: 'Apoyo comunitario',
        description:
          'Colaboramos con socios locales para que la tropa militar acceda a servicios fiables en su tiempo libre.',
        icon: '🤝',
      },
    ],
  },
} as const;

const OperationsSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black/60 via-background to-black/60">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold">
            {content.heading}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 min-[380px]:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {content.metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center bg-primary/10 border border-primary/30 rounded-2xl px-4 py-6 sm:px-5 sm:py-8 md:px-6 md:py-10 backdrop-blur hover:border-primary/60 transition-all"
            >
              <p className="text-2xl sm:text-3xl md:text-5xl font-black text-gradient-military mb-2">{metric.value}</p>
              <p className="text-[11px] sm:text-sm uppercase tracking-wide text-secondary mb-2">{metric.label}</p>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">{metric.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {content.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-card/70 border border-secondary/20 rounded-2xl p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 backdrop-blur hover:border-secondary/50 transition-all"
            >
              <div className="text-3xl sm:text-4xl">{pillar.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
