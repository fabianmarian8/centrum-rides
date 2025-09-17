import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-military.jpg';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-center bg-hero-pattern"
      style={{
        backgroundImage: `
          linear-gradient(rgba(196, 28, 36, 0.8), rgba(255, 196, 0, 0.6)),
          url(${heroImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      
      <div className="relative z-10 max-w-4xl px-6">
        <div className="inline-block bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full text-sm font-bold mb-6 military-pulse">
          🇪🇸 EXKLUZÍVNE PRE ŠPANIELSKY VOJENSKÝ PERSONÁL
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-6 text-gradient-military drop-shadow-2xl">
          TaxiForce
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-3xl mx-auto font-medium">
          Prémiová prepravná služba pre španielsky vojenský personál<br />
          <span className="text-secondary font-bold">Bezpečne • Spoľahlivo • Diskrétne • 24/7</span>
        </p>
        
        <div className="bg-primary/20 backdrop-blur-md border border-secondary/30 rounded-xl p-4 mb-8 military-pulse">
          <p className="text-secondary font-bold text-lg">
            ⚡ Len 15 miest dostupných tento týždeň - Rezervujte si svoje miesto teraz!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="
              bg-gradient-to-r from-primary to-primary-glow 
              hover:from-primary-glow hover:to-primary 
              text-primary-foreground px-8 py-4 text-lg font-bold 
              rounded-full shadow-xl hover-military
            "
            asChild
          >
            <a href="tel:+421905123456">
              📞 VOLAJTE TERAZ
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="
              bg-background/10 border-2 border-secondary text-secondary 
              hover:bg-secondary hover:text-secondary-foreground
              px-8 py-4 text-lg font-bold rounded-full backdrop-blur-md
              transition-all duration-300
            "
            asChild
          >
            <a href="#booking">
              Rezervovať online
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;