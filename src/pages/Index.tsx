import UrgencyBar from '@/components/UrgencyBar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBar />
      
      <main className="pt-16"> {/* Padding for fixed urgency bar */}
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
