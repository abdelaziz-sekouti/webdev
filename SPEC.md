# DevWeb - Site Vitrine Specification

## Project Overview

- **Project name**: DevWeb
- **Type**: Lead generation website / Site Vitrine
- **Core functionality**: Showcase web development services and convert visitors into leads via WhatsApp + forms
- **Target users**: Small businesses in Morocco (Marrakech, Agadir, Casablanca) - Founder: Sekouti Abdelaziz

## Tech Stack

- React 19 + Vite
- Tailwind CSS
- React Router DOM 7
- Lucide React (icons)
- Formspree for forms (no backend)
- NO backend, NO Firebase, NO Supabase

## Language

All UI text in French
Tone: professional, persuasive, simple

---

## Pages Structure

### 1. HOME (`/`)
- Hero section
- Problem section
- Solution section
- Services preview (4 cards)
- Irresistible offer (free audit)
- Testimonials (3 fake testimonials)
- Final CTA

### 2. SERVICES (`/services`)
- Service cards with descriptions, benefits, CTAs
- Services: Création site web, Landing pages, SEO, Maintenance

### 3. PORTFOLIO (`/portfolio`)
- Projects from local JSON
- Filter system (frontend only)
- Project cards: image, title, description, tags

### 4. ABOUT (`/about`)
- Story section
- Mission section
- Skills section

### 5. CONTACT (`/contact`)
- Contact form (Formspree)
- Fields: Name, Email, Message
- Validation, success/error messages

---

## Components

1. **Navbar** - Sticky, responsive, dark mode toggle
2. **Footer** - Links, contact info, social
3. **Hero** - Title, subtitle, 2 CTAs
4. **ServiceCard** - Icon, title, description, CTA
5. **TestimonialCard** - Avatar, name, quote, rating
6. **PortfolioCard** - Image, title, description, tags
7. **ContactForm** - Name, email, message fields
8. **CTAButton** - Reusable CTA component
9. **WhatsAppButton** - Floating button (bottom right)
10. **ScrollToTop** - Button appears on scroll
11. **DarkModeToggle** - Theme switcher
12. **SectionHeading** - Consistent section titles

---

## Design System

### Colors (Tailwind)
- Primary: `blue-600` / `blue-700`
- Secondary: `slate-900` / `slate-800`
- Accent: `amber-500` / `amber-600`
- Background light: `white` / `gray-50`
- Background dark: `slate-900` / `slate-950`

### Typography
- Font family: Inter (Google Fonts)
- Headings: Bold, large
- Body: Regular, readable

### Spacing
- Section padding: `py-16` or `py-20`
- Container max-width: `max-w-6xl`
- Card padding: `p-6`

### Effects
- Shadows: `shadow-lg`, `shadow-xl`
- Hover: `hover:scale-105`, `hover:shadow-xl`
- Transitions: `duration-300`, `ease-in-out`

---

## Animations

- Fade-in on scroll (using IntersectionObserver or CSS)
- Smooth hover effects
- Page transitions

---

## SEO

- Meta title & description per page
- Semantic HTML (h1, h2, h3)
- Fast loading (Vite)

---

## WhatsApp Integration

- Floating button: bottom right
- Link: `https://wa.me/212612236660`
- Pre-filled message in French

---

## Data Files

- `/data/projects.json` - Portfolio projects

---

## Acceptance Criteria

1. All 5 pages work and are responsive
2. Dark mode toggle works
3. WhatsApp button opens correct link
4. Contact form submits to Formspree
5. Smooth animations present
6. All text in French
7. Clean, premium design