import Image from "next/image";

import { SiteLink } from "@/components/navigation/site-link";

import { FacebookIcon } from "@/components/icons/facebook-icon";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer
      className="mt-auto border-t border-line bg-card"
      style={{ viewTransitionName: "site-footer" }}
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src={siteConfig.logo}
            alt="JS Gaisano logo"
            width={612}
            height={612}
            className="h-20 w-20 rounded-full border border-line bg-white object-contain"
          />
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
            {siteConfig.name}. {siteConfig.academicDisclaimer}
          </p>
        </div>
        <div>
          <h2 className="font-serif text-xl">Visit</h2>
          <div className="mt-3 h-0.5 w-10 bg-gold" />
          <address className="mt-4 text-sm leading-6 text-muted not-italic">
            {siteConfig.address.line}
            <br />
            {siteConfig.hours}
          </address>
        </div>
        <div>
          <h2 className="font-serif text-xl">Pages</h2>
          <div className="mt-3 h-0.5 w-10 bg-gold" />
          <ul className="mt-4 space-y-2 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <SiteLink href={item.href} className="text-brand-deep underline-offset-4 hover:underline">
                  {item.label}
                </SiteLink>
              </li>
            ))}
          </ul>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <span className="mt-1 block text-xs">
                Placeholder email, not a confirmed branch inbox.
              </span>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 text-foreground"
                href={siteConfig.facebook}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FacebookIcon />
                <span>JS Gaisano</span>
                <span className="sr-only"> on Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Separator />
      <p className="mx-auto max-w-6xl px-4 py-4 text-xs leading-5 text-muted sm:px-6">
        {siteConfig.academicDisclaimer}
      </p>
    </footer>
  );
}
