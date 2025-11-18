# Centro Rides - Next.js 14

Premium taxi service for Spanish military personnel at Lešť Slavia NATO base in Slovakia.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
centrum-rides/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with SEO & metadata
│   ├── page.tsx             # Homepage
│   ├── blog/page.tsx        # Blog page
│   ├── not-found.tsx        # 404 page
│   ├── providers.tsx        # Client-side providers
│   └── globals.css          # Global styles
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   └── ...             # Feature components
│   ├── contexts/            # React contexts (Language)
│   ├── hooks/               # Custom hooks
│   ├── lib/                 # Utilities
│   └── assets/              # Images and static assets
├── public/                  # Public static files
│   ├── favicon.png
│   ├── hero-image.jpg
│   └── ...
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **State Management**: TanStack Query + React Context
- **Forms**: React Hook Form + Zod
- **Analytics**: Google Analytics 4 + Microsoft Clarity

## 🎨 Features

- ✅ **Multi-language support** (English/Spanish)
- ✅ **SEO optimized** with Next.js Metadata API
- ✅ **Responsive design** for all devices
- ✅ **Animated UI** with custom hooks
- ✅ **Analytics integration** (GA4 + Clarity)
- ✅ **Performance optimized** with Next.js Image & Font
- ✅ **Accessibility** (WCAG compliant)

## 🔍 SEO & Meta Tags

All SEO is handled via Next.js Metadata API in `app/layout.tsx`:

- Title & Description
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card
- JSON-LD structured data
- Canonical URLs
- Language alternates
- Geo tags

## 📊 Analytics

- **Google Analytics 4**: Configured in `app/layout.tsx`
- **Microsoft Clarity**: Session recording and heatmaps

## 🌍 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

Build the production bundle:

```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

### Static Export (GitHub Pages)

To export as static HTML:

1. Update `next.config.mjs`:
```js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
```

2. Build:
```bash
npm run build
```

3. Deploy the `out/` folder.

## 🧪 Testing

See `MIGRATION_TESTING.md` for a comprehensive testing checklist.

## 📝 Migration Notes

This project was migrated from Vite + React Router to Next.js 14. Key changes:

- **Routing**: File-based routing in `app/` directory
- **SEO**: Static meta tags → Next.js Metadata API
- **Components**: Added `'use client'` to interactive components
- **Build**: Vite → Next.js build system
- **Performance**: Image & font optimization

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test locally (`npm run dev`)
4. Build for production (`npm run build`)
5. Submit a pull request

## 📄 License

Private project for TaxiForce military transport services.

## 📞 Contact

- **Phone**: +421 902 048 583
- **WhatsApp**: Available for bookings
- **Service Area**: Lešť Slavia NATO base, Zvolen, Banská Bystrica

---

**Built with ❤️ for Spanish military personnel in Slovakia**
