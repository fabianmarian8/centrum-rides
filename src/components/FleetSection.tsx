'use client';

import { Plane, MapPin, Car } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    badge: 'Real photos',
    heading: 'Meet your ride',
    description:
      'Real photos of the exact Toyota RAV4 Hybrid that picks you up — clean, modern and ready 24/7.',
    photos: [
      {
        src: '/images/taxi-bratislava-airport.webp',
        icon: Plane,
        caption: 'Bratislava Airport',
        alt: 'White Toyota RAV4 Hybrid taxi in front of the Bratislava Airport terminal',
      },
      {
        src: '/images/taxi-zvolen-centrum.webp',
        icon: MapPin,
        caption: 'Zvolen city center',
        alt: 'Toyota RAV4 Hybrid taxi parked in the historic city center of Zvolen',
      },
      {
        src: '/images/taxi-airport-transfer.webp',
        icon: Car,
        caption: 'Airport transfers',
        alt: 'Toyota RAV4 Hybrid taxi on the road during an airport transfer',
      },
    ],
  },
  es: {
    badge: 'Fotos reales',
    heading: 'Conoce tu vehículo',
    description:
      'Fotos reales del mismo Toyota RAV4 Hybrid que te recoge — limpio, moderno y listo 24/7.',
    photos: [
      {
        src: '/images/taxi-bratislava-airport.webp',
        icon: Plane,
        caption: 'Aeropuerto de Bratislava',
        alt: 'Taxi Toyota RAV4 Hybrid blanco frente a la terminal del Aeropuerto de Bratislava',
      },
      {
        src: '/images/taxi-zvolen-centrum.webp',
        icon: MapPin,
        caption: 'Centro de Zvolen',
        alt: 'Taxi Toyota RAV4 Hybrid aparcado en el centro histórico de Zvolen',
      },
      {
        src: '/images/taxi-airport-transfer.webp',
        icon: Car,
        caption: 'Transfers al aeropuerto',
        alt: 'Taxi Toyota RAV4 Hybrid en la carretera durante un transfer al aeropuerto',
      },
    ],
  },
} as const;

const FleetSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <span className="badge-warm mb-3">{content.badge}</span>
          <h2 className="heading-lg text-foreground mb-2 mt-3">{content.heading}</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Expanding gallery:
            - mobile: stacked, each photo keeps a 16:10 ratio (no hover needed, tap-friendly)
            - desktop (md+): single row, the hovered panel grows while the others shrink */}
        <div className="flex flex-col md:flex-row gap-3 md:h-[360px] lg:h-[440px]">
          {content.photos.map((photo) => (
            <figure
              key={photo.src}
              className="group/item relative overflow-hidden rounded-2xl border border-border/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.10)] aspect-[16/10] md:aspect-auto md:flex-1 md:hover:flex-[2.4] transition-[flex-grow] duration-500 ease-out"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={1600}
                height={905}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/item:scale-105"
              />
              {/* Subtle gradient + caption (always visible, works without hover) */}
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-3 sm:p-4 bg-gradient-to-t from-black/75 via-black/30 to-transparent text-white">
                <photo.icon className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                  {photo.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
