# AGENTS.md - DevWeb Project Guidelines

## Project Overview

- **Type**: React 19 + Vite lead generation website (Site Vitrine)
- **Purpose**: Showcase web dev services for Moroccan businesses
- **Language**: French UI text
- **No backend** - Uses Formspree for forms

## Commands

```bash
# Development
npm run dev          # Start dev server (port 5173)

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint on entire project

# Note: No test framework is currently configured
```

## Tech Stack

- React 19 (JSX, no TypeScript)
- Vite 6
- Tailwind CSS 3
- React Router DOM 7
- Lucide React (icons)
- i18next / react-i18next (translations)
- Formspree (form submissions)

## Directory Structure

```
src/
├── components/       # Reusable UI components (Button, Card, etc.)
├── pages/            # Route-level page components
├── sections/         # Page sections (Hero, Features, etc.)
├── layouts/          # Layout wrappers (AppLayout)
├── hooks/            # Custom React hooks
├── i18n/             # i18next config + locales/
│   └── locales/      # Translation JSON files per language
├── data/             # JSON data files (projects.json)
├── utils/            # Utility functions
├── assets/           # Static assets
├── App.jsx           # Main router setup
├── main.jsx          # Entry point
└── index.css         # Global styles + Tailwind
```

## Code Style Guidelines

### File Naming
- Components: PascalCase `.jsx` (e.g., `CTAButton.jsx`)
- Utils/Hooks: camelCase `.js`
- Config files: camelCase `.js`

### Component Patterns

```jsx
// Default export, named function
const CTAButton = ({ children, to, primary = true, className = '' }) => {
  return (
    <Link to={to} className={...}>
      {children}
    </Link>
  );
};

export default CTAButton;
```

### Imports

```jsx
// React core
import React from 'react';  // Optional in React 19

// External libraries
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Internal - relative paths
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
```

### State Management
- Use `useState` for local component state
- Use `useEffect` for side effects (cleanup functions required)
- Use `useCallback`/`useMemo` sparingly for performance optimization

### Event Handling
```jsx
// Avoid inline arrows in render for complex handlers
const handleSubmit = async (e) => {
  e.preventDefault();
  // ...
};
<form onSubmit={handleSubmit}>...</form>
```

## Styling (Tailwind CSS)

### Color Palette
- Primary: `blue-600` / `blue-700`
- Secondary: `slate-900` / `slate-800`
- Accent: `amber-500` / `amber-600`
- Background: `white` / `gray-50` (light), `slate-900` / `slate-950` (dark)

### Spacing
- Section padding: `py-16` or `py-20`
- Container: `max-w-6xl mx-auto`
- Card padding: `p-6`

### Dark Mode
- Use `dark:` prefix for dark mode variants
- Toggle via `dark` class on `html` element
- Store preference in `localStorage` key: `devweb_theme`

### Animations
- Custom animations defined in `tailwind.config.js`
- Scroll animations: `.animate-on-scroll` class with IntersectionObserver
- Utility delays: `.delay-100` through `.delay-500`

## Error Handling

### Forms
- Client-side validation before submission
- Display errors inline with `text-red-500` + icon
- Handle loading states with `isLoading` state
- Show success/error feedback to users

### Async Operations
```jsx
const [status, setStatus] = useState('idle'); // idle | loading | success | error

try {
  const response = await fetch(url, options);
  if (response.ok) {
    setStatus('success');
  } else {
    setStatus('error');
  }
} catch (error) {
  setStatus('error');
}
```

## i18n Guidelines

- All user-facing text must use `useTranslation` hook
- Translation keys should be descriptive: `nav.accueil`, `hero.title`
- RTL support for Arabic via `document.documentElement.dir`
- Supported languages: fr, en, ar, es, it, nl, de, hi, pt
- Fallback language: `fr`

## Accessibility

- Use semantic HTML (`nav`, `main`, `section`, `footer`)
- Add `aria-label` to icon-only buttons
- Ensure keyboard navigation support
- Use proper heading hierarchy (h1 → h2 → h3)

## Design Patterns

### Components
- Keep components focused and single-purpose
- Use composition over prop drilling
- Default props for optional parameters

### Pages
- Pages compose sections/components
- No business logic in pages - delegate to components/hooks

### Hooks
- Custom hooks for reusable logic
- Handle cleanup in `useEffect` return functions
- Handle SSR safety (check `typeof window !== 'undefined'`)

## Important Notes

- No backend/database - all data in JSON files or external services
- Formspree for contact forms (replace `your-form-id` with actual ID)
- WhatsApp integration: `https://wa.me/212612236660`
- All UI text in French with professional tone
