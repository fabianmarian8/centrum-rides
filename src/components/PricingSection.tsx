import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

type PricingCard = {
  highlight?: string;
  highlightClass?: string;
  borderClass: string;
  circleClass: string;
  priceClass: string;
  buttonClass: string;
  price: string;
  title: string;
  subtitle: string;
  features: { icon: string; text: string }[];
  button: string;
  whatsapp: string;
};

const translations: Record<
  'en' | 'es',
  {
    heading: string;
    description: string;
    cards: PricingCard[];
    badges: string[];
  }
> = {
  en: {
    heading: 'Service pricing',
    description: 'Professional rates dedicated to Spanish military personnel.',
    cards: [
      {
        highlight: 'Most popular',
        highlightClass: 'bg-primary text-primary-foreground',
        borderClass: 'border-secondary',
        circleClass: 'bg-gradient-to-br from-secondary to-secondary/70',
        priceClass: 'text-secondary',
        buttonClass:
          'from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground',
        price: '€35',
        title: 'Base → Zvolen',
        subtitle: 'One-way transfer to Zvolen',
        features: [
          { icon: '✅', text: '25% military discount already applied' },
          { icon: '✅', text: 'Average arrival time 30–40 min depending on availability' },
          { icon: '✅', text: 'Return trip guaranteed on request' },
          { icon: '✅', text: 'Premium SUV or executive sedan' },
          { icon: '✅', text: 'Driver fluent in English' },
          { icon: '✅', text: 'NATO security clearance' },
          { icon: '✅', text: 'Cash payments in euros only' },
        ],
        button: 'Book a ride',
        whatsapp: 'Or message us on WhatsApp: ',
      },
      {
        borderClass: 'border-primary',
        circleClass: 'bg-gradient-to-br from-primary to-primary/70',
        priceClass: 'text-primary',
        buttonClass:
          'from-secondary to-secondary/80 hover:from-secondary/80 hover:to-secondary text-secondary-foreground',
        price: '€60',
        title: 'Base → Banská Bystrica',
        subtitle: 'One-way transfer to Banská Bystrica',
        features: [
          { icon: '✅', text: '25% military discount already applied' },
          { icon: '✅', text: 'Average arrival time 30–40 min depending on availability' },
          { icon: '✅', text: 'Return trip guaranteed on request' },
          { icon: '✅', text: 'Premium SUV or executive sedan' },
          { icon: '✅', text: 'Driver fluent in English' },
          { icon: '✅', text: 'NATO security clearance' },
          { icon: '✅', text: 'Cash payments in euros only' },
        ],
        button: 'Book a ride',
        whatsapp: 'Or message us on WhatsApp: ',
      },
    ],
    badges: ['🛡️ NATO verified', '📱 Instant confirmation', '⭐ 4.9/5 rating', '🎯 Military focused'],
  },
  es: {
    heading: 'Tarifas del servicio',
    description: 'Precios profesionales para el personal militar español.',
    cards: [
      {
        highlight: 'Más solicitado',
        highlightClass: 'bg-primary text-primary-foreground',
        borderClass: 'border-secondary',
        circleClass: 'bg-gradient-to-br from-secondary to-secondary/70',
        priceClass: 'text-secondary',
        buttonClass:
          'from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground',
        price: '€35',
        title: 'Base → Zvolen',
        subtitle: 'Traslado solo ida a Zvolen',
        features: [
          { icon: '✅', text: '25% de descuento militar ya aplicado' },
          { icon: '✅', text: 'Tiempo medio de llegada 30–40 min según disponibilidad' },
          { icon: '✅', text: 'Regreso garantizado bajo solicitud' },
          { icon: '✅', text: 'SUV premium o sedán ejecutivo' },
          { icon: '✅', text: 'Conductor fluido en inglés' },
          { icon: '✅', text: 'Acreditación de seguridad OTAN' },
          { icon: '✅', text: 'Pago en efectivo en euros' },
        ],
        button: 'Reservar traslado',
        whatsapp: 'O escríbenos por WhatsApp: ',
      },
      {
        borderClass: 'border-primary',
        circleClass: 'bg-gradient-to-br from-primary to-primary/70',
        priceClass: 'text-primary',
        buttonClass:
          'from-secondary to-secondary/80 hover:from-secondary/80 hover:to-secondary text-secondary-foreground',
        price: '€60',
        title: 'Base → Banská Bystrica',
        subtitle: 'Traslado solo ida a Banská Bystrica',
        features: [
          { icon: '✅', text: '25% de descuento militar ya aplicado' },
          { icon: '✅', text: 'Tiempo medio de llegada 30–40 min según disponibilidad' },
          { icon: '✅', text: 'Regreso garantizado bajo solicitud' },
          { icon: '✅', text: 'SUV premium o sedán ejecutivo' },
          { icon: '✅', text: 'Conductor fluido en inglés' },
          { icon: '✅', text: 'Acreditación de seguridad OTAN' },
          { icon: '✅', text: 'Pago en efectivo en euros' },
        ],
        button: 'Reservar traslado',
        whatsapp: 'O escríbenos por WhatsApp: ',
      },
    ],
    badges: ['🛡️ Verificado por la OTAN', '📱 Confirmación inmediata', '⭐ Valoración 4.9/5', '🎯 Enfoque militar'],
  },
};

const PricingSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-muted to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient-gold">
          {content.heading}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12">
          {content.description}
        </p>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {content.cards.map((card) => (
            <Card
              key={card.title}
              className={`relative bg-card/50 backdrop-blur-md border-2 overflow-hidden hover-military ${card.borderClass}`}
            >
              {card.highlight && card.highlightClass && (
                <Badge
                  className={`absolute -top-2 -right-10 sm:-right-12 px-6 sm:px-8 py-1 rotate-45 origin-center font-bold text-xs sm:text-sm ${card.highlightClass}`}
                >
                  {card.highlight}
                </Badge>
              )}

              <CardHeader className="relative">
                <div
                  className={`absolute top-4 left-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-black text-xl sm:text-2xl ${card.circleClass}`}
                >
                  €
                </div>

                <div className="pt-8">
                  <div className={`text-3xl sm:text-4xl md:text-5xl font-black mb-2 ${card.priceClass}`}>
                    {card.price}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">{card.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{card.subtitle}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-3 sm:space-y-4">
                <div className="text-left space-y-2 sm:space-y-3 text-sm">
                  {card.features.map((feature) => (
                    <div key={feature.text} className="flex items-center gap-2 sm:gap-3">
                      <span className="text-secondary text-base">{feature.icon}</span>
                      <span className="text-foreground text-xs sm:text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                  <Button
                    size="lg"
                    className={`w-full font-bold py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-xl hover-military bg-gradient-to-r ${card.buttonClass}`}
                    asChild
                  >
                    <a href="tel:+421919040118">📞 {card.button}</a>
                  </Button>

                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {card.whatsapp}
                      <span className="text-secondary font-bold">+421919040118</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {content.badges.map((badge) => (
            <div
              key={badge}
              className="bg-secondary/10 backdrop-blur-md border border-secondary/30 rounded-full px-3 py-2 text-xs sm:text-sm font-medium"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
