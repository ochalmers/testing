import * as React from "react";
import { cn } from "@/lib/utils";

interface SidebarLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  sidebar: React.ReactNode;
  sidebarWidth?: "sm" | "md" | "lg";
}

const widthMap = {
  sm: "w-48",
  md: "w-56",
  lg: "w-64",
} as const;

const SidebarLayout = React.forwardRef<HTMLDivElement, SidebarLayoutProps>(
  (
    { className, sidebar, sidebarWidth = "md", children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("flex min-h-0 flex-1", className)}
        {...props}
      >
        <aside
          className={cn(
            "shrink-0 border-r border-border bg-muted/30",
            widthMap[sidebarWidth]
          )}
        >
          {sidebar}
        </aside>
        <main className="min-w-0 flex-1 overflow-auto">{children}</main>
      </div>
    );
  }
);
SidebarLayout.displayName = "SidebarLayout";

export { SidebarLayout };
