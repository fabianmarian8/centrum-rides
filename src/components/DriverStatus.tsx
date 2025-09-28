import { useDriverStatus } from '@/hooks/useDriverStatus';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const translations = {
  en: {
    drivers: 'drivers',
    driver: 'driver', 
    online: 'online',
    driversMobile: 'drv',
    driverMobile: 'drv',
    onlineMobile: 'on'
  },
  es: {
    drivers: 'conductores',
    driver: 'conductor',
    online: 'disponibles',
    driversMobile: 'cond',
    driverMobile: 'cond',
    onlineMobile: 'disp'
  }
};

const DriverStatus = () => {
  const { isActive, currentCount } = useDriverStatus();
  const { language } = useLanguage();
  const isMobile = useIsMobile();
  const t = translations[language as keyof typeof translations];

  const plural = isMobile 
    ? (currentCount === 1 ? t.driverMobile : t.driversMobile)
    : (currentCount === 1 ? t.driver : t.drivers);
  const online = isMobile ? t.onlineMobile : t.online;
  const statusText = `${currentCount} ${plural} ${online}`;

  return (
    <div className={cn(
      "flex items-center gap-2 rounded-full bg-black/70 backdrop-blur text-white",
      isMobile ? "px-2 py-2 text-xs" : "px-3 py-2 text-sm"
    )}>
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