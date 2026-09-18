import type { Meta, StoryObj } from '@storybook/react-vite'
import { Spinner, Stack, Text } from '../../../src'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component:
          'Indeterminate loading indicator. Size with `className` (`size-*`) and color through text utilities (`text-primary`, `text-muted-foreground`).',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap="lg" align="center">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </Stack>
  ),
}

export const Colors: Story = {
  render: () => (
    <Stack direction="row" gap="lg" align="center">
      <Spinner className="text-primary" />
      <Spinner className="text-success" />
      <Spinner className="text-warning" />
      <Spinner className="text-destructive" />
      <Spinner className="text-muted-foreground" />
    </Stack>
  ),
}

export const Standalone: Story = {
  render: () => (
    <Stack direction="row" gap="sm" align="center">
      <Spinner />
      <Text size="sm" tone="secondary">
        Loading data
      </Text>
    </Stack>
  ),
}
