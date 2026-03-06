/**
 * Typography scale:
 * - Page Title
 * - Section Title
 * - Subheading
 * - Body
 * - Caption
 * - Label
 */
export const typography = {
  "page-title": {
    fontSize: "2rem",
    lineHeight: "1.25",
    fontWeight: "600",
    letterSpacing: "-0.025em",
  },
  "section-title": {
    fontSize: "1.5rem",
    lineHeight: "1.3",
    fontWeight: "600",
    letterSpacing: "-0.02em",
  },
  subheading: {
    fontSize: "1.125rem",
    lineHeight: "1.4",
    fontWeight: "500",
  },
  body: {
    fontSize: "1rem",
    lineHeight: "1.5",
    fontWeight: "400",
  },
  caption: {
    fontSize: "0.875rem",
    lineHeight: "1.4",
    fontWeight: "400",
    opacity: "0.8",
  },
  label: {
    fontSize: "0.75rem",
    lineHeight: "1",
    fontWeight: "500",
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
  },
} as const;

/** Tailwind class names for each type level */
export const typographyClasses = {
  "page-title": "text-2xl font-semibold tracking-tight",
  "section-title": "text-xl font-semibold tracking-tight",
  subheading: "text-lg font-medium",
  body: "text-base",
  caption: "text-sm text-muted-foreground",
  label: "text-xs font-medium uppercase tracking-wider",
} as const;
