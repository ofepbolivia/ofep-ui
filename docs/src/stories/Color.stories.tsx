import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stack } from '../../../src'

interface Swatch {
  className: string
  name: string
  value: string
  use: string
}

const arc: Swatch[] = [
  { className: 'bg-arc-yellow', name: 'arc-yellow', value: '#ECC129', use: 'Identity and data' },
  { className: 'bg-arc-green', name: 'arc-green', value: '#5BB351', use: 'Identity and data' },
  { className: 'bg-arc-orange', name: 'arc-orange', value: '#E57B25', use: 'Identity and data' },
  { className: 'bg-arc-purple', name: 'arc-purple', value: '#7E2E84', use: 'Identity and data' },
  { className: 'bg-arc-red', name: 'arc-red', value: '#B8242A', use: 'Institutional identity' },
  { className: 'bg-arc-blue', name: 'arc-blue', value: '#2A5CAA', use: 'Identity and data' },
]

const neutrals: Swatch[] = [
  { className: 'bg-surface-canvas border border-border', name: 'surface-canvas', value: '#FBFAF8', use: 'Application canvas' },
  { className: 'bg-surface-document border border-border', name: 'surface-document', value: '#FFFFFF', use: 'Documents and content' },
  { className: 'bg-surface-subtle border border-border', name: 'surface-subtle', value: 'Derived', use: 'Quiet grouping and hover' },
  { className: 'bg-surface-sunken border border-border', name: 'surface-sunken', value: '#F4F2EF', use: 'Fields and inset regions' },
  { className: 'bg-surface-raised border border-border', name: 'surface-raised', value: 'Theme aware', use: 'Raised controls' },
  { className: 'bg-surface-overlay border border-border', name: 'surface-overlay', value: 'Theme aware', use: 'Transient overlays' },
  { className: 'bg-border', name: 'border', value: '#E3DDD4', use: 'Dividers, outlines' },
  { className: 'bg-foreground', name: 'foreground', value: '#2E2B28', use: 'Primary text' },
  { className: 'bg-muted-foreground', name: 'muted-foreground', value: '#6F6459', use: 'Secondary text' },
]

const semantic: Swatch[] = [
  { className: 'bg-primary', name: 'primary', value: '#3A3A3A', use: 'Main actions, structure' },
  { className: 'bg-brand', name: 'brand', value: '#B8242A', use: 'Active tab, focus, card accent' },
  { className: 'bg-success', name: 'success', value: '#2D7A2E', use: 'Approvals, confirmations' },
  { className: 'bg-warning', name: 'warning', value: '#B9410A', use: 'Deadlines, cautions' },
  { className: 'bg-info', name: 'info', value: '#2A5CAA', use: 'Notices, guidance' },
  { className: 'bg-accent', name: 'accent', value: '#7E2E84', use: 'Rare highlight states' },
  { className: 'bg-destructive', name: 'destructive', value: '#8F1D25', use: 'Errors, destructive actions' },
]

function SwatchGrid({ items }: { items: Swatch[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex items-center gap-3 rounded-lg border border-border-subtle bg-surface-document p-3 shadow-resting"
        >
          <span className={`size-10 shrink-0 rounded-md ${item.className}`} />
          <span className="min-w-0">
            <span className="block text-sm font-medium text-foreground">{item.name}</span>
            <span className="block text-xs text-muted-foreground">
              {item.value} · {item.use}
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

const meta = {
  title: 'Foundation/Color',
  parameters: {
    docs: {
      description: {
        component:
          'Institutional palette. The **arc** holds the exact logo colors and is reserved for identity fills and data. The **semantic** tokens drive components and adapt to light and dark themes. Warm neutral surface roles build document hierarchy.\n\n' +
          'Use semantic tokens in components; reach for `arc-*` only for identity fills, data categories and charts, never for text on light surfaces (the raw hues do not meet 4.5:1).',
      },
    },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Palette: Story = {
  render: () => (
    <Stack gap="lg">
      <section className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Institutional arc
        </h3>
        <SwatchGrid items={arc} />
      </section>
      <section className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Neutral structure
        </h3>
        <SwatchGrid items={neutrals} />
      </section>
      <section className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Semantic roles
        </h3>
        <SwatchGrid items={semantic} />
      </section>
    </Stack>
  ),
}
