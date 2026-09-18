import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { Calendar } from '../../../src'

const meta = {
  title: 'Forms/Calendar',
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component:
          'Spanish-only month grid built on the WAI-ARIA grid pattern. The week starts on Monday and labels are hardcoded (`Lu Ma Mi Ju Vi Sa Do`). The selection is a civil date in `yyyy-MM-dd`; the calendar never converts it through a timezone. Navigation uses a roving tabindex: only one day is a tab stop, arrows move the focus, `Home`/`End` jump to the edges of the week, and `Enter`/`Space` select. `month` (also `yyyy-MM-dd`) turns the visible month into a controlled value via `onMonthChange`.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    selected: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<string>()

    return (
      <div className="w-72 rounded-lg border border-border bg-surface-overlay p-3">
        <Calendar selected={selected} onSelect={setSelected} />
        <p className="mt-2 text-xs text-muted-foreground">{selected ?? 'Sin selección'}</p>
      </div>
    )
  },
}

export const Selected: Story = {
  render: () => (
    <div className="w-72 rounded-lg border border-border bg-surface-overlay p-3">
      <Calendar selected="2026-09-10" />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-72 rounded-lg border border-border bg-surface-overlay p-3">
      <Calendar disabled selected="2026-09-10" />
    </div>
  ),
}

export const ControlledMonth: Story = {
  render: () => {
    const [month, setMonth] = React.useState('2026-09-01')

    return (
      <div className="w-72 rounded-lg border border-border bg-surface-overlay p-3">
        <Calendar month={month} onMonthChange={setMonth} />
        <p className="mt-2 text-xs text-muted-foreground">{month}</p>
      </div>
    )
  },
}
