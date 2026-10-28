import { PageTransition } from "@/components/motion/page-transition";
import { SiteLink } from "@/components/navigation/site-link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PageTransition>
    <div className="mx-auto flex max-w-xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="text-sm font-medium tracking-[0.16em] text-brand-deep uppercase">
        404
      </p>
      <div className="mt-3 h-0.5 w-12 bg-gold" />
      <h1 className="mt-4 font-serif text-4xl">This page is not on the site</h1>
      <p className="mt-4 leading-7 text-muted">
        The link may be out of date. You can return home or open the product
        catalog.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <SiteLink href="/">Back to home</SiteLink>
        </Button>
        <Button asChild variant="outline">
          <SiteLink href="/products">Browse the catalog</SiteLink>
        </Button>
      </div>
    </div>
    </PageTransition>
  );
}
