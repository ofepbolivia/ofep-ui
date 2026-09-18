import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardContent, CardHeader, Skeleton, Stack, Text } from '../../../src'

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component:
          'Loading placeholder. Size it with `className`. `variant="contrast"` is for use on a muted surface; `default` is for use on a surface.',
      },
    },
  },
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'contrast'],
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'h-4 w-48',
  },
}

export const Paragraph: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-3">
      <Skeleton className="h-5 w-2/3" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
      </div>
    </div>
  ),
}

export const Avatar: Story = {
  render: () => (
    <div className="flex w-full max-w-sm items-center gap-3">
      <Skeleton className="size-10 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-2.5 w-24" />
      </div>
    </div>
  ),
}

export const CardPlaceholder: Story = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-3">
          <Skeleton className="size-9 rounded-md" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-2/3" />
            <Skeleton className="h-2.5 w-1/2" />
          </div>
        </div>
        <Skeleton className="h-9 w-full" />
      </CardContent>
    </Card>
  ),
}

export const Table: Story = {
  render: () => (
    <Stack gap="none" className="w-full max-w-2xl">
      <div className="grid grid-cols-[1.5fr_1fr_0.75fr_auto] items-center gap-4 border-b border-border px-4 pb-3">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-3 w-14" />
        <Skeleton className="h-3 w-10" />
      </div>
      {[0, 1, 2].map((row) => (
        <div
          key={row}
          className="grid grid-cols-[1.5fr_1fr_0.75fr_auto] items-center gap-4 border-b border-border px-4 py-3 last:border-b-0"
        >
          <div className="flex items-center gap-2.5">
            <Skeleton className="size-6 rounded-full" />
            <Skeleton className="h-3 w-28" />
          </div>
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-6 w-16 rounded-md" />
        </div>
      ))}
    </Stack>
  ),
}

export const Media: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-3">
      <Skeleton className="aspect-video w-full rounded-md" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="grid w-full max-w-xl gap-4 sm:grid-cols-2">
      <Stack gap="sm">
        <Text size="sm" tone="secondary">
          On a surface
        </Text>
        <div className="rounded-lg bg-surface p-5 outline outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10">
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="mt-3 h-3 w-full" />
        </div>
      </Stack>
      <Stack gap="sm">
        <Text size="sm" tone="secondary">
          On a muted surface
        </Text>
        <div className="rounded-lg bg-surface-muted p-5">
          <Skeleton variant="contrast" className="h-3 w-2/3" />
          <Skeleton variant="contrast" className="mt-3 h-3 w-full" />
        </div>
      </Stack>
    </div>
  ),
}