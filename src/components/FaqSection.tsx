import { faqs } from '@/content/home';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
