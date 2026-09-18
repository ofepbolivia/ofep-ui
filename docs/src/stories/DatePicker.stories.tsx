import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import { DatePicker, FormControl, FormDescription, FormField, FormLabel, FormMessage } from '../../../src'

const meta = {
  title: 'Forms/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component:
          'Single masked input (`dd/mm/aaaa`) with a Radix popover calendar. The input is visual only: the component always emits the canonical civil date `yyyy-MM-dd`, ready for a database `date` column. For example `10/09/2026` is emitted as `2026-09-10`. Invalid input sets `aria-invalid` and emits `undefined`. The value is never built with `toISOString()`, so there is no timezone shift. `size` supports `sm | md | lg`.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    placeholder: 'dd/mm/aaaa',
  },
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>()

    return (
      <div className="flex flex-col gap-2">
        <DatePicker className="w-64" value={value} onValueChange={setValue} />
        <p className="text-xs text-muted-foreground">{value ?? 'Sin valor'}</p>
      </div>
    )
  },
}

export const InitialValue: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | undefined>('2026-09-10')

    return (
      <div className="flex flex-col gap-2">
        <DatePicker className="w-64" value={value} onValueChange={setValue} />
        <p className="text-xs text-muted-foreground">{value ?? 'Sin valor'}</p>
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <DatePicker className="w-64" size="sm" defaultValue="2026-09-10" />
      <DatePicker className="w-64" size="md" defaultValue="2026-09-10" />
      <DatePicker className="w-64" size="lg" defaultValue="2026-09-10" />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => <DatePicker className="w-64" disabled defaultValue="2026-09-10" />,
}

export const Invalid: Story = {
  render: () => <DatePicker className="w-64" aria-invalid="true" defaultValue="2026-09-10" />,
}

export const WithFormField: Story = {
  render: () => (
    <FormField className="w-72" invalid>
      <FormLabel>Fecha de nacimiento</FormLabel>
      <FormControl>
        <DatePicker name="birthDate" />
      </FormControl>
      <FormDescription>Formato dd/mm/aaaa.</FormDescription>
      <FormMessage>Ingresá una fecha válida.</FormMessage>
    </FormField>
  ),
}
