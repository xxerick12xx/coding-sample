import * as React from "react";

const Root = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={`w-full caption-bottom text-sm ${className ? className : ""}`}
      {...props}
    />
  </div>
));
Root.displayName = "Table";

const Header = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={`[&_tr]:border-b ${className ? className : ""}`}
    {...props}
  />
));
Header.displayName = "Table.Header";

const Body = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={`[&_tr:last-child]:border-0 ${className ? className : ""}`}
    {...props}
  />
));
Body.displayName = "Table.Body";

const Footer = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={`border-t bg-muted/50 font-medium [&>tr]:last:border-b-0 ${
      className ? className : ""
    }`}
    {...props}
  />
));
Footer.displayName = "Table.Footer";

const Row = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${
      className ? className : ""
    }`}
    {...props}
  />
));
Row.displayName = "Table.Row";

const Head = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={`h-12 px-4 text-left align-middle font-bold [&:has([role=checkbox])]:pr-0 ${
      className ? className : ""
    }`}
    {...props}
  />
));
Head.displayName = "Table.Head";

const Data = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${
      className ? className : ""
    }`}
    {...props}
  />
));
Data.displayName = "Table.Data";

const Caption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={`mt-4 text-sm text-muted-foreground ${
      className ? className : ""
    }`}
    {...props}
  />
));
Caption.displayName = "Table.Caption";

export const Table = Object.assign(Root, {
  Body,
  Caption,
  Data,
  Footer,
  Head,
  Header,
  Row,
});
