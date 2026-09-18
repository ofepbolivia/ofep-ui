# AGENTS.md

Operational context for AI agents working in this repository. Read this before editing.

## What this is

`@ofep-ui/react` — an institutional React design system, distributed as a single Git-installed package (not npm). Source lives in `src/`, compiled to `dist/` by tsup.

## The stack

The whole library is built on one stack. Do not introduce a second option for any concern.

| Concern | Choice |
|---|---|
| Behavior and accessibility | Radix Primitives (`@radix-ui/react-*`) |
| Styling | Tailwind CSS v4 |
| Styling ecosystem | `class-variance-authority` for variants; `clsx` + `tailwind-merge` for `cn()` |
| Icons | `lucide-react` |
| Build | tsup (ESM + CJS + types, `"use client"` banner) |
| Docs | Storybook 10 (`@storybook/react-vite` + addon-docs + addon-a11y) |
| Type gate | `tsc --noEmit` |

That means no `@radix-ui/themes`, no CSS-in-JS, no second CSS framework, no second icon library, and no alternative class merger.

## Hard rules

- **Semantic tokens only.** Use utilities backed by `--ofep-*` tokens (`bg-primary`, `text-muted-foreground`). Never hardcode hex or rgb in a component.
- **No comments.** The codebase has zero comments. Do not add any.
- **`cn()` for class merging.** Always `cn(...)` from `src/lib/cn.ts`. Never template strings or `classnames`.
- **Export everything.** Every component must be re-exported from `src/index.ts`. An unexported component does not exist.

## Commands

| Command | Purpose |
|---|---|
| `pnpm dev` | tsup watch build |
| `pnpm build` | Build `dist/` (tsup + Tailwind stylesheet) |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm storybook` | Storybook on port 6006 |
| `pnpm build:storybook` | Static Storybook to `storybook-static/` |

There is no lint or test script. `pnpm typecheck` is the only automated gate — run it after every change.

## Layout

| Path | Role |
|---|---|
| `src/components/*.tsx` | One component per file, named exports |
| `src/lib/cn.ts` | Class merge helper |
| `src/tokens/index.ts` | Typed token references |
| `src/styles.css` | Tailwind entry, `@theme` mapping, light/dark token values |
| `src/index.ts` | Public API surface |
| `docs/.storybook/` | Storybook config |
| `docs/src/stories/*.stories.tsx` | Stories — note they live under `docs/`, not `src/` |
| `dist/` | Build output, never edit |

## Gotchas

- Storybook only loads `docs/src/**/*.stories.@(ts|tsx|mdx)`. Markdown files anywhere in the repo do NOT affect Storybook.
- Autodocs is enabled globally in `docs/.storybook/preview.tsx` (`tags: ['autodocs']`). Do not add per-story `tags`.
- `'use client'` belongs only on component files that use hooks or Radix primitives (25 of 49 today). Presentational files stay directive-free so they can be split into server-safe exports later.
- Dark mode is driven by the `.dark` class and `[data-theme="dark"]`, both defined in `src/styles.css`.
- Radix `Slot` (`asChild`) is used by `Button`, pagination links, and `FormControl`. Preserve `asChild` behavior when editing them.
- The built bundle is marked `"use client"` by the tsup banner for Next.js App Router compatibility. Do not remove it.
- `prepare` runs `pnpm build`, so installing this package as a dependency triggers a build.

## Where to look

- Consuming the package → `README.md`
- Building or changing components → `RULES.md`
- Component behavior reference → Storybook autodocs (`pnpm storybook`), driven by `parameters.docs.description` in each story
