import Image from "next/image";

import { FacebookIcon } from "@/components/icons/facebook-icon";
import { SiteLink } from "@/components/navigation/site-link";
import { siteConfig } from "@/config/site";

function FooterHeading({ children }: { children: string }) {
  return (
    <div>
      <h2 className="font-serif text-lg text-white">{children}</h2>
      <div className="mt-2 h-0.5 w-8 bg-gold" />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer
      className="mt-auto border-t border-white/10 bg-brand-deep/85 text-white"
      style={{ viewTransitionName: "site-footer" }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={siteConfig.logo}
              alt="JS Gaisano logo"
              width={612}
              height={612}
              className="h-16 w-16 rounded-full bg-white object-contain ring-2 ring-white/30"
            />
            <div className="leading-tight">
              <p className="font-serif text-xl">JS Gaisano</p>
              <p className="text-sm text-white/75">Kapalong</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/75">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <FooterHeading>Visit</FooterHeading>
          <address className="mt-4 text-sm leading-6 text-white/80 not-italic">
            {siteConfig.address.line}
          </address>
          <p className="mt-3 text-sm leading-6 text-white/80">{siteConfig.hours}</p>
        </div>

        <div>
          <FooterHeading>Pages</FooterHeading>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <SiteLink
                  href={item.href}
                  className="text-white/85 underline-offset-4 transition-colors hover:text-gold hover:underline"
                >
                  {item.label}
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Contact</FooterHeading>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li>
              <a className="hover:text-gold" href={`tel:${siteConfig.phoneTel}`}>
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-gold" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              <span className="mt-1 block text-xs leading-5 text-white/60">
                Placeholder email, not a confirmed branch inbox.
              </span>
            </li>
            <li>
              <a
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-white transition-colors hover:bg-white/15"
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

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs leading-5 text-white/65 sm:px-6">
          {siteConfig.academicDisclaimer}
        </p>
      </div>
    </footer>
  );
}
