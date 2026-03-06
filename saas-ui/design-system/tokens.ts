/**
 * Unified design tokens — single import for the app.
 */
import { colors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { radius } from "./radius";
import { shadows } from "./shadows";

export const tokens = {
  colors,
  spacing,
  typography,
  radius,
  shadows,
} as const;

export type Tokens = typeof tokens;
