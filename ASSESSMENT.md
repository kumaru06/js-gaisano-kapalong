# Assessment checklist

This site is an academic concept for JS Gaisano Mall – Kapalong. It is not an official company website. A perfect score is not claimed here. The notes below map the build to the eight rubric areas.

## 1. Branding consistency

- Supplied JS Gaisano logo is used in the header, footer, and About page without redrawing or stretching it.
- Teal `#01A986`, lighter teal `#3FBDA5`, and gold `#F1B028` were sampled from that logo.
- Buttons use a darker step of the same teal, `#015C48`, so white text meets stronger contrast than the logo teal on white.
- The 50th anniversary cover and grand opening graphic are the supplied files.

## 2. Layout and organization

- Four routes: Home, About Us, Products/Services, Contact Us.
- Shared header, footer, and max-width grid.
- Catalog data is separate from the page components.

## 3. Visual design quality

- Serif headlines, sans body text, hairline borders, and a short gold rule.
- Supplied photography is shown whole on product and promotion cards.
- Motion is a short fade and turns off when reduced motion is requested.

## 4. Navigation and usability

- Desktop links and a mobile dialog menu.
- Active page state, skip link, and visible focus outlines.
- Catalog search, category filters, reset, empty state, Get Directions, and a validated inquiry form.

## 5. Content accuracy and completeness

Supplied and used:

- Address: Barangay Maniki, Kapalong, Davao del Norte, 8113
- Phone: +63 938 449 3893
- Hours: 8:00 AM – 6:00 PM, Monday to Sunday
- Facebook: https://web.facebook.com/JSGaisanoMall
- Company mission and vision from the supplied company screenshot
- Logo, anniversary cover, product photos, and the Kapalong grand opening graphic
- Map place ID `ChIJjRrHD6-x_jIRKnaejCtmfr4` for the Kapalong listing

Labeled limits:

- `example@email.com` is a placeholder, not a confirmed inbox, and it is excluded from structured data.
- Grocery and household categories are typical retail sections, not a verified Kapalong stock list.
- No prices or stock status are published. A sticker visible in one photo is not copied into a price field.
- Buy 1 Get 1 graphics are shown as supplied material. No end date was provided, so they are not described as a current branch offer.
- No founding year is calculated from the 50th anniversary artwork.
- The landline printed inside the opening graphic is not added as a second contact number.

## 6. Functionality of elements

- Navigation, catalog search, filters, reset, directions, map embed, map fallback, and form validation are implemented.
- The form’s success state says the inquiry was checked and was not emailed or saved.
- A honeypot field and a short in-memory rate limit are the spam controls.

## 7. Marketing effectiveness

- Home leads with the supplied anniversary cover, two calls to action, categories, promotions, and featured products.
- Copy stays with supplied facts: location, hours, and the kinds of products in the supplied photos.

## 8. Professionalism and presentation

- TypeScript, shared tokens, and editable data files.
- Unique titles, Open Graph metadata, sitemap, robots.txt, and a branded 404.
- README and deployment notes explain setup without including a real API key.

## Map status

The contact page embeds Google Maps for place ID `ChIJjRrHD6-x_jIRKnaejCtmfr4` and links Get Directions to that place. Confirm in a browser that the pin label is the Kapalong branch before treating the map requirement as fully checked. If `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is empty, the page says the Embed API key is not configured and still shows the keyless embed plus a working Maps link.
