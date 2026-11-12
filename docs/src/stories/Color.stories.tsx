import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stack } from '../../../src'

interface Swatch {
  className: string
  name: string
  value: string
  use: string
}

const neutrals: Swatch[] = [
  { className: 'bg-surface-canvas border border-border', name: 'surface-canvas', value: '#FBFAF8 / #242732', use: 'Application canvas' },
  { className: 'bg-surface-document border border-border', name: 'surface-document', value: '#FFFFFF / #2B2F3B', use: 'Documents and content' },
  { className: 'bg-surface-subtle border border-border', name: 'surface-subtle', value: 'Derived', use: 'Quiet grouping and hover' },
  { className: 'bg-surface-sunken border border-border', name: 'surface-sunken', value: '#FAF9F7 / #20232D', use: 'Fields and inset regions' },
  { className: 'bg-surface-raised border border-border', name: 'surface-raised', value: '#FFFFFF / #313744', use: 'Raised controls' },
  { className: 'bg-surface-overlay border border-border', name: 'surface-overlay', value: '#FFFFFF / #373D4C', use: 'Transient overlays' },
  { className: 'bg-border', name: 'border', value: '#E3DDD4 / #444B5C', use: 'Dividers, outlines' },
  { className: 'bg-foreground', name: 'foreground', value: '#2E2B28 / #F1F5F9', use: 'Primary text' },
  { className: 'bg-muted-foreground', name: 'muted-foreground', value: '#6F6459 / #C2C8D2', use: 'Secondary text' },
]

const semantic: Swatch[] = [
  { className: 'bg-primary', name: 'primary', value: '#3A3A3A / #E8EDF4', use: 'Main actions, structure' },
  { className: 'bg-brand', name: 'brand', value: '#B8242A / #F68B82', use: 'Active tab, focus, card accent' },
  { className: 'bg-success', name: 'success', value: '#2D7A2E / #8BD488', use: 'Approvals, confirmations' },
  { className: 'bg-warning', name: 'warning', value: '#B9410A / #F1B174', use: 'Deadlines, cautions' },
  { className: 'bg-info', name: 'info', value: '#2A5CAA / #A7C5FF', use: 'Notices, guidance' },
  { className: 'bg-accent', name: 'accent', value: '#7E2E84 / #D8A0C8', use: 'Rare highlight states' },
  { className: 'bg-destructive', name: 'destructive', value: '#A61F26 / #FF8E88', use: 'Errors, destructive actions' },
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
          'The **semantic** tokens drive components and adapt to light and dark themes. Warm light and cool slate dark surface roles build document hierarchy.\n\n' +
          'Use semantic tokens in components; they preserve intent and keep the interface consistent across themes.',
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
