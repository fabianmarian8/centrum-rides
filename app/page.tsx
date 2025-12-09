import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';

// Dynamic imports for below-fold components - reduces initial JS bundle
const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'));
const RouteSection = dynamic(() => import('@/components/RouteSection'));
const OperationsSection = dynamic(() => import('@/components/OperationsSection'));
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'));
const FaqSection = dynamic(() => import('@/components/FaqSection'));
const SeoContentSection = dynamic(() => import('@/components/SeoContentSection'));
const ContactSection = dynamic(() => import('@/components/ContactSection'));

export const metadata: Metadata = {
  title: 'Military Taxi Lešť Base Slovakia | 24/7 NATO Transport Service | TaxiForce',
  description:
    'Professional taxi service for military personnel at Lešť-Slavia NATO base. 24/7 transfers to Zvolen, Banská Bystrica & Bratislava Airport. English & Spanish speaking drivers.',
  keywords: [
    'taxi Lešť military base',
    'NATO taxi Slovakia',
    'military taxi Zvolen',
    'Banská Bystrica military transport',
    'Bratislava airport military taxi',
    'English speaking taxi Slovakia',
    'Spanish military taxi',
    '24/7 military transport',
    'Lešť base transfers',
    'Slavia NATO base taxi',
  ],
  openGraph: {
    title: 'Military Taxi Lešť Base Slovakia | 24/7 NATO Transport',
    description:
      'Reliable taxi service for NATO personnel stationed at Lešť-Slavia base. Fast transfers, English communication, 24/7 availability.',
    type: 'website',
    url: 'https://lest-slavia-taxi.com/',
    images: [
      {
        url: 'https://lest-slavia-taxi.com/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TaxiForce - Military Taxi Service Lešť Base Slovakia',
      },
    ],
    locale: 'en_US',
    siteName: 'TaxiForce Military Taxi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Military Taxi Lešť Base Slovakia | 24/7 NATO Transport',
    description:
      'Reliable taxi service for NATO personnel at Lešť-Slavia base. English speaking drivers, 24/7 availability.',
    images: ['https://lest-slavia-taxi.com/hero-image.jpg'],
  },
  alternates: {
    canonical: 'https://lest-slavia-taxi.com/',
    languages: {
      en: 'https://lest-slavia-taxi.com/',
      es: 'https://lest-slavia-taxi.com/',
      'x-default': 'https://lest-slavia-taxi.com/',
    },
  },
};

export default function HomePage() {
  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://lest-slavia-taxi.com/',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Schema for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
      </main>
    </div>
  );
}
