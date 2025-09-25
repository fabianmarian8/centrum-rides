import { Card, CardContent } from '@/components/ui/card';
import militaryBadge from '@/assets/military-badge.jpg';
import restaurantImage from '@/assets/restaurant-bb.jpg';
import taxiImage from '@/assets/taxi-military.jpg';
import cityImage from '@/assets/banska-bystrica-night.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    heading: 'Why choose TaxiForce?',
    description: 'Specialised transfer unit dedicated to Spanish military personnel deployed at Lešť base.',
    features: [
      {
        icon: '🚐',
        title: 'Direct connection Lešť → Zvolen / Banská Bystrica',
        description:
          'We monitor troop movements and coordinate pick-ups at the base gate. Vehicles usually arrive within 30–40 minutes.',
        image: taxiImage,
        badge: '24/7 dispatch',
      },
      {
        icon: '🛡️',
        title: 'NATO security standards',
        description:
          'All drivers are vetted, bound by confidentiality agreements and trained for both duty and leisure transfers.',
        image: militaryBadge,
        badge: 'Security cleared',
      },
      {
        icon: '🍻',
        title: 'Local tips for the Spanish unit',
        description:
          'From tapas bars to nightclubs, we curate a trusted list of safe partner venues in both cities.',
        image: restaurantImage,
        badge: 'Insider tips',
      },
      {
        icon: '🌙',
        title: 'Operations 24/7 including late returns',
        description:
          'Coverage for evening outings and early training deployments. Waiting time is tailored individually to your plan.',
        image: cityImage,
        badge: 'Night ready',
      },
      {
        icon: '💶',
        title: 'Cash payments only',
        description:
          'Simple and transparent – pay in euros upon pick-up, card payments are not available.',
        image: null,
        badge: 'Payment info',
      },
      {
        icon: '🇪🇸',
        title: 'English and Spanish communication',
        description:
          'Dispatch understands military terminology; drivers are ready to handle English and essential Spanish phrases.',
        image: null,
        badge: 'Language support',
      },
    ],
  },
  es: {
    heading: '¿Por qué elegir TaxiForce?',
    description: 'Unidad de traslados especializada para el personal militar español destacado en la base de Lešť.',
    features: [
      {
        icon: '🚐',
        title: 'Conexión directa Lešť → Zvolen / Banská Bystrica',
        description:
          'Supervisamos los movimientos de la unidad y coordinamos recogidas en la puerta de la base. El vehículo llega en 30–40 minutos.',
        image: taxiImage,
        badge: 'Central 24/7',
      },
      {
        icon: '🛡️',
        title: 'Estándares de seguridad OTAN',
        description:
          'Todos los conductores están verificados, sujetos a confidencialidad y formados para traslados de servicio y ocio.',
        image: militaryBadge,
        badge: 'Security cleared',
      },
      {
        icon: '🍻',
        title: 'Recomendaciones locales para la unidad',
        description:
          'Desde bares de tapas hasta discotecas: lista de socios segura y de confianza en ambas ciudades.',
        image: restaurantImage,
        badge: 'Insider tips',
      },
      {
        icon: '🌙',
        title: 'Operaciones 24/7 con regresos tardíos',
        description:
          'Cobertura para salidas nocturnas y despliegues tempranos. El tiempo de espera se ajusta a vuestro plan.',
        image: cityImage,
        badge: 'Night ready',
      },
      {
        icon: '💶',
        title: 'Pagos solo en efectivo',
        description:
          'Proceso sencillo y transparente: pagas en euros al subir, no disponible pago con tarjeta.',
        image: null,
        badge: 'Payment info',
      },
      {
        icon: '🇪🇸',
        title: 'Comunicación en inglés y español',
        description:
          'La central conoce la terminología militar y los conductores manejan inglés y las frases esenciales en español.',
        image: null,
        badge: 'Language support',
      },
    ],
  },
} as const;

const FeaturesSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient-gold">
            {content.heading}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 min-[360px]:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {content.features.map((feature, index) => (
            <Card
              key={feature.title}
              className="
                relative bg-card/60 backdrop-blur-md border-border/50
                hover:border-secondary/60 transition-all duration-300
                hover-military slide-up group overflow-hidden
              "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {feature.badge && (
                <span className="absolute top-3 right-3 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase bg-secondary/20 text-secondary px-2 py-1 rounded-full border border-secondary/40">
                  {feature.badge}
                </span>
              )}

              <CardContent className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
                {feature.image && (
                  <div
                    className="w-full h-24 sm:h-28 md:h-32 bg-cover bg-center rounded-lg border border-secondary/20"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                )}

                <div className="text-center space-y-2 sm:space-y-3">
                  <div className="text-2xl sm:text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-secondary leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
