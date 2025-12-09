'use client';

import { Phone, MessageCircle, MapPin, Clock, CreditCard, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    heading: 'Ready to book your ride?',
    description: 'Call us directly or send a WhatsApp message. We respond within minutes.',
    phone: '+421 902 048 583',
    callButton: 'Call now',
    whatsappButton: 'WhatsApp',
    info: [
      { icon: Clock, text: 'Available 24/7, every day' },
      { icon: MapPin, text: 'Pickup at Slavia 1 gate, Lešť' },
      { icon: CreditCard, text: 'Cash payment in EUR only' },
      { icon: Shield, text: 'Discreet, professional service' },
    ],
    footer: 'TaxiForce s.r.o. | Licensed taxi service | Registered in Slovakia',
  },
  es: {
    heading: 'Listo para reservar?',
    description: 'Llámanos directamente o envía un mensaje de WhatsApp. Respondemos en minutos.',
    phone: '+421 902 048 583',
    callButton: 'Llamar ahora',
    whatsappButton: 'WhatsApp',
    info: [
      { icon: Clock, text: 'Disponible 24/7, todos los días' },
      { icon: MapPin, text: 'Recogida en puerta Slavia 1, Lešť' },
      { icon: CreditCard, text: 'Pago solo en efectivo EUR' },
      { icon: Shield, text: 'Servicio discreto y profesional' },
    ],
    footer: 'TaxiForce s.r.o. | Servicio de taxi con licencia | Registrado en Eslovaquia',
  },
} as const;

const ContactSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2">{content.heading}</h2>
        <p className="text-primary-foreground/80 text-sm sm:text-base mb-4 max-w-xl mx-auto">{content.description}</p>

        {/* Phone number */}
        <a
          href="tel:+421902048583"
          className="inline-block text-2xl sm:text-4xl md:text-5xl font-black mb-4 hover:opacity-80 transition-opacity"
        >
          {content.phone}
        </a>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-6">
          <a
            href="tel:+421902048583"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-bold text-sm sm:text-base hover:bg-white/90 transition-colors shadow-lg"
          >
            <Phone className="w-4 h-4" />
            {content.callButton}
          </a>
          <a
            href="https://wa.me/421902048583"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm sm:text-base hover:bg-[#22c55e] transition-colors shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            {content.whatsappButton}
          </a>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6">
          {content.info.map((item) => (
            <div key={item.text} className="flex flex-col items-center gap-1 p-2 sm:p-3 bg-white/10 rounded-xl">
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs text-center">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-primary-foreground/60 text-[10px] sm:text-xs">{content.footer}</p>
      </div>
    </section>
  );
};

export default ContactSection;
