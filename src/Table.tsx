import React from "react";

export const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="duma-table__table-wrapper">
    <table
      ref={ref}
      className={`duma-table__table ${className}`}
      {...props}
    />
  </div>
));
