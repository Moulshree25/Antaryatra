HEAD
# Antaryatra
Professional yoga & meditation platform with class bookings - Mobile-first, Next.js powered

🌟 Overview
Antaryatra (meaning "inner journey" in Sanskrit) is a professional yoga and meditation platform designed mobile-first for the primary yoga audience. Built with Next.js 14, TypeScript, and Tailwind CSS.

Key Features:

- Interactive concern-based recommendations
- Educational chakra explorer
- Minimal, actionable practice guides
- Real-time class booking system
- 200-hour Yoga Alliance teacher training

🏗️ Tech Stack
Frontend

- Next.js 14 - App Router with Server Components
- React 18 - Latest React features
- TypeScript - Type safety
- Tailwind CSS - Utility-first styling (local build)
- Framer Motion - Smooth animations

Backend

- Next.js API Routes - Serverless functions
- Vercel Functions - Edge runtime
- PostgreSQL - Database (planned)

Services

- Resend - Email notifications
- Google reCAPTCHA v3 - Form security
- Google Analytics 4 - User analytics

Why Next.js?

| Benefit | Impact |
| :--- | :--- |
| **SEO Optimized** | Server-side rendering for better rankings |
| **Performance** | Automatic code splitting & image optimization |
| **Mobile First** | Optimized bundle size for mobile networks |
| **Scalable** | Easy to add features as business grows |
| **Professional** | Production-ready, not a prototype |

🚀 Quick Start
Prerequisites
Node.js 18+

npm / yarn / pnpm

Installation
Bash
# Clone repository
git clone https://github.com/Moulshree25/Antaryatra.git
cd antaryatra

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local

# Run development server
npm run dev

📁 Project Structure



🎨 Design System

Color Palette

- Dark Theme Only - Chakra Gradient Background

- bg-dark: #1a0b1e;
- primary: #ec5b13;
- text-primary: #FAF9F7;

Typography

- Headings: Playfair Display (serif)
- Body: Public Sans (sans-serif)

Breakpoints

- Mobile: < 640px (default)
- Tablet: 640px - 1024px
- Desktop: 1024px+

📱 Mobile-First Features

- ✅ Hamburger menu (< 768px)
- ✅ 44px minimum tap targets
- ✅ Full-width CTAs on mobile
- ✅ Scroll snap carousel
- ✅ WebP images with lazy loading
- ✅ < 100KB initial bundle

🔄 Development Phases

- Phase 1: Foundation ✅ 

 -- Next.js 14 setup
 -- Mobile navigation
 -- Core features

- Phase 2: Booking System 🚧 

 -- Booking page
 -- API endpoints
 -- Email notifications

- Phase 3: Performance ⚡ 

 -- Image optimization
 -- Lighthouse 90+

- Phase 4: Security 🔒 

 -- reCAPTCHA v3
 -- Rate limiting

- Phase 5: SEO & Analytics 📈 

 -- Meta tags
 -- Google Analytics

- Phase 6: Deployment 🚀 

 -- Vercel deployment
 -- Custom domain


<div align="center">
Antaryatra with Arti 
-  Awaken Your Inner Energy
-  🧘‍♀️ Balance • 🌿 Heal • ✨ Transform
-  Made with 💚 for holistic wellness
</div>


 
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
128bec5 (Initial commit from Create Next App)
