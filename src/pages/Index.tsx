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
import FloatingActionButton from '@/components/FloatingActionButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
      <FloatingActionButton />
    </div>
  );
};

export default Index;
