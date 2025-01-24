import React from "react";

export const HeadingTag1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={`text-3xl font-extrabold lg:text-4xl ${className}`}
    {...props}
  />
));
HeadingTag1.displayName = "HeadingTag1";

export const HeadingTag5 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1 ref={ref} className={`text-lg font-bold ${className}`} {...props} />
));
HeadingTag5.displayName = "HeadingTag5";
