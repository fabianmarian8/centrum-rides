import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    heading: 'Contact & bookings',
    description: [
      'Reach out for immediate pick-up or schedule your transfer in advance.',
      'Our professional drivers are on call 24/7.',
    ],
    phoneNote: '',
    arrivalInfo: 'Average vehicle arrival time is 30–40 minutes.',
    paymentInfo: 'Payment accepted in cash (EUR) only.',
    callButton: 'Call now',
    whatsappButton: 'WhatsApp booking',
    availabilityTitle: '📱 Available 24/7 for your transport needs',
    availabilityBadges: [
      { icon: '⏰', text: '24/7 on-call' },
      { icon: '🔒', text: 'Discreet' },
      { icon: '⚡', text: 'Professional' },
    ],
    advantagesTitle: 'Our advantages',
    advantages: [
      { icon: '🛡️', text: 'NATO-level security' },
      { icon: '🚗', text: 'Premium vehicles' },
      { icon: '👨‍✈️', text: 'Experienced staff' },
      { icon: '⭐', text: 'Top-rated service' },
    ],
    footer: 'TaxiForce s.r.o. • License: SK-TAXI-2024 • Registered with the Ministry of Transport of Slovakia',
  },
  es: {
    heading: 'Contacto y reservas',
    description: [
      'Contáctanos para recogida inmediata o reserva anticipada.',
      'Nuestros conductores profesionales están disponibles 24/7.',
    ],
    phoneNote: '',
    arrivalInfo: 'Tiempo medio de llegada del vehículo: 30–40 minutos.',
    paymentInfo: 'Pago disponible solo en efectivo (EUR).',
    callButton: 'Llamar ahora',
    whatsappButton: 'Reserva por WhatsApp',
    availabilityTitle: '📱 Disponibles 24/7 para tus traslados',
    availabilityBadges: [
      { icon: '⏰', text: 'Guardia 24/7' },
      { icon: '🔒', text: 'Discreto' },
      { icon: '⚡', text: 'Profesional' },
    ],
    advantagesTitle: 'Nuestras ventajas',
    advantages: [
      { icon: '🛡️', text: 'Seguridad a nivel OTAN' },
      { icon: '🚗', text: 'Vehículos premium' },
      { icon: '👨‍✈️', text: 'Personal experimentado' },
      { icon: '⭐', text: 'Servicio con la mejor valoración' },
    ],
    footer: 'TaxiForce s.r.o. • Licencia: SK-TAXI-2024 • Registrado en el Ministerio de Transporte de Eslovaquia',
  },
} as const;

const ContactSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-t from-primary/10 via-background to-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-primary" />
        <div className="absolute top-1/3 left-0 w-full h-1/3 bg-secondary" />
        <div className="absolute top-2/3 left-0 w-full h-1/3 bg-primary" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient-gold">{content.heading}</h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto">
          {content.description[0]}
          <br />
          {content.description[1]}
        </p>

        <Card className="bg-card/50 backdrop-blur-md border border-secondary/30 p-6 sm:p-8 mb-8">
          <CardContent className="space-y-5 sm:space-y-6">
            <div className="text-center">
              <div className="text-3xl sm:text-5xl md:text-6xl font-black text-gradient-gold mb-3 sm:mb-4">
                📞 +421902048583
              </div>
              <p className="text-sm sm:text-lg text-muted-foreground">{content.phoneNote}</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">{content.arrivalInfo}</p>
              <p className="text-xs sm:text-sm font-semibold text-secondary mt-1">{content.paymentInfo}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                size="lg"
                className="
                  bg-gradient-to-r from-primary to-primary-glow
                  hover:from-primary-glow hover:to-primary
                  text-primary-foreground font-bold py-3 sm:py-4 text-base sm:text-lg
                  rounded-full shadow-xl hover-military
                "
                asChild
              >
                <a href="tel:+421902048583">📞 {content.callButton}</a>
              </Button>

              <Button
                size="lg"
                className="
                  bg-[#25D366] text-white
                  hover:bg-[#1ebe5d]
                  font-bold py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-xl
                "
                asChild
              >
                <a href="https://wa.me/421902048583">💬 {content.whatsappButton}</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="bg-primary/10 backdrop-blur-md border border-primary/30 rounded-xl p-5 sm:p-6 mb-8">
          <p className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4">
            {content.availabilityTitle}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
            {content.availabilityBadges.map((badge) => (
              <span key={badge.text} className="text-secondary font-medium">
                {badge.icon} {badge.text}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center space-y-3 sm:space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-secondary">{content.advantagesTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
            {content.advantages.map((item) => (
              <div
                key={item.text}
                className="text-center p-3 sm:p-4 bg-secondary/5 rounded-lg border border-secondary/20"
              >
                <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{item.icon}</div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">{content.footer}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
