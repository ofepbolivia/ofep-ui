import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import {
  CurrencyInput,
  FloatingCurrencyInput,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  Stack,
} from '../../../src'

const meta = {
  title: 'Forms/CurrencyInput',
  component: CurrencyInput,
  parameters: {
    docs: {
      description: {
        component:
          'Currency input for PostgreSQL numeric values. It displays thousands with commas and decimals with a dot, for example `1,000.50`, but emits the canonical backend value without thousands separators through `onValueChange`, for example `1000.50`. Invalid or incomplete input emits `undefined`. `size` supports `sm | md | lg`.',
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
    placeholder: '0.00',
  },
} satisfies Meta<typeof CurrencyInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>()

    return (
      <div className="flex w-72 flex-col gap-2">
        <CurrencyInput value={value} onValueChange={setValue} />
        <p className="text-xs text-muted-foreground">Backend value: {value ?? 'No value'}</p>
      </div>
    )
  },
}

export const InitialValue: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | undefined>('1000.50')

    return (
      <div className="flex w-72 flex-col gap-2">
        <CurrencyInput value={value} onValueChange={setValue} />
        <p className="text-xs text-muted-foreground">Backend value: {value ?? 'No value'}</p>
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <Stack gap="md" className="w-72">
      <CurrencyInput size="sm" defaultValue="1000.50" aria-label="Small amount" />
      <CurrencyInput size="md" defaultValue="1000.50" aria-label="Base amount" />
      <CurrencyInput size="lg" defaultValue="1000.50" aria-label="Large amount" />
    </Stack>
  ),
}

export const Floating: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | undefined>('1000.50')

    return (
      <div className="flex w-72 flex-col gap-2">
        <FloatingCurrencyInput label="Amount" value={value} onValueChange={setValue} />
        <p className="text-xs text-muted-foreground">Backend value: {value ?? 'No value'}</p>
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => <CurrencyInput className="w-72" disabled defaultValue="1000.50" />,
}

export const Invalid: Story = {
  render: () => <CurrencyInput className="w-72" aria-invalid="true" defaultValue="1000.50" />,
}

export const WithFormField: Story = {
  render: () => (
    <FormField className="w-72" invalid>
      <FormLabel>Amount</FormLabel>
      <FormControl>
        <CurrencyInput name="amount" />
      </FormControl>
      <FormDescription>Visual format: 1,000.50. Backend format: 1000.50.</FormDescription>
      <FormMessage>Enter a valid amount.</FormMessage>
    </FormField>
  ),
}
