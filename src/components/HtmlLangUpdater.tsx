'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Client component that updates the HTML lang attribute
 * based on the selected language from LanguageContext
 */
export default function HtmlLangUpdater() {
  const { language } = useLanguage();

  useEffect(() => {
    // Update the html lang attribute when language changes
    document.documentElement.lang = language === 'en' ? 'en' : 'es';
  }, [language]);

  return null; // This component doesn't render anything
}
