import type { Metadata } from "next";
import Image from "next/image";

import { PageTransition } from "@/components/motion/page-transition";
import { SiteLink } from "@/components/navigation/site-link";

import { directionsUrl, siteConfig } from "@/config/site";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About this academic website concept for JS Gaisano Mall in Kapalong, including the supplied company mission, vision, and grand opening photo.",
};

export default function AboutPage() {
  return (
    <PageTransition>
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-sm font-medium tracking-[0.16em] text-brand-deep uppercase">
        About
      </p>
      <div className="mt-3 h-0.5 w-12 bg-gold" />
      <h1 className="mt-4 max-w-3xl font-serif text-4xl sm:text-5xl">
        {siteConfig.name}
      </h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-4 leading-7 text-muted">
          <p>
            JS Gaisano publicly describes itself as a local wholesale and retail
            company serving Filipino families and businesses. That description
            comes from the company site and is separate from facts that were
            supplied specifically for the Kapalong branch.
          </p>
          <p>
            <a
              className="text-brand-deep underline-offset-4 hover:underline"
              href={siteConfig.companySite}
              target="_blank"
              rel="noopener noreferrer"
            >
              jsgaisano.com
            </a>
          </p>
          <p>
            This website was made for ST 101 – Business Applications. It shows
            how a branch site can present a location, store hours, a product
            catalog, and a way to send an inquiry. It is a class project, not
            the company&apos;s official website.
          </p>
          <p>
            The catalog highlights snacks, sports equipment, and apparel from
            photos supplied for the project. Grocery and household categories
            are included as typical retail sections, not as a verified Kapalong
            inventory.
          </p>
        </div>
        <Image
          src={siteConfig.logo}
          alt="JS Gaisano logo"
          width={612}
          height={612}
          className="mx-auto aspect-square h-auto w-full max-w-xs rounded-full border border-line bg-white object-contain"
        />
      </div>

      <section className="mt-14" aria-labelledby="statements-heading">
        <h2 id="statements-heading" className="font-serif text-3xl">
          Company mission and vision
        </h2>
        <div className="mt-3 h-0.5 w-12 bg-gold" />
        <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
          Supplied from JS Gaisano company materials. These are company
          statements, not a policy written only for the Kapalong branch.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-line bg-card p-6">
            <p className="text-sm font-medium tracking-[0.14em] text-brand-deep uppercase">
              Mission
            </p>
            <div className="mt-3 h-0.5 w-10 bg-gold" />
            <h3 className="mt-4 font-serif text-2xl leading-snug">
              To serve our customers, partners, employees, and communities well.
            </h3>
            <p className="mt-4 text-sm leading-6 text-muted">
              We aim to give customers good products and helpful service,
              provide fair returns to our stockholders, and help our employees
              grow in their work and careers.
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              We also serve our communities responsibly through honest work,
              teamwork, loyalty, and people-focused management.
            </p>
          </article>
          <article className="rounded-2xl border border-line bg-card p-6">
            <p className="text-sm font-medium tracking-[0.14em] text-brand-deep uppercase">
              Vision
            </p>
            <div className="mt-3 h-0.5 w-10 bg-gold" />
            <h3 className="mt-4 font-serif text-2xl leading-snug">
              To be a trusted business that helps improve everyday life.
            </h3>
            <p className="mt-4 text-sm leading-6 text-muted">
              We aim to meet the needs of our customers and stockholders by
              offering products and services that can compete with the best.
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              With committed people working as one team, we strive to improve
              lives, follow strong moral principles, and give glory to God.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-14" aria-labelledby="opening-heading">
        <h2 id="opening-heading" className="font-serif text-3xl">
          Kapalong grand opening
        </h2>
        <div className="mt-3 h-0.5 w-12 bg-gold" />
        <p className="mt-4 max-w-2xl leading-7 text-muted">
          This graphic was supplied as the branch opening photo. An opening
          date was not included, so none is stated here.
        </p>
        <Image
          src={siteConfig.openingPhoto}
          alt="JS Kapalong grand opening graphic showing the store interior and staff."
          width={678}
          height={452}
          className="mt-6 h-auto w-full rounded-2xl border border-line"
        />
      </section>

      <section className="mt-14" aria-labelledby="catalog-heading">
        <h2 id="catalog-heading" className="font-serif text-3xl">
          What the catalog covers
        </h2>
        <div className="mt-3 h-0.5 w-12 bg-gold" />
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {categories.map((category) => (
            <li key={category.id} className="rounded-2xl border border-line bg-card p-5">
              <h3 className="font-serif text-xl">{category.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{category.description}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <SiteLink className="text-brand-deep underline-offset-4 hover:underline" href="/products">
            Browse the catalog
          </SiteLink>
          <span className="mx-2 text-muted">·</span>
          <a
            className="text-brand-deep underline-offset-4 hover:underline"
            href={directionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Kapalong in Google Maps
          </a>
        </p>
      </section>
    </div>
    </PageTransition>
  );
}
