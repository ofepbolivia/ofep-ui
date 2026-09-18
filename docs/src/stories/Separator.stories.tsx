import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
  Stack,
  Text,
} from '../../../src'

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    docs: {
      description: {
        component:
          'Visually or semantically separates content. `orientation` supports `horizontal | vertical`; `decorative` (default `true`) removes it from the accessibility tree.',
      },
    },
  },
  args: {
    orientation: 'horizontal',
    decorative: true,
  },
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
    },
    decorative: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Separator>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Stack gap="md" className="w-full max-w-md">
      <Text size="sm">Technical review package OFEP-2026-0142</Text>
      <Separator {...args} />
      <Text size="sm" tone="secondary">
        Owner: Public enterprise office
      </Text>
    </Stack>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-10 items-center gap-3">
      <Button variant="ghost" size="sm">
        Edit
      </Button>
      <Separator orientation="vertical" />
      <Button variant="ghost" size="sm">
        Duplicate
      </Button>
      <Separator orientation="vertical" />
      <Button variant="ghost" size="sm">
        Delete
      </Button>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-full max-w-md items-center gap-3">
      <Separator className="flex-1" />
      <Text size="xs" tone="secondary">
        or continue with
      </Text>
      <Separator className="flex-1" />
    </div>
  ),
}

export const InList: Story = {
  render: () => (
    <Stack gap="md" className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <Text size="sm">Technical file</Text>
        <Text size="xs" tone="secondary">
          OFEP-2026-0142
        </Text>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <Text size="sm">Supporting documents</Text>
        <Text size="xs" tone="secondary">
          3 files
        </Text>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <Text size="sm">Resolution</Text>
        <Text size="xs" tone="secondary">
          Pending
        </Text>
      </div>
    </Stack>
  ),
}

export const InCard: Story = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Review summary</CardTitle>
        <CardDescription>Key decisions from the technical committee.</CardDescription>
      </CardHeader>
      <CardContent>
        <Stack gap="md">
          <Separator />
          <div className="grid grid-cols-2 gap-y-3">
            <Text size="sm">Owner</Text>
            <Text size="sm" tone="secondary">
              Technical office
            </Text>
            <Text size="sm">Stage</Text>
            <Text size="sm" tone="secondary">
              Validation
            </Text>
          </div>
          <Separator />
          <Text size="sm" tone="secondary">
            Last updated today by M. Torres.
          </Text>
        </Stack>
      </CardContent>
    </Card>
  ),
}