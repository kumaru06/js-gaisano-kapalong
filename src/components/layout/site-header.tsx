import Image from "next/image";

import { MainNav } from "@/components/navigation/main-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { SiteLink } from "@/components/navigation/site-link";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-30 border-b border-line bg-card"
      style={{ viewTransitionName: "site-header" }}
    >
      <p className="bg-brand-deep px-4 py-2 text-center text-xs text-white sm:text-sm">
        ST 101 academic project. Not an official JS Gaisano website.
      </p>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <SiteLink href="/" className="flex items-center gap-3">
          <Image
            src={siteConfig.logo}
            alt="JS Gaisano logo"
            width={612}
            height={612}
            priority
            className="h-16 w-16 rounded-full border border-line bg-white object-contain"
          />
          <span className="leading-tight">
            <span className="block font-serif text-lg text-brand-deep sm:text-xl">
              JS Gaisano
            </span>
            <span className="block text-sm text-muted">Kapalong</span>
          </span>
        </SiteLink>
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
}
