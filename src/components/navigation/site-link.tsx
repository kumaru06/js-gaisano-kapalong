"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, type ComponentProps } from "react";

import { navDirection } from "@/lib/navigation";

type SiteLinkProps = ComponentProps<typeof Link>;

export const SiteLink = forwardRef<HTMLAnchorElement, SiteLinkProps>(function SiteLink(
  { href, ...props },
  ref,
) {
  const pathname = usePathname();
  const target = typeof href === "string" ? href : (href.pathname ?? "/");
  const direction = navDirection(pathname, target);

  return (
    <Link
      ref={ref}
      href={href}
      transitionTypes={direction ? [direction] : undefined}
      {...props}
    />
  );
});
