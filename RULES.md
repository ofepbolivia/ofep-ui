# RULES.md

How to build and change components in `@ofep-ui/react`. This is the contributor contract — read it before opening a PR.

For repository layout, commands, and the short list of hard rules, see `AGENTS.md`. For what each component does, see the Storybook autodocs (`pnpm storybook`).

## The stack

The library is built on one stack. Do not add a second option for any concern.

| Concern | Choice |
|---|---|
| Behavior and accessibility | Radix Primitives (`@radix-ui/react-*`) |
| Styling | Tailwind CSS v4 |
| Styling ecosystem | `class-variance-authority` for variants; `clsx` + `tailwind-merge` for `cn()` |
| Icons | `lucide-react` |
| Color | Semantic tokens (`--ofep-*`) |
| Build | tsup (ESM + CJS + types, `"use client"` banner) |
| Docs | Storybook |
| Type gate | `tsc --noEmit` (`pnpm typecheck`) |

Consequences: no `@radix-ui/themes`, no CSS-in-JS, no second CSS framework, no second icon library, no alternative class merger, and no hex/rgb literals in a component.

There is no test runner and no linter. `pnpm typecheck` is the only automated gate, and it must pass before a change is considered done.

## Radix vs native HTML

Radix is for **non-trivial behavior**: focus management, focus traps, keyboard navigation, portals, ARIA for complex patterns. If a component is presentational, or it wraps a native control that already carries the semantics, build it with plain HTML.

Current split: 22 components wrap Radix primitives or `Slot`; 27 are native.

Rule of thumb:

- The behavior is documented as a WAI-ARIA pattern with custom keyboard handling → Radix.
- The platform already gives you the behavior (`<input>`, `<textarea>`, `<fieldset>`, `<nav>`) → native HTML.
- You only need `asChild` → import `Slot` from `@radix-ui/react-slot`, not a full primitive.

Do not pull in Radix just to render a `<span>`. And remember there is no generic Radix `TextField`, `Badge`, `Card`, or `Spinner` — those are native by design.

## Component anatomy

Every component file follows the same shape:

```tsx
'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const thingVariants = cva('base classes', {
  variants: {
    variant: { primary: '...', secondary: '...' },
    size: { sm: '...', md: '...' },
  },
  defaultVariants: { variant: 'primary', size: 'md' },
})

export interface ThingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof thingVariants> {}

export const Thing = React.forwardRef<HTMLDivElement, ThingProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div ref={ref} className={cn(thingVariants({ variant, size, className }))} {...props} />
  ),
)

Thing.displayName = 'Thing'

export { thingVariants }
```

Non-negotiables in that shape:

1. `'use client'` at the top when the file uses hooks or Radix primitives. The distributed bundle is also `use client`-marked by the tsup banner, but keep the directive on the files that need it.
2. `React.forwardRef` and a matching `displayName` on every component that renders a DOM node.
3. Variants defined with `cva()`; always pass `className` into `cva()` so consumer classes merge through `cn()`.
4. Props extend the correct native attributes plus `VariantProps<typeof xVariants>`.
5. Named exports only. No default exports.
6. Add the export to `src/index.ts`. A component that is not exported does not exist.

## Styling rules

- Consumers do not need Tailwind CSS. If a consuming app already uses Tailwind, it may apply its own utilities, but only utilities emitted by this package stylesheet are guaranteed by `@ofep-ui/react`. Do not make public examples require new Tailwind classes written in the consuming app.
- Consume semantic tokens through Tailwind utilities (`bg-primary`, `text-muted-foreground`, `border-border`). The mapping lives in `src/styles.css` under `@theme`.
- Never hardcode a color. If a needed color is missing, add a token to `src/styles.css` and `src/tokens/index.ts` first.
- Every interactive component needs a visible focus state.
  - Form field controls rendered as bordered `surface-sunken` inputs (`Input`, `Textarea`, `FloatingInput`, `InputGroup`, `SelectTrigger`, `Combobox`, `FileInput`, and compositions built on them) use a bottom-border highlight: `focus-visible:outline-none focus-visible:border-b-ring`, and `aria-[invalid=true]:focus-visible:border-b-destructive` when invalid. The offset ring reads as too heavy on an already-bordered field. When the focusable element is nested, drive it from the wrapper with `has-[:focus-visible]:border-b-ring`.
  - Every other interactive control uses the offset ring: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background` (or `has-[:focus-visible]:ring-*` when the focusable element is nested).
- Disabled state uses `disabled:pointer-events-none disabled:opacity-[var(--ofep-disabled-opacity)]` for real disabled controls. For controls that cannot be natively disabled (anchors, non-button `asChild` children), use `pointer-events-none` plus `aria-disabled`.
- Sizes follow the `sm | md | lg` convention (`icon` where a square icon button is needed). Form controls share that scale, and a `Label` follows the size of the control it labels. `FormField` takes a single `size` and drives both its label and its control, so they stay in sync.
- Reusable spacing and sizing decisions belong in component variants or layout primitives (`Container`, `Stack`, `Flex`, `Grid`, `DialogContent size`). App-specific width, height, margin, or max-size belongs in the consuming app's CSS or inline `style`, not as generic props on every component.
- Tinted states (`Alert`, `Badge`) pair a base token with its `*-subtle` background.
- Icons inside controls are sized via `[&_svg]:size-*` utilities with `[&_svg]:shrink-0`, not per-icon classes. Text controls keep `size-4` at every size; toggle controls (`Checkbox`, `RadioGroup`) scale the glyph with the control (`size-3 / size-4 / size-5` for `sm / md / lg`).

## Accessibility baseline

Every change must preserve:

- Correct roles and ARIA state from the underlying Radix primitive or native element.
- Keyboard operability: Tab to reach, Enter/Space to activate, arrows where the pattern requires them.
- `aria-invalid` for invalid form controls, and `aria-describedby` wiring between controls and descriptions/messages.
- Decorative icons marked `aria-hidden="true"`; icon-only buttons require an `aria-label`.
- Contrast of at least 4.5:1 for text in both light and dark themes.
- The a11y addon in Storybook must report no violations for the story you touch.

## Dates and time

Dates are civil dates: a year, a month, and a day with no time and no timezone. The canonical value is always the `yyyy-MM-dd` string, and it is the only thing that crosses a component boundary.

- Build the canonical string with zero-padded concatenation, never with `toISOString()`. `new Date(...).toISOString()` shifts the day for any consumer outside UTC, which silently corrupts dates saved to the database.
- Use `new Date(y, m - 1, d)` only for calendar arithmetic (weekday offset, days in month, adding days). Never read a wire value back out of a `Date`.
- Display formatting (`dd/MM/yyyy`) is presentational and belongs to the component that renders it. Spanish month and weekday labels are hardcoded in `src/lib/date.ts`; the library does not depend on a date library.
- Do not add `react-day-picker`, `date-fns`, or any other date dependency. The calendar and date picker are built in-house on the WAI-ARIA grid pattern.

## Stories

- Stories live in `docs/src/stories/*.stories.tsx` and import from `../../../src`. Never place a story under `src/`.
- Autodocs is enabled globally (`tags: ['autodocs']` in `docs/.storybook/preview.tsx`). Do not add `tags` to individual story files.
- Each component gets a `Meta` with `component`, `args`, and `argTypes` controls for every variant and size. The `component` field is what feeds the autodocs props table.
- Document behavior in `parameters.docs.description.component`, not in JSDoc. The no-comments rule applies to source code, and `parameters` is configuration — it renders as markdown on the autodocs page. Put variants, gotchas, and `asChild`/`aria` notes there.
- Add a story for each meaningful state: variants, sizes, disabled, loading, invalid, and any `asChild` usage.
- Storybook is the visual gate. Run `pnpm storybook` and verify the component in both the Light and Dark toolbar themes before finishing.

## Review checklist

- [ ] `pnpm typecheck` passes.
- [ ] The component is exported from `src/index.ts`.
- [ ] No hardcoded colors; only `--ofep-*`-backed utilities.
- [ ] No comments added anywhere.
- [ ] Focus, disabled, and invalid states are handled.
- [ ] Radix is used only where behavior justifies it.
- [ ] A story exists and renders correctly in light and dark.
- [ ] `parameters.docs.description.component` updated if public behavior changed.
