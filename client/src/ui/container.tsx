import * as React from "react";

export const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={`container mx-auto px-4 md:px-6 lg:px-12 max-w-7xl ${
      className ? className : ""
    }`}
    {...props}
  />
));
