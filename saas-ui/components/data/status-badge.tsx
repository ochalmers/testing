import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type StatusVariant = "default" | "success" | "warning" | "error" | "info";

const statusVariants: Record<
  StatusVariant,
  { variant: "default" | "secondary" | "destructive" | "outline"; className?: string }
> = {
  default: { variant: "secondary" },
  success: { variant: "secondary", className: "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400" },
  warning: { variant: "secondary", className: "border-amber-500/50 bg-amber-500/10 text-amber-700 dark:text-amber-400" },
  error: { variant: "destructive" },
  info: { variant: "secondary", className: "border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-400" },
};

interface StatusBadgeProps extends React.ComponentProps<typeof Badge> {
  status: StatusVariant;
}

const StatusBadge = React.forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({ className, status, ...props }, ref) => {
    const config = statusVariants[status];
    return (
      <Badge
        ref={ref}
        variant={config.variant}
        className={cn(config.className, className)}
        {...props}
      />
    );
  }
);
StatusBadge.displayName = "StatusBadge";

export { StatusBadge, type StatusVariant };
