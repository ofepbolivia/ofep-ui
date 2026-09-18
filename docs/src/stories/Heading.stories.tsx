import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heading, Stack } from '../../../src'

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component:
          'Semantic heading. `as` sets the HTML level (`h1`–`h6`, default `h2`) independently from the visual `size` (`sm | md | lg | xl`), so document structure and visual hierarchy can differ.',
      },
    },
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
  args: {
    children: 'Institutional services',
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <Stack gap="md">
      <Heading size="sm">Small heading</Heading>
      <Heading size="md">Medium heading</Heading>
      <Heading size="lg">Large heading</Heading>
      <Heading size="xl">Extra large heading</Heading>
    </Stack>
  ),
}

export const Levels: Story = {
  render: () => (
    <Stack gap="sm">
      <Heading as="h1" size="lg">
        Level h1
      </Heading>
      <Heading as="h2" size="md">
        Level h2
      </Heading>
      <Heading as="h3" size="sm">
        Level h3
      </Heading>
    </Stack>
  ),
}
