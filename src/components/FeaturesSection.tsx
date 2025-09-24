import { featuresContent } from '@/content/home';
import { Card, CardContent } from '@/components/ui/card';
import militaryBadge from '@/assets/military-badge.jpg';
import restaurantImage from '@/assets/restaurant-bb.jpg';
import taxiImage from '@/assets/taxi-military.jpg';
import cityImage from '@/assets/banska-bystrica-night.jpg';

const featureImages: Record<string, string> = {
  taxiImage,
  militaryBadge,
  restaurantImage,
  cityImage,
};

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-gold">
            Prečo zvoliť TaxiForce?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Špecializovaná prepravná jednotka pre španielsky vojenský personál pôsobiaci na základni Lešť
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresContent.map((feature, index) => (
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
                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase bg-secondary/20 text-secondary px-2 py-1 rounded-full border border-secondary/40">
                  {feature.badge}
                </span>
              )}

              <CardContent className="p-6 space-y-4">
                {feature.image && (
                  <div
                    className="w-full h-32 bg-cover bg-center rounded-lg border border-secondary/20"
                    style={{ backgroundImage: `url(${featureImages[feature.image]})` }}
                  />
                )}

                <div className="text-center space-y-3">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-bold text-secondary leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
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
