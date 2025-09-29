import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import RouteSection from '@/components/RouteSection';
import OperationsSection from '@/components/OperationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import SeoContentSection from '@/components/SeoContentSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import SeoMetadata from '@/components/SeoMetadata';
import LocalSeoKeywords from '@/components/LocalSeoKeywords';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoMetadata />
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <RouteSection />
        <OperationsSection />
        <TestimonialsSection />
        <FaqSection />
        <SeoContentSection />
        <ContactSection />
        <LocalSeoKeywords />
      </main>
    </div>
  );
};

export default Index;
