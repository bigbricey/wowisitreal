# Wow Is It Real: High-Ticket Funnel Hub

This is the 2026 rebirth of `wowisitreal.com`, rebuilt with Next.js 16, Tailwind CSS v4, and a high-performance scientific aesthetic.

## 🚀 Getting Started

1. **Clone & Install:**
   ```bash
   npm install
   ```

2. **Environment Setup:**
   Create a `.env.local` file and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Run Local Dev:**
   ```bash
   npm run dev
   ```

## 🛠️ Customization Guide

### 1. Swapping Affiliate Links
All affiliate links for the "Oxygen Therapy" protocol are located in:
`app/protocols/oxygen-therapy/page.tsx`

Update the `chambers` array or the "Check Price" buttons with your unique partner URLs.

### 2. Updating the Protocol Content
To add new protocols, create a new directory in `app/protocols/` and follow the `page.tsx` pattern established in the Oxygen Therapy folder.

### 3. Design System
Styling is managed via **Tailwind CSS v4** variables in `app/globals.css`.
- **Primary Navy:** `--primary-navy`
- **Electric Blue:** `--electric-blue`
- **Scientific Silver:** `--scientific-silver`

## 📦 Deployment

The project is pre-configured for **Netlify**. 
- Build Command: `npm run build`
- Publish Directory: `.next`
- Plugin: `@netlify/plugin-nextjs` (enabled in `netlify.toml`)

When you push to the `main` branch, Netlify will automatically trigger a production deploy.

## ✅ Quality Standards
- **SEO:** Built with semantic HTML and optimized meta tags.
- **Performance:** Next.js static generation ensures lightning-fast load times.
- **Accessibility:** High-contrast scientific palette and ARIA-compliant components.
