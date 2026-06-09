'use client';

import Link from 'next/link';
import { Phone, Menu, X, Star } from 'lucide-react';
import { useState } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const t = {
  es: { inicio: 'Inicio', rutas: 'Rutas', servicios: 'Servicios', nosotros: 'Sobre nosotros', contacto: 'Contacto', llamar: 'Llamar' },
  en: { inicio: 'Home', rutas: 'Routes', servicios: 'Services', nosotros: 'About', contacto: 'Contact', llamar: 'Call' },
} as const;

// Stylized military aviator wings (gold), mirrored on each side of the logo
const Wing = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 120 46" className={className} fill="currentColor" aria-hidden="true">
    <path d="M119 4 C72 7 33 13 2 22 C36 19 77 16 117 11 Z" />
    <path d="M114 15 C73 18 38 23 8 29 C42 27 79 24 112 21 Z" opacity="0.82" />
    <path d="M106 26 C72 29 44 32 16 36 C46 35 76 33 104 32 Z" opacity="0.6" />
  </svg>
);

const TaxiForceLogo = () => (
  <Link href="/" className="flex flex-col items-center leading-none select-none text-yellow-500">
    <div className="flex items-center gap-2">
      <Wing className="w-8 sm:w-10 h-4 sm:h-5 -scale-x-100" />
      <span className="heading-military text-2xl sm:text-3xl font-bold tracking-[0.1em]">TAXIFORCE</span>
      <Wing className="w-8 sm:w-10 h-4 sm:h-5" />
    </div>
    <div className="flex items-center gap-2 mt-0.5">
      <span className="h-px w-6 sm:w-8 bg-yellow-500/40" />
      <Star className="w-2.5 h-2.5 fill-yellow-500" />
      <span className="h-px w-6 sm:w-8 bg-yellow-500/40" />
    </div>
  </Link>
);

const Navigation = () => {
  const { language } = useLanguage();
  const c = t[language];
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#top', label: c.inicio },
    { href: '#rutas', label: c.rutas },
    { href: '#servicios', label: c.servicios },
    { href: '#nosotros', label: c.nosotros },
    { href: '#contacto', label: c.contacto },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <TaxiForceLogo />

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                  i === 0 ? 'text-yellow-500' : 'text-white/80 hover:text-yellow-500'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <a
              href="tel:+421919040118"
              className="hidden sm:flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{c.llamar}</span>
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white"
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-black/95 border-t border-yellow-500/15 px-4 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-white/85 hover:bg-white/5 uppercase tracking-wide text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+421919040118"
            className="mt-2 flex items-center justify-center gap-2 bg-yellow-500 text-black px-4 py-3 rounded-full font-bold uppercase tracking-wide"
          >
            <Phone className="w-4 h-4" /> {c.llamar}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
