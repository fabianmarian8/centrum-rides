'use client';

import { MapPin, Clock, ArrowRight, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    badge: 'Our routes',
    heading: 'From base to city, we have got you covered',
    routes: [
      {
        from: 'Lešť Base',
        to: 'Zvolen',
        time: '35 min',
        highlights: ['Pickup at Slavia 1 gate', 'Direct route via R2', 'Drop-off anywhere in city'],
        popular: ['Quadra Bar', 'Retro Club', 'City Center'],
      },
      {
        from: 'Lešť Base',
        to: 'Banská Bystrica',
        time: '50 min',
        highlights: ['Comfortable highway ride', 'SNP Square drop-off', 'Europa Shopping Center'],
        popular: ['Ministry Club', 'Klub 77', 'Old Town'],
      },
    ],
    howItWorks: 'How it works',
    steps: [
      { step: '1', title: 'Book', description: 'Call or WhatsApp us with pickup time and passenger count' },
      { step: '2', title: 'Pickup', description: 'We wait at Slavia 1 gate. You will know the driver and car in advance' },
      { step: '3', title: 'Return', description: 'Tell us when you are ready. We coordinate your return to base' },
    ],
    cta: 'Book your ride now',
    popularSpots: 'Popular destinations',
  },
  es: {
    badge: 'Nuestras rutas',
    heading: 'De la base a la ciudad, te llevamos',
    routes: [
      {
        from: 'Base Lešť',
        to: 'Zvolen',
        time: '35 min',
        highlights: ['Recogida en puerta Slavia 1', 'Ruta directa por R2', 'Te dejamos donde quieras'],
        popular: ['Quadra Bar', 'Retro Club', 'Centro ciudad'],
      },
      {
        from: 'Base Lešť',
        to: 'Banská Bystrica',
        time: '50 min',
        highlights: ['Viaje cómodo por autopista', 'Llegada a Plaza SNP', 'Europa Shopping Center'],
        popular: ['Ministry Club', 'Klub 77', 'Casco antiguo'],
      },
    ],
    howItWorks: 'Cómo funciona',
    steps: [
      { step: '1', title: 'Reserva', description: 'Llámanos o escríbenos por WhatsApp con hora y número de pasajeros' },
      { step: '2', title: 'Recogida', description: 'Te esperamos en Slavia 1. Sabrás el conductor y coche con antelación' },
      { step: '3', title: 'Regreso', description: 'Avísanos cuando estés listo. Coordinamos tu vuelta a la base' },
    ],
    cta: 'Reserva ahora',
    popularSpots: 'Destinos populares',
  },
} as const;

const RouteSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <span className="badge-warm mb-2 inline-block text-xs">{content.badge}</span>
          <h2 className="heading-lg text-foreground">{content.heading}</h2>
        </div>

        {/* Routes cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {content.routes.map((route) => (
            <div key={route.to} className="card-warm p-4 sm:p-6">
              {/* Route header */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-1 sm:gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm sm:text-base font-bold">{route.from}</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                  <span className="text-sm sm:text-base font-bold text-primary">{route.to}</span>
                </div>
                <div className="flex items-center gap-1 bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
                  <Clock className="w-3 h-3" />
                  <span className="font-semibold text-xs sm:text-sm">{route.time}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-1 mb-3 sm:mb-4">
                {route.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                    <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Popular spots */}
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wide text-muted-foreground mb-1">{content.popularSpots}</p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {route.popular.map((spot) => (
                    <span key={spot} className="text-xs bg-muted px-2 py-0.5 rounded-full">
                      {spot}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-primary/5 rounded-2xl sm:rounded-3xl p-4 sm:p-8">
          <h3 className="heading-md text-center text-foreground mb-4 sm:mb-6">{content.howItWorks}</h3>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
            {content.steps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm sm:text-lg flex items-center justify-center mx-auto mb-2">
                  {step.step}
                </div>
                <h4 className="font-bold text-xs sm:text-base mb-1">{step.title}</h4>
                <p className="text-muted-foreground text-[10px] sm:text-sm hidden sm:block">{step.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
            <a href="tel:+421902048583" className="btn-primary text-sm py-2 px-4">
              <Phone className="w-4 h-4" />
              {content.cta}
            </a>
            <a href="https://wa.me/421902048583" className="btn-whatsapp text-sm py-2 px-4">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteSection;
