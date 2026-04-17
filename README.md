# Amit Naik — Portfolio

A distinctive, editorial-style portfolio site built to land interviews. Dark mode, warm amber accent, serif display typography, animated metrics, and keyword-dense copy optimized for recruiter scans and search.

**Live:** https://amitnaik.xyz

---

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- Google Fonts: **Instrument Serif** (display), **Geist** (sans), **JetBrains Mono**

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open
open http://localhost:3000
```

## Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

### Deploy to Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Point your `amitnaik.xyz` domain to Vercel in the project settings. Done.

### Deploy to Netlify

```bash
npm run build
# Then drag the .next folder into Netlify, or connect your Git repo
```

---

## Customization Checklist

Everything you'd want to edit is in **`lib/data.ts`** — single source of truth.

### 1. Personal info
Open `lib/data.ts` and update the `personal` object:
- LinkedIn URL (I used a guess — replace with your real one)
- GitHub URL (currently empty — add if you have one)
- Tagline if you want a different positioning line

### 2. Replace the phone mockup with a real screenshot
The featured project section has a placeholder mock UI. To use your real GTR.Trade screenshot:

1. Drop the image in `/public/` (e.g. `/public/gtr-screenshot.png`)
2. Open `components/FeaturedProject.tsx`
3. Find the comment `{/* REPLACE THIS DIV with your actual screenshot: ... */}`
4. Replace the mock content below it with:
   ```tsx
   import Image from "next/image";
   // ...
   <Image
     src="/gtr-screenshot.png"
     alt="GTR.Trade mobile app"
     fill
     className="object-cover"
   />
   ```

### 3. Add your resume PDF
Drop your resume as `/public/resume.pdf`. The "Download CV" buttons already point to it.

### 4. Add OG image for link previews
Create a 1200×630 image (LinkedIn/WhatsApp/Slack preview) and save as `/public/og-image.png`. Tools like [og-image-generator](https://og-playground.vercel.app/) make this easy.

### 5. Update structured data
In `app/layout.tsx`, the JSON-LD block has your info for Google's knowledge panel. Update LinkedIn/GitHub/sameAs links as needed.

---

## File Structure

```
amitnaik-portfolio/
├── app/
│   ├── layout.tsx         # Root layout, fonts, SEO metadata, JSON-LD
│   ├── page.tsx           # Home page composition
│   └── globals.css        # Global styles, grain texture, scrollbar
├── components/
│   ├── Navigation.tsx     # Sticky pill nav (appears on scroll)
│   ├── Hero.tsx           # Big typography hero with metrics
│   ├── Marquee.tsx        # Horizontal scrolling tech keywords
│   ├── About.tsx          # Bio + keyword tags
│   ├── FeaturedProject.tsx # GTR.Trade case study + phone mockup
│   ├── Experience.tsx     # Collapsible job cards with projects
│   ├── Skills.tsx         # Terminal-styled skill grid
│   ├── Contact.tsx        # CTA + contact info + footer
│   ├── CountUp.tsx        # Animated number counter
│   └── Reveal.tsx         # Scroll-triggered fade-up
├── lib/
│   └── data.ts            # ALL CONTENT — edit here
└── public/
    ├── resume.pdf         # ← Add your resume
    └── og-image.png       # ← Add your OG image
```

---

## Design Notes

The site is deliberately restrained. Instrument Serif on the hero is the main flex — it's distinctive, currently trending in editorial design, and rare in developer portfolios. Warm amber accent (#F5A623) replaces the usual crypto-green or generic-tech-blue. Grain overlay and vignette add atmosphere without being busy.

The **first-glance hook** is the 3-metric strip at the bottom of the hero — it communicates impact before anyone scrolls. The marquee below reinforces keyword scanning for both humans and ATS tools.

All animations respect `prefers-reduced-motion`. Layout is responsive down to 360px. Lighthouse score should be 95+ out of the box.

---

## Performance

- Fonts loaded via `next/font` (no layout shift)
- Animations run on compositor (transform/opacity only)
- Images should be added via `next/image` for automatic optimization
- No client-side state heavier than scroll position

If you add images, always use `next/image` — it handles responsive sizing, lazy loading, and modern formats automatically.

---

## License

Your portfolio, your code. Use it however you want.
