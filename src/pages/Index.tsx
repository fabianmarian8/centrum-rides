import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import RouteSection from '@/components/RouteSection';
import OperationsSection from '@/components/OperationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import SeoContentSection from '@/components/SeoContentSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import useVisualEffects from '@/hooks/use-visual-effects';

const Index = () => {
  const { language } = useLanguage();
  useVisualEffects([language]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <RouteSection />
        <OperationsSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <SeoContentSection />
        <ContactSection />
      </main>
      <a
        href="tel:+421919040118"
        className="fab button-3d magnetic-button bg-gradient-to-br from-primary to-secondary text-primary-foreground flex items-center justify-center text-2xl"
        aria-label="Zavolať TaxiForce"
      >
        📞
      </a>
    </div>
  );
};

export default Index;
