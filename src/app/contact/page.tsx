import type { Metadata } from "next";

import { ContactDetails } from "@/components/contact/contact-details";
import { PageTransition } from "@/components/motion/page-transition";
import { ContactForm } from "@/components/contact/contact-form";
import { StoreMap } from "@/components/contact/store-map";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Address, phone, hours, and Google Map for JS Gaisano Mall in Barangay Maniki, Kapalong, plus a demonstration inquiry form.",
};

export default function ContactPage() {
  return (
    <PageTransition>
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <p className="text-sm font-medium tracking-[0.16em] text-brand-deep uppercase">
        Contact
      </p>
      <div className="mt-3 h-0.5 w-12 bg-gold" />
      <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Contact us</h1>
      <p className="mt-4 max-w-2xl leading-7 text-muted">
        Details below were supplied for the Kapalong branch. The map is aimed
        at that listing.
      </p>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <ContactDetails />
        <div className="rounded-2xl border border-line bg-card p-5 sm:p-6">
          <h2 className="font-serif text-2xl">Inquiry form</h2>
          <div className="mt-5">
            <ContactForm />
          </div>
        </div>
      </div>
      <section className="mt-12" aria-labelledby="map-heading">
        <h2 id="map-heading" className="font-serif text-3xl">
          Map
        </h2>
        <div className="mt-3 h-0.5 w-12 bg-gold" />
        <p className="mt-4 text-muted">{siteConfig.address.line}</p>
        <div className="mt-5">
          <StoreMap />
        </div>
      </section>
    </div>
    </PageTransition>
  );
}
