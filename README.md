# Teravex Contracting & Services W.L.L — Website

A frontend-only marketing site built with **Next.js 16 + TypeScript + Tailwind CSS 4**.
Every page is pre-rendered to static HTML, so it loads fast and can be hosted anywhere.

Full requirement: [REQUIREMENTS.md](REQUIREMENTS.md)

## Pages (5)

| Page | URL | Includes |
|---|---|---|
| Home | `/` | Hero, stats, about, 8 services (popup with roles), roles ticker, process, nationalities, clients, quick enquiry |
| About Us | `/about` | Who we are, vision & mission, Qatar compliance & licensing, Why Choose Teravex, nationalities, clients |
| Services | `/services` | Searchable job directory with sector filter + a detailed section for each of the 8 services (`/services#oil-gas` etc.) |
| Request Manpower | `/request-manpower` | Full manpower order form (all fields from the requirement) |
| Contact | `/contact` | Office, phone, WhatsApp, email, map, contact form, social links |

The original 15-page sitemap is merged into these 5: the 8 service pages became sections of `/services`,
and Workforce/Nationalities + Clients & Partners are sections on Home and About.

## Commands

```bash
npm install          # first time only
npm run dev          # local development → http://localhost:3000
npm run build        # production build → static site in /out
npm start            # preview the built /out folder locally
```

## Deploy

After `npm run build`, upload the **contents of `out/`** to any static host
(cPanel/public_html, Netlify, Vercel, Cloudflare Pages, S3, etc.). No Node.js server needed.

> Building on Windows: a `postbuild` script ([scripts/fix-export-segments.mjs](scripts/fix-export-segments.mjs))
> fixes a Next.js Windows path bug in the exported prefetch files. It runs automatically and does nothing on macOS/Linux.

## Forms (no backend)

All three forms validate in the browser, then let the visitor send the filled-in details to the company
via **WhatsApp** or **email** in one tap. To receive submissions automatically later, connect a form
service (e.g. Formspree / Web3Forms) or an API in [src/components/forms/](src/components/forms/).

## What to update before going live

All company details live in **one file**: [src/lib/site.ts](src/lib/site.ts)

- [ ] Phone & WhatsApp number (currently `+974 XXXX XXXX` placeholder)
- [ ] Office address (building / street / zone) and map location
- [ ] Facebook, Instagram, LinkedIn, Telegram links (currently `#`)
- [ ] Client logos — replace the monogram tiles in [src/data/company.ts](src/data/company.ts) / [src/components/sections/Clients.tsx](src/components/sections/Clients.tsx)
- [ ] Confirm partner name spelling (QatarEnergy, etc.)
- [ ] Confirm role lists for Oil & Gas, Security, Cleaning and Landscaping in [src/data/services.ts](src/data/services.ts)

## Project structure

```
src/
  app/                 # pages (App Router) + layout, sitemap, robots, 404
  components/
    layout/            # Header (mega menu + mobile drawer), Footer, floating WhatsApp
    home/              # home-page sections
    sections/          # sections shared between pages
    services/          # job directory + service detail
    forms/             # manpower, contact & quick enquiry forms
    ui/                # buttons, logo, icons, counter, page hero …
  data/                # services, roles, nationalities, clients, stats
  lib/                 # site config + form helpers
public/flags/          # country flag SVGs (flag-icons, MIT)
```
