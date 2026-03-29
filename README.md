# Vogue & Verve | Premium Clothing Store

A modern, responsive clothing store built with React, Vite, and Tailwind CSS 4.

## Features
- Premium editorial design
- Product filtering by category
- Real-time shopping cart
- Smooth animations with Motion
- Responsive for all devices

## Deployment to Vercel

To deploy this project to Vercel, follow these steps:

1. **Push your code to GitHub/GitLab/Bitbucket.**
2. **Import your project into Vercel.**
3. **Configure Environment Variables:**
   - Go to your project settings in Vercel.
   - Add `GEMINI_API_KEY` (if you plan to use AI features).
   - Add `VITE_APP_URL` (optional, for self-referential links).
4. **Build Settings:**
   - Vercel should automatically detect Vite.
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. **Click Deploy.**

The `vercel.json` file is already included to handle SPA routing.
