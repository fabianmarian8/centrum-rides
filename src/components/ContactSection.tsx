import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-t from-primary/10 via-background to-secondary/5 relative overflow-hidden">
      {/* Spanish flag pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-primary" />
        <div className="absolute top-1/3 left-0 w-full h-1/3 bg-secondary" />
        <div className="absolute top-2/3 left-0 w-full h-1/3 bg-primary" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient-gold">
          Kontakt a rezervácie
        </h2>
        <p className="text-sm sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto">
          Kontaktujte nás pre okamžité vyzdvihnutie alebo rezervujte dopredu.<br />
          Naši profesionálni vodiči sú k dispozícii 24/7.
        </p>

        <Card className="bg-card/50 backdrop-blur-md border border-secondary/30 p-5 sm:p-8 mb-6 sm:mb-8">
          <CardContent className="space-y-4 sm:space-y-6">
            <div className="text-center">
              <div className="text-3xl sm:text-5xl md:text-6xl font-black text-gradient-gold mb-3 sm:mb-4">
                📞 +421919040118
              </div>
              <p className="text-sm sm:text-lg text-muted-foreground">
                Hovoriť: English
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 sm:mt-2">
                Priemerný čas príchodu vozidla je 30 – 40 minút.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-secondary mt-1">
                Platba je možná len v hotovosti v eurách.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <Button
                size="lg"
                className="
                  bg-gradient-to-r from-primary to-primary-glow
                  hover:from-primary-glow hover:to-primary
                  text-primary-foreground font-bold py-3 sm:py-4 text-sm sm:text-base
                  rounded-full shadow-xl hover-military
                "
                asChild
              >
                <a href="tel:+421919040118">
                  📞 Zavolať teraz
                </a>
              </Button>

              <Button
                size="lg"
                className="
                  bg-[#25D366] text-white
                  hover:bg-[#1ebe5d]
                  font-bold py-3 sm:py-4 text-sm sm:text-base rounded-full shadow-xl
                "
                asChild
              >
                <a href="https://wa.me/421919040118">
                  💬 WhatsApp rezervácia
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="bg-primary/10 backdrop-blur-md border border-primary/30 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
          <p className="text-sm sm:text-lg font-semibold text-primary mb-3 sm:mb-4">
            📱 Dostupné 24/7 pre vaše prepravné potreby
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <span className="text-secondary font-medium">⏰ Dostupné 24/7</span>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <span className="text-secondary font-medium">🔒 Diskrétne</span>
            <span className="hidden sm:block text-muted-foreground">•</span>
            <span className="text-secondary font-medium">⚡ Profesionálne</span>
          </div>
        </div>

        <div className="text-center space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-2xl font-bold text-secondary">Naše výhody</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
            {[
              { icon: "🛡️", text: "NATO bezpečnosť" },
              { icon: "🚗", text: "Prémiové vozidlá" },
              { icon: "👨‍✈️", text: "Vojenský personál" },
              { icon: "⭐", text: "Top hodnotenie" }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-3 sm:p-4 bg-secondary/5 rounded-lg border border-secondary/20"
              >
                <div className="text-xl sm:text-2xl mb-1.5 sm:mb-2">{item.icon}</div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-[10px] sm:text-sm text-muted-foreground">
            TaxiForce s.r.o. • Licencia: SK-TAXI-2024 • Registrované na Ministerstve dopravy SR
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;