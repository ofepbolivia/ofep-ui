import type { Meta, StoryObj } from '@storybook/react-vite'
import { CheckIcon, ClockIcon, XIcon } from 'lucide-react'
import { Badge, Stack } from '../../../src'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          'Compact status label. Variants: `neutral`, `primary`, `brand`, `success`, `warning`, `info`, `accent`, `destructive`, `outline`. Tinted variants pair a base token with its `*-subtle` background. Use `brand` for institutional identity marks; reserve `primary` for neutral emphasis.',
      },
    },
  },
  args: {
    children: 'In review',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'brand', 'success', 'warning', 'info', 'accent', 'destructive', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'icon'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <Stack direction="row" gap="sm" align="center">
      <Badge>Draft</Badge>
      <Badge variant="primary">Submitted</Badge>
      <Badge variant="brand">OFEP</Badge>
      <Badge variant="success">Approved</Badge>
      <Badge variant="warning">Overdue</Badge>
      <Badge variant="info">New</Badge>
      <Badge variant="accent">Special</Badge>
      <Badge variant="destructive">Rejected</Badge>
      <Badge variant="outline">Archived</Badge>
    </Stack>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Stack direction="row" gap="sm" align="center">
      <Badge variant="success">
        <CheckIcon />
        Approved
      </Badge>
      <Badge variant="warning">
        <ClockIcon />
        Pending
      </Badge>
      <Badge variant="destructive">
        <XIcon />
        Rejected
      </Badge>
    </Stack>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <Stack direction="row" gap="sm" align="center">
      <Badge size="icon" variant="success" aria-label="Approved">
        <CheckIcon />
      </Badge>
      <Badge size="icon" variant="warning" aria-label="Pending">
        <ClockIcon />
      </Badge>
      <Badge size="icon" variant="destructive" aria-label="Rejected">
        <XIcon />
      </Badge>
    </Stack>
  ),
}
