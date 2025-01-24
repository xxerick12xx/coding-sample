import * as React from "react";
import { cn } from "./../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "",
        error: "text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type LabelProps = VariantProps<typeof labelVariants>;

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & LabelProps
>(({ className, variant, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      labelVariants({
        variant,
        className,
      })
    )}
    {...props}
  />
));
Label.displayName = "Label";
