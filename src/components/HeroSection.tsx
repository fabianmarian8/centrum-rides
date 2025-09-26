import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-military.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    routeBadge: '🇪🇸 Slavia 1 Lešť base → Zvolen / Banská Bystrica',
    serviceBadge: 'NATO vetted • Discreet 24/7',
    heading: 'TaxiForce Military Transfers',
    description:
      'Premium transport dedicated to Spanish military personnel stationed in Slovakia. Fast transfers from Slavia 1 at Lešť base to Zvolen and Banská Bystrica with safe returns back to duty.',
    descriptionHighlight: 'Service available in English and Spanish on request.',
    stats: [
      {
        title: 'Average arrival time',
        value: '30 – 40 minutes',
        note: '24/7 dispatch confirms availability in real time',
      },
      {
        title: 'Vehicle capacity',
        value: 'Up to 4 passengers',
        note: 'Luxury SUV or business sedan fleet',
      },
      {
        title: 'Payment method',
        value: 'Cash only',
        note: 'Please prepare the fare before departure',
      },
    ],
    callCta: 'Call TaxiForce',
    whatsappCta: 'WhatsApp booking',
    badges: [
      { icon: '🛡️', text: 'NATO security-cleared drivers' },
      { icon: '🗺️', text: 'Door-to-door between base and city' },
      { icon: '🇪🇸', text: 'Spanish community recommendations' },
    ],
  },
  es: {
    routeBadge: '🇪🇸 Base de Lešť Slavia 1 → Zvolen / Banská Bystrica',
    serviceBadge: 'Aprobado por la OTAN • Discreto 24/7',
    heading: 'TaxiForce Traslados Militares',
    description:
      'Transporte premium dedicado al personal militar español destacado en Eslovaquia. Traslados rápidos desde Slavia 1 de la base de Lešť a Zvolen y Banská Bystrica con retornos seguros al servicio.',
    descriptionHighlight: 'Servicio disponible en inglés y español bajo solicitud.',
    stats: [
      {
        title: 'Tiempo medio de llegada',
        value: '30 – 40 minutos',
        note: 'Central 24/7 confirma la disponibilidad en tiempo real',
      },
      {
        title: 'Capacidad del vehículo',
        value: 'Hasta 4 pasajeros',
        note: 'Flota de SUV de lujo o sedanes ejecutivos',
      },
      {
        title: 'Método de pago',
        value: 'Solo efectivo',
        note: 'Prepare el importe antes de la salida',
      },
    ],
    callCta: 'Llamar a TaxiForce',
    whatsappCta: 'Reserva por WhatsApp',
    badges: [
      { icon: '🛡️', text: 'Conductores acreditados por la OTAN' },
      { icon: '🗺️', text: 'Puerta a puerta entre base y ciudad' },
      { icon: '🇪🇸', text: 'Recomendaciones para la comunidad española' },
    ],
  },
} as const;

const HeroSection = () => {
  const { language } = useLanguage();
  const content = translations[language];
  const particlesContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = particlesContainerRef.current;
    if (!container) {
      return undefined;
    }

    container.innerHTML = '';
    const particleCount = 60;
    const createdParticles: HTMLDivElement[] = [];

    for (let index = 0; index < particleCount; index += 1) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 20}s`;
      particle.style.animationDuration = `${15 + Math.random() * 10}s`;
      particle.style.color = index % 2 === 0 ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 200, 0, 0.6)';
      container.appendChild(particle);
      createdParticles.push(particle);
    }

    return () => {
      createdParticles.forEach((particle) => {
        if (particle.parentNode === container) {
          container.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <section
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center text-center bg-hero-pattern parallax-container"
      style={{
        backgroundImage: `
          linear-gradient(rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.85)),
          url(${heroImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div ref={particlesContainerRef} className="particles-container" aria-hidden />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 parallax-element" data-speed="0.15" />

      <div className="relative z-10 max-w-5xl px-4 py-16 sm:px-6 sm:py-20 space-y-8 fade-in">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span
            className="typewriter glass-card gradient-border px-4 py-2 rounded-full text-[11px] sm:text-sm font-bold uppercase tracking-wide shadow-lg"
            data-text={content.routeBadge}
          />
          <span className="glass-card flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-sm font-semibold text-secondary">
            <span className="pulse-dot bg-secondary" />
            {content.serviceBadge}
          </span>
        </div>

        <h1 className="glitch-text text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black drop-shadow-2xl leading-tight fade-in" data-speed="0.25">
          {content.heading}
        </h1>

        <p className="text-base sm:text-lg md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed fade-in">
          {content.description}
          <br className="hidden md:block" />
          <span className="text-secondary font-semibold">{content.descriptionHighlight}</span>
        </p>

        <div className="grid grid-cols-1 min-[380px]:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-left text-xs sm:text-sm">
          {content.stats.map((item, index) => (
            <div
              key={item.title}
              className="glass-card gradient-border hover-scale rounded-xl p-3 sm:p-4 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-secondary text-[10px] sm:text-xs uppercase tracking-wide mb-1">{item.title}</p>
              <p className="text-lg sm:text-xl font-bold text-foreground">{item.value}</p>
              <p className="text-muted-foreground text-xs sm:text-sm">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
          <Button
            size="lg"
            className="
              button-3d magnetic-button bg-gradient-to-r from-primary to-primary-glow
              hover:from-primary-glow hover:to-primary
              text-primary-foreground px-6 py-3 text-base sm:text-lg font-semibold
              rounded-full shadow-xl
            "
            asChild
          >
            <a href="tel:+421919040118">
              📞 {content.callCta}
            </a>
          </Button>

          <Button
            size="lg"
            className="
              button-3d magnetic-button bg-[#25D366] text-white
              hover:bg-[#1ebe5d]
              px-6 py-3 text-base sm:text-lg font-semibold rounded-full
              shadow-xl transition-all duration-300
            "
            asChild
          >
            <a href="https://wa.me/421919040118">
              💬 {content.whatsappCta}
            </a>
          </Button>
        </div>

        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs md:text-sm text-muted-foreground fade-in">
          {content.badges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 glass-card rounded-full px-3 py-2 hover-scale"
            >
              <span>{badge.icon}</span> <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
