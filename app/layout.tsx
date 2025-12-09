import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Script from 'next/script';
import HtmlLangUpdater from '@/components/HtmlLangUpdater';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

// Viewport configuration (themeColor moved here from metadata)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#C41C24',
};

export const metadata: Metadata = {
  title: 'Taxi Militar Base Lešť Slavia | Transporte 24/7 NATO',
  description:
    'Servicio de taxi para personal militar español en base NATO Lešť-Slavia. Traslados aeropuerto, servicio 24/7.',
  keywords: [
    'taxi base militar Eslovaquia',
    'transporte militar Lešť Slavia',
    'taxi aeropuerto Bratislava militar',
    'taxi Lešť Slavia',
    'servicio taxi militar',
    'transporte NATO Eslovaquia',
  ],
  authors: [{ name: 'TaxiForce' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Taxi Militar Base Lešť Slavia | Transporte 24/7 NATO',
    description:
      'Servicio de taxi para personal militar español en base NATO Lešť-Slavia. Traslados aeropuerto, servicio 24/7.',
    type: 'website',
    url: 'https://lest-slavia-taxi.com/',
    images: [
      {
        url: 'https://lest-slavia-taxi.com/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TaxiForce - Taxi Militar Base Lešť Slavia',
      },
    ],
    locale: 'es_ES',
    siteName: 'TaxiForce',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Militar Base Lešť Slavia | Transporte 24/7 NATO',
    description:
      'Servicio de taxi para personal militar español en base NATO Lešť-Slavia. Traslados aeropuerto, servicio 24/7.',
    images: ['https://lest-slavia-taxi.com/hero-image.jpg'],
    site: '@taxiforce',
  },
  alternates: {
    canonical: 'https://lest-slavia-taxi.com/',
    languages: {
      en: 'https://lest-slavia-taxi.com/',
      es: 'https://lest-slavia-taxi.com/',
      'x-default': 'https://lest-slavia-taxi.com/',
    },
  },
  other: {
    'geo.region': 'SK-BC',
    'geo.placename': 'Pliešovce',
    'geo.position': '48.4388;19.2052',
    ICBM: '48.4388, 19.2052',
    'google-site-verification': '9b5AMY6T17hcs6tpUJEAp940R_qxiXGSs587VkU2i8o',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://lest-slavia-taxi.com/#business',
  name: 'TaxiForce',
  image: 'https://lest-slavia-taxi.com/hero-image.jpg',
  description:
    'Servicio de taxi para personal militar español en base NATO Lešť-Slavia. Traslados aeropuerto, servicio 24/7.',
  url: 'https://lest-slavia-taxi.com',
  telephone: '+421902048583',
  email: 'fabianmarian8@gmail.com',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.4388,
    longitude: 19.2052,
  },
  areaServed: [
    'Lešť Slavia 1',
    'Zvolen',
    'Pliešovce',
    'Banská Bystrica',
    'Sliac Airport',
    'Central Slovakia',
  ],
  serviceType: [
    'Military taxi transfers',
    'NATO personnel transport',
    'Airport transfers',
    '24/7 military transport',
    'English speaking taxi',
    'Spanish speaking driver',
  ],
  paymentAccepted: ['Cash'],
  availableLanguage: ['English', 'Spanish', 'Slovak'],
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SK',
    addressRegion: 'Banskobystrický kraj',
    addressLocality: 'Pliešovce',
    streetAddress: 'Nám. padlých hrdinov 38',
    postalCode: '962 63',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Microsoft Clarity - lazyOnload for better performance */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ticgkk8s3r");
          `}
        </Script>

        {/* Google Analytics 4 - lazyOnload for better performance */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7HSBJ31EG7"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7HSBJ31EG7');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Providers>
          <HtmlLangUpdater />
          {children}
        </Providers>
      </body>
    </html>
  );
}
