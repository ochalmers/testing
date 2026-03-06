"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboardIcon,
  PackageIcon,
  FileTextIcon,
  ImageIcon,
  PlugIcon,
  CreditCardIcon,
  SettingsIcon,
  PaletteIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AppShell } from "./app-shell";
import { PageHeader } from "./page-header";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboardIcon },
  { href: "/products", label: "Products", icon: PackageIcon },
  { href: "/requests", label: "Requests", icon: FileTextIcon },
  { href: "/assets", label: "Assets", icon: ImageIcon },
  { href: "/integrations", label: "Integrations", icon: PlugIcon },
  { href: "/credits", label: "Credits", icon: CreditCardIcon },
  { href: "/settings", label: "Settings", icon: SettingsIcon },
  { href: "/design-system", label: "Design System", icon: PaletteIcon },
];

interface DashboardShellProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
}

export function DashboardShell({
  children,
  title,
  description,
  breadcrumbs,
  primaryAction,
  secondaryAction,
}: DashboardShellProps) {
  const pathname = usePathname();

  const sidebar = (
    <nav className="flex w-56 flex-col gap-1 p-4">
      <div className="mb-4 px-3">
        <Link href="/" className="text-lg font-semibold">
          App
        </Link>
      </div>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <Icon className="size-4 shrink-0" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  const topbar = (
    <div className="flex items-center justify-between gap-4 px-6 py-4">
      {(title || breadcrumbs?.length) ? (
        <PageHeader
          title={title ?? "Page"}
          description={description}
          breadcrumbs={breadcrumbs}
          primaryAction={primaryAction}
          secondaryAction={secondaryAction}
        />
      ) : (
        <div className="h-9" />
      )}
    </div>
  );

  return (
    <AppShell sidebar={sidebar} topbar={topbar}>
      <div className="flex-1 p-6">{children}</div>
    </AppShell>
  );
}
