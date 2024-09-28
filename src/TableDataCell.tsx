import React from "react";

export const TableDataCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td ref={ref} className={`duma-table__data-cell ${className}`} {...props} />
));
