import * as React from "react";
import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns */
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  /** Gap between items */
  gap?: 4 | 6 | 8;
  /** Responsive: cols at sm breakpoint */
  sm?: 1 | 2 | 3 | 4 | 6 | 12;
  /** Responsive: cols at md breakpoint */
  md?: 1 | 2 | 3 | 4 | 6 | 12;
  /** Responsive: cols at lg breakpoint */
  lg?: 1 | 2 | 3 | 4 | 6 | 12;
}

const colsMap = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  6: "grid-cols-6",
  12: "grid-cols-12",
} as const;

const smMap = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  6: "sm:grid-cols-6",
  12: "sm:grid-cols-12",
} as const;

const mdMap = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  6: "md:grid-cols-6",
  12: "md:grid-cols-12",
} as const;

const lgMap = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  6: "lg:grid-cols-6",
  12: "lg:grid-cols-12",
} as const;

const gapMap = { 4: "gap-4", 6: "gap-6", 8: "gap-8" } as const;

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      className,
      cols = 1,
      gap = 6,
      sm,
      md,
      lg,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          colsMap[cols],
          sm && smMap[sm],
          md && mdMap[md],
          lg && lgMap[lg],
          gapMap[gap],
          className
        )}
        {...props}
      />
    );
  }
);
Grid.displayName = "Grid";

export { Grid };
