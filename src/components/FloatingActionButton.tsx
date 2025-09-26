import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const translations = {
  en: {
    callNow: 'Call now',
  },
  es: {
    callNow: 'Llamar ahora',
  },
} as const;

const FloatingActionButton = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <Button
      asChild
      className={cn(
        // Base FAB styles
        "fab",
        "fixed bottom-8 right-8 w-[60px] h-[60px] rounded-full",
        "cursor-pointer z-[999] p-0",
        "bg-gradient-to-r from-primary to-primary-glow",
        "hover:from-primary-glow hover:to-primary",
        "text-primary-foreground",
        "shadow-[0_10px_30px_rgba(0,0,0,0.3)]",
        "hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]",
        "transition-all duration-300 ease-in-out",
        "hover:scale-110 hover:rotate-90",
        "active:scale-95",
        "flex items-center justify-center"
      )}
      title={content.callNow}
    >
      <a href="tel:+421919040118" className="flex items-center justify-center w-full h-full">
        📞
      </a>
    </Button>
  );
};

export default FloatingActionButton;