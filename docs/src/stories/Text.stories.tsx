import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stack, Text } from '../../../src'

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          'Body text. Renders a paragraph (`p`) by default; use `as` to render `span` for inline text or `div` for a block. `size` supports `xs | sm | md | lg`; `tone` supports `primary`, `secondary`, `muted`, `success` and `destructive`.',
      },
    },
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'span', 'div'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    tone: {
      control: 'select',
      options: ['primary', 'secondary', 'muted', 'success', 'destructive'],
    },
  },
  args: {
    children: 'Institutional body text.',
  },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <Stack gap="sm">
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Medium text</Text>
      <Text size="lg">Large text</Text>
    </Stack>
  ),
}

export const Inline: Story = {
  render: () => (
    <Text className="max-w-2xl">
      The request is{' '}
      <Text as="span" tone="success">
        approved
      </Text>{' '}
      and pending publication.
    </Text>
  ),
}

export const Tones: Story = {
  render: () => (
    <Stack gap="sm">
      <Text tone="primary">Primary tone</Text>
      <Text tone="secondary">Secondary tone</Text>
      <Text tone="muted">Muted tone</Text>
      <Text tone="success">Success tone</Text>
      <Text tone="destructive">Destructive tone</Text>
    </Stack>
  ),
}
