import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
const PricingSection = () => {
  return <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-muted to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient-gold">
          Cenník služieb
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12">
          Profesionálne ceny pre španielsky vojenský personál
        </p>

        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          <Card className="
            relative bg-card/50 backdrop-blur-md
            border-2 border-secondary overflow-hidden
            hover-military
          ">
            <Badge className="
                absolute -top-2 -right-12 bg-primary text-primary-foreground
                px-6 sm:px-8 py-1 rotate-45 origin-center text-xs sm:text-sm font-bold
              ">
              NAJPOPULÁRNEJŠIE
            </Badge>

            <CardHeader className="relative">
              <div className="absolute top-4 left-4 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-black text-xl sm:text-2xl">€</span>
              </div>

              <div className="pt-8">
                <div className="text-4xl sm:text-5xl font-black text-secondary mb-1 sm:mb-2">€35</div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Základňa → Zvolen</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Jednosmerná preprava do Zvolena</p>
              </div>
            </CardHeader>

            <CardContent className="space-y-3 sm:space-y-4">

              <div className="text-left space-y-2.5 sm:space-y-3 text-sm sm:text-base">
                {["✅ 25% vojenská zľava už aplikovaná", "✅ Priemerný čas príchodu 30 – 40 min podľa dostupnosti", "✅ Garantovaná spiatočná cesta", "✅ Prémiové vozidlo", "✅ Vodič hovoriaci iba po anglicky", "✅ Bezpečnostné overenie NATO", "✅ Platba výlučne v hotovosti"].map((feature, index) => <div key={index} className="flex items-center gap-3">
                    <span className="text-secondary">{feature.split(' ')[0]}</span>
                    <span className="text-foreground">{feature.substring(2)}</span>
                  </div>)}
              </div>

              <div className="pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                <Button size="lg" className="
                    w-full bg-gradient-to-r from-primary to-primary-glow
                    hover:from-primary-glow hover:to-primary
                    text-primary-foreground font-bold py-3 sm:py-4 text-base sm:text-lg
                    rounded-full shadow-xl hover-military
                  " asChild>
                  <a href="tel:+421919040118">
                    📞 Rezervovať
                  </a>
                </Button>

                <div className="text-center">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Alebo napíšte na WhatsApp: <span className="text-secondary font-bold">+421919040118</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="
            relative bg-card/50 backdrop-blur-md
            border-2 border-primary overflow-hidden
            hover-military
          ">
            <CardHeader className="relative">
              <div className="absolute top-4 left-4 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-black text-xl sm:text-2xl">€</span>
              </div>

              <div className="pt-8">
                <div className="text-4xl sm:text-5xl font-black text-primary mb-1 sm:mb-2">€60</div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Základňa → B. Bystrica</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Jednosmerná preprava do Banskej Bystrice</p>
              </div>
            </CardHeader>

            <CardContent className="space-y-3 sm:space-y-4">

              <div className="text-left space-y-2.5 sm:space-y-3 text-sm sm:text-base">
                {["✅ 25% vojenská zľava už aplikovaná", "✅ Priemerný čas príchodu 30 – 40 min podľa dostupnosti", "✅ Garantovaná spiatočná cesta", "✅ Prémiové vozidlo", "✅ Vodič hovoriaci iba po anglicky", "✅ Bezpečnostné overenie NATO", "✅ Platba výlučne v hotovosti"].map((feature, index) => <div key={index} className="flex items-center gap-3">
                    <span className="text-secondary">{feature.split(' ')[0]}</span>
                    <span className="text-foreground">{feature.substring(2)}</span>
                  </div>)}
              </div>

              <div className="pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                <Button size="lg" className="
                    w-full bg-gradient-to-r from-secondary to-secondary/80
                    hover:from-secondary/80 hover:to-secondary
                    text-secondary-foreground font-bold py-3 sm:py-4 text-base sm:text-lg
                    rounded-full shadow-xl hover-military
                  " asChild>
                  <a href="tel:+421919040118">
                    📞 Rezervovať
                  </a>
                </Button>

                <div className="text-center">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Alebo napíšte na WhatsApp: <span className="text-secondary font-bold">+421919040118</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {["🛡️ NATO verifikované", "📱 Okamžité potvrdenie", "⭐ 4.9/5 hodnotenie", "🇪🇸 Španielsky friendly"].map((badge, index) => <div key={index} className="bg-secondary/10 backdrop-blur-md border border-secondary/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium">
              {badge}
            </div>)}
        </div>
      </div>
    </section>;
};

export default PricingSection;