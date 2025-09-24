import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import RouteSection from '@/components/RouteSection';
import OperationsSection from '@/components/OperationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import SeoContentSection from '@/components/SeoContentSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <FeaturesSection />
        <RouteSection />
        <OperationsSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <SeoContentSection />
        <BlogSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
