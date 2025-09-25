import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage, type Language } from '@/contexts/LanguageContext';

const languages: { label: string; value: Language }[] = [
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 rounded-full bg-black/70 px-2 py-2 backdrop-blur">
      {languages.map(({ label, value }) => (
        <Button
          key={value}
          variant="ghost"
          size="sm"
          className={cn(
            'rounded-full border border-transparent text-xs font-semibold uppercase tracking-wide text-white transition-all',
            language === value
              ? 'bg-secondary text-secondary-foreground shadow-lg'
              : 'hover:bg-white/10 hover:text-white'
          )}
          onClick={() => setLanguage(value)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
