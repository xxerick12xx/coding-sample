import * as React from "react";
import { cva } from "class-variance-authority";
import { type VariantProps } from "class-variance-authority";
import { cn } from "./../lib/utils";

const inputVariants = cva("", {
  variants: {
    variant: {
      default:
        "flex h-12 w-full rounded-sm border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      file: "mt-1 block w-full rounded-md border border-input text-sm text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/30",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & VariantProps<typeof inputVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <input
      className={cn(inputVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";
