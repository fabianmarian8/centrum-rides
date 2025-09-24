import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Ako rýchlo viete prísť na základňu Lešť?',
    answer:
      'Štandardný čas príchodu je 30 – 40 minút od potvrdenia objednávky. Počas veľkých cvičení máme pripravené posilové vozidlá.',
    translation: '¿Cuánto tardan en llegar a la base de Lešť? — El tiempo habitual de llegada es de 30 a 40 minutos tras la confirmación, incluso durante maniobras.',
  },
  {
    question: 'Je možné zaplatiť kartou alebo faktúrou?',
    answer:
      'Momentálne akceptujeme výhradne hotovosť v eurách, potvrdenie o úhrade vystavíme priamo vodičom. Mesačný prehľad jázd pripravíme na požiadanie.',
    translation: '¿Se puede pagar con tarjeta o por factura? — Actualmente solo aceptamos efectivo en euros; el chofer entrega el recibo y podemos preparar un resumen mensual si lo necesitan.',
  },
  {
    question: 'Čo ak sa zmení program jednotky?',
    answer:
      'Sme v kontakte s dôstojníkmi pre logistiku. Transfer presunieme bez poplatku, vodič zostáva v pohotovosti v meste.',
    translation: '¿Qué pasa si cambia el horario? — Coordinamos con logística y ajustamos la vuelta sin coste adicional.',
  },
  {
    question: 'Ako účtujete čakanie počas večere alebo nočného programu?',
    answer:
      'Čakanie je spoplatnené sumou 15 € za každých začatých 30 minút. Vodič zostáva v blízkosti podniku a koordinuje presný čas návratu.',
    translation: '¿Cómo cobran la espera durante la cena o la noche? — La espera cuesta 15 € por cada 30 minutos iniciados, con el conductor listo cerca del local para coordinar la vuelta.',
  },
];

const FaqSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-military">Najčastejšie otázky</h2>
          <p className="text-lg text-muted-foreground">
            Transparentne komunikujeme v slovenčine, angličtine aj španielčine. Tu sú najčastejšie otázky španielskej jednotky.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="border border-secondary/30 rounded-2xl overflow-hidden bg-card/60 backdrop-blur"
            >
              <AccordionTrigger className="px-6 text-left text-base sm:text-lg font-semibold text-secondary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 space-y-3">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
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
