'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const navItems = {
  en: [
    { label: 'Home', href: '#inicio' },
    { label: 'Routes', href: '#routes' },
    { label: 'Services', href: '#services' },
    { label: 'About us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ],
  es: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Rutas', href: '#routes' },
    { label: 'Servicios', href: '#services' },
    { label: 'Sobre nosotros', href: '#why-us' },
    { label: 'Contacto', href: '#contact' },
  ],
} as const;

const Navigation = () => {
  const { language } = useLanguage();
  const items = navItems[language];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-yellow-400/10 bg-[#050606]/95 shadow-[0_8px_30px_rgba(0,0,0,.45)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3" aria-label="TaxiForce home">
            <span className="hidden h-[2px] w-10 rounded-full bg-yellow-400 sm:block" />
            <span className="striped-logo tracking-wider transition group-hover:opacity-85">TAXIFORCE</span>
            <span className="hidden h-[2px] w-10 rounded-full bg-yellow-400 sm:block" />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {items.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-xs font-black uppercase tracking-[0.14em] text-white/75 transition hover:text-yellow-300"
              >
                {item.label}
                {index === 0 && <span className="absolute -bottom-3 left-0 h-0.5 w-full rounded-full bg-yellow-400" />}
              </a>
            ))}
            <Link
              href="/blog"
              className="text-xs font-black uppercase tracking-[0.14em] text-white/55 transition hover:text-yellow-300"
            >
              Blog
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <a
              href="tel:+421902048583"
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-black text-black shadow-[0_0_22px_rgba(246,194,26,.25)] transition hover:bg-yellow-300 sm:px-5"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">{language === 'es' ? 'Llamar' : 'Call'}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
