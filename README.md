# OFEP UI

Institutional React design system distributed as a single Git-installed package.

## Installation

```bash
pnpm add git+ssh://git@github.com:ofepbolivia/ofep-ui.git#v0.1.0
```

Use Git tags for reproducible installs. Avoid installing from `main` in production applications.

## Usage

Import the compiled stylesheet once in the application entry point.

### Next.js App Router

```tsx
// app/layout.tsx
import '@ofep-ui/react/styles.css'
```

### React

```tsx
// main.tsx
import '@ofep-ui/react/styles.css'
```

Then import components normally.

```tsx
import { Button } from '@ofep-ui/react'

export function Example() {
  return <Button>Save</Button>
}
```

The consuming application does not need Tailwind CSS. If it already uses Tailwind, it can apply its own utilities, but `@ofep-ui/react` only guarantees the compiled classes shipped in `@ofep-ui/react/styles.css`.

Use design-system variants for reusable sizing and layout decisions:

```tsx
<Container size="lg">
  <Grid columns="3" gap="md">
    <Button size="md">Save</Button>
  </Grid>
</Container>
```

Layout primitives included by the package:

| Component | Use |
|---|---|
| `Container` | Page width and responsive horizontal padding |
| `Stack` | Simple vertical or horizontal spacing |
| `Flex` | Flexbox alignment, wrapping and distribution |
| `Grid` | Responsive column layouts |

For application-specific layout, use the application's own CSS, inline styles, or Tailwind utilities when the app has its own Tailwind setup.

```tsx
<Card className="case-summary-card" />
<Card style={{ maxWidth: 480 }} />
```

## Typography (required)

The package expects **Inter** to be loaded by the consuming application. The font is not bundled to keep the distributed package small and to avoid forcing a font on projects that already manage their own typography.

Load it once, before the package stylesheet:

```tsx
import '@fontsource-variable/inter'
import '@ofep-ui/react/styles.css'
```

If Inter is missing, the browser falls back to the system stack. Text metrics and optical centering then change noticeably, especially inside buttons and other fixed-height controls.

The token is:

```css
--font-sans: "Inter Variable", Inter, ui-sans-serif, system-ui, -apple-system,
  BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

Storybook already loads Inter so component previews match the intended rendering.

## Theming

The package ships light mode by default and supports dark mode through the `.dark` class.

```tsx
<html className="dark">
  <body>{children}</body>
</html>
```

The logo colors are kept as brand reference variables (`--ofep-brand-primary`, `--ofep-accent-*`) and exposed through semantic tokens, with WCAG-verified contrast (≥ 4.5:1 for text) in both light and dark themes:

| Token | Light | Dark | Use |
|---|---|---|---|
| `primary` | `#3a3a3a` (graphite) | `#eee7df` | Main actions, structure |
| `brand` | `#b8242a` (stamp red) | `#e06a60` | Institutional identity details |
| `success` | `#2d7a2e` | `#84c97b` | Approvals, confirmations |
| `warning` | `#b9410a` | `#e3a066` | Deadlines, cautions |
| `info` | `#2a5caa` | `#93b4e5` | Notices, guidance |
| `accent` | `#7e2e84` | `#c48aae` | Rare highlight states |
| `destructive` | `#8f1d25` | `#ff8a80` | Errors and destructive actions |
| Neutrals | warm paper/ink family | same hue, lightness shifted | Structure, borders, surfaces |

Surface roles preserve document hierarchy without turning every section into a card:

| Token | Use |
|---|---|
| `surface-canvas` | Application background |
| `surface-document` | Primary document and content surfaces |
| `surface-subtle` | Quiet grouping and hover states |
| `surface-sunken` | Form controls and inset regions |
| `surface-raised` | Elements resting above a document |
| `surface-overlay` | Dialogs, menus, popovers, and toasts |

Elevation uses the semantic `resting`, `raised`, `floating`, and `overlay` shadow scale. Components must use these roles instead of color-specific shadow utilities.

Rules for contributors:

- Neutral tones build structure and carry primary actions. Reserve `brand` for identity details: active tab indicator, focus ring, card top accent, and institutional status badges. Do not fill large surfaces with brand red.
- Keep one hue family for all neutral surfaces; only shift lightness between theme levels.
- Treat fields as inset surfaces, documents as flat surfaces, and transient UI as elevated surfaces.
- Use the 4 px spacing grid and the `32 / 40 / 48 px` control scale for `sm / md / lg` form controls. Labels follow the size of their control; set `size` once on `FormField` and it drives both the label and the control.
- Each semantic token has a matching `*-subtle` background for tinted states (badges, alerts).
- The full logo palette is also exposed as `arc-*` tokens (`arc-yellow`, `arc-green`, `arc-orange`, `arc-purple`, `arc-red`, `arc-blue`) for identity fills, data categories and charts. Use them only as fills or data marks, never as text on light surfaces.

## Documentation

| Resource | Contents |
|---|---|
| Storybook (`pnpm storybook`) | Component reference — autodocs with props, variants, and behavior notes, in light and dark |
| [`RULES.md`](RULES.md) | How to build or change components |
| [`AGENTS.md`](AGENTS.md) | Repository context for AI agents |

## Next.js Compatibility

The distributed bundle is marked with `use client` to keep Radix-based components safe when consumed by the App Router. Import `@ofep-ui/react/styles.css` from `app/layout.tsx`.

Future optimization can split server-safe components and client-only components into separate exports, but the current package favors institutional reliability over granular React Server Component optimization.

## Development

```bash
pnpm install
pnpm build
pnpm storybook
```

Run `pnpm typecheck` before committing. There is no lint or test script; typecheck is the only automated gate.

## Architecture

- Tailwind CSS v4 compiles the package stylesheet.
- CVA defines controlled component variants.
- Radix UI provides accessible primitives for interactive components.
- CSS variables hold institutional design tokens and support dark mode through `.dark`.
- Components that require browser interactivity include `use client` for Next.js compatibility.
