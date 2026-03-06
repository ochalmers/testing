import * as React from "react";
import { cn } from "@/lib/utils";

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Gap between children (spacing scale: 1–24) */
  gap?: 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24;
  /** Horizontal alignment */
  align?: "start" | "center" | "end" | "stretch";
  /** Vertical alignment (for row direction) */
  justify?: "start" | "center" | "end" | "between";
  /** Direction */
  direction?: "row" | "column";
}

const gapMap = {
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  6: "gap-6",
  8: "gap-8",
  12: "gap-12",
  16: "gap-16",
  24: "gap-24",
} as const;

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

const justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
} as const;

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      className,
      gap = 4,
      align = "stretch",
      justify = "start",
      direction = "column",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          direction === "column" ? "flex-col" : "flex-row",
          gapMap[gap],
          alignMap[align],
          justifyMap[justify],
          className
        )}
        {...props}
      />
    );
  }
);
Stack.displayName = "Stack";

export { Stack };
