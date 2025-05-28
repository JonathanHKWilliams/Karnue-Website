# Karnue Website

This repository contains the codebase for Karnue's official website, a premium ride-hailing service designed to compete with Uber and Lyft. The website showcases Karnue's services, features, and provides a waitlist signup for interested users.

## Structure

- `apps/`
  - `landing/` (Next.js website with landing page & waitlist portal)
- `packages/` (Shared components and utilities)
- `public/` (Static assets)
- `README.md` (Project overview)

## Tech Stack
- Framework: React with Next.js (TypeScript)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: Feather Icons
- Deployment: Static site generation
- Performance: Optimized for SEO and Core Web Vitals

## Setup

### Development
1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Visit http://localhost:3000 (or the port shown in your terminal)

### Production Build
1. Generate a static build: `npm run build`
2. Export static files: `npm run export`
3. The static site will be available in the `out` directory

---

For more details, see the README files in each folder.
