import { Card, CardContent } from '@/components/ui/card';
import militaryBadge from '@/assets/military-badge.jpg';
import restaurantImage from '@/assets/restaurant-bb.jpg';
import taxiImage from '@/assets/taxi-military.jpg';
import cityImage from '@/assets/banska-bystrica-night.jpg';

const features = [
  {
    icon: "🛡️",
    title: "Vojenská bezpečnosť",
    description: "Preverení vodiči s bezpečnostným preverením. Vaša bezpečnosť je naša misia.",
    image: militaryBadge,
  },
  {
    icon: "🍽️",
    title: "Trasy k reštauráciám a barom",
    description: "Priama preprava do najlepších podnikov v Banskej Bystrici a Zvolene. Poznáme najlepšie miesta!",
    image: restaurantImage,
  },
  {
    icon: "⚡",
    title: "Rýchla reakcia",
    description: "Priemerný čas vyzdvihnutia: 8 minút. Keď povinnosť volá, my sme už tam.",
    image: taxiImage,
  },
  {
    icon: "💰",
    title: "Vojenské ceny",
    description: "Exkluzívna 25% zľava pre španielske ozbrojené sily. Česť si zaslúži česť.",
    image: null,
  },
  {
    icon: "🌙",
    title: "24/7 operácie",
    description: "Nočné misie do najhorúcejších klubov mesta. Vráťte sa na základňu bezpečne, kedykoľvek.",
    image: cityImage,
  },
  {
    icon: "🎖️",
    title: "Prevádzkované veteránmi",
    description: "Riadené bývalým vojenským personálom, ktorý rozumie vašim potrebám.",
    image: null,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-gold">
            Prečo TaxiForce?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Špecializovaná služba navrhnutá pre španielskeho vojenského personála na Slovensku
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="
                bg-card/50 backdrop-blur-md border-border/50 
                hover:border-secondary/50 transition-all duration-300 
                hover-military slide-up group overflow-hidden
              "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {feature.image && (
                  <div 
                    className="w-full h-32 bg-cover bg-center rounded-lg mb-4 border border-secondary/20"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                )}
                
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-secondary">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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