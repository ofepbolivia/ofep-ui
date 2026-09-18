import type { Meta, StoryObj } from '@storybook/react-vite'
import { Blockquote, Stack, Text } from '../../../src'

const meta = {
  title: 'Components/Blockquote',
  component: Blockquote,
  parameters: {
    docs: {
      description: {
        component:
          'Quoted passage built on native `blockquote`. Renders a left rule with italic, muted text. Pass `attribution` to append a `<footer>` with a `<cite>` source.',
      },
    },
  },
  args: {
    children:
      'Access to public information is a right, and the State has the obligation to guarantee it.',
  },
} satisfies Meta<typeof Blockquote>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithAttribution: Story = {
  args: {
    attribution: 'Institutional transparency charter',
  },
}

export const InProse: Story = {
  render: () => (
    <Stack gap="md" className="max-w-2xl">
      <Text>The committee reviewed the technical file and reached the following conclusion.</Text>
      <Blockquote attribution="Technical committee, session 14">
        The documentation submitted is complete and meets the requirements of the current
        regulation.
      </Blockquote>
      <Text tone="secondary">The resolution will be published in the institutional gazette.</Text>
    </Stack>
  ),
}
