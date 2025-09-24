import { seoContent } from '@/content/home';

const SeoContentSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <article className="max-w-5xl mx-auto space-y-10 text-muted-foreground leading-relaxed">
        <header className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold">
            Taxi pre španielskych vojakov zo základne Lešť
          </h2>
          <p className="text-base md:text-lg">
            TaxiForce je špecializovaná prepravná služba so sídlom v Banskobystrickom kraji. Už od roku 2022 zabezpečujeme komfortné a bezpečné spojenie medzi Výcvikovým priestorom Lešť, mestom Zvolen a Banskou Bystricou.
          </p>
        </header>

        {seoContent.map((block) => (
          <section key={block.heading} className="space-y-4">
            <h3 className="text-2xl font-semibold text-secondary">{block.heading}</h3>
            <p>{block.paragraph}</p>
          </section>
        ))}
      </article>
    </section>
  );
};

export default SeoContentSection;
