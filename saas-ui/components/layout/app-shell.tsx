import * as React from "react";
import { cn } from "@/lib/utils";

interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  sidebar: React.ReactNode;
  topbar: React.ReactNode;
}

const AppShell = React.forwardRef<HTMLDivElement, AppShellProps>(
  ({ className, sidebar, topbar, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex h-dvh flex-col overflow-hidden", className)}
        {...props}
      >
        <div className="flex min-h-0 flex-1">
          <aside className="flex shrink-0 flex-col border-r border-border bg-card">
            {sidebar}
          </aside>
          <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
            <header className="shrink-0 border-b border-border bg-card">
              {topbar}
            </header>
            <main className="min-h-0 flex-1 overflow-auto">{children}</main>
          </div>
        </div>
      </div>
    );
  }
);
AppShell.displayName = "AppShell";

export { AppShell };
