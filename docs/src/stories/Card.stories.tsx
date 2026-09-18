import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
  Stack,
  Text,
} from '../../../src'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'Surface container. Compose with `CardHeader`, `CardTitle`, `CardDescription`, `CardContent` and `CardFooter`. Use it for structure, not for grouping unrelated controls. Variant `brand` adds a thin institutional red accent on the top edge for summary cards.',
      },
    },
  },
  args: {
    variant: 'surface',
    padding: 'md',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['surface', 'muted', 'interactive', 'brand'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md'],
    },
  },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="max-w-xl">
      <CardHeader>
        <CardTitle>Institutional file</CardTitle>
        <CardDescription>
          Cards group related information without turning every section into a dashboard tile.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Stack gap="sm">
          <Text size="sm">Owner: Public enterprise office</Text>
          <Text size="sm">Status: In technical review</Text>
        </Stack>
      </CardContent>
      <CardFooter>
        <Button variant="secondary">Review later</Button>
        <Button>Open file</Button>
      </CardFooter>
    </Card>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Surface</CardTitle>
          <CardDescription>Default white surface for primary groups.</CardDescription>
        </CardHeader>
      </Card>
      <Card variant="muted">
        <CardHeader>
          <CardTitle>Muted</CardTitle>
          <CardDescription>Quiet surface for secondary groups.</CardDescription>
        </CardHeader>
      </Card>
      <Card variant="interactive">
        <CardHeader>
          <CardTitle>Interactive</CardTitle>
          <CardDescription>Hover affordance for selectable records.</CardDescription>
        </CardHeader>
      </Card>
      <Card variant="brand">
        <CardHeader>
          <CardTitle>Brand</CardTitle>
          <CardDescription>Top accent for institutional summary cards.</CardDescription>
        </CardHeader>
      </Card>
    </div>
  ),
}

export const Notification: Story = {
  render: () => (
    <Card className="mx-auto flex max-w-sm items-center gap-4">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-subtle text-lg font-semibold text-primary">
        O
      </div>
      <div>
        <CardTitle className="text-xl font-medium">OFEP</CardTitle>
        <CardDescription>You have a new technical review request.</CardDescription>
      </div>
    </Card>
  ),
}

export const RecordSummary: Story = {
  render: () => (
    <Card className="max-w-2xl">
      <CardHeader className="flex-row items-start justify-between gap-4">
        <div>
          <CardTitle>Public enterprise assessment</CardTitle>
          <CardDescription>Technical review package OFEP-2026-0142</CardDescription>
        </div>
        <Badge variant="warning">Pending evidence</Badge>
      </CardHeader>
      <CardContent>
        <Stack gap="md">
          <Separator />
          <div className="grid gap-4 sm:grid-cols-3">
            <Stack gap="none">
              <Text size="xs" tone="secondary">Stage</Text>
              <Text size="sm">Validation</Text>
            </Stack>
            <Stack gap="none">
              <Text size="xs" tone="secondary">Updated</Text>
              <Text size="sm">Today</Text>
            </Stack>
            <Stack gap="none">
              <Text size="xs" tone="secondary">Owner</Text>
              <Text size="sm">Technical office</Text>
            </Stack>
          </div>
        </Stack>
      </CardContent>
    </Card>
  ),
}
