"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { SiteLink } from "@/components/navigation/site-link";

import { siteConfig } from "@/config/site";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card md:hidden"
        aria-label="Open menu"
      >
        <Menu aria-hidden="true" className="size-5" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-[#1c1917]/40" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed top-0 right-0 z-50 flex h-full w-[min(100%,20rem)] flex-col bg-card p-6 shadow-xl"
        >
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-serif text-2xl">Menu</Dialog.Title>
            <Dialog.Close
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line"
              aria-label="Close menu"
            >
              <X aria-hidden="true" className="size-5" />
            </Dialog.Close>
          </div>
          <nav className="mt-8" aria-label="Mobile">
            <ul className="flex flex-col gap-2">
              {siteConfig.nav.map((item) => {
                const active = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Dialog.Close asChild>
                      <SiteLink
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`flex min-h-11 items-center rounded-lg px-3 text-base ${
                          active
                            ? "bg-[#e7f6f2] font-medium text-brand-deep"
                            : "hover:bg-background"
                        }`}
                      >
                        {item.label}
                      </SiteLink>
                    </Dialog.Close>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
