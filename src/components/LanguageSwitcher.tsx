import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage, type Language } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const languages: { label: string; labelShort: string; value: Language }[] = [
  { label: 'English', labelShort: 'EN', value: 'en' },
  { label: 'Español', labelShort: 'ES', value: 'es' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <div className={cn(
      "flex items-center rounded-full bg-black/70 backdrop-blur",
      isMobile ? "gap-1 px-1 py-2" : "gap-2 px-2 py-2"
    )}>
      {languages.map(({ label, labelShort, value }) => (
        <Button
          key={value}
          variant="ghost"
          size="sm"
          className={cn(
            'rounded-full border border-transparent font-semibold uppercase tracking-wide text-white transition-all',
            isMobile ? 'text-xs px-2' : 'text-xs px-3',
            language === value
              ? 'bg-secondary text-secondary-foreground shadow-lg'
              : 'hover:bg-white/10 hover:text-white'
          )}
          onClick={() => setLanguage(value)}
        >
          {isMobile ? labelShort : label}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
