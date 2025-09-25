import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import RouteSection from '@/components/RouteSection';
import OperationsSection from '@/components/OperationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import SeoContentSection from '@/components/SeoContentSection';
import ContactSection from '@/components/ContactSection';
import BlogSection from '@/components/BlogSection';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LanguageSwitcher />
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
