import Image from "next/image";

import { SiteLink } from "@/components/navigation/site-link";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { visiblePromotions } from "@/data/promotions";

export function PromotionSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <section
      className={embedded ? undefined : "mx-auto max-w-6xl px-4 py-8 sm:px-6"}
      aria-labelledby="promotions-heading"
    >
      <div className="max-w-2xl">
        <h2 id="promotions-heading" className="font-serif text-3xl">
          Supplied promotions
        </h2>
        <div className="mt-3 h-0.5 w-12 bg-gold" />
        <p className="mt-4 leading-7 text-muted">
          These graphics were supplied for the project. No end dates were
          included, so the offers are not marked as currently running at the
          Kapalong branch.
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {visiblePromotions.map((promotion) => (
          <Reveal key={promotion.id}>
            <article className="overflow-hidden rounded-2xl border border-line bg-card">
              {promotion.image ? (
                <Image
                  src={promotion.image}
                  alt={promotion.imageAlt ?? ""}
                  width={1024}
                  height={1024}
                  className="aspect-[4/3] w-full bg-[#f3efe8] object-contain"
                />
              ) : null}
              <div className="p-5">
                <Badge>End date not provided</Badge>
                <h3 className="mt-3 font-serif text-2xl">{promotion.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {promotion.description}
                </p>
                {promotion.href && promotion.ctaLabel ? (
                  <Button asChild className="mt-4" variant="outline" size="sm">
                    <SiteLink href={promotion.href}>{promotion.ctaLabel}</SiteLink>
                  </Button>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
