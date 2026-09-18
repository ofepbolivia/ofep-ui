import type { Meta, StoryObj } from '@storybook/react-vite'
import { PlusIcon } from 'lucide-react'
import { Button, Stack } from '../../../src'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Primary action control. Variants: `primary`, `brand`, `secondary`, `tertiary`, `ghost`, `success`, `warning`, `destructive` (`danger` maps to `destructive`). `primary` is the neutral emphasis button for the main action; `brand` is the soft institutional action that carries the OFEP identity without a saturated fill. Supports `loading`, which disables the control, exposes `aria-busy`, and prepends a `Spinner` without dimming. Works with `asChild`; for non-button children it applies `pointer-events-none` plus `aria-disabled` while loading.',
      },
    },
  },
  args: {
    children: 'Save changes',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'brand',
        'secondary',
        'tertiary',
        'ghost',
        'success',
        'warning',
        'destructive',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
    },
    loading: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <Stack gap="md">
      <Stack direction="row" gap="sm" align="center">
        <Button>Primary</Button>
        <Button variant="brand">Brand</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="ghost">Ghost</Button>
      </Stack>
      <Stack direction="row" gap="sm" align="center">
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="destructive">Delete</Button>
      </Stack>
    </Stack>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap="sm" align="center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Create">
        <PlusIcon />
      </Button>
    </Stack>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Button>
      <PlusIcon />
      New record
    </Button>
  ),
}

export const AsChild: Story = {
  render: () => (
    <Stack gap="md">
      <Stack direction="row" gap="sm" align="center">
        <Button asChild>
          <a href="#docs">Documentation</a>
        </Button>
        <Button asChild loading>
          <a href="#docs">Documentation</a>
        </Button>
      </Stack>
      <Stack direction="row" gap="sm" align="center">
        <Button asChild variant="secondary">
          <a href="#docs" className="tracking-wide">
            Custom class merged
          </a>
        </Button>
        <Button asChild variant="secondary" loading>
          <a href="#docs" className="tracking-wide">
            Custom class merged
          </a>
        </Button>
      </Stack>
    </Stack>
  ),
}

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading...',
  },
}

export const LoadingStates: Story = {
  render: () => (
    <Stack gap="md">
      <Stack direction="row" gap="sm" align="center">
        <Button loading>Loading...</Button>
        <Button variant="secondary" loading>
          Loading...
        </Button>
        <Button variant="destructive" loading>
          Loading...
        </Button>
      </Stack>
      <Stack direction="row" gap="sm" align="center">
        <Button size="sm" loading>
          Loading...
        </Button>
        <Button size="md" loading>
          Loading...
        </Button>
        <Button size="lg" loading>
          Loading...
        </Button>
      </Stack>
      <Stack direction="row" gap="sm" align="center">
        <Button size="icon" loading aria-label="Loading" />
      </Stack>
    </Stack>
  ),
}
