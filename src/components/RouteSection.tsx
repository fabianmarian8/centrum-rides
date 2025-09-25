import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    badge: 'Operational routes',
    heading: 'Primary connections for the Spanish unit',
    description:
      'Optimised routes between the Lešť training area, Zvolen and Banská Bystrica. Designed for both leisure time and duty transfers.',
    routes: [
      {
        title: 'Lešť → Zvolen',
        duration: '35 min',
        highlights: [
          'Direct entry at the military gate',
          'Coordinated pick-up without unnecessary waiting',
          'Recommended bars: Quadra, Retro',
        ],
      },
      {
        title: 'Lešť → Banská Bystrica',
        duration: '50 min',
        highlights: [
          'Drop-off at SNP Square and Europa Shopping Center',
          'Coordination with Ministry, Klub 77 and partner venues',
          'Cash payment collected upon boarding',
        ],
      },
    ],
    steps: [
      {
        title: '1. Booking',
        detail: 'Call or WhatsApp. We confirm pick-up time and passenger count.',
        sub: 'English & Español friendly',
      },
      {
        title: '2. Pick-up',
        detail: 'Driver waits at the Lešť gate. We track unit schedule changes in real time.',
        sub: 'Vehicle and driver identification in advance',
      },
      {
        title: '3. Return',
        detail: 'Precise return time coordinated back to base, even at the last minute.',
        sub: 'Availability guaranteed 24/7',
      },
    ],
  },
  es: {
    badge: 'Rutas operativas',
    heading: 'Conexiones principales para la unidad española',
    description:
      'Rutas optimizadas entre el área de entrenamiento de Lešť, Zvolen y Banská Bystrica. Diseñadas para traslados de ocio y servicio.',
    routes: [
      {
        title: 'Lešť → Zvolen',
        duration: '35 min',
        highlights: [
          'Acceso directo por la puerta militar',
          'Recogida coordinada sin esperas innecesarias',
          'Bares recomendados: Quadra, Retro',
        ],
      },
      {
        title: 'Lešť → Banská Bystrica',
        duration: '50 min',
        highlights: [
          'Llegada a la Plaza SNP y Europa Shopping Center',
          'Coordinación con Ministry, Klub 77 y locales asociados',
          'Cobro en efectivo al embarcar',
        ],
      },
    ],
    steps: [
      {
        title: '1. Reserva',
        detail: 'Llamada o WhatsApp. Confirmamos hora de recogida y número de pasajeros.',
        sub: 'Atención en inglés y español',
      },
      {
        title: '2. Recogida',
        detail: 'El conductor espera en la puerta de Lešť. Seguimos cambios en el programa en tiempo real.',
        sub: 'Identificación del vehículo y conductor por adelantado',
      },
      {
        title: '3. Regreso',
        detail: 'Coordinamos la hora exacta de vuelta a la base, incluso en el último momento.',
        sub: 'Disponibilidad garantizada 24/7',
      },
    ],
  },
} as const;

const RouteSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16">
        <div className="text-center space-y-3 sm:space-y-4">
          <Badge className="bg-secondary/20 text-secondary border-secondary/40 uppercase tracking-wide">
            {content.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-military">
            {content.heading}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {content.routes.map((route) => (
            <Card
              key={route.title}
              className="bg-card/70 backdrop-blur border border-secondary/30 hover:border-secondary/60 transition-all duration-300 hover-military"
            >
              <CardContent className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-secondary">{route.title}</h3>
                  <span className="text-xs sm:text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/30">
                    {route.duration}
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  {route.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 min-[460px]:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {content.steps.map((step) => (
            <div
              key={step.title}
              className="bg-black/30 border border-secondary/20 rounded-2xl p-4 sm:p-5 space-y-2 sm:space-y-3 text-center backdrop-blur hover:border-secondary/50 transition-all"
            >
              <h3 className="text-base sm:text-lg font-semibold text-secondary uppercase tracking-wide">{step.title}</h3>
              <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">{step.detail}</p>
              <p className="text-[11px] sm:text-xs text-muted-foreground">{step.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RouteSection;
