import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, Stack } from '../../../src'

const meta = {
  title: 'Foundation/Stack',
  component: Stack,
  parameters: {
    docs: {
      description: {
        component:
          'Flex layout primitive. `direction` supports `row | column` (default `column`), `gap` supports `none | xs | sm | md | lg | xl`, and `align` supports `start | center | end | stretch`.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
  },
  args: {
    direction: 'column',
    gap: 'md',
    align: 'stretch',
  },
} satisfies Meta<typeof Stack>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Stack {...args}>
      <Button variant="secondary">First</Button>
      <Button variant="secondary">Second</Button>
      <Button variant="secondary">Third</Button>
    </Stack>
  ),
}

export const Direction: Story = {
  render: () => (
    <Stack gap="lg">
      <Stack direction="column" gap="sm">
        <Button variant="secondary">Column one</Button>
        <Button variant="secondary">Column two</Button>
      </Stack>
      <Stack direction="row" gap="sm" align="center">
        <Button variant="secondary">Row one</Button>
        <Button variant="secondary">Row two</Button>
      </Stack>
    </Stack>
  ),
}

export const Gaps: Story = {
  render: () => (
    <Stack gap="xl">
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map((gap) => (
        <Stack key={gap} direction="row" gap={gap} align="center">
          <Button size="sm" variant="secondary">
            A
          </Button>
          <Button size="sm" variant="secondary">
            B
          </Button>
          <span className="text-xs text-muted-foreground">gap=&quot;{gap}&quot;</span>
        </Stack>
      ))}
    </Stack>
  ),
}

export const Align: Story = {
  render: () => (
    <Stack direction="row" gap="lg">
      {(['start', 'center', 'end', 'stretch'] as const).map((align) => (
        <Stack key={align} direction="row" gap="sm" align={align} className="h-24 rounded-md border border-dashed border-border p-2">
          <Button size="sm" variant="secondary">
            A
          </Button>
          <Button size="sm" variant="secondary">
            B
          </Button>
          <span className="text-xs text-muted-foreground">align=&quot;{align}&quot;</span>
        </Stack>
      ))}
    </Stack>
  ),
}
