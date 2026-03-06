/**
 * Color tokens — semantic palette for consistent theming.
 * Prefer semantic tokens over raw palette values.
 */
export const colors = {
  // Semantic
  background: "var(--background)",
  foreground: "var(--foreground)",
  muted: "var(--muted)",
  "muted-foreground": "var(--muted-foreground)",
  border: "var(--border)",
  ring: "var(--ring)",
  input: "var(--input)",

  // Brand (single accent)
  brand: "var(--primary)",
  "brand-foreground": "var(--primary-foreground)",

  // UI states
  primary: "var(--primary)",
  "primary-foreground": "var(--primary-foreground)",
  secondary: "var(--secondary)",
  "secondary-foreground": "var(--secondary-foreground)",
  accent: "var(--accent)",
  "accent-foreground": "var(--accent-foreground)",
  destructive: "var(--destructive)",
  card: "var(--card)",
  "card-foreground": "var(--card-foreground)",
  popover: "var(--popover)",
  "popover-foreground": "var(--popover-foreground)",
} as const;
