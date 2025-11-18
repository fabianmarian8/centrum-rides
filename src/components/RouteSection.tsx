'use client';

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
          'Direct entry at the Slavia 1 military gate',
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
        sub: 'English-speaking service',
      },
      {
        title: '2. Pick-up',
        detail: 'Driver waits at the Slavia 1 gate inside Lešť. We track unit schedule changes in real time.',
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
          'Acceso directo por la puerta militar Slavia 1',
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
        sub: 'Atención en inglés',
      },
      {
        title: '2. Recogida',
        detail: 'El conductor espera en la puerta Slavia 1 de Lešť. Seguimos cambios en el programa en tiempo real.',
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
    <section className="py-8 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-12">
        <div className="text-center space-y-2 sm:space-y-3">
          <Badge className="bg-secondary/20 text-secondary border-secondary/40 uppercase tracking-wide text-xs">
            {content.badge}
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-military">
            {content.heading}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {content.routes.map((route) => (
            <Card
              key={route.title}
              className="bg-card/70 backdrop-blur border border-secondary/30 hover:border-secondary/60 transition-all duration-300 hover-military"
            >
              <CardContent className="p-3 sm:p-4 md:p-5 space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-secondary">{route.title}</h3>
                  <span className="text-[10px] sm:text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/30 whitespace-nowrap">
                    {route.duration}
                  </span>
                </div>
                <ul className="space-y-1 sm:space-y-2 text-[11px] sm:text-xs text-muted-foreground">
                  {route.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-1.5">
                      <span className="text-secondary mt-0.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 min-[380px]:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {content.steps.map((step) => (
            <div
              key={step.title}
              className="bg-black/30 border border-secondary/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 space-y-1 sm:space-y-2 text-center backdrop-blur hover:border-secondary/50 transition-all"
            >
              <h3 className="text-xs sm:text-sm md:text-base font-semibold text-secondary uppercase tracking-wide">{step.title}</h3>
              <p className="text-[10px] sm:text-xs text-foreground/90 leading-relaxed">{step.detail}</p>
              <p className="text-[9px] sm:text-[10px] text-muted-foreground">{step.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RouteSection;
