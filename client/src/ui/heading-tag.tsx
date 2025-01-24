import React from "react";

export const HeadingTag1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={`text-3xl font-extrabold lg:text-4xl ${
      className ? className : ""
    }`}
    {...props}
  />
));
HeadingTag1.displayName = "HeadingTag1";

export const HeadingTag3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={`text-xl font-bold border-b-2 border-muted mb-4 ${
      className ? className : ""
    }`}
    {...props}
  />
));
HeadingTag3.displayName = "HeadingTag3";

export const HeadingTag5 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={`text-lg font-bold ${className ? className : ""}`}
    {...props}
  />
));
HeadingTag5.displayName = "HeadingTag5";
