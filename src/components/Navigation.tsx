'use client';

import Link from 'next/link';
import { FileText, Phone } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const { language } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo in black box with striped text */}
          <Link href="/" className="flex items-center">
            <span className="striped-logo tracking-wider">TAXIFORCE</span>
          </Link>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick call button - mobile */}
            <a
              href="tel:+421902048583"
              className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full bg-yellow-500 text-black"
              aria-label={language === 'es' ? 'Llamar' : 'Call'}
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Blog link */}
            <Link
              href="/blog"
              className="flex items-center gap-2 px-3 py-2 rounded-full text-white/70 hover:text-white transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">Blog</span>
            </Link>

            {/* Language switcher */}
            <LanguageSwitcher />

            {/* Call button - desktop */}
            <a
              href="tel:+421902048583"
              className="hidden sm:flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{language === 'es' ? 'Llamar' : 'Call Now'}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
