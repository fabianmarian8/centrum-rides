import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-t from-primary/10 via-background to-secondary/5 relative overflow-hidden">
      {/* Spanish flag pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-primary" />
        <div className="absolute top-1/3 left-0 w-full h-1/3 bg-secondary" />
        <div className="absolute top-2/3 left-0 w-full h-1/3 bg-primary" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-military">
            Pripravení na nasadenie?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nenechajte prepravu byť vašim nepriateľom. Pridajte sa k 200+ španielskym vojenským pracovníkom, ktorí dôverujú TaxiForce.
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-md border border-secondary/30 p-8 mb-8">
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-gradient-gold mb-4">
                📞 +421 905 123 456
              </div>
              <p className="text-lg text-muted-foreground">
                Hovoriť: English
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button 
                size="lg" 
                className="
                  bg-gradient-to-r from-primary to-primary-glow 
                  hover:from-primary-glow hover:to-primary 
                  text-primary-foreground font-bold py-4
                  rounded-full shadow-xl hover-military
                "
                asChild
              >
                <a href="tel:+421905123456">
                  🚁 OKAMŽITÉ VYZDVIHNUTIE
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="
                  border-2 border-secondary text-secondary 
                  hover:bg-secondary hover:text-secondary-foreground
                  font-bold py-4 rounded-full backdrop-blur-md
                "
                asChild
              >
                <a href="sms:+421905123456">
                  💬 SMS REZERVÁCIA
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="bg-primary/10 backdrop-blur-md border border-primary/30 rounded-xl p-6 mb-8">
          <p className="text-lg font-bold text-primary mb-4">
            🚨 KRITICKÁ MISIA: Zavolajte do 2 hodín pre garantované vyzdvihnutie dnes večer!
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <span className="text-secondary font-medium">⏰ Dostupné 24/7</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-secondary font-medium">🔒 Diskrétne</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-secondary font-medium">⚡ Rýchle</span>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-secondary">Prečo čakať?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: "🛡️", text: "NATO bezpečnosť" },
              { icon: "🚗", text: "Prémiové vozidlá" },
              { icon: "👨‍✈️", text: "Vojenský personál" },
              { icon: "⭐", text: "Top hodnotenie" }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-secondary/5 rounded-lg border border-secondary/20"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-sm font-medium text-muted-foreground">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            TaxiForce s.r.o. • Licencia: SK-TAXI-2024 • Registrované na Ministerstve dopravy SR
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;