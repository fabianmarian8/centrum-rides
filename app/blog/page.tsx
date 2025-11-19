import type { Metadata } from 'next';
import BlogSection from '@/components/BlogSection';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export const metadata: Metadata = {
  title: 'Military Travel Guide Slovakia | Local Tips for NATO Personnel | TaxiForce Blog',
  description:
    'Local recommendations for military personnel in Central Slovakia. Best restaurants, nightlife, and travel tips for Zvolen and Banská Bystrica. Updated by TaxiForce.',
  keywords: [
    'Slovakia military guide',
    'Zvolen travel tips',
    'Banská Bystrica nightlife',
    'military restaurants Slovakia',
    'NATO personnel travel guide',
    'Lešť base local guide',
    'military friendly restaurants',
    'Central Slovakia travel',
  ],
  openGraph: {
    title: 'Military Travel Guide Slovakia | TaxiForce Blog',
    description:
      'Insider tips for military personnel: best restaurants, nightlife, and activities in Zvolen and Banská Bystrica.',
    type: 'website',
    url: 'https://lest-slavia-taxi.com/blog',
    images: [
      {
        url: 'https://lest-slavia-taxi.com/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TaxiForce Blog - Military Travel Guide Slovakia',
      },
    ],
    locale: 'en_US',
    siteName: 'TaxiForce Military Taxi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Military Travel Guide Slovakia | TaxiForce Blog',
    description:
      'Local tips for military personnel in Central Slovakia. Restaurants, nightlife & travel recommendations.',
    images: ['https://lest-slavia-taxi.com/hero-image.jpg'],
  },
  alternates: {
    canonical: 'https://lest-slavia-taxi.com/blog',
    languages: {
      en: 'https://lest-slavia-taxi.com/blog',
      es: 'https://lest-slavia-taxi.com/blog',
      'x-default': 'https://lest-slavia-taxi.com/blog',
    },
  },
};

export default function BlogPage() {
  // BreadcrumbList Schema for Blog
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
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://lest-slavia-taxi.com/blog',
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

      <nav className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between">
        <Link href="/">
          <Button variant="ghost" size="sm" className="rounded-full bg-black/70 backdrop-blur text-white hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Domov
          </Button>
        </Link>
        <LanguageSwitcher />
      </nav>

      <main className="pt-20">
        <BlogSection />
      </main>
    </div>
  );
}
