import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider",
  {
    variants: {
      variant: {
        flame: "bg-flame-50 text-flame-600",
        navy: "bg-navy-900/5 text-navy-900",
        light: "bg-white/15 text-white backdrop-blur-sm",
      },
    },
    defaultVariants: { variant: "navy" },
  }
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
