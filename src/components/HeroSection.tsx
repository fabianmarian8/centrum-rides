import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-military.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import ParticlesBackground from './ParticlesBackground';
import { AnimatedCounter } from './AnimatedCounter';

const translations = {
  en: {
    routeBadge: '🇪🇸 Slavia 1 Lešť base → Zvolen / Banská Bystrica',
    serviceBadge: 'NATO vetted • Discreet 24/7',
    heading: 'TaxiForce Military Transfers',
    description:
      'Premium transport dedicated to Spanish military personnel stationed in Slovakia. Fast transfers from Slavia 1 at Lešť base to Zvolen and Banská Bystrica with safe returns back to duty.',
    descriptionHighlight: '',
    stats: [
      {
        title: 'Average arrival time',
        value: <><AnimatedCounter target={30} suffix=" – " formatNumber={false} /><AnimatedCounter target={40} suffix=" minutes" formatNumber={false} /></>,
        note: '24/7 dispatch confirms availability in real time',
      },
      {
        title: 'Vehicle capacity',
        value: <>Up to <AnimatedCounter target={4} suffix=" passengers" formatNumber={false} /></>,
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
      { icon: '🎯', text: 'Military community recommendations' },
    ],
  },
  es: {
    routeBadge: '🇪🇸 Base de Lešť Slavia 1 → Zvolen / Banská Bystrica',
    serviceBadge: 'Aprobado por la OTAN • Discreto 24/7',
    heading: 'TaxiForce Traslados Militares',
    description:
      'Transporte premium dedicado al personal militar español destacado en Eslovaquia. Traslados rápidos desde Slavia 1 de la base de Lešť a Zvolen y Banská Bystrica con retornos seguros al servicio.',
    descriptionHighlight: '',
    stats: [
      {
        title: 'Tiempo medio de llegada',
        value: <><AnimatedCounter target={30} suffix=" – " formatNumber={false} /><AnimatedCounter target={40} suffix=" minutos" formatNumber={false} /></>,
        note: 'Central 24/7 confirma la disponibilidad en tiempo real',
      },
      {
        title: 'Capacidad del vehículo',
        value: <>Hasta <AnimatedCounter target={4} suffix=" pasajeros" formatNumber={false} /></>,
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
      { icon: '🎯', text: 'Recomendaciones para la comunidad militar' },
    ],
  },
} as const;

const HeroSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section
      aria-label="Hero section - Military taxi service"
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center text-center bg-hero-pattern"
      style={{
        backgroundImage: `
          linear-gradient(rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.85)),
          url(${heroImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      role="banner"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
      <ParticlesBackground />

      <div className="relative z-10 max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span className="bg-gradient-to-r from-primary to-secondary px-3 py-2 rounded-full text-[11px] sm:text-sm font-bold uppercase tracking-wide shadow-lg">
            {content.routeBadge}
          </span>
          <span className="bg-secondary/10 border border-secondary/40 text-secondary px-3 py-1 rounded-full text-[11px] sm:text-sm font-semibold backdrop-blur flex items-center gap-2">
            <div className="pulse-dot"></div>
            {content.serviceBadge}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black mb-5 sm:mb-6 text-gradient-military drop-shadow-2xl leading-tight">
          {content.heading}
        </h1>

        <p className="text-base sm:text-lg md:text-2xl mb-8 sm:mb-10 text-foreground/90 max-w-3xl mx-auto leading-relaxed">
          {content.description}
          <br className="hidden md:block" />
          <span className="text-secondary font-semibold">{content.descriptionHighlight}</span>
        </p>

        <div className="grid grid-cols-1 min-[380px]:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 text-left text-xs sm:text-sm">
          {content.stats.map((item, index) => (
            <div
              key={item.title}
              className="gradient-border-military neumorphic-military p-3 sm:p-4 backdrop-blur hover:shadow-[15px_15px_50px_hsl(var(--background)/0.9),-15px_-15px_50px_hsl(var(--border)/0.4)] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-secondary text-[10px] sm:text-xs uppercase tracking-wide mb-1">{item.title}</p>
              <p className="text-lg sm:text-xl font-bold text-foreground">{item.value}</p>
              <p className="text-muted-foreground text-xs sm:text-sm">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="
              button-3d
              bg-gradient-to-r from-primary to-primary-glow
              hover:from-primary-glow hover:to-primary
              text-primary-foreground px-6 py-3 text-base sm:text-lg font-semibold
              rounded-full shadow-xl
            "
            asChild
          >
            <a href="tel:+421902048583">
              📞 {content.callCta}
            </a>
          </Button>

          <Button
            size="lg"
            className="
              button-3d
              bg-[#25D366] text-white
              hover:bg-[#1ebe5d]
              px-6 py-3 text-base sm:text-lg font-semibold rounded-full
              shadow-xl transition-all duration-300
            "
            asChild
          >
            <a href="https://wa.me/421902048583">
              💬 {content.whatsappCta}
            </a>
          </Button>
        </div>

        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs md:text-sm text-muted-foreground">
          {content.badges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 bg-black/40 border border-secondary/20 rounded-full px-3 py-2"
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
