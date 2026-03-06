import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Max width variant */
  size?: "default" | "narrow" | "wide";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full px-4 sm:px-6 lg:px-8",
          size === "default" && "max-w-[1200px]",
          size === "narrow" && "max-w-[720px]",
          size === "wide" && "max-w-[1400px]",
          className
        )}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export { Container };
