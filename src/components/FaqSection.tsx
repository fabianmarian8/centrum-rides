import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    heading: 'Frequently asked questions',
    description:
      'Clear answers in English and Spanish for the Spanish contingent operating from Lešť. Here are the most common questions we receive.',
    faqs: [
      {
        question: 'How fast can you reach Lešť base?',
        answer: 'We usually depart within 8 minutes after confirmation. During large exercises we activate additional vehicles.',
        note: '¿Cuánto tardan en llegar a la base de Lešť? — Salimos en un máximo de 8 minutos tras la confirmación, incluso durante maniobras.',
      },
      {
        question: 'Can we pay by card or invoice?',
        answer:
          'Yes, we accept military cards, cash and unit invoicing. Monthly ride summaries are available on request.',
        note: '¿Se puede pagar con tarjeta o por factura? — Aceptamos tarjetas, efectivo y facturación mensual para la unidad.',
      },
      {
        question: 'What if the unit schedule changes?',
        answer:
          'We stay in touch with logistics officers and adjust transfers without extra fees. Drivers remain on standby in town.',
        note: '¿Qué pasa si cambia el horario? — Coordinamos con logística y ajustamos la vuelta sin coste adicional.',
      },
      {
        question: 'How much is waiting time during dinner?',
        answer: 'Thirty minutes are included. Each additional hour is €15, with the driver waiting close to the venue.',
        note: '¿Cuál es el precio por la espera? — 30 minutos incluidos; cada hora adicional 15 €, con el chofer cerca del restaurante.',
      },
    ],
  },
  es: {
    heading: 'Preguntas frecuentes',
    description:
      'Respuestas claras en inglés y español para el contingente destacado en Lešť. Estas son las consultas que recibimos con más frecuencia.',
    faqs: [
      {
        question: '¿En cuánto tiempo pueden llegar a la base de Lešť?',
        answer:
          'Salimos normalmente en un máximo de 8 minutos tras confirmar la reserva. En grandes maniobras activamos vehículos de refuerzo.',
        note: 'How fast can you reach Lešť base? — We depart within 8 minutes after confirmation, even during exercises.',
      },
      {
        question: '¿Se puede pagar con tarjeta o por factura?',
        answer:
          'Sí, aceptamos tarjetas militares, efectivo y facturación para la unidad. Podemos preparar resúmenes mensuales.',
        note: 'Can we pay by card or invoice? — We accept cards, cash and monthly invoicing for the unit.',
      },
      {
        question: '¿Qué ocurre si cambia el horario de la unidad?',
        answer:
          'Estamos en contacto con logística y reajustamos el traslado sin cargos adicionales. El conductor permanece en la ciudad en espera.',
        note: 'What if the unit schedule changes? — We coordinate with logistics and reschedule without extra fees.',
      },
      {
        question: '¿Cuál es el precio por el tiempo de espera durante la cena?',
        answer:
          'Incluimos 30 minutos. Cada hora adicional son 15 €, con el chofer esperando cerca del lugar.',
        note: 'How much is waiting time during dinner? — 30 minutes included; each extra hour is €15 with the driver nearby.',
      },
    ],
  },
} as const;

const FaqSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-military">{content.heading}</h2>
          <p className="text-base sm:text-lg text-muted-foreground">{content.description}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {content.faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="border border-secondary/30 rounded-2xl overflow-hidden bg-card/60 backdrop-blur"
            >
              <AccordionTrigger className="px-4 sm:px-6 text-left text-sm sm:text-lg font-semibold text-secondary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-5 sm:pb-6 space-y-2 sm:space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">{faq.answer}</p>
                <p className="text-[11px] sm:text-sm text-secondary/80 italic">{faq.note}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
