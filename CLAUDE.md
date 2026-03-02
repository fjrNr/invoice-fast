# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**InvoiceFast** is a Next.js 16 web application for invoice management targeting Indonesian businesses and freelancers. The project features a **Clean Minimal + Modern Tech** aesthetic with both light and dark theme support, and includes authentication via Supabase magic links.

**Note**: The package name is `invoice-kirim` (defined in [package.json](package.json)), but the product brand is **InvoiceFast**.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture & Tech Stack

### Framework & Core
- **Next.js 16.1.6** with App Router (app directory)
- **React 19.2.3** with TypeScript 5
- **Tailwind CSS v4** with inline theme configuration

### Authentication
- **Supabase** (`@supabase/supabase-js` v2.98.0, `@supabase/ssr` v0.8.0)
- **Magic Link Authentication**: Passwordless login via email
- **Session Management**: Server-side session refresh via middleware
- **Protected Routes**: Middleware guards `/dashboard` for authenticated users only

### Styling System
- **Dark Mode**: Class-based (`darkMode: "class"`)
- **Default Theme**: Dark mode enabled by default on `<html className="dark">` in [layout.tsx](app/layout.tsx)
- **Font System**:
  - Headings: **Playfair Display** (serif, elegant editorial)
  - Body: **Source Serif Pro** (clean, professional serif)
  - Applied via `font-display` class for headings, default `font-sans` for body text
  - **Important**: There's a font configuration inconsistency - [tailwind.config.ts](tailwind.config.ts) has `IBM Plex Sans` but [globals.css](app/globals.css) correctly uses `Source Serif Pro`. The CSS takes precedence.

### Color Palette (Monochrome + Coral Red)

```
Primary Accent: Coral Red (#FF6B6B)
- Hover: #FF5252 (darker coral)
- Dark Mode Hover: #FF8A8A (lighter coral for dark backgrounds)
- Subtle Backgrounds: #FFF0F0 (light), #3D1010/20 (dark)

Monochrome Base (Light Mode):
- Background: red-50 (#fef2f2), zinc-50 (#fafafa)
- Surface: zinc-100, zinc-200
- Border: zinc-200, zinc-300
- Text Primary: zinc-900 (#18181b)
- Text Secondary: zinc-600 (#52525b)
- Text Tertiary: zinc-500 (#71717a)

Monochrome Base (Dark Mode):
- Background: zinc-950 (#09090b), zinc-900 (#18181b)
- Surface: zinc-800 (#27272a), zinc-700
- Border: zinc-800 (#27272a), zinc-700
- Text Primary: zinc-50 (#fafafa)
- Text Secondary: zinc-400 (#a1a1aa)
- Text Tertiary: zinc-500 (#71717a)

Status Colors:
- Success: Emerald-500
- Warning: Amber-400/500
- Info: Blue-500
```

### Key Design Patterns

**Dual Theme Classes**: All components use Tailwind's `dark:` prefix
```tsx
className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50"
```

**Smooth Transitions**: All color changes include `transition-colors duration-300`

**Primary Accent Usage**: CTAs and highlights use coral red
```tsx
"bg-[#FF6B6B] hover:bg-[#FF5252]"
"text-[#FF6B6B] dark:text-[#FF8A8A]"
```

**Font Application**:
```tsx
// Headings use Playfair Display
<h1 className="font-display text-6xl font-bold">Title</h1>

// Body text uses Source Serif Pro (default)
<p className="text-base">Body text</p>
```

**Flexbox Alignment**: Cards use `flex flex-col` with `flex-grow` and `mt-auto` to align content
```tsx
<div className="flex flex-col">
  <div className="flex-grow">Content expands</div>
  <div className="mt-auto">Always at bottom</div>
</div>
```

**Responsive Spacing**: Uses `lg:px-36` for generous horizontal padding on large screens

**Border Styling**: Buttons use `border-3` for 3px borders
```tsx
"border-3 border-red-200 bg-[#FF6B6B] hover:bg-[#FF5252] hover:border-red-300"
```

## Authentication Flow

### Magic Link Login Flow

```
User → /login
  ↓
Submit email → Supabase sends magic link to email
  ↓
User checks email → clicks magic link
  ↓
Magic link → /auth/callback
  ↓
Code exchange → session created
  ↓
Redirect → /dashboard
```

### Supabase Client Usage

**Browser Client (Client Components)**:
```tsx
'use client'
import { createClient } from '@/lib/supabase/client'

export default function Component() {
  const supabase = createClient()
  // Use for client-side auth operations
}
```

**Server Client (Server Components)**:
```tsx
import { createClient } from '@/lib/supabase/server'

export default async function Component() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  // Use for server-side auth operations
}
```

**Middleware (Auth Refresh)**:
- [middleware.ts](middleware.ts) handles session refresh on every request
- Redirects unauthenticated users from `/dashboard` to `/login`
- Redirects authenticated users from `/login` to `/dashboard`

## Routes & Pages

### Public Routes

**/** - Landing Page
- Marketing page with all sections (Hero, Features, Testimonials, Pricing, CTA)
- All CTA buttons link to `/login`
- Logo links to `/`

**/login** - Login Page
- Email-only form (magic link, no password)
- Success state: "Cek Email Kamu" message
- Error handling for failed submissions
- Links back to home page

**/auth/callback** - Auth Callback
- Handles magic link redirect
- Exchanges code for session
- Redirects to `/dashboard` on success
- Redirects to error page on failure

### Protected Routes

**/dashboard** - Dashboard
- Protected by middleware (requires authentication)
- Shows user email
- Logout button
- Placeholder stats cards (Total Invoice, Pending, Lunas)
- Empty state with "Buat Invoice" CTA → `/dashboard/invoices/new`
- Logo links to `/`

**/auth/signout** - Signout Handler
- POST route handler
- Signs out user
- Redirects to `/`

### Future Routes (Placeholders)

**/dashboard/invoices/new** - Create Invoice
- Referenced in dashboard CTA button
- Not yet implemented

## Landing Page Structure

### Sections (in order)

1. **Header/Navbar** (sticky)
   - Logo: "InvoiceFast" → links to `/`
   - Nav links: Fitur (#fitur), Testimoni (#testimoni), Harga (#harga)
   - CTA button: "Mulai Gratis" → `/login`
   - Backdrop blur with transparency

2. **Hero Section**
   - Background: `bg-red-50 dark:bg-zinc-950`
   - Badge: "Platform Invoice #1 di Indonesia"
   - Headline: "Bikin Invoice dalam 30 Detik" (font-display, 30 Detik in coral red)
   - Subheadline: Value proposition
   - CTA buttons: "Mulai Gratis Sekarang" → `/login`, "Lihat Demo" → `#fitur`
   - Invoice preview: Clean, modern invoice mockup (white/zinc-900 bg)

3. **Features Section** (bg-zinc-50 dark:bg-zinc-950)
   - Section heading: "Fitur Unggulan"
   - 3 feature cards:
     - Bikin Invoice Cepat
     - Share Link
     - Track Status
   - Cards: `bg-red-50 dark:bg-zinc-900` with subtle border, hover: coral red border

4. **Social Proof Section**
   - Background: `bg-red-50 dark:bg-zinc-950`
   - Stats row (3 cards):
     - 10,000+ Bisnis
     - 50M+ Invoice dibuat
     - 4.9/5 Rating
   - Testimonials grid (3 cards):
     - Avatar + name + position
     - Star rating (5 stars)
     - Testimonial text
     - User info aligned at bottom with `flex flex-col`, `flex-grow`, `mt-auto`

5. **Pricing Section** (bg-zinc-50 dark:bg-zinc-950)
   - Section heading: "Pilih Paket Anda"
   - 2 pricing cards (flex-col, buttons aligned at bottom):
     - **Gratis**: Rp 0/bulan, 3 features, "Mulai Gratis" → `/login`
     - **Pro**: Rp 99.000/bulan, 5+ features, "Populer" badge, "Coba 14 Hari Gratis" → `/login`

6. **CTA Section**
   - Background: `bg-red-50 dark:bg-zinc-950`
   - Headline: "Siap Membuat Invoice Pertama Anda?"
   - Subtext: "Bergabung dengan 10,000+ bisnis..."
   - CTA button: "Mulai Gratis Sekarang" → `/login`
   - Subtle coral red gradient orbs in background

7. **Footer**
   - Background: `bg-red-50 dark:bg-zinc-950`
   - Logo: InvoiceFast → links to `/`
   - Support links: Bantuan, Kontak, Privasi
   - Copyright: © 2025 InvoiceFast
   - Horizontal layout (flex-row on md+)

## File Structure

```
invoice-fast/
├── app/
│   ├── auth/
│   │   ├── callback/
│   │   │   └── route.ts        # Auth callback handler (magic link redirect)
│   │   └── signout/
│   │       └── route.ts         # Signout handler (POST)
│   ├── dashboard/
│   │   └── page.tsx             # Dashboard (protected route)
│   ├── favicon.ico              # App icon
│   ├── globals.css              # Font imports & Tailwind config
│   ├── layout.tsx               # Root layout with dark mode class
│   ├── login/
│   │   └── page.tsx             # Login page (magic link)
│   └── page.tsx                 # Landing page
├── lib/
│   └── supabase/
│       ├── client.ts            # Browser client (client components)
│       ├── middleware.ts        # Auth refresh helper
│       └── server.ts            # Server client (server components)
├── public/                      # Static assets (SVG icons)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .env.local                   # Supabase environment variables (git-ignored)
├── .gitignore                   # Git ignore rules
├── CLAUDE.md                    # This file
├── eslint.config.mjs            # ESLint configuration (Flat config)
├── middleware.ts                # Next.js middleware (auth + session refresh)
├── next.config.ts               # Next.js configuration
├── next-env.d.ts                # Next.js TypeScript definitions
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS with Tailwind plugin
├── README.md                    # Default Next.js README
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json                # TypeScript configuration
```

## Important Notes

**Package Name Discrepancy**: The [package.json](package.json) name is `invoice-kirim`, but the product is branded as **InvoiceFast**.

**Supabase Configuration**: Environment variables are stored in [.env.local](.env.local):
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

**Supabase Setup Requirements**:
1. Create project at [supabase.com](https://supabase.com)
2. Enable Email Auth in Authentication → Providers
3. Configure Site URL: `http://localhost:3000` (dev) or production URL
4. Configure Redirect URLs: `http://localhost:3000/auth/callback`
5. Copy URL and anon key to `.env.local`

**CSS Import Order**: In [globals.css](app/globals.css), Google Fonts import MUST come before `@import "tailwindcss"` to avoid parsing errors.

**Font Loading**: Two fonts are loaded via Google Fonts CDN:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Source+Serif+Pro:wght@400;500;600;700&display=swap');
```

**Tailwind v4 Theme**: Fonts are configured via `@theme inline` in [globals.css](app/globals.css):
```css
@theme inline {
  --font-sans: 'Source Serif Pro', serif;
  --font-display: 'Playfair Display', serif;
}
```

**Font Config Inconsistency**: The [tailwind.config.ts](tailwind.config.ts) file has `IBM Plex Sans` configured, but the actual [globals.css](app/globals.css) correctly overrides this with `Source Serif Pro`. The CSS `@theme inline` takes precedence.

**Build Cache**: If you encounter CSS parsing errors, delete the `.next` folder and restart the dev server.

**Dark Mode Toggle**: To switch between light/dark default, modify the `className` on the `<html>` element in [app/layout.tsx](app/layout.tsx):
- Dark mode default: `<html lang="id" className="dark">` (current)
- Light mode default: `<html lang="id">`

**Middleware Configuration**: [middleware.ts](middleware.ts) uses a custom matcher that excludes static files but includes all other routes for session refresh and auth guards.

**Protected Routes**: Any route under `/dashboard` is protected. Middleware redirects unauthenticated users to `/login`.

**Invoice Preview**: The hero section contains a detailed HTML invoice preview on the right side (desktop) or below (mobile). It uses `bg-white dark:bg-zinc-900` to simulate a real invoice document.

**Background Color Pattern**: The page alternates between `bg-red-50` (hero, social proof, CTA, footer) and `bg-zinc-50` (features, pricing) for visual variety while maintaining the coral red theme.

**Responsive Behavior**:
- Mobile: Stacked layouts, full-width cards
- Tablet (md): 2-column grids
- Desktop (lg): Multi-column layouts, generous spacing with `lg:px-36`

**Alignment Patterns**:
- Pricing cards: `flex flex-col`, `flex-grow` on ul, buttons auto-align at bottom
- Testimonial cards: `flex flex-col`, `flex-grow` on text, `mt-auto` on user info
- Stats cards: Equal height with centered content

**ESLint Configuration**: Uses ESLint 9+ with flat config format ([eslint.config.mjs](eslint.config.mjs)) including:
- `next/core-web-vitals`
- `next/typescript`
- Custom ignores for `.next`, `out`, `build`, `next-env.d.ts`

**TypeScript Configuration**:
- Target: ES2017
- Path alias: `@/*` maps to root directory
- Strict mode enabled

**PostCSS Configuration**: Uses `@tailwindcss/postcss` plugin ([postcss.config.mjs](postcss.config.mjs))

## Design Philosophy

**Clean Minimal**: Generous whitespace, focused content, minimal clutter
**Modern Tech**: Contemporary SaaS aesthetic, subtle interactions, refined details
**Monochrome Base**: Timeless grayscale foundation with coral red accent
**Single Pop Color**: Coral Red (#FF6B6B) for CTAs and key highlights only
**Elegant Typography**: Playfair Display brings editorial sophistication to headings

## Metadata & SEO

The [layout.tsx](app/layout.tsx) includes Indonesian metadata:
```tsx
title: "InvoiceFast - Buat Invoice dalam 30 Detik"
description: "Platform invoice tercepat untuk bisnis Anda..."
lang: "id"
```

## Recent Changes History

1. **Authentication System**: Added Supabase magic link authentication
2. **New Routes**: /login, /dashboard, /auth/callback, /auth/signout
3. **Middleware**: Session refresh and protected route guards
4. **Navigation**: All CTAs link to /login, logos link to home
5. **Color Palette**: Monochrome + Coral Red (#FF6B6B) accent
6. **Font**: Playfair Display (headings) + Source Serif Pro (body)
7. **Border Styling**: Uses `border-3` (3px borders) on buttons
8. **Background Pattern**: Alternates between `bg-red-50` and `bg-zinc-50` sections
9. **Package Name**: `invoice-kirim` in package.json, branded as InvoiceFast
10. **Font Config Inconsistency**: tailwind.config.ts has IBM Plex Sans, but globals.css correctly uses Source Serif Pro
