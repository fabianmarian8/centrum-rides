import { pricingDetails } from '@/content/home';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PricingSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted to-background">
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold">{pricingDetails.title}</h2>
          <p className="text-xl text-muted-foreground">{pricingDetails.subtitle}</p>
        </div>

        <Card className="bg-card/60 backdrop-blur border border-secondary/40 shadow-xl">
          <CardContent className="p-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {pricingDetails.items.map((item) => (
                <div key={item.label} className="bg-black/20 border border-secondary/30 rounded-xl p-6 space-y-2">
                  <p className="text-sm uppercase tracking-wide text-secondary">{item.label}</p>
                  <p className="text-3xl font-bold text-foreground">{item.value}</p>
                  {item.note && <p className="text-xs text-muted-foreground">{item.note}</p>}
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">{pricingDetails.note}</p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-lg"
                asChild
              >
                <a href="tel:+421919040118">📞 Zavolať dispečing</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-[#25D366] text-white hover:bg-[#1DA851] border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
                asChild
              >
                <a href="https://wa.me/421919040118">💬 WhatsApp rezervácia</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-wrap justify-center gap-4">
          {['🛡️ NATO verifikované', '📱 Okamžité potvrdenie', '⭐ 4.9/5 hodnotenie', '🇪🇸 Španielsky friendly'].map((badge) => (
            <div
              key={badge}
              className="bg-secondary/10 backdrop-blur-md border border-secondary/30 rounded-full px-4 py-2 text-sm font-medium"
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