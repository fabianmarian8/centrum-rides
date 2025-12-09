'use client';

import { Car, Shield, Beer, Moon, Wallet, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    heading: 'Why locals trust us',
    description: 'We are not just another taxi. We understand military schedules, respect discretion, and know every road between the base and the cities.',
    features: [
      {
        icon: Car,
        title: 'Direct connection',
        description: 'Lešť base to Zvolen in 35 min, Banská Bystrica in 50 min. We pick you up right at Slavia 1 gate.',
        highlight: '24/7 dispatch',
      },
      {
        icon: Shield,
        title: 'Security first',
        description: 'All drivers are vetted and trained. Confidentiality is guaranteed for every ride.',
        highlight: 'NATO standards',
      },
      {
        icon: Beer,
        title: 'Local knowledge',
        description: 'Best tapas bars, nightclubs, restaurants - we know them all and can recommend the safe ones.',
        highlight: 'Insider tips',
      },
      {
        icon: Moon,
        title: 'Night service',
        description: 'Late returns, early morning pickups - we adapt to your schedule, not the other way around.',
        highlight: 'Flexible hours',
      },
      {
        icon: Wallet,
        title: 'Simple payment',
        description: 'Cash only in EUR. No complicated apps, no hidden fees. You know the price upfront.',
        highlight: 'Transparent',
      },
      {
        icon: MessageSquare,
        title: 'English support',
        description: 'Our dispatchers speak English and understand military terminology. Communication is never a problem.',
        highlight: 'Clear comms',
      },
    ],
  },
  es: {
    heading: 'Por qué confían en nosotros',
    description: 'No somos solo un taxi. Entendemos los horarios militares, respetamos la discreción y conocemos cada carretera entre la base y las ciudades.',
    features: [
      {
        icon: Car,
        title: 'Conexión directa',
        description: 'Base de Lešť a Zvolen en 35 min, Banská Bystrica en 50 min. Te recogemos en la puerta Slavia 1.',
        highlight: 'Central 24/7',
      },
      {
        icon: Shield,
        title: 'Seguridad primero',
        description: 'Todos los conductores están verificados y formados. La confidencialidad está garantizada.',
        highlight: 'Estándares OTAN',
      },
      {
        icon: Beer,
        title: 'Conocimiento local',
        description: 'Los mejores bares de tapas, discotecas, restaurantes - los conocemos todos y recomendamos los seguros.',
        highlight: 'Tips locales',
      },
      {
        icon: Moon,
        title: 'Servicio nocturno',
        description: 'Regresos tardíos, recogidas de madrugada - nos adaptamos a tu horario.',
        highlight: 'Horarios flexibles',
      },
      {
        icon: Wallet,
        title: 'Pago simple',
        description: 'Solo efectivo en EUR. Sin apps complicadas, sin cargos ocultos. Precio claro desde el inicio.',
        highlight: 'Transparente',
      },
      {
        icon: MessageSquare,
        title: 'Soporte en inglés',
        description: 'Nuestros operadores hablan inglés y entienden terminología militar. La comunicación nunca es un problema.',
        highlight: 'Comunicación clara',
      },
    ],
  },
} as const;

const FeaturesSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="heading-lg text-foreground mb-2">{content.heading}</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {content.features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-warm p-3 sm:p-5 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon and highlight */}
              <div className="flex items-start justify-between mb-2 sm:mb-3">
                <div className="icon-container w-8 h-8 sm:w-10 sm:h-10 rounded-lg">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-secondary bg-secondary/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                  {feature.highlight}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-sm sm:text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed hidden sm:block">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
