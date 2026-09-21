# OFEP Interface System

## Direction

OFEP UI uses a restrained institutional document language. It should feel precise, trustworthy, calm, and efficient for technical and administrative work involving records, approvals, budgets, and public-company oversight.

The visual world is warm paper, graphite ink, pale stone, clean document white, and a restrained institutional stamp red. The institutional arc palette is reserved for identity and data visualization.

## Signature

The signature is a thin institutional red rule used sparingly on primary structural elements, paired with warm document surfaces and compact, precise controls. Red communicates identity or explicit state; it is not decorative fill.

## Depth

Use subtle borders and semantic elevation. Avoid dramatic shadows and isolated white cards.

- `surface-canvas`: application background
- `surface-document`: primary content
- `surface-subtle`: quiet grouping and hover
- `surface-sunken`: fields and inset regions
- `surface-raised`: resting controls above content
- `surface-overlay`: menus, dialogs, popovers, and toasts
- `shadow-resting`: controls and document containers
- `shadow-raised`: interactive hover elevation
- `shadow-floating`: menus, popovers, and toasts
- `shadow-overlay`: dialogs

## Typography

Inter Variable is the interface typeface. Use weight, tracking, line height, and hierarchy instead of adding a decorative font. Titles use tight tracking and semibold weight. Supporting copy uses relaxed line height. Numeric data uses tabular figures when its meaning is known.

## Spacing And Sizing

The base spacing unit is 4 px.

- Form controls: `sm 32px`, `md 40px`, `lg 48px`
- Buttons: `sm 32px`, `md 36px`, `lg 40px`
- Compact icon actions and close buttons: 32px
- Control icons: 16px for text controls at every size; toggle controls (`Checkbox`, `RadioGroup`) scale their glyph with the control (`12 / 16 / 20 px` for `sm / md / lg`)
- Labels follow the size of the control they label, and `FormField size` drives both the label and the control, so one prop keeps them in sync
- Control radii: `rounded-md`
- Document surfaces: `rounded-lg`

## Tables

`Table` and `DataTable` share one visual design. `TableContainer` owns the document surface — rounded border and resting elevation — and both the primitive and the composed table use it. The header carries the institutional highlight: a quiet neutral background, ink labels and a thin brand underline. Brand red stays as a single bottom rule, never as a text or large fill. Cells are not bolded by default; `DataTable` exposes per-column `emphasis`. The `divided` variant adds subtle vertical borders between columns and is available on both `Table` and `DataTable`. Body rows separate with subtle borders and hover with the muted surface. `striped` adds a neutral zebra tone to odd rows. Selected rows use the neutral graphite tint — red is never used for row backgrounds, because red reads as danger in data. Numeric columns use tabular figures.

## Interaction

Bordered form field controls on `surface-sunken` use a bottom-border highlight on focus (`focus-visible:border-b-ring`, destructive when invalid) instead of the offset ring, because the ring reads as too heavy on an already-bordered field. Every other interactive control uses a two-pixel semantic focus ring with a two-pixel background offset. Disabled controls block interaction and use the shared disabled opacity. Invalid controls use destructive borders and focus indicators. Motion must respect reduced-motion preferences.

## Form Data Formatting

Inputs that need a human-friendly display format and a backend-safe value keep those concerns separate. The visual text belongs inside the component; the canonical wire value crosses the component boundary through `onValueChange`. `DatePicker` displays `dd/mm/aaaa` and emits `yyyy-MM-dd`. `CurrencyInput` and `FloatingCurrencyInput` display comma thousands with dot decimals, for example `1,000.50`, and emit PostgreSQL-ready numeric strings without thousands separators, for example `1000.50`. Use `type="text"` with the appropriate `inputMode` when native input types cannot represent the visual format reliably.

## Defaults To Avoid

- Generic SaaS dashboard styling based on slate colors and interchangeable cards
- Large decorative brand fills
- Mixed hardcoded shadows or border colors
- Unrelated control heights and paddings
- Color without institutional or semantic meaning
