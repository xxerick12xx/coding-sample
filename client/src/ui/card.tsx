import * as React from "react";

const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded border border-muted bg-card text-card-foreground shadow-sm ${
      className ? className : ""
    }`}
    {...props}
  />
));
Root.displayName = "Card";

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 p-6 ${className ? className : ""}`}
    {...props}
  />
));
Header.displayName = "Card.Header";

const Title = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`font-semibold leading-none tracking-tight ${
      className ? className : ""
    }`}
    {...props}
  />
));
Title.displayName = "Card.Title";

const Description = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`text-sm text-muted-foreground ${className ? className : ""}`}
    {...props}
  />
));
Description.displayName = "Card.Description";

const Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6  ${className ? className : ""}`} {...props} />
));
Content.displayName = "Card.Content";

const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex items-center p-6 pt-0 ${className ? className : ""}`}
    {...props}
  />
));
Footer.displayName = "Card.Footer";

export const Card = Object.assign(Root, {
  Title,
  Description,
  Content,
  Footer,
  Header,
});
