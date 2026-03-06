# UI Design Rules — Source of Truth

Non-negotiable rules for the design system. All components and pages must follow these.

---

## Spacing Grid

- **Base unit**: 4px
- **Scale**: 4, 8, 12, 16, 24, 32, 48, 64, 96
- All padding, margins, and gaps must use values from this scale
- Tailwind: `p-1` (4px), `p-2` (8px), `p-3` (12px), `p-4` (16px), `p-6` (24px), `p-8` (32px), `p-12` (48px), `p-16` (64px), `p-24` (96px)

---

## Typography Rules

| Level        | Use for              | Classes                         |
|-------------|----------------------|---------------------------------|
| Page Title  | Main page headings   | `text-2xl font-semibold`        |
| Section Title | Section headings   | `text-xl font-semibold`         |
| Subheading  | Card titles, subsections | `text-lg font-medium`      |
| Body        | Paragraphs, content  | `text-base`                     |
| Caption     | Helper text, meta    | `text-sm text-muted-foreground` |
| Label       | Form labels, badges  | `text-xs font-medium uppercase tracking-wider` |

- Prefer semantic HTML: `<h1>`, `<h2>`, etc.
- Maximum line length: ~65ch for body text

---

## Component Rules

1. **className + forwardRef**: All components must accept `className` and use `forwardRef` where applicable
2. **Focus-visible**: Use `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` for interactive elements
3. **Disabled state**: `disabled:opacity-50 disabled:pointer-events-none`
4. **Error state**: Use `aria-invalid` and `border-destructive` for form fields
5. **Shadcn/ui**: Use shadcn primitives where possible; compose, don't replace
6. **Accessibility**: All interactive elements must be keyboard accessible

---

## Design Principles

- **Premium, minimal, structured** — Linear / Stripe / Vercel level
- **No glassmorphism** — Avoid backdrop-blur and frosted effects
- **No heavy gradients** — Use flat or very subtle gradients only
- **Single brand accent** — Use `--primary` / `primary` for CTAs and emphasis
- **Semantic tokens** — Prefer `background`, `foreground`, `muted`, `border`, `ring` over raw colors

---

## Layout Rules

- **Container**: max-width 1200px, centered, responsive padding (16px mobile, 24px tablet, 32px desktop)
- **Section**: Consistent vertical spacing (py-12 or py-16)
- **Stack**: Use `flex flex-col gap-{n}` for vertical stacks
- **Grid**: Use CSS Grid with `gap-{n}` from spacing scale
