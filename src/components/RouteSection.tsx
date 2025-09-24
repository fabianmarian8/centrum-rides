import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const routes = [
  {
    title: 'Lešť → Zvolen',
    duration: '30 – 40 min',
    highlights: ['Priamy vstup cez vojenskú bránu', 'Synchronizácia s večerou a návratom na základňu', 'Odporúčané bary: Quadra, Retro'],
  },
  {
    title: 'Lešť → Banská Bystrica',
    duration: '50 min',
    highlights: ['Transfer na Námestie SNP a Europa Shopping Center', 'Koordinácia s nočnými klubmi Ministry, Klub 77', 'Dohodnuté návraty na presný čas'],
  },
];

const steps = [
  {
    title: '1. Rezervácia',
    detail: 'Telefonát alebo WhatsApp. Potvrdíme čas vyzdvihnutia a počet pasažierov.',
    sub: 'English & Español friendly',
  },
  {
    title: '2. Vyzdvihnutie',
    detail: 'Vodič čaká pri bráne Lešť. Sledujeme zmeny programu jednotky v reálnom čase.',
    sub: 'Identifikácia vozidla a vodiča vopred',
  },
  {
    title: '3. Návrat',
    detail: 'Koordinujeme presný čas odchodu späť na základňu, vrátane poslednej chvíle.',
    sub: 'Garancia dostupnosti 24/7',
  },
];

const RouteSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <Badge className="bg-secondary/20 text-secondary border-secondary/40 uppercase tracking-wide">
            Operačné trasy
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-military">
            Primárne spojenia pre španielsku jednotku
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Optimalizované trasy medzi výcvikovým priestorom Lešť, mestom Zvolen a Banskou Bystricou. Zohľadňujeme služby pre voľnočasové aj služobné presuny.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {routes.map((route) => (
            <Card
              key={route.title}
              className="bg-card/70 backdrop-blur border border-secondary/30 hover:border-secondary/60 transition-all duration-300 hover-military"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-secondary">{route.title}</h3>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/30">
                    {route.duration}
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {route.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-black/30 border border-secondary/20 rounded-2xl p-6 space-y-3 text-center backdrop-blur hover:border-secondary/50 transition-all"
            >
              <h3 className="text-lg font-semibold text-secondary uppercase tracking-wide">{step.title}</h3>
              <p className="text-sm text-foreground/90 leading-relaxed">{step.detail}</p>
              <p className="text-xs text-muted-foreground">{step.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RouteSection;
