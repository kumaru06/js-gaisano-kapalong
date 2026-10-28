# JS Gaisano Mall – Kapalong

Academic website concept for ST 101 – Business Applications. This is not an official JS Gaisano website and it is not endorsed by the company.

## Prerequisites

- Node.js 20 or newer. This project was set up with Node.js 24.
- npm 10 or newer.

## Install

```bash
npm install
```

Copy `.env.example` to `.env.local` if you want to set a site URL or a Google Maps Embed API key. The site runs without either value.

```bash
copy .env.example .env.local
```

## Environment

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical URL used in metadata, the sitemap, and robots.txt. Defaults to `http://localhost:3000`. |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | No | Switches the contact map to the Google Maps Embed API. Without it, the page uses a keyless Google Maps embed of the same Kapalong place ID. |

### Google Maps key

1. Open [Google Cloud Console](https://console.cloud.google.com/) and create or select a project.
2. Enable **Maps Embed API**. Billing must be enabled on the Cloud project. Google currently provides a monthly credit, but use past that credit can incur charges. Check the current pricing before you enable billing.
3. Create an API key.
4. Restrict the key to **Maps Embed API** only.
5. If the key is used in the browser, add an HTTP referrer restriction for your local and Vercel origins, for example `http://localhost:3000/*` and `https://your-project.vercel.app/*`.
6. Put the key in `.env.local` as `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`. Do not commit that file.

The map destination is the public Kapalong listing, place ID `ChIJjRrHD6-x_jIRKnaejCtmfr4`, together with the supplied address: Barangay Maniki, Kapalong, Davao del Norte, 8113. It is not the Tagum or Davao City branch. Change the address, place ID, or query in `src/config/site.ts`.

## Images and logo

Authorized files already live in:

- `public/images/brand/js-gaisano-logo.png`
- `public/images/brand/50th-anniversary-cover.png`
- `public/images/store/kapalong-grand-opening.png`
- `public/images/products/`
- `public/images/promotions/`

Replace a file in place if you receive a newer authorized asset. Keep the same filename, or update the path in `src/config/site.ts`, `src/data/products.ts`, or `src/data/promotions.ts`.

## Edit the catalog and contact details

- Business name, address, phone, hours, placeholder email, and Facebook: `src/config/site.ts`
- Categories: `src/data/categories.ts`
- Products: `src/data/products.ts`
- Promotions: `src/data/promotions.ts`

The email `example@email.com` is a placeholder. It is labeled on the site and is not included in structured data.

The inquiry form validates input and then discards it. It does not send email and it does not save a database record.

## Scripts

```bash
npm run dev
npm run lint
npm run test
npm run test:e2e
npm run build
```

`npm run test` runs Vitest. `npm run test:e2e` runs Playwright and starts the dev server. Install a browser once with:

```bash
npx playwright install chromium
```

Production:

```bash
npm run build
npm run start
```

Deployment steps are in [DEPLOYMENT.md](DEPLOYMENT.md). The assessment checklist is in [ASSESSMENT.md](ASSESSMENT.md).
