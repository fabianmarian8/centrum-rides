import { Card, CardContent } from '@/components/ui/card';
import militaryBadge from '@/assets/military-badge.jpg';
import restaurantImage from '@/assets/restaurant-bb.jpg';
import taxiImage from '@/assets/taxi-military.jpg';
import cityImage from '@/assets/banska-bystrica-night.jpg';

const features = [
  {
    icon: '🚐',
    title: 'Priame spojenie Lešť → Zvolen / Banská Bystrica',
    description:
      'Monitorujeme pohyb jednotiek a koordinujeme vyzdvihnutia priamo pri bráne základne. Vozidlo štandardne dorazí do 30 – 40 minút.',
    image: taxiImage,
    badge: 'Non-stop dispečing',
  },
  {
    icon: '🛡️',
    title: 'Bezpečnostné štandardy NATO',
    description:
      'Všetci vodiči sú preverení, zmluvne viazaní mlčanlivosťou a poznajú protokoly pre služobné aj voľnočasové presuny.',
    image: militaryBadge,
    badge: 'Security cleared',
  },
  {
    icon: '🍻',
    title: 'Lokálne odporúčania pre španielsku jednotku',
    description:
      'Od tapas barov po nočné kluby – pripravili sme partnerský zoznam bezpečných a overených miest v oboch mestách.',
    image: restaurantImage,
    badge: 'Insider tips',
  },
  {
    icon: '🌙',
    title: 'Operácie 24/7 vrátane neskorých návratov',
    description:
      'Služba pokrýva nočné vychádzky aj skoré ranné presuny na cvičenia. Čakanie sa dohodne individuálne podľa tarify.',
    image: cityImage,
    badge: 'Night ready',
  },
  {
    icon: '💶',
    title: 'Platba výlučne v hotovosti',
    description:
      'Fakturácia je jednoduchá a transparentná – platíte pri nástupe v eurách, bez možnosti kartovej platby.',
    image: null,
    badge: 'Payment info',
  },
  {
    icon: '🇪🇸',
    title: 'Komunikácia v angličtine + základná španielčina',
    description:
      'Dispečing rozumie vojenským termínom, vodiči sú pripravení komunikovať v angličtine a najčastejších frázach po španielsky.',
    image: null,
    badge: 'Language support',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16 space-y-3">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gradient-gold">
            Prečo zvoliť TaxiForce?
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Špecializovaná prepravná jednotka pre španielsky vojenský personál pôsobiaci na základni Lešť
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="
                relative bg-card/60 backdrop-blur-md border-border/50
                hover:border-secondary/60 transition-all duration-300
                hover-military slide-up group overflow-hidden
              "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {feature.badge && (
                <span className="absolute top-3 right-3 text-[8px] sm:text-[10px] font-bold tracking-widest uppercase bg-secondary/20 text-secondary px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-secondary/40">
                  {feature.badge}
                </span>
              )}

              <CardContent className="p-3 sm:p-6 space-y-3 sm:space-y-4">
                {feature.image && (
                  <div
                    className="w-full h-24 sm:h-32 bg-cover bg-center rounded-lg border border-secondary/20"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                )}

                <div className="text-center space-y-2 sm:space-y-3">
                  <div className="text-2xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>

                  <h3 className="text-sm sm:text-lg font-bold text-secondary leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="h-0.5 sm:h-1 bg-gradient-to-r from-primary via-secondary to-primary mt-3 sm:mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
