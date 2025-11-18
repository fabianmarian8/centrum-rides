# Plán migrácie na Next.js

## 📊 Analýza súčasného stavu

**Aktuálny stack:**
- **Framework:** Vite + React 18.3.1 + TypeScript
- **Routing:** React Router v6.30.1
- **UI:** shadcn/ui (Radix UI komponenty) + Tailwind CSS
- **State Management:** TanStack Query v5.83.0 + React Context (LanguageContext)
- **SEO:** Statické meta tags v index.html, JSON-LD schema
- **Analytics:** Google Analytics 4 + Microsoft Clarity
- **Optimalizácie:** Lazy loading stránok, code splitting

**Štruktúra:**
- 3 stránky: Index, Blog, NotFound
- Vlastné hooks pre animácie (parallax, typewriter, magnetic, atď.)
- LanguageContext pre multijazyčnosť (ES/EN)
- Bohaté SEO meta tags a Open Graph

---

## 🎯 Plán migrácie na Next.js

### **Fáza 1: Príprava a setup (Deň 1-2)**

#### 1.1 Výber Next.js architektúry
- **Odporúčanie:** Next.js 14+ s **App Router** (výhody: lepšie SEO, Server Components, streaming)
- **Alternatíva:** Pages Router (jednoduchšia migrácia z React Router)

#### 1.2 Vytvorenie Next.js projektu
```bash
npx create-next-app@latest centrum-rides-nextjs --typescript --tailwind --app
```

#### 1.3 Konfigurácia základných súborov
- `next.config.js` - nastavenie domény, redirects, headers
- `tsconfig.json` - path aliases (@/*)
- `tailwind.config.ts` - preniesť existujúcu konfiguráciu
- `.env.local` - environment variables

---

### **Fáza 2: Migrácia závislostí a konfigurácie (Deň 2-3)**

#### 2.1 Inštalácia závislostí
**Zachovať:**
- ✅ Všetky Radix UI balíčky (@radix-ui/*)
- ✅ TanStack Query (@tanstack/react-query)
- ✅ Tailwind CSS + plugins
- ✅ shadcn/ui komponenty
- ✅ next-themes (už používané!)
- ✅ Utility knižnice (clsx, date-fns, zod, atď.)

**Odstrániť:**
- ❌ react-router-dom (nahradené Next.js routing)
- ❌ vite + @vitejs/plugin-react-swc
- ❌ lovable-tagger (development tool)

**Pridať:**
- ➕ `next` (samozrejme)
- ➕ `@next/bundle-analyzer` (analýza bundle size)

#### 2.2 Tailwind konfigurácia
- Preniesť `tailwind.config.ts` (už je kompatibilný)
- Aktualizovať `content` paths pre Next.js:
  ```ts
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ]
  ```

---

### **Fáza 3: Migrácia štruktúry projektu (Deň 3-5)**

#### 3.1 Nová štruktúra adresárov (App Router)
```
centrum-rides-nextjs/
├── app/
│   ├── layout.tsx          # Root layout (nahradí App.tsx)
│   ├── page.tsx            # Homepage (Index.tsx)
│   ├── blog/
│   │   └── page.tsx        # Blog stránka
│   ├── not-found.tsx       # 404 stránka
│   ├── providers.tsx       # Client-side providers
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn komponenty (bez zmien)
│   ├── HeroSection.tsx     # Všetky existujúce komponenty
│   └── ...
├── lib/
│   └── utils.ts            # Utility funkcie
├── hooks/                  # Custom hooks (bez zmien)
├── contexts/               # React contexts
└── public/                 # Statické súbory
```

#### 3.2 Migrácia routing

**React Router → Next.js:**
| React Router | Next.js App Router |
|--------------|-------------------|
| `/` → `<Index />` | `app/page.tsx` |
| `/blog` → `<Blog />` | `app/blog/page.tsx` |
| `*` → `<NotFound />` | `app/not-found.tsx` |

**Odstránenie:**
- `<BrowserRouter>`, `<Routes>`, `<Route>`
- `lazy()` import (Next.js má vlastný code splitting)

---

### **Fáza 4: Migrácia kódu (Deň 5-8)**

#### 4.1 Root Layout (`app/layout.tsx`)
```tsx
import { Providers } from './providers'
import './globals.css'

export const metadata = {
  title: 'Taxi Militar Base Lešť Slavia | Transporte 24/7 NATO',
  description: 'Servicio de taxi para personal militar...',
  // ... všetky meta tags z index.html
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

#### 4.2 Client-side Providers (`app/providers.tsx`)
```tsx
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { Toaster } from '@/components/ui/toaster'
// ... ostatné providery
```

**Dôležité:** Označiť `'use client'` pre:
- QueryClientProvider
- LanguageContext
- Toastery
- ThemeProvider (next-themes)

#### 4.3 Migrácia stránok

**`app/page.tsx` (Homepage):**
```tsx
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
// ...

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      {/* ... */}
    </>
  )
}
```

**Server Components vs Client Components:**
- ✅ **Server Components** (default): Statické sekcie (Hero, Features, Pricing)
- 🔄 **Client Components** (`'use client'`): Interaktívne komponenty s hooks
  - ParticlesBackground (useEffect)
  - MagneticButton (useMagnetic)
  - Typewriter (useTypewriter)
  - Navigation (useState pre mobile menu)
  - LanguageSwitcher (useLanguage)

#### 4.4 Migrácia SEO

**Z `index.html` → Next.js Metadata API:**

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Taxi Militar Base Lešť Slavia | Transporte 24/7 NATO',
  description: '...',
  keywords: ['taxi base militar Eslovaquia', '...'],
  authors: [{ name: 'TaxiForce' }],
  robots: 'index, follow',
  canonical: 'https://lest-slavia-taxi.com/',

  openGraph: {
    title: '...',
    description: '...',
    url: '...',
    images: [{ url: '/hero-image.jpg' }],
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },

  twitter: {
    card: 'summary_large_image',
    title: '...',
    // ...
  },

  alternates: {
    canonical: 'https://lest-slavia-taxi.com/',
    languages: {
      'en': 'https://lest-slavia-taxi.com/',
      'es': 'https://lest-slavia-taxi.com/',
    },
  },
}
```

**JSON-LD Schema:**
```tsx
// app/layout.tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      // ... existujúce schema
    })
  }}
/>
```

#### 4.5 Migrácia Analytics

**Google Analytics:**
```tsx
// app/layout.tsx alebo components/Analytics.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-7HSBJ31EG7" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-7HSBJ31EG7');
  `}
</Script>
```

---

### **Fáza 5: Optimalizácie (Deň 8-10)**

#### 5.1 Image Optimization
- Nahradiť `<img>` → `<Image>` z `next/image`
- Optimalizácia `/public/hero-image.jpg` a ďalších obrázkov

#### 5.2 Font Optimization
- Použiť `next/font/google`:
```tsx
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ weight: ['600', '700', '800', '900'], variable: '--font-poppins' })
```

#### 5.3 Performance
- Implementovať `loading.tsx` pre suspense states
- Pridať `generateStaticParams()` pre statické stránky
- Použiť `revalidate` pre ISR (ak budú dynamické dáta)

#### 5.4 Bundle Analysis
```bash
ANALYZE=true npm run build
```

---

### **Fáza 6: Testovanie a deployment (Deň 10-12)**

#### 6.1 Lokálne testovanie
```bash
npm run dev       # Development
npm run build     # Production build
npm run start     # Production server
```

**Checklist:**
- [ ] Všetky stránky sa načítajú správne
- [ ] Routing funguje (navigácia, 404)
- [ ] SEO meta tags sú prítomné (view-source)
- [ ] Analytics fungujú (GTM/Clarity)
- [ ] Multijazyčnosť funguje
- [ ] Animácie a interakcie fungujú
- [ ] Mobile responsiveness
- [ ] Lighthouse skóre >90

#### 6.2 Deployment na Vercel/GitHub Pages

**Vercel (odporúčané):**
```bash
npm i -g vercel
vercel --prod
```

**GitHub Pages (statické):**
```bash
# next.config.js
module.exports = {
  output: 'export',
  images: { unoptimized: true }
}
```

#### 6.3 DNS a doména
- Aktualizovať `lest-slavia-taxi.com` DNS
- Nastaviť SSL certifikát
- Presmerovanie HTTP → HTTPS

---

### **Fáza 7: Post-migrácia (Deň 12+)**

#### 7.1 Monitoring
- Kontrola Google Search Console
- Sledovanie Core Web Vitals
- Kontrola Analytics (traffic drop?)

#### 7.2 Vylepšenia
- [ ] Implementovať Incremental Static Regeneration (ISR)
- [ ] Pridať Edge Middleware pre geolokáciu
- [ ] Implementovať internationalization (i18n) s Next.js
- [ ] Pridať Sitemap a robots.txt generátor
- [ ] Implementovať API routes (ak treba backend)

---

## 📋 Odhadovaný čas a zdroje

| Fáza | Trvanie | Náročnosť |
|------|---------|-----------|
| 1. Príprava | 1-2 dni | ⭐⭐ |
| 2. Závislosti | 1 deň | ⭐ |
| 3. Štruktúra | 2 dni | ⭐⭐⭐ |
| 4. Migrácia kódu | 3-4 dni | ⭐⭐⭐⭐ |
| 5. Optimalizácie | 2 dni | ⭐⭐⭐ |
| 6. Testovanie | 2 dni | ⭐⭐⭐ |
| 7. Deployment | 1 deň | ⭐⭐ |

**Celkom:** 10-14 dní (1 developer)

---

## ⚠️ Riziká a výzvy

1. **Client vs Server Components** - Náročné rozhodovanie, čo má byť kde
2. **'use client' direktívy** - Všetky hooks vyžadujú client components
3. **Hydration errors** - Server/client mismatch (čas, random hodnoty)
4. **SEO migrácia** - Musí byť 1:1, inak pokles v rankingu
5. **Analytics** - Overiť, že tracking funguje rovnako
6. **Dependency conflicts** - Niektoré balíčky môžu byť nekompatibilné

---

## ✅ Výhody migrácie na Next.js

- 🚀 **Lepší výkon** - Server-side rendering, optimalizácia obrázkov
- 🔍 **Lepšie SEO** - SSR/SSG, automatic sitemap
- 📦 **Menší bundle** - Automatický code splitting
- 🌐 **Internacionalizácia** - Built-in i18n support
- 🔧 **Backend integration** - API routes pre contact formy
- 📈 **Scalability** - Edge functions, ISR
- 🎯 **Better DX** - File-based routing, Fast Refresh

---

## 🚀 Ďalšie kroky

1. Schváliť tento plán
2. Vytvoriť novú vetvu `nextjs-migration`
3. Začať s Fázou 1 (setup)
4. Postupne migrovať komponenty a testovať
5. Deploynuť na staging environment
6. Po schválení deploynuť na produkciu

---

**Vytvorené:** 2025-11-18
**Autor:** Claude (AI Assistant)
**Projekt:** centrum-rides → Next.js migration
