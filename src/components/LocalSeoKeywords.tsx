import { useLanguage } from '@/contexts/LanguageContext';

const keywordsByLanguage = {
  en: [
    'taxi Lešť military base',
    'taxi Slavia NATO base',
    'Lešť Slavia transport',
    'NATO base taxi Slovakia',
    'military taxi Lešť',
    'Sliac airport taxi military',
    'taxi service Lešť garrison',
    'military taxi service',
    'NATO personnel transport',
    'military base transportation',
    'army taxi Slovakia',
    'soldier taxi service',
    'military driver English speaking',
    'NATO taxi 24/7',
    'taxi Lešť to Zvolen',
    'taxi Lešť to Banská Bystrica',
    'Sliac airport transfer military',
    'taxi Zvolen military base',
    'transport Banská Bystrica NATO',
    'English speaking taxi Slovakia',
    'Spanish speaking driver Slovakia',
    '24 hour military taxi',
    'cash taxi military',
    'WhatsApp taxi booking',
    'reliable taxi service for NATO soldiers in Slovakia',
    'English speaking taxi near Lešť military base',
    'how to get taxi from Lešť base to Zvolen',
    'military friendly taxi service central Slovakia',
    'Spanish speaking driver NATO base Slovakia',
    'taxi near me',
    'military taxi',
    'NATO base',
  ],
  es: [
    'taxi base Lešť Eslovaquia',
    'taxi Slavia OTAN',
    'transporte militar Lešť',
    'taxi base militar Eslovaquia',
    'servicio taxi Lešť Slavia',
    'taxi militar español',
    'transporte personal OTAN',
    'conductor habla español',
    'taxi para militares',
    'servicio taxi soldados',
    'transporte base militar',
    'taxi aeropuerto Sliac',
    'taxi Zvolen Banská Bystrica',
    'taxi 24 horas militar',
    'precio fijo taxi militar',
    'reserva WhatsApp taxi',
    'taxi confiable base militar Lešť Eslovaquia',
    'conductor español base OTAN Eslovaquia',
    'como conseguir taxi base Lešť',
    'servicio transporte militares españoles Eslovaquia',
    'taxi 24/7 base Slavia habla español',
    'taxi cerca de mi',
    'taxi militar',
    'base OTAN',
  ],
} as const;

const LocalSeoKeywords = () => {
  const { language } = useLanguage();
  const keywords = keywordsByLanguage[language];

  return (
    <div className="sr-only">
      <h2>Local SEO Keywords</h2>
      <p>
        {keywords.join(', ')}. Professional military transportation services for NATO personnel in Slovakia. 
        Reliable taxi service connecting Lešť military base, Slavia base, Zvolen, Banská Bystrica and Sliac airport.
        English and Spanish speaking drivers available 24/7. WhatsApp booking, cash payments accepted.
        Security cleared drivers for military personnel transport in central Slovakia.
      </p>
    </div>
  );
};

export default LocalSeoKeywords;