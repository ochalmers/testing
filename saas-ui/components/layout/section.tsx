import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Vertical padding size */
  spacing?: "sm" | "md" | "lg";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "md", ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "w-full",
          spacing === "sm" && "py-8",
          spacing === "md" && "py-12",
          spacing === "lg" && "py-16",
          className
        )}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

interface SectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

function SectionHeader({
  className,
  title,
  description,
  children,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn("mb-6 flex flex-col gap-1", className)}
      {...props}
    >
      {title && (
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      )}
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {children}
    </div>
  );
}

export { Section, SectionHeader };
