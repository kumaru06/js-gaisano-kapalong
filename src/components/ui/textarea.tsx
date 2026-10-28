import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-lg border border-line bg-card px-3 py-3 text-base text-foreground placeholder:text-muted/80",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
