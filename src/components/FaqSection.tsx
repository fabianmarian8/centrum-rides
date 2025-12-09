'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    heading: 'Common questions',
    description: 'Everything you need to know about booking a ride with us.',
    faqs: [
      {
        question: 'How fast can you reach Lešť base?',
        answer: 'We usually depart within 30-40 minutes after confirmation. Our drivers stay near Slavia 1 gate, ready to go.',
      },
      {
        question: 'What if our schedule changes?',
        answer: 'No problem. We stay in touch with your unit and adjust the transfer without extra fees. Flexibility is part of our service.',
      },
      {
        question: 'How much for waiting time?',
        answer: 'First 30 minutes are included. After that, it is 15 EUR per hour. The driver waits nearby.',
      },
      {
        question: 'Do you accept card payments?',
        answer: 'We only accept cash in EUR. Simple, no complications. You will know the price before we start.',
      },
      {
        question: 'Can you recommend places to go?',
        answer: 'Absolutely. We know all the good spots in Zvolen and Banská Bystrica - bars, restaurants, clubs. Just ask.',
      },
    ],
  },
  es: {
    heading: 'Preguntas frecuentes',
    description: 'Todo lo que necesitas saber para reservar con nosotros.',
    faqs: [
      {
        question: '¿En cuánto tiempo pueden llegar a la base?',
        answer: 'Normalmente salimos en 30-40 minutos tras confirmar. Nuestros conductores están cerca de la puerta Slavia 1.',
      },
      {
        question: '¿Y si cambia nuestro horario?',
        answer: 'Sin problema. Coordinamos con tu unidad y ajustamos el traslado sin cargos extra. La flexibilidad es parte del servicio.',
      },
      {
        question: '¿Cuánto cuesta el tiempo de espera?',
        answer: 'Los primeros 30 minutos están incluidos. Después, 15 EUR por hora. El conductor espera cerca.',
      },
      {
        question: '¿Aceptáis pago con tarjeta?',
        answer: 'Solo efectivo en EUR. Simple, sin complicaciones. Sabrás el precio antes de empezar.',
      },
      {
        question: '¿Podéis recomendar sitios?',
        answer: 'Por supuesto. Conocemos todos los buenos sitios en Zvolen y Banská Bystrica - bares, restaurantes, discotecas. Solo pregunta.',
      },
    ],
  },
} as const;

const FaqSection = () => {
  const { language } = useLanguage();
  const content = translations[language];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQPage Schema.org JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="section-padding bg-muted/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-8">
          <h2 className="heading-lg text-foreground mb-2">{content.heading}</h2>
          <p className="text-muted-foreground text-sm sm:text-base">{content.description}</p>
        </div>

        {/* FAQ items */}
        <div className="space-y-2">
          {content.faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="card-warm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-3 sm:p-4 text-left"
              >
                <span className="font-semibold text-foreground pr-3 text-sm sm:text-base">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                  <p className="text-muted-foreground leading-relaxed text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
