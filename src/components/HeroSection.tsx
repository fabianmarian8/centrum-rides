import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-military.jpg';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center bg-hero-pattern"
      style={{
        backgroundImage: `
          linear-gradient(rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.85)),
          url(${heroImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />

      <div className="relative z-10 max-w-5xl px-6 py-20">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span className="bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide shadow-lg">
            🇪🇸 Base Training Area Lešť → Zvolen / Banská Bystrica
          </span>
          <span className="bg-secondary/10 border border-secondary/40 text-secondary px-3 py-1 rounded-full text-xs sm:text-sm font-semibold backdrop-blur">
            Overené NATO • Diskrétne 24/7
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl xl:text-7xl font-black mb-6 text-gradient-military drop-shadow-2xl leading-tight">
          TaxiForce Military Transfers
        </h1>

        <p className="text-lg md:text-2xl mb-10 text-foreground/90 max-w-3xl mx-auto leading-relaxed">
          Prémiová preprava pre španielsky vojenský personál na Slovensku. Rýchle transfery zo základne Lešť do Zvolena a Banskej Bystrice, bezpečné návraty späť.
          <br className="hidden md:block" />
          <span className="text-secondary font-semibold">Servicio disponible también en español bajo požiadavke.</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left text-sm sm:text-base">
          {[{
            title: 'Priemerný čas príchodu',
            value: '30 – 40 minút',
            note: 'Non-stop dispečing potvrdzuje dostupnosť v reálnom čase',
          },
          {
            title: 'Kapacita jedného vozidla',
            value: '4 pasažieri',
            note: 'Luxusné SUV alebo business sedan',
          },
          {
            title: 'Platba',
            value: 'Len v hotovosti',
            note: 'Prosíme pripraviť si sumu pred odjazdom',
          }].map((item, index) => (
            <div
              key={item.title}
              className="bg-black/30 border border-secondary/20 rounded-xl p-4 sm:p-5 backdrop-blur hover:border-secondary/40 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-secondary text-xs uppercase tracking-wide mb-1">{item.title}</p>
              <p className="text-xl font-bold text-foreground">{item.value}</p>
              <p className="text-muted-foreground text-sm">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="
              bg-gradient-to-r from-primary to-primary-glow
              hover:from-primary-glow hover:to-primary
              text-primary-foreground px-8 py-4 text-lg font-semibold
              rounded-full shadow-xl
            "
            asChild
          >
            <a href="tel:+421919040118">
              📞 Zavolať TaxiForce
            </a>
          </Button>

          <Button
            size="lg"
            className="
              bg-[#25D366] text-white
              hover:bg-[#1ebe5d]
              px-8 py-4 text-lg font-semibold rounded-full
              shadow-xl transition-all duration-300
            "
            asChild
          >
            <a href="https://wa.me/421919040118">
              💬 WhatsApp rezervácia
            </a>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-2 bg-black/40 border border-secondary/20 rounded-full px-4 py-2">
            <span>🛡️</span> <span>NATO security cleared drivers</span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 border border-secondary/20 rounded-full px-4 py-2">
            <span>🗺️</span> <span>Door-to-door medzi mestom a základňou</span>
          </div>
          <div className="flex items-center gap-2 bg-black/40 border border-secondary/20 rounded-full px-4 py-2">
            <span>🇪🇸</span> <span>Španielska komunita: odporúčané podniky</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
