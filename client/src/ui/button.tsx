import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        sidebar:
          "w-full overflow-hidden justify-start hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        footer_link:
          "text-footer-text text-xs underline-offset-4 hover:underline mb-1",
        career_link: "text-accent-foreground text-xl text-wrap text-left",
      },
      size: {
        md: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-sm px-8",
        icon: "h-9 w-9 p-1",
        footer: "justify-start p-0 h-auto",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & ButtonProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";
