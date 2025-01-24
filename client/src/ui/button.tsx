import * as React from "react";

type ButtonProps = {
  className?: string;
  variant?: "primary" | "secondary";
};

const getVariantClass = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "primary":
      return "bg-primary text-primary-foreground shadow hover:bg-primary/90";

    case "secondary":
      return "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90";
  }
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & ButtonProps
>(({ className, variant = "primary", ...props }, ref) => {
  console.log({ variant, test: getVariantClass(variant) });
  return (
    <button
      className={`
          inline-flex items-center justify-center h-9 px-4 py-2 gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
          ${getVariantClass(variant)}
          ${className}
          `}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";
