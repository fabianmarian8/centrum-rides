'use client';

import {
  BadgeCheck,
  Clock3,
  MapPin,
  MessageCircle,
  Navigation as RouteIcon,
  Phone,
  Plane,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const translations = {
  en: {
    badge: 'Taxi service for military personnel',
    heading: 'Your reliable ride from Lešť base',
    subheading: 'to Zvolen and Banská Bystrica',
    description:
      'Professional private transport for military personnel. Safe, discreet and available 24/7. We know the area, the base pickup points and the fastest routes.',
    callCta: 'Call now',
    whatsappCta: 'WhatsApp',
    benefits: [
      { icon: Clock3, title: 'Available 24/7' },
      { icon: ShieldCheck, title: 'Discreet and professional' },
      { icon: UserCheck, title: 'Trusted drivers' },
      { icon: RouteIcon, title: 'Known routes, on time' },
    ],
    stats: [
      { icon: MapPin, route: 'Lešť → Zvolen', price: '40 €' },
      { icon: MapPin, route: 'Lešť → B. Bystrica', price: '65 €' },
      { icon: Plane, route: 'Lešť → Budapest', price: '160 €' },
      { icon: Plane, route: 'Lešť → Vienna', price: '240 €' },
    ],
    availability: 'Available 24/7',
    location: 'Lešť, Slavia 1',
    assurance: 'Fixed prices confirmed before the trip.',
  },
  es: {
    badge: 'Servicio de taxi para personal militar',
    heading: 'Tu transporte fiable desde la base de Lešť',
    subheading: 'a Zvolen y Banská Bystrica',
    description:
      'Servicio privado de taxi para personal militar. Seguro, discreto y disponible 24/7. Conocemos la zona, los puntos de recogida y las rutas más rápidas.',
    callCta: 'Llamar ahora',
    whatsappCta: 'WhatsApp',
    benefits: [
      { icon: Clock3, title: 'Disponible 24/7' },
      { icon: ShieldCheck, title: 'Discreto y profesional' },
      { icon: UserCheck, title: 'Conductores de confianza' },
      { icon: RouteIcon, title: 'Rutas conocidas, siempre a tiempo' },
    ],
    stats: [
      { icon: MapPin, route: 'Lešť → Zvolen', price: '40 €' },
      { icon: MapPin, route: 'Lešť → B. Bystrica', price: '65 €' },
      { icon: Plane, route: 'Lešť → Budapest', price: '160 €' },
      { icon: Plane, route: 'Lešť → Viena', price: '240 €' },
    ],
    availability: 'Disponible 24/7',
    location: 'Lešť, Slavia 1',
    assurance: 'Precios fijos confirmados antes del viaje.',
  },
} as const;

const Rav4Illustration = () => (
  <svg viewBox="0 0 520 230" className="w-[58vw] max-w-[560px] min-w-[300px] drop-shadow-[0_25px_45px_rgba(0,0,0,0.65)]" aria-hidden="true">
    <defs>
      <linearGradient id="ravBody" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="0.62" stopColor="#d9dde0" />
        <stop offset="1" stopColor="#a6adb4" />
      </linearGradient>
      <linearGradient id="glass" x1="0" x2="1">
        <stop offset="0" stopColor="#0d1518" />
        <stop offset="1" stopColor="#33434a" />
      </linearGradient>
    </defs>
    <ellipse cx="262" cy="202" rx="220" ry="23" fill="rgba(0,0,0,.55)" />
    <path d="M61 151 L92 94 C108 67 134 52 168 50 L303 45 C345 44 376 61 405 93 L463 115 C488 124 503 142 506 165 L496 184 L64 185 C39 177 37 161 61 151Z" fill="url(#ravBody)" />
    <path d="M147 62 C118 69 105 91 93 120 L185 119 L199 61 Z" fill="url(#glass)" />
    <path d="M210 60 L197 119 L335 118 L314 58 Z" fill="url(#glass)" />
    <path d="M330 60 L351 119 L433 120 L389 85 C372 69 354 62 330 60Z" fill="url(#glass)" />
    <path d="M76 139 L112 134 L104 151 L62 158 Z" fill="#f6c21a" />
    <path d="M448 137 C473 139 487 146 495 160 L440 158 Z" fill="#f6c21a" />
    <path d="M196 128 H332" stroke="#5d656a" strokeWidth="5" strokeLinecap="round" />
    <path d="M115 132 H163" stroke="#111" strokeWidth="7" strokeLinecap="round" />
    <path d="M214 132 H262" stroke="#111" strokeWidth="7" strokeLinecap="round" />
    <path d="M362 132 H420" stroke="#111" strokeWidth="7" strokeLinecap="round" />
    <circle cx="145" cy="181" r="42" fill="#11171a" />
    <circle cx="145" cy="181" r="24" fill="#cfd3d7" />
    <circle cx="145" cy="181" r="9" fill="#2a3034" />
    <circle cx="404" cy="181" r="42" fill="#11171a" />
    <circle cx="404" cy="181" r="24" fill="#cfd3d7" />
    <circle cx="404" cy="181" r="9" fill="#2a3034" />
    <rect x="55" y="162" width="73" height="17" rx="6" fill="#0f1314" />
    <path d="M315 148 h104 l-9 18 h-95z" fill="#14191b" />
    <path d="M337 154 h69" stroke="#f6c21a" strokeWidth="6" strokeLinecap="round" />
    <text x="344" y="161" fill="#f6c21a" fontSize="18" fontFamily="Arial Black, Arial" transform="skewX(-10)">TAXI</text>
  </svg>
);

const CamryIllustration = () => (
  <svg viewBox="0 0 500 205" className="w-[48vw] max-w-[490px] min-w-[260px] drop-shadow-[0_24px_42px_rgba(0,0,0,0.65)]" aria-hidden="true">
    <defs>
      <linearGradient id="camryBody" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor="#6e4a32" />
        <stop offset="0.52" stopColor="#3f2a20" />
        <stop offset="1" stopColor="#1e1714" />
      </linearGradient>
      <linearGradient id="camryGlass" x1="0" x2="1">
        <stop offset="0" stopColor="#101619" />
        <stop offset="1" stopColor="#38454b" />
      </linearGradient>
    </defs>
    <ellipse cx="250" cy="181" rx="210" ry="21" fill="rgba(0,0,0,.55)" />
    <path d="M50 139 C80 101 128 84 197 82 L270 79 C320 77 357 87 391 114 L454 130 C474 136 487 149 488 163 L477 174 H62 C36 166 34 151 50 139Z" fill="url(#camryBody)" />
    <path d="M146 91 C123 96 105 109 88 130 L193 128 L211 88 Z" fill="url(#camryGlass)" />
    <path d="M222 88 L204 128 L325 126 L293 87 Z" fill="url(#camryGlass)" />
    <path d="M306 88 L340 126 L407 128 C381 101 352 90 306 88Z" fill="url(#camryGlass)" />
    <path d="M66 137 L111 132 L101 146 L51 151 Z" fill="#f6c21a" />
    <path d="M416 135 C447 137 466 145 478 157 L421 153 Z" fill="#f6c21a" />
    <circle cx="141" cy="167" r="35" fill="#11171a" />
    <circle cx="141" cy="167" r="20" fill="#c3b09a" />
    <circle cx="141" cy="167" r="8" fill="#2b241f" />
    <circle cx="391" cy="167" r="35" fill="#11171a" />
    <circle cx="391" cy="167" r="20" fill="#c3b09a" />
    <circle cx="391" cy="167" r="8" fill="#2b241f" />
    <path d="M191 135 H315" stroke="#9a6b48" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const SoldierSilhouette = () => (
  <svg viewBox="0 0 360 560" className="w-[32vw] max-w-[430px] min-w-[290px] opacity-75 mix-blend-screen" aria-hidden="true">
    <g fill="#0a0d0b" stroke="#f5c315" strokeOpacity=".28" strokeWidth="2">
      <circle cx="185" cy="95" r="50" />
      <path d="M128 90 C142 45 224 45 242 91 L247 125 C217 105 154 105 121 127 Z" />
      <path d="M132 145 C152 121 214 118 236 147 L255 235 L300 284 L280 327 L245 292 L236 495 H145 L137 294 L95 330 L70 288 L117 232 Z" />
      <path d="M146 178 H226 L248 252 L126 251 Z" fill="#111711" />
      <path d="M150 270 H232" />
      <path d="M92 292 L46 393 L82 407 L130 314" />
      <path d="M279 291 L324 392 L288 406 L240 314" />
      <path d="M147 495 L129 548 H169 L183 497" />
      <path d="M236 495 L254 548 H214 L201 497" />
    </g>
  </svg>
);

const HeroSection = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-[#050606] pt-16 text-white" role="banner">
      <div className="absolute inset-0 -z-30">
        <img
          src="/images/hero-bg.webp"
          alt="Historic castle and hills near Zvolen in Central Slovakia"
          className="h-full w-full object-cover object-center opacity-45 saturate-[0.8]"
          fetchPriority="high"
        />
      </div>

      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_70%_35%,rgba(246,194,26,0.18),transparent_26%),linear-gradient(90deg,rgba(2,4,4,0.98)_0%,rgba(4,8,7,0.88)_35%,rgba(4,8,7,0.55)_63%,rgba(2,4,4,0.92)_100%)]" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(30deg, transparent 24%, rgba(246,194,26,.55) 25%, rgba(246,194,26,.55) 26%, transparent 27%, transparent 74%, rgba(246,194,26,.55) 75%, rgba(246,194,26,.55) 76%, transparent 77%), linear-gradient(150deg, transparent 24%, rgba(246,194,26,.55) 25%, rgba(246,194,26,.55) 26%, transparent 27%, transparent 74%, rgba(246,194,26,.55) 75%, rgba(246,194,26,.55) 76%, transparent 77%)',
          backgroundSize: '82px 48px',
        }}
      />

      <div className="absolute right-[8%] top-[18%] hidden h-72 w-72 rounded-full border border-yellow-400/25 lg:block" />
      <div className="absolute right-[11%] top-[22%] hidden h-56 w-56 rounded-full border border-yellow-400/20 lg:block" />
      <div className="absolute right-[17%] top-[25%] hidden h-40 w-40 rounded-full border border-yellow-400/20 lg:block" />

      <div className="relative mx-auto min-h-[calc(100vh-4rem)] max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid min-h-[720px] items-center gap-10 lg:grid-cols-[1.02fr_.98fr]">
          <div className="relative z-20 max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-yellow-400/30 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-yellow-300 backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              {content.badge}
            </div>

            <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.94] tracking-tight text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.75)] sm:text-6xl lg:text-7xl">
              {content.heading}
            </h1>
            <p className="mt-4 text-2xl font-black uppercase tracking-tight text-yellow-400 drop-shadow-[0_5px_14px_rgba(0,0,0,0.75)] sm:text-3xl lg:text-4xl">
              {content.subheading}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {content.description}
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {content.benefits.map((item) => (
                <div key={item.title} className="group rounded-2xl border border-yellow-400/20 bg-black/25 p-3 backdrop-blur-sm transition hover:bg-yellow-400/10">
                  <item.icon className="mb-2 h-5 w-5 text-yellow-400" />
                  <p className="text-[11px] font-bold uppercase leading-tight tracking-wide text-white/80">{item.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="tel:+421902048583" className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 text-base font-black text-black shadow-[0_0_28px_rgba(246,194,26,.34)] transition hover:bg-yellow-300">
                <Phone className="h-5 w-5" />
                {content.callCta}
              </a>
              <a href="https://wa.me/421902048583" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-4 text-base font-black text-white shadow-[0_0_24px_rgba(37,211,102,.28)] transition hover:bg-[#22c55e]">
                <MessageCircle className="h-5 w-5" />
                {content.whatsappCta}
              </a>
            </div>
          </div>

          <div className="pointer-events-none relative hidden min-h-[560px] lg:block">
            <div className="absolute right-[-8%] top-0">
              <SoldierSilhouette />
            </div>
            <div className="absolute right-0 top-[42%] h-44 w-44 rounded-full border border-yellow-400/25 bg-black/25 p-6 text-yellow-400/60 backdrop-blur-sm">
              <MapPin className="h-full w-full opacity-40" />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-[135px] left-[28%] z-10 hidden lg:block">
          <Rav4Illustration />
        </div>
        <div className="pointer-events-none absolute bottom-[126px] right-[4%] z-10 hidden lg:block">
          <CamryIllustration />
        </div>

        <div className="relative z-30 -mt-16 flex items-end justify-center -space-x-16 lg:hidden">
          <Rav4Illustration />
          <div className="translate-y-2 scale-90"><CamryIllustration /></div>
        </div>

        <div className="relative z-40 grid gap-3 rounded-2xl border border-yellow-400/20 bg-black/55 p-3 shadow-[0_22px_60px_rgba(0,0,0,.45)] backdrop-blur-md sm:grid-cols-2 lg:grid-cols-5">
          {content.stats.map((stat) => (
            <div key={stat.route} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
              <div className="mb-2 flex items-center gap-2 text-yellow-400">
                <stat.icon className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wide text-white/75">{stat.route}</span>
              </div>
              <p className="text-3xl font-black text-white">{stat.price}</p>
            </div>
          ))}
          <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
            <div className="mb-2 flex items-center gap-2 text-yellow-400">
              <BadgeCheck className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wide text-white/75">TaxiForce</span>
            </div>
            <p className="text-sm font-semibold leading-snug text-white/80">{content.assurance}</p>
          </div>
        </div>

        <div className="relative z-40 mt-5 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 text-sm font-semibold text-white/85 backdrop-blur-md sm:flex-row sm:items-center sm:justify-end lg:absolute lg:bottom-8 lg:right-8 lg:mt-0">
          <span className="flex items-center gap-2"><MapPin className="h-5 w-5 text-yellow-400" /> {content.location}</span>
          <span className="hidden h-6 w-px bg-white/20 sm:block" />
          <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_14px_rgba(34,197,94,.75)]" /> {content.availability}</span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-[repeating-linear-gradient(135deg,rgba(246,194,26,.7)_0_18px,rgba(0,0,0,.45)_18px_36px)] opacity-20" />
    </section>
  );
};

export default HeroSection;
