import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge, Button, Card, Flex, Stack, Text } from '../../../src'

const meta = {
  title: 'Foundation/Flex',
  component: Flex,
  parameters: {
    docs: {
      description: {
        component:
          'Flexbox layout primitive for reusable app layout without requiring Tailwind in the consuming app. Use `Stack` for simple vertical or horizontal spacing, and `Flex` when you need wrap, justify, reverse direction, or baseline alignment.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'reverse'],
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
  },
  args: {
    direction: 'row',
    wrap: 'nowrap',
    gap: 'md',
    align: 'center',
    justify: 'start',
  },
} satisfies Meta<typeof Flex>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Flex {...args}>
      <Button variant="secondary">Profile</Button>
      <Button variant="secondary">Settings</Button>
      <Button variant="secondary">Messages</Button>
    </Flex>
  ),
}

export const Wrap: Story = {
  render: () => (
    <Flex wrap="wrap" gap="sm">
      {['Identity', 'Documents', 'Payment', 'Review', 'Resolution', 'Archive'].map((item) => (
        <Badge key={item} variant="outline">
          {item}
        </Badge>
      ))}
    </Flex>
  ),
}

export const Justify: Story = {
  render: () => (
    <Stack gap="md">
      {(['start', 'center', 'end', 'between'] as const).map((justify) => (
        <Card key={justify} padding="sm">
          <Flex justify={justify} align="center" gap="sm">
            <Text size="sm" tone="secondary" as="span">
              {justify}
            </Text>
            <Button size="sm" variant="secondary">
              Save
            </Button>
            <Button size="sm" variant="secondary">
              Cancel
            </Button>
          </Flex>
        </Card>
      ))}
    </Stack>
  ),
}
