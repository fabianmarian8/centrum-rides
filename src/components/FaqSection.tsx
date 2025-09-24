import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Ako rýchlo viete prísť na základňu Lešť?',
    answer:
      'Štandardne vychádzame do 8 minút od potvrdenia objednávky. Počas veľkých cvičení máme pripravené posilové vozidlá.',
    translation: '¿Cuánto tardan en llegar a la base de Lešť? — Salimos en un máximo de 8 minutos tras la confirmación, incluso durante maniobras.',
  },
  {
    question: 'Je možné zaplatiť kartou alebo faktúrou?',
    answer:
      'Áno, akceptujeme vojenské karty, hotovosť aj fakturáciu pre jednotku. Na požiadanie pripravíme mesačný prehľad jázd.',
    translation: '¿Se puede pagar con tarjeta o por factura? — Aceptamos tarjetas, efectivo y facturación mensual para la unidad.',
  },
  {
    question: 'Čo ak sa zmení program jednotky?',
    answer:
      'Sme v kontakte s dôstojníkmi pre logistiku. Transfer presunieme bez poplatku, vodič zostáva v pohotovosti v meste.',
    translation: '¿Qué pasa si cambia el horario? — Coordinamos con logística y ajustamos la vuelta sin coste adicional.',
  },
  {
    question: 'Koľko stojí čakacia doba počas večere?',
    answer:
      'V cene je zahrnutých 30 minút. Každá ďalšia začatá hodina je 15 €. Čakáme priamo v blízkosti podniku.',
    translation: '¿Cuál es el precio por la espera? — 30 minutos incluidos; cada hora adicional 15 €, con el chofer cerca del restaurante.',
  },
];

const FaqSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 space-y-2.5 sm:space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-military">Najčastejšie otázky</h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Transparentne komunikujeme v slovenčine, angličtine aj španielčine. Tu sú najčastejšie otázky španielskej jednotky.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="border border-secondary/30 rounded-2xl overflow-hidden bg-card/60 backdrop-blur"
            >
              <AccordionTrigger className="px-4 sm:px-6 text-left text-base sm:text-lg font-semibold text-secondary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-6 space-y-2.5 sm:space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                <p className="text-xs sm:text-sm text-secondary/80 italic">{faq.translation}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
