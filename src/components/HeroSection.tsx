import { heroContent } from '@/content/home';
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
          {heroContent.badgeLines.map((badge) => (
            <span
              key={badge.text}
              className={
                badge.variant === 'primary'
                  ? 'bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide shadow-lg'
                  : 'bg-secondary/10 border border-secondary/40 text-secondary px-3 py-1 rounded-full text-xs sm:text-sm font-semibold backdrop-blur'
              }
            >
              {badge.text}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-6xl xl:text-7xl font-black mb-6 text-gradient-military drop-shadow-2xl leading-tight">
          {heroContent.title}
        </h1>

        <p className="text-lg md:text-2xl mb-10 text-foreground/90 max-w-3xl mx-auto leading-relaxed">
          {heroContent.description}
          <br className="hidden md:block" />
          <span className="text-secondary font-semibold">{heroContent.bilingualNote}</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left text-sm sm:text-base">
          {heroContent.stats.map((item, index) => (
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
            variant="outline"
            size="lg"
            className="
              bg-[#25D366] text-white
              hover:bg-[#1DA851] hover:text-white
              border-0
              px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-md
              transition-all duration-300 shadow-lg
            "
            asChild
          >
            <a href="https://wa.me/421919040118">
              💬 WhatsApp rezervácia
            </a>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-muted-foreground">
          {heroContent.sellingPoints.map((point) => (
            <div
              key={point.text}
              className="flex items-center gap-2 bg-black/40 border border-secondary/20 rounded-full px-4 py-2"
            >
              <span>{point.icon}</span> <span>{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
