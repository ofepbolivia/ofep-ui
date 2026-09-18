import type { Meta, StoryObj } from '@storybook/react-vite'
import { Link, Stack, Text } from '../../../src'

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component:
          'Anchor styled with the OFEP palette. `variant` supports `default` (underlined), `subtle` (underline on hover) and `muted`. Set `asChild` to apply the styles to a router link or any element while keeping a single anchor in the DOM.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'subtle', 'muted'],
    },
  },
  args: {
    href: '#',
    children: 'Institutional transparency portal',
  },
} satisfies Meta<typeof Link>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <Stack gap="sm">
      <Link href="#" variant="default">
        Default link
      </Link>
      <Link href="#" variant="subtle">
        Subtle link
      </Link>
      <Link href="#" variant="muted">
        Muted link
      </Link>
    </Stack>
  ),
}

export const InProse: Story = {
  render: () => (
    <Text className="max-w-2xl">
      Consult the <Link href="#">technical file OFEP-2026-0142</Link> for the full list of
      supporting documents, or write to the{' '}
      <Link href="#" variant="subtle">
        technical office
      </Link>
      .
    </Text>
  ),
}

export const External: Story = {
  args: {
    href: 'https://example.org',
    target: '_blank',
    rel: 'noreferrer noopener',
    children: 'Open the source in a new tab',
  },
}

export const AsChild: Story = {
  render: () => (
    <Link asChild variant="subtle">
      <a href="#" data-router-link>
        Rendered through Slot
      </a>
    </Link>
  ),
}
