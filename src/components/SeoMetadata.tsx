import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const metadataByLanguage = {
  en: {
    title: 'Military Taxi Lešť Slavia | English Speaking Driver NATO Base Slovakia',
    description:
      'Reliable taxi service for NATO soldiers in Slovakia. English speaking taxi near Lešť military base. Spanish speaking driver available. 24/7 military transport, WhatsApp booking, cash payment.',
    keywords:
      'taxi Lešť military base, taxi Slavia NATO base, military taxi service Slovakia, English speaking taxi Slovakia, Spanish speaking driver Slovakia, 24 hour military taxi, cash taxi military, WhatsApp taxi booking, taxi Lešť to Zvolen, taxi Lešť to Banská Bystrica, Sliac airport transfer military, NATO personnel transport, army taxi Slovakia, soldier taxi service, military driver English speaking, NATO taxi 24/7, taxi Zvolen military base, transport Banská Bystrica NATO, TaxiForce',
  },
  es: {
    title: 'Taxi Militar Lešť Slavia | Conductor Español Base OTAN 24/7',
    description:
      'Taxi confiable base militar Lešť Eslovaquia. Conductor español base OTAN Eslovaquia. Servicio transporte militares españoles. 24 horas, reserva WhatsApp, precio fijo.',
    keywords:
      'taxi base militar Eslovaquia, transporte militar Lešť Slavia, taxi militar español, conductor habla español, taxi para militares, servicio taxi soldados, taxi 24 horas militar, precio fijo taxi militar, reserva WhatsApp taxi, taxi aeropuerto Sliac, taxi Zvolen Banská Bystrica, taxi base Lešť Eslovaquia, taxi Slavia OTAN, servicio taxi Lešť Slavia, transporte personal OTAN, transporte base militar, TaxiForce',
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
