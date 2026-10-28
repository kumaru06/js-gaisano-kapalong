import { mapEmbedUrl, mapsFallbackUrl } from "@/config/site";

export function StoreMap() {
  const map = mapEmbedUrl();

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-line bg-card">
        <div className="aspect-[4/3] w-full md:aspect-video">
          <iframe
            title="Interactive map of JS Gaisano in Barangay Maniki, Kapalong, Davao del Norte"
            src={map.src}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
            allowFullScreen
          />
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">
        {map.usesEmbedApi
          ? "Map loaded with the Google Maps Embed API for the Kapalong place listing."
          : "Map loaded with a Google Maps embed for the Kapalong place listing. A Maps Embed API key is not configured."}
      </p>
      <p className="mt-2 text-sm">
        <a
          href={mapsFallbackUrl()}
          className="text-brand-deep underline-offset-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open this location in Google Maps
        </a>
      </p>
    </div>
  );
}
