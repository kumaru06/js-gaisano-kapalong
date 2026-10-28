import Image from "next/image";

import { SiteLink } from "@/components/navigation/site-link";
import { Button } from "@/components/ui/button";
import { directionsUrl, siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section>
      <Image
        src={siteConfig.cover}
        alt="JS Gaisano 50th anniversary artwork that reads A Legacy of Trust."
        width={1024}
        height={390}
        priority
        className="h-auto w-full"
      />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <p className="text-sm font-medium tracking-[0.16em] text-brand-deep uppercase">
          Barangay Maniki
        </p>
        <div className="mt-3 h-0.5 w-12 bg-gold" />
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-balance sm:text-5xl">
          JS Gaisano Mall, Kapalong
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
          A retail branch in Kapalong, Davao del Norte. This page gathers the
          supplied store details, product highlights, and a map so visitors can
          find the branch and see what the catalog includes.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <SiteLink href="/products">Browse the catalog</SiteLink>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={directionsUrl()} target="_blank" rel="noopener noreferrer">
              Get directions
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
