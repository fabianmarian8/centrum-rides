'use client';

import { Phone, MessageCircle, Clock, ShieldCheck, UserCheck, Route, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    heading: 'Your reliable ride from Lešť base',
    subheading: 'to Zvolen & Banská Bystrica',
    callCta: 'Call now',
    whatsappCta: 'WhatsApp',
    features: [
      { icon: Clock, label: 'Available 24/7' },
      { icon: ShieldCheck, label: 'Discreet & professional' },
      { icon: UserCheck, label: 'Trusted drivers' },
      { icon: Route, label: 'Known routes, always on time' },
    ],
    routes: [
      { to: 'Zvolen', price: '40 €' },
      { to: 'B. Bystrica', price: '65 €' },
      { to: 'Budapest', price: '160 €' },
      { to: 'Vienna', price: '240 €' },
    ],
    available: 'Available 24/7',
  },
  es: {
    heading: 'Tu transporte fiable desde la base de Lešť',
    subheading: 'a Zvolen y Banská Bystrica',
    callCta: 'Llamar ahora',
    whatsappCta: 'WhatsApp',
    features: [
      { icon: Clock, label: 'Disponible 24/7' },
      { icon: ShieldCheck, label: 'Discreto y profesional' },
      { icon: UserCheck, label: 'Conductores de confianza' },
      { icon: Route, label: 'Rutas conocidas, siempre a tiempo' },
    ],
    routes: [
      { to: 'Zvolen', price: '40 €' },
      { to: 'B. Bystrica', price: '65 €' },
      { to: 'Budapest', price: '160 €' },
      { to: 'Viena', price: '240 €' },
    ],
    available: 'Disponible 24/7',
  },
} as const;

const HeroSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col" role="banner">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <picture className="block w-full h-full">
          {/* Mobil: vertikálny (portrait) výrez – autá + hrad, aby kompozícia nezanikla */}
          <source
            media="(max-width: 767px)"
            srcSet="/images/hero-bg-portrait-sm.webp 720w, /images/hero-bg-portrait.webp 1080w"
            sizes="100vw"
          />
          {/* Tablet/desktop: landscape 16:9 */}
          <source
            srcSet="/images/hero-bg-sm.webp 1280w, /images/hero-bg-1920.webp 1920w, /images/hero-bg.webp 3840w"
            sizes="100vw"
          />
          <img
            src="/images/hero-bg.webp"
            alt="Professional taxi service for military personnel"
            className="w-full h-full object-cover object-center md:object-[center_60%] brightness-[0.7]"
            fetchPriority="high"
          />
        </picture>
      </div>

      {/* Content column */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center pt-8 pb-4">
        <div className="max-w-2xl">
          {/* Decorative gold line (rebrand 2026) */}
          <span className="gold-line mb-5 fade-in" style={{ animationDelay: '0.05s' }} />

          {/* Main heading */}
          <h1 className="heading-military text-4xl sm:text-5xl lg:text-6xl text-white mb-3 fade-in drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ animationDelay: '0.1s' }}>
            {content.heading}
          </h1>
          <p className="heading-military text-xl sm:text-2xl md:text-3xl text-yellow-400 mb-6 sm:mb-8 fade-in drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ animationDelay: '0.15s' }}>
            {content.subheading}
          </p>

          {/* Feature icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-5 mb-40 sm:mb-10 max-w-xl fade-in" style={{ animationDelay: '0.2s' }}>
            {content.features.map((f) => (
              <div key={f.label} className="flex flex-col items-center text-center gap-2">
                <span className="w-12 h-12 rounded-full border border-yellow-500/40 bg-black/30 backdrop-blur-sm flex items-center justify-center text-yellow-500 shrink-0">
                  <f.icon className="w-5 h-5" />
                </span>
                <span className="text-[11px] leading-tight uppercase tracking-wide text-white/85 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {f.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 fade-in" style={{ animationDelay: '0.25s' }}>
            <a href="tel:+421919040118" className="btn-primary text-base sm:text-lg py-2.5 sm:py-3">
              <Phone className="w-5 h-5" />
              {content.callCta}
            </a>
            <a href="https://wa.me/421919040118" className="btn-whatsapp text-base sm:text-lg py-2.5 sm:py-3">
              <MessageCircle className="w-5 h-5" />
              {content.whatsappCta}
            </a>
          </div>
        </div>
      </div>

      {/* Price cards pinned to bottom of hero */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl fade-in" style={{ animationDelay: '0.3s' }}>
          {content.routes.map((r) => (
            <div key={r.to} className="bg-black/55 backdrop-blur-sm rounded-xl border border-yellow-500/25 px-4 py-3">
              <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide mb-1">
                <span className="text-yellow-500 font-semibold">Lešť</span>
                <ArrowRight className="w-3 h-3 text-yellow-500/70" />
                <span className="text-white/70">{r.to}</span>
              </div>
              <p className="heading-military text-2xl sm:text-3xl text-white">{r.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating availability badge - bottom right on desktop */}
      <div className="hidden lg:flex absolute bottom-10 right-8 z-10 items-center gap-3 bg-black/55 backdrop-blur-sm rounded-2xl px-5 py-3 border border-yellow-500/25 fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-yellow-500" />
          <span className="font-medium text-white">Lešť, Slavia 1</span>
        </div>
        <div className="w-px h-6 bg-white/20" />
        <div className="flex items-center gap-2">
          <span className="status-dot" />
          <span className="font-medium text-yellow-400">{content.available}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
