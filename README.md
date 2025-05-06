# RydeEz Monorepo

This repository contains the full-stack codebase for RydeEz, a premium ride-hailing platform designed to compete with Uber and Lyft. Below is the initial structure and setup for the MVP, including the landing page and waitlist portal.

## Structure

- `apps/`
  - `landing/` (Next.js landing page & waitlist portal)
  - `admin/` (Admin dashboard - Next.js)
  - `mobile/` (React Native apps)
- `packages/`
  - `ui/` (Shared UI components)
  - `api/` (Node.js/Express backend)
- `README.md` (Project overview)

## Tech Stack
- Web: Next.js (TypeScript)
- Mobile: React Native
- Backend: Node.js + Express
- Database: PostgreSQL, Firebase (Realtime)
- Email: Mailchimp/SendGrid
- Payments: Stripe
- Animations: Framer Motion (web)
- Icons: Feather Icons

## Setup

### Landing Page & Waitlist Portal
1. `cd apps/landing`
2. `npm install`
3. `npm run dev`

### Backend API
1. `cd packages/api`
2. `npm install`
3. `npm run dev`

---

For more details, see the README files in each folder.
