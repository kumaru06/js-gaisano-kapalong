const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "JS Gaisano Mall – Kapalong",
  shortName: "JS Gaisano",
  branch: "Kapalong",
  description:
    "Academic website concept for JS Gaisano Mall in Barangay Maniki, Kapalong, Davao del Norte. Browse supplied product highlights, store hours, and directions.",
  academicDisclaimer:
    "Academic project for ST 101. This is not an official JS Gaisano website and is not endorsed by the company.",
  url: siteUrl,
  email: "example@email.com",
  emailIsPlaceholder: true,
  phoneDisplay: "+63 938 449 3893",
  phoneTel: "+639384493893",
  hours: "8:00 AM – 6:00 PM, Monday to Sunday",
  openingHoursSchema: "Mo-Su 08:00-18:00",
  address: {
    street: "Barangay Maniki",
    locality: "Kapalong",
    region: "Davao del Norte",
    postalCode: "8113",
    country: "Philippines",
    countryCode: "PH",
    line: "Barangay Maniki, Kapalong, Davao del Norte, 8113",
  },
  placeId: "ChIJjRrHD6-x_jIRKnaejCtmfr4",
  mapsQuery: "JS Gaisano, Barangay Maniki, Kapalong, Davao del Norte 8113",
  facebook: "https://web.facebook.com/JSGaisanoMall",
  companySite: "https://jsgaisano.com/",
  logo: "/images/brand/js-gaisano-logo.png",
  cover: "/images/brand/50th-anniversary-cover.png",
  openingPhoto: "/images/store/kapalong-grand-opening.png",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products/Services" },
    { href: "/contact", label: "Contact Us" },
  ],
} as const;

export function directionsUrl() {
  const params = new URLSearchParams({
    api: "1",
    destination: siteConfig.mapsQuery,
    destination_place_id: siteConfig.placeId,
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

export function mapsFallbackUrl() {
  const params = new URLSearchParams({
    api: "1",
    query: siteConfig.mapsQuery,
    query_place_id: siteConfig.placeId,
  });
  return `https://www.google.com/maps/search/?${params.toString()}`;
}

export function mapEmbedUrl() {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (key) {
    const params = new URLSearchParams({
      key,
      q: `place_id:${siteConfig.placeId}`,
    });
    return {
      src: `https://www.google.com/maps/embed/v1/place?${params.toString()}`,
      usesEmbedApi: true,
    };
  }

  const params = new URLSearchParams({
    q: `place_id:${siteConfig.placeId}`,
    z: "16",
    output: "embed",
  });
  return {
    src: `https://maps.google.com/maps?${params.toString()}`,
    usesEmbedApi: false,
  };
}
