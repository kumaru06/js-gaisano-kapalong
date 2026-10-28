import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-lg border border-line bg-card px-3 text-base text-foreground placeholder:text-muted/80",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
