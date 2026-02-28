# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**InvoiceFast** is a Next.js 16 landing page for an invoice management platform targeting Indonesian businesses and freelancers. The project features a **Clean Minimal + Modern Tech** aesthetic with both light and dark theme support.

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

### Styling System
- **Dark Mode**: Class-based (`darkMode: "class"`)
- **Default Theme**: Dark mode enabled by default on `<html className="dark">` in layout.tsx
- **Font System**:
  - Headings: **Playfair Display** (serif, elegant editorial)
  - Body: **Source Serif Pro** (clean, professional serif)
  - Applied via `font-display` class for headings, default `font-sans` for body text

### Color Palette (Monochrome + Coral Red)
```
Primary Accent: Coral Red (#FF6B6B)
- Hover: #FF5252 (darker coral)
- Light Mode Hover: #FF6B6B
- Dark Mode Hover: #FF8A8A (lighter coral for dark backgrounds)
- Subtle Backgrounds: #FFF0F0 (light), #3D1010/20 (dark)

Monochrome Base (Light Mode):
- Background: white (#ffffff), zinc-50 (#fafafa)
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

## Landing Page Structure

### Sections (in order)

1. **Header/Navbar** (sticky)
   - Logo: "InvoiceFast" (zinc-900/zinc-50)
   - Nav links: Fitur, Testimoni, Harga
   - CTA button: "Mulai Gratis" (coral red #FF6B6B)
   - Backdrop blur with transparency

2. **Hero Section**
   - Badge: "Platform Invoice #1 di Indonesia"
   - Headline: "Bikin Invoice dalam 30 Detik" (font-display, 30 Detik in coral red)
   - Subheadline: Value proposition
   - CTA buttons: "Mulai Gratis Sekarang" (primary), "Lihat Demo" (secondary)
   - Invoice preview: Clean, modern invoice mockup (white bg)

3. **Features Section** (bg-zinc-50 dark:bg-zinc-950)
   - Section heading: "Fitur Unggulan"
   - 3 feature cards:
     - Bikin Invoice Cepat
     - Share Link
     - Track Status
   - Cards: White/zinc-900 with subtle border, hover: coral red border

4. **Social Proof Section**
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
     - **Gratis**: Rp 0/bulan, 3 features
     - **Pro**: Rp 99.000/bulan, 5+ features, "Populer" badge, coral red border

6. **CTA Section**
   - Headline: "Siap Membuat Invoice Pertama Anda?"
   - Subtext: "Bergabung dengan 10,000+ bisnis..."
   - CTA button: "Mulai Gratis Sekarang"
   - Subtle coral red gradient orbs in background

7. **Footer** (minimal)
   - Logo: InvoiceFast
   - Support links: Bantuan, Kontak, Privasi
   - Copyright: © 2025 InvoiceFast
   - Horizontal layout (flex-row on md+)

## File Structure

```
app/
├── layout.tsx       # Root layout with dark mode class
├── page.tsx         # Main landing page (all sections)
├── globals.css      # Font imports & Tailwind config
└── favicon.ico      # App icon

public/              # Static assets
```

## Important Notes

**CSS Import Order**: In `globals.css`, Google Fonts import MUST come before `@import "tailwindcss"` to avoid parsing errors.

**Font Loading**: Two fonts are loaded via Google Fonts CDN:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Source+Serif+Pro:wght@400;500;600;700&display=swap');
```

**Tailwind v4 Theme**: Fonts are configured via `@theme inline` in globals.css:
```css
@theme inline {
  --font-sans: 'Source Serif Pro', serif;
  --font-display: 'Playfair Display', serif;
}
```

**Build Cache**: If you encounter CSS parsing errors, delete the `.next` folder and restart the dev server.

**Dark Mode Toggle**: To switch between light/dark default, modify the `className` on the `<html>` element in `app/layout.tsx`:
- Dark mode default: `<html lang="id" className="dark">`
- Light mode default: `<html lang="id">`

**Invoice Preview**: The hero section contains a detailed HTML invoice preview on the right side (desktop) or below (mobile). It uses a white background regardless of theme to simulate a real invoice document.

**Responsive Behavior**:
- Mobile: Stacked layouts, full-width cards
- Tablet (md): 2-column grids
- Desktop (lg): Multi-column layouts, generous spacing with `lg:px-36`

**Alignment Patterns**:
- Pricing cards: `flex flex-col`, `flex-grow` on ul, buttons auto-align at bottom
- Testimonial cards: `flex flex-col`, `flex-grow` on text, `mt-auto` on user info
- Stats cards: Equal height with centered content

## Design Philosophy

**Clean Minimal**: Generous whitespace, focused content, minimal clutter
**Modern Tech**: Contemporary SaaS aesthetic, subtle interactions, refined details
**Monochrome Base**: Timeless grayscale foundation
**Single Pop Color**: Coral Red (#FF6B6B) for CTAs and key highlights only
**Elegant Typography**: Playfair Display brings editorial sophistication to headings

## Recent Changes History

1. **Color Palette Update**: Changed from Monochrome + Indigo to **Monochrome + Coral Red** (#FF6B6B)
2. **Font Update**: Changed from Plus Jakarta Sans to Playfair Display (headings) + Source Serif Pro (body)
3. **Footer Simplification**: Reduced to horizontal layout with logo, support links, and copyright
4. **Alignment Improvements**: Added flexbox to pricing buttons and testimonial user info for consistent alignment
5. **Previous Color**: Changed from Cyan→Teal→Emerald gradients to Monochrome + Indigo (before Coral Red)
6. **Aesthetic Direction**: Shifted from Editorial style to Clean Minimal + Modern Tech
