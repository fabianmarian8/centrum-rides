import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import RouteSection from '@/components/RouteSection';
import OperationsSection from '@/components/OperationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import SeoContentSection from '@/components/SeoContentSection';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';
import LocalSeoKeywords from '@/components/LocalSeoKeywords';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
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
}
