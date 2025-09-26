import { useDriverStatus } from '@/hooks/useDriverStatus';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    drivers: 'drivers',
    driver: 'driver', 
    online: 'online'
  },
  es: {
    drivers: 'conductores',
    driver: 'conductor',
    online: 'disponibles'
  }
};

const DriverStatus = () => {
  const { isActive, currentCount } = useDriverStatus();
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const plural = currentCount === 1 ? t.driver : t.drivers;
  const statusText = `${currentCount} ${plural} ${t.online}`;

  return (
    <div className="flex items-center gap-2 rounded-full bg-black/70 backdrop-blur px-3 py-2 text-white text-sm">
      <div 
        className={`w-2 h-2 rounded-full ${
          isActive && currentCount > 0 
            ? 'bg-green-500 animate-pulse' 
            : 'bg-red-500'
        }`}
      />
      <span>{statusText}</span>
    </div>
  );
};

export default DriverStatus;