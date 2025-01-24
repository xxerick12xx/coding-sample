import * as React from "react";
import { cn } from "./../lib/utils";
import { Label, type LabelProps } from "./label";

const Root = React.forwardRef<
  HTMLFormElement,
  React.HTMLAttributes<HTMLFormElement>
>(({ className, ...props }, ref) => (
  <form ref={ref} className={cn("gap-y-4", className)} {...props} />
));
Root.displayName = "Form";

const Group = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 mb-8", className)}
    {...props}
  />
));
Group.displayName = "Form.Group";

const Item = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex-auto", className)} {...props} />
));
Item.displayName = "Form.Item";

const ErrorLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement> & LabelProps
>(({ ...props }, ref) => <Label ref={ref} variant="error" {...props} />);
ErrorLabel.displayName = "Form.ErrorLabel";

export const Form = Object.assign(Root, {
  ErrorLabel,
  Group,
  Item,
});
