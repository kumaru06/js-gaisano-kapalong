"use client";

import { usePathname } from "next/navigation";

import { SiteLink } from "@/components/navigation/site-link";

import { siteConfig } from "@/config/site";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block" aria-label="Primary">
      <ul className="flex items-center gap-1">
        {siteConfig.nav.map((item) => {
          const active = pathname === item.href;

          return (
            <li key={item.href}>
              <SiteLink
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex h-11 items-center rounded-full px-3 text-sm transition-colors duration-200 ${
                  active
                    ? "bg-[#e7f6f2] font-medium text-brand-deep"
                    : "text-foreground hover:bg-[#efeae2]"
                }`}
              >
                {item.label}
              </SiteLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
