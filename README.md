# Vishwakarma Furniture — Website

A full interactive website for **Vishwakarma Furniture** (विश्वकर्मा फर्नीचर), Banshipur, Kahalgaon, Bhagalpur, Bihar. Built with **React 18 + TypeScript + Vite + Tailwind CSS**.

## What's inside

- **3D "VF" carved-wood monogram** — used as an animated preloader and again as a hero centerpiece (pure CSS 3D, no libraries).
- **Sections:** Hero, About the workshop, Product categories, Craft process (timber → polish), Services, Google/Instagram-style Reviews, Contact (with embedded map), and a Query/Feedback form.
- **Interactions:** scroll-reveal animations, 3D tilt on product cards, parallax hero background, sticky navbar, floating WhatsApp / Call buttons, mobile menu.
- **No prices anywhere**, per the brief — every product card links to the enquiry form instead.
- Real shop details wired in: phone `9504501234`, address, GSTIN, Instagram handle, and a Google Maps embed pointed at the shop.

## Run it locally

```bash
npm install
npm run dev       # starts a local dev server (usually http://localhost:5173)
```

## Build for production

```bash
npm run build      # outputs a static site into /dist
npm run preview    # preview the production build locally
```

The `/dist` folder after building is a plain static site — upload it to any host (Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Where to edit things

- **All shop info (phone, address, GST, Instagram, hours, product text, reviews, services)** lives in one place: `src/data/content.ts`. Change it there and it updates everywhere.
- **Images** are in `public/images/` — swap in new photos any time, keep the same filenames or update the paths in `content.ts`.
- **Colors, fonts, and the wood-carving effects** are defined in `tailwind.config.js` and `src/index.css`.
- Each section of the page is its own component in `src/components/` (`Hero.tsx`, `Products.tsx`, `Contact.tsx`, etc.) so you can reorder or edit sections independently in `src/App.tsx`.

## Connecting the enquiry form to something real

Right now the "Send Message" button just shows an on-screen confirmation, and "Send via WhatsApp" opens a pre-filled WhatsApp chat to `9504501234`. To also receive form submissions by email or into a spreadsheet, connect `src/components/FeedbackForm.tsx`'s `handleSubmit` to a form backend such as Formspree, Google Sheets (via Apps Script), or your own API.
