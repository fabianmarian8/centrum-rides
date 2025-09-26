import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    heading: 'TaxiForce operational readiness',
    description:
      'We combine military-grade logistics with the comfort of a private chauffeur service. Every deployment is planned in detail.',
    metrics: [
      {
        value: '4.9',
        suffix: '/5',
        label: 'Spanish contingent rating',
        detail: 'Based on real feedback reports after night deployments',
        target: 4.9,
        decimals: 1,
      },
      {
        value: '120',
        suffix: '+',
        label: 'monthly transfers',
        detail: 'Dedicated driver roster with reinforcements during exercises',
        target: 120,
      },
      {
        value: '24',
        suffix: ' months',
        label: 'continuous service without incidents',
        detail: 'Strict compliance with NATO security protocols and local law',
        target: 24,
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
          'Local partnerships ensure Spanish troops have access to trusted services during downtime.',
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
        value: '4.9',
        suffix: '/5',
        label: 'Valoración del contingente español',
        detail: 'Basada en informes reales tras salidas nocturnas',
        target: 4.9,
        decimals: 1,
      },
      {
        value: '120',
        suffix: '+',
        label: 'traslados mensuales',
        detail: 'Equipo fijo de conductores con refuerzos durante ejercicios',
        target: 120,
      },
      {
        value: '24',
        suffix: ' meses',
        label: 'servicio continuo sin incidentes',
        detail: 'Cumplimos los protocolos de seguridad OTAN y la normativa local',
        target: 24,
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
          'Colaboramos con socios locales para que la tropa española acceda a servicios fiables en su tiempo libre.',
        icon: '🤝',
      },
    ],
  },
} as const;

const OperationsSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black/60 via-background to-black/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
        <div className="text-center space-y-3 sm:space-y-4 fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold glitch-text">
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
              className="text-center glass-card gradient-border rounded-2xl px-4 py-6 sm:px-5 sm:py-8 md:px-6 md:py-10 hover-scale fade-in"
            >
              <p
                className="counter text-2xl sm:text-3xl md:text-5xl font-black text-gradient-military mb-2"
                data-target={metric.target}
                data-suffix={metric.suffix ?? ''}
                data-prefix={metric.prefix ?? ''}
                data-decimals={metric.decimals ?? 0}
              >
                {`${metric.prefix ?? ''}${metric.value}${metric.suffix ?? ''}`}
              </p>
              <p className="text-[11px] sm:text-sm uppercase tracking-wide text-secondary mb-2">{metric.label}</p>
              <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">{metric.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {content.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="neumorphic rounded-2xl p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 hover-scale fade-in"
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
