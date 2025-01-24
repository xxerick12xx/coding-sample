import * as React from "react";

type ButtonProps = {
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "icon" | "md";
};

const getVariantClass = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "primary":
      return "bg-primary text-primary-foreground shadow hover:bg-primary/90";

    case "secondary":
      return "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90";

    case "ghost":
      return "hover:bg-accent hover:text-accent-foreground";
  }
};

const getSizeClass = (variant: ButtonProps["size"]) => {
  switch (variant) {
    case "md":
      return "h-9 px-4 py-2";

    case "icon":
      return "h-9 w-9 p-1";
  }
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & ButtonProps
>(({ className, variant = "primary", size = "md", ...props }, ref) => {
  console.log({ variant, test: getVariantClass(variant) });
  return (
    <button
      className={`
          inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50
          ${getVariantClass(variant)}
          ${getSizeClass(size)}
          ${className ? className : ""}
          `}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";
