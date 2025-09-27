import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const metadataByLanguage = {
  en: {
    title: 'Military Taxi Lešť Slavia | NATO Base Transport Slovakia',
    description:
      'Professional taxi service for military personnel at Lešť-Slavia NATO base. Airport transfers, 24/7 service. WhatsApp booking available.',
    keywords:
      'taxi Lešť military base, taxi Slavia NATO base Slovakia, military taxi service Slovakia, airport transfer Bratislava military, NATO base transportation Slovakia, TaxiForce',
  },
  es: {
    title: 'Taxi Militar Base Lešť Slavia | Transporte 24/7 NATO',
    description:
      'Servicio de taxi para personal militar español en base NATO Lešť-Slavia. Traslados aeropuerto, servicio 24/7.',
    keywords:
      'taxi base militar Eslovaquia, transporte militar Lešť Slavia, taxi aeropuerto Bratislava militar, taxi Lešť Slavia, servicio taxi militar, transporte NATO Eslovaquia, TaxiForce',
  },
} as const;

const SeoMetadata = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const metadata = metadataByLanguage[language];

    document.title = metadata.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', metadata.description);
    }

    const keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag) {
      keywordsTag.setAttribute('content', metadata.keywords);
    }
  }, [language]);

  return null;
};

export default SeoMetadata;
