# Next.js Migration - Testing Guide

## 🎉 Migration Complete!

The project has been successfully migrated from Vite + React Router to **Next.js 14** with the App Router.

---

## 📦 Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

or with your preferred package manager:

```bash
yarn install
# or
pnpm install
# or
bun install
```

---

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

The application will be available at: **http://localhost:3000**

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## ✅ Testing Checklist

Before deploying to production, please verify the following:

### 1. **All Pages Load Correctly**
- [ ] Homepage (`/`) - All sections render properly
- [ ] Blog page (`/blog`) - Blog content is visible
- [ ] 404 page - Navigate to a non-existent route (e.g., `/test-404`)

### 2. **Navigation & Routing**
- [ ] Click "Blog" button in navigation → should navigate to `/blog`
- [ ] Click "Domov" button on blog page → should return to homepage
- [ ] Browser back/forward buttons work correctly

### 3. **Interactive Components**
- [ ] **Language Switcher**: Toggle between EN/ES - content should update
- [ ] **Navigation**: Check if navigation appears/hides on scroll
- [ ] **Animations**: All scroll animations, parallax effects, typewriter, etc.
- [ ] **Particles Background**: Animated particles in hero section
- [ ] **Counter Animations**: Numbers animate on page load
- [ ] **Magnetic Buttons**: Hover effects work on buttons

### 4. **SEO & Metadata**
- [ ] View page source (`Ctrl+U` or right-click → View Source)
- [ ] Verify meta tags are present:
  - Title tag
  - Description meta tag
  - OpenGraph tags (og:title, og:description, og:image)
  - Twitter Card tags
  - JSON-LD structured data
- [ ] Check canonical URL
- [ ] Verify language attributes (`lang="es"` in `<html>`)

### 5. **Analytics & Tracking**
- [ ] Open browser DevTools → Network tab
- [ ] Verify Google Analytics loads (`gtag/js`)
- [ ] Verify Microsoft Clarity loads (`clarity.ms`)
- [ ] Check that page views are tracked (use GA Debugger extension if available)

### 6. **Responsive Design**
- [ ] Test on mobile viewport (use DevTools device toolbar)
- [ ] Test on tablet viewport
- [ ] Test on desktop viewport
- [ ] Navigation adapts to mobile (compact icons)
- [ ] All sections are readable on small screens

### 7. **Forms & Interactions**
- [ ] Contact form (if applicable) - submissions work
- [ ] WhatsApp button links correctly
- [ ] Phone number links work (tel: protocol)

### 8. **Performance**
- [ ] Run Lighthouse audit (DevTools → Lighthouse tab)
  - Performance: Should be >80
  - Accessibility: Should be >90
  - Best Practices: Should be >90
  - SEO: Should be >90
- [ ] Check bundle size: `npm run build` → inspect `.next` folder
- [ ] Verify images load properly (Next.js Image optimization)

### 9. **Console Errors**
- [ ] Open DevTools Console
- [ ] Navigate through all pages
- [ ] Verify **NO** errors or warnings (minor warnings OK)
- [ ] Check for hydration errors (most critical!)

---

## 🐛 Common Issues & Fixes

### Issue: Hydration Errors

**Symptoms**: Console errors like "Hydration failed" or content flickers on load

**Possible Causes**:
- Server/client mismatch (random values, Date.now(), etc.)
- Missing 'use client' directive on interactive components

**Fix**:
```tsx
// Add 'use client' to components using hooks
'use client';

import { useState } from 'react';
```

### Issue: Images Not Loading

**Possible Causes**:
- Images in `/public` folder but path is wrong
- Next.js Image component not configured

**Fix**:
```tsx
// Correct path for images in /public
<img src="/hero-image.jpg" alt="..." />
// or use Next.js Image
import Image from 'next/image';
<Image src="/hero-image.jpg" width={1200} height={630} alt="..." />
```

### Issue: Fonts Not Loading

**Check**: Fonts should be optimized via `next/font/google` in `app/layout.tsx`

```tsx
import { Inter, Poppins } from 'next/font/google';
```

### Issue: Tailwind Styles Not Applied

**Fix**: Ensure `tailwind.config.ts` content paths include app directory:

```ts
content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
]
```

---

## 🔧 Environment Variables

If you need environment variables, create a `.env.local` file:

```env
# Example
NEXT_PUBLIC_API_URL=https://api.example.com
```

**Important**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

---

## 📊 Performance Monitoring

After deployment, monitor these metrics:

1. **Core Web Vitals** (via Google Search Console or Vercel Analytics)
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1

2. **Google Analytics**
   - Check traffic hasn't dropped after migration
   - Verify page paths are tracked correctly (`/` and `/blog`)

3. **Lighthouse CI** (optional)
   - Set up automated Lighthouse tests on CI/CD

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

**Or via CLI:**
```bash
npm i -g vercel
vercel --prod
```

### GitHub Pages (Static Export)

If you want to deploy to GitHub Pages:

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

3. Deploy `out/` folder to GitHub Pages

---

## 📝 Migration Summary

### What Changed:

✅ **Framework**: Vite → Next.js 14 (App Router)
✅ **Routing**: React Router → Next.js file-based routing
✅ **Pages**: Migrated to `app/` directory
✅ **SEO**: Static meta tags → Next.js Metadata API
✅ **Components**: Added `'use client'` to interactive components
✅ **Links**: `react-router-dom` Link → `next/link`
✅ **Config**: Updated `tsconfig.json`, `tailwind.config.ts`

### What Stayed the Same:

✅ All components and UI (shadcn/ui, Radix UI)
✅ Tailwind CSS configuration and custom styles
✅ Custom hooks and contexts
✅ Analytics (Google Analytics, Microsoft Clarity)
✅ JSON-LD structured data

---

## 🆘 Need Help?

If you encounter any issues during testing:

1. Check the **Console** for errors
2. Review the **Network** tab for failed requests
3. Compare with the original Vite version (if still available)
4. Check Next.js documentation: https://nextjs.org/docs

---

## 📅 Next Steps

After successful testing:

1. ✅ Merge migration branch to main
2. ✅ Deploy to production (Vercel recommended)
3. ✅ Monitor analytics for 24-48 hours
4. ✅ Check Google Search Console for SEO issues
5. ✅ Update DNS if needed (for custom domain)
6. 🎉 Enjoy the performance benefits of Next.js!

---

**Migration Date**: 2025-11-18
**Next.js Version**: 14.2.0
**Branch**: `claude/plan-nextjs-migration-018ivqeodcJJ9DsxSQUwKboL`
