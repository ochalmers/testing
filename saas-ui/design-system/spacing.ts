/**
 * Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96
 * Use 4px base grid for layout alignment.
 */
export const spacing = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  6: "24px",
  8: "32px",
  12: "48px",
  16: "64px",
  24: "96px",
} as const;

/** Tailwind spacing equivalents for utility use */
export const spacingTokens = {
  1: "1",   // 4px
  2: "2",   // 8px
  3: "3",   // 12px
  4: "4",   // 16px
  6: "6",   // 24px
  8: "8",   // 32px
  12: "12", // 48px
  16: "16", // 64px
  24: "24", // 96px
} as const;
