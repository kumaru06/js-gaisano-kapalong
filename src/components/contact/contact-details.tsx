import { FacebookIcon } from "@/components/icons/facebook-icon";
import { Button } from "@/components/ui/button";
import { directionsUrl, siteConfig } from "@/config/site";

export function ContactDetails() {
  return (
    <div>
      <h2 className="font-serif text-3xl">{siteConfig.name}</h2>
      <div className="mt-3 h-0.5 w-12 bg-gold" />
      <dl className="mt-6 space-y-4 text-sm leading-6">
        <div>
          <dt className="font-medium">Address</dt>
          <dd className="text-muted">{siteConfig.address.line}</dd>
        </div>
        <div>
          <dt className="font-medium">Phone</dt>
          <dd>
            <a className="text-brand-deep underline-offset-4 hover:underline" href={`tel:${siteConfig.phoneTel}`}>
              {siteConfig.phoneDisplay}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-medium">Email</dt>
          <dd>
            <a className="text-brand-deep underline-offset-4 hover:underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <span className="mt-1 block text-muted">
              Placeholder address for this academic project. Not a confirmed branch inbox.
            </span>
          </dd>
        </div>
        <div>
          <dt className="font-medium">Hours</dt>
          <dd className="text-muted">{siteConfig.hours}</dd>
        </div>
        <div>
          <dt className="font-medium">Facebook</dt>
          <dd>
            <a
              className="inline-flex items-center gap-2 text-brand-deep underline-offset-4 hover:underline"
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
              <span>JS Gaisano</span>
              <span className="sr-only"> on Facebook</span>
            </a>
          </dd>
        </div>
      </dl>
      <Button asChild className="mt-6">
        <a href={directionsUrl()} target="_blank" rel="noopener noreferrer">
          Get Directions
        </a>
      </Button>
    </div>
  );
}
