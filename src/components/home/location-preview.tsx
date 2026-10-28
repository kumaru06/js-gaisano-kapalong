import Image from "next/image";

import { SiteLink } from "@/components/navigation/site-link";
import { Button } from "@/components/ui/button";
import { directionsUrl, siteConfig } from "@/config/site";

export function LocationPreview() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:items-center" aria-labelledby="location-heading">
      <Image
        src={siteConfig.openingPhoto}
        alt="JS Kapalong grand opening graphic showing the store interior and staff."
        width={678}
        height={452}
        className="h-auto w-full rounded-2xl border border-line"
      />
      <div>
        <h2 id="location-heading" className="font-serif text-3xl">
          Find the Kapalong branch
        </h2>
        <div className="mt-3 h-0.5 w-12 bg-gold" />
        <p className="mt-4 leading-7 text-muted">
          The photo is the supplied grand opening graphic for JS Kapalong. The
          map and directions use the Kapalong place listing, not the Tagum or
          Davao City branches.
        </p>
        <dl className="mt-6 space-y-3 text-sm">
          <div>
            <dt className="font-medium">Address</dt>
            <dd className="text-muted">{siteConfig.address.line}</dd>
          </div>
          <div>
            <dt className="font-medium">Hours</dt>
            <dd className="text-muted">{siteConfig.hours}</dd>
          </div>
          <div>
            <dt className="font-medium">Phone</dt>
            <dd>
              <a className="text-brand-deep underline-offset-4 hover:underline" href={`tel:${siteConfig.phoneTel}`}>
                {siteConfig.phoneDisplay}
              </a>
            </dd>
          </div>
        </dl>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <SiteLink href="/contact">Contact and map</SiteLink>
          </Button>
          <Button asChild variant="outline">
            <a href={directionsUrl()} target="_blank" rel="noopener noreferrer">
              Get directions
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
