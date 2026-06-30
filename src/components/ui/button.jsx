import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-flame-500 text-white shadow-flame hover:bg-flame-600 hover:-translate-y-0.5 active:translate-y-0",
        navy:
          "bg-navy-900 text-white hover:bg-navy-800 hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border-2 border-navy-900/15 bg-transparent text-navy-900 hover:border-navy-900/40 hover:bg-navy-900/[0.03]",
        ghost: "bg-transparent text-navy-900 hover:bg-navy-900/5",
        light:
          "bg-white text-navy-900 hover:bg-white/90 hover:-translate-y-0.5 active:translate-y-0",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
