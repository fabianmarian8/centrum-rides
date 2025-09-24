import { operationsMetrics, operationsPillars } from '@/content/home';

const OperationsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black/60 via-background to-black/60">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold">
            Operačná pripravenosť TaxiForce
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kombinujeme logistiku vojenského štandardu s komfortom civilnej limuzínovej služby. Každé nasadenie plánujeme do detailu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {operationsMetrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center bg-primary/10 border border-primary/30 rounded-2xl px-6 py-10 backdrop-blur hover:border-primary/60 transition-all"
            >
              <p className="text-4xl md:text-5xl font-black text-gradient-military mb-2">{metric.value}</p>
              <p className="text-sm uppercase tracking-wide text-secondary mb-2">{metric.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{metric.note}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {operationsPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-card/70 border border-secondary/20 rounded-2xl p-6 space-y-4 backdrop-blur hover:border-secondary/50 transition-all"
            >
              <div className="text-4xl">{pillar.icon}</div>
              <h3 className="text-xl font-semibold text-secondary">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationsSection;
