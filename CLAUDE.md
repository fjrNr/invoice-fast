# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**InvoiceFast** is a Next.js 16 landing page for an invoice management platform targeting Indonesian businesses. The project uses modern web technologies with an editorial design style that supports both light and dark themes.

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
- **Default Theme**: Dark mode is enabled by default on `<html className="dark">` in layout.tsx
- **Font System**:
  - Headings: Playfair Display (serif, editorial feel)
  - Body: IBM Plex Sans (clean, professional)
- **Color Palette**:
  - Primary: Cyan → Teal → Emerald gradients
  - Dark background: `#050507` (near-black)
  - Light background: `#ffffff` (white)
  - Borders: `#18181b` (dark) / `#gray-200` (light)

### Key Design Patterns

**Dual Theme Classes**: All components use Tailwind's `dark:` prefix for theme switching
```tsx
className="bg-white dark:bg-[#050507] text-gray-900 dark:text-white"
```

**Smooth Transitions**: All color changes include `transition-colors duration-300`

**Gradient Accents**: Primary branding uses 3-color gradients
```tsx
"bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500"
```

**Editorial Grid Pattern**: Hero section has a subtle grid background (dark mode only)
```tsx
bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)]
```

## File Structure

```
app/
├── layout.tsx       # Root layout with dark mode class
├── page.tsx         # Main landing page (single-page app)
├── globals.css      # Tailwind imports & font loading
└── favicon.ico      # App icon
```

## Important Notes

**CSS Import Order**: In `globals.css`, Google Fonts import MUST come before `@import "tailwindcss"` to avoid parsing errors.

**Build Cache**: If you encounter CSS parsing errors, delete the `.next` folder and restart the dev server.

**Dark Mode Toggle**: To switch between light/dark default, modify the `className` on the `<html>` element in `app/layout.tsx`:
- Dark mode default: `<html lang="id" className="dark">`
- Light mode default: `<html lang="id">`

**Invoice Preview**: The hero section contains a detailed HTML invoice preview on the right side (desktop) or below (mobile). It uses a white background regardless of theme to simulate a real invoice document.
