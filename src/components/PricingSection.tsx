import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PricingSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-gold">
          Cenník misií
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Špecializované ceny pre španielsky vojenský personál
        </p>

        <Card className="
          relative max-w-lg mx-auto bg-card/50 backdrop-blur-md 
          border-2 border-secondary overflow-hidden
          hover-military
        ">
          <Badge 
            className="
              absolute -top-2 -right-12 bg-primary text-primary-foreground 
              px-8 py-1 rotate-45 origin-center font-bold
            "
          >
            NAJPOPULÁRNEJŠIE
          </Badge>

          <CardHeader className="relative">
            <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center">
              <span className="text-secondary-foreground font-black text-2xl">€</span>
            </div>
            
            <div className="pt-8">
              <div className="text-5xl font-black text-secondary mb-2">€15</div>
              <h3 className="text-2xl font-bold text-foreground">Základňa → Mesto</h3>
              <p className="text-muted-foreground">Jednosmerná preprava do Banskej Bystrice alebo Zvolena</p>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
              <p className="text-primary font-bold text-lg">
                🔥 48 španielskych vojakov si rezervovalo tento týždeň!
              </p>
            </div>

            <div className="text-left space-y-3">
              {[
                "✅ 25% vojenská zľava už aplikovaná",
                "✅ Čakací čas zahrnutý (až 30 min)",
                "✅ Garantovaná spiatočná cesta",
                "✅ Prémiové vozidlo",
                "✅ Vodič hovoriaci po anglicky/španielsky",
                "✅ Bezpečnostné overenie NATO",
                "✅ Diskrétna služba 24/7"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-secondary">{feature.split(' ')[0]}</span>
                  <span className="text-foreground">{feature.substring(2)}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 space-y-4">
              <Button 
                size="lg" 
                className="
                  w-full bg-gradient-to-r from-primary to-primary-glow 
                  hover:from-primary-glow hover:to-primary 
                  text-primary-foreground font-bold py-4 text-lg
                  rounded-full shadow-xl hover-military
                "
                asChild
              >
                <a href="tel:+421905123456">
                  📞 REZERVOVAŤ OKAMŽITE
                </a>
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Alebo pošlite SMS na: <span className="text-secondary font-bold">+421 905 123 456</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            "🛡️ NATO verifikované",
            "📱 Okamžité potvrdenie",
            "⭐ 4.9/5 hodnotenie",
            "🇪🇸 Španielsky friendly"
          ].map((badge, index) => (
            <div 
              key={index}
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