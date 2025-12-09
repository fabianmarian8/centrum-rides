'use client';

import { cn } from '@/lib/utils';
import { useLanguage, type Language } from '@/contexts/LanguageContext';

const languages: { label: string; value: Language }[] = [
  { label: 'EN', value: 'en' },
  { label: 'ES', value: 'es' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-full p-1">
      {languages.map(({ label, value }) => (
        <button
          key={value}
          className={cn(
            'px-3 py-1.5 rounded-full text-sm font-medium transition-all',
            language === value
              ? 'bg-yellow-500 text-black'
              : 'text-white/70 hover:text-white'
          )}
          onClick={() => setLanguage(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
