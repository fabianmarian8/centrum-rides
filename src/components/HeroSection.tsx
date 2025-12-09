'use client';

import { Phone, MessageCircle, Clock, Users, Banknote, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    badge: 'Trusted by 200+ military personnel',
    heading: 'Your reliable ride from Lešť base',
    subheading: 'to Zvolen & Banská Bystrica',
    description: 'Professional taxi service for NATO personnel. Safe, discreet, available 24/7. We know the routes, we respect the schedule.',
    callCta: 'Call now',
    whatsappCta: 'WhatsApp',
    stats: [
      { icon: MapPin, label: 'Zvolen', value: '40 €' },
      { icon: MapPin, label: 'B. Bystrica', value: '65 €' },
      { icon: Users, label: 'Capacity', value: 'Up to 4' },
      { icon: Banknote, label: 'Payment', value: 'Cash EUR' },
    ],
    available: 'Available 24/7',
  },
  es: {
    badge: 'Más de 200 militares confían en nosotros',
    heading: 'Tu transporte fiable desde la base de Lešť',
    subheading: 'a Zvolen y Banská Bystrica',
    description: 'Servicio de taxi profesional para personal de la OTAN. Seguro, discreto, disponible 24/7. Conocemos las rutas, respetamos el horario.',
    callCta: 'Llamar ahora',
    whatsappCta: 'WhatsApp',
    stats: [
      { icon: MapPin, label: 'Zvolen', value: '40 €' },
      { icon: MapPin, label: 'B. Bystrica', value: '65 €' },
      { icon: Users, label: 'Capacidad', value: 'Hasta 4' },
      { icon: Banknote, label: 'Pago', value: 'Efectivo EUR' },
    ],
    available: 'Disponible 24/7',
  },
} as const;

const HeroSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="relative min-h-[90vh] flex items-center" role="banner">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.webp"
          alt="Professional taxi service for military personnel"
          className="w-full h-full object-cover object-[center_60%] brightness-[0.7]"
          fetchPriority="high"
        />
      </div>

      {/* Decorative blob */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/20 blob opacity-60 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/20 blob opacity-40 blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Main heading */}
          <h1 className="heading-xl text-white mb-2 fade-in drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ animationDelay: '0.1s' }}>
            {content.heading}
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-6 fade-in drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ animationDelay: '0.15s' }}>
            {content.subheading}
          </p>

          {/* Description */}
          <p className="text-lg text-white/90 mb-8 max-w-xl leading-relaxed fade-in drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" style={{ animationDelay: '0.2s' }}>
            {content.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 fade-in" style={{ animationDelay: '0.25s' }}>
            <a href="tel:+421902048583" className="btn-primary text-lg">
              <Phone className="w-5 h-5" />
              {content.callCta}
            </a>
            <a href="https://wa.me/421902048583" className="btn-whatsapp text-lg">
              <MessageCircle className="w-5 h-5" />
              {content.whatsappCta}
            </a>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 fade-in" style={{ animationDelay: '0.3s' }}>
            {content.stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left bg-black/40 backdrop-blur-sm rounded-xl p-3">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-yellow-400 mb-1">
                  <stat.icon className="w-4 h-4" />
                  <span className="text-xs text-white/80 uppercase tracking-wide">{stat.label}</span>
                </div>
                <p className="text-lg font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating availability badge - bottom right on desktop */}
      <div className="hidden lg:flex absolute bottom-10 right-10 items-center gap-3 bg-card/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-border/50 fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          <span className="font-medium">Lešť, Slavia 1</span>
        </div>
        <div className="w-px h-6 bg-border" />
        <div className="flex items-center gap-2">
          <span className="status-dot" />
          <span className="font-medium text-primary">{content.available}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
