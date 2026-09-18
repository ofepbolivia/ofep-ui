import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardDescription, CardHeader, CardTitle, Grid, Stack } from '../../../src'

const meta = {
  title: 'Foundation/Grid',
  component: Grid,
  parameters: {
    docs: {
      description: {
        component:
          'Responsive CSS Grid layout primitive for reusable app layouts without requiring Tailwind in the consuming app. `columns` maps to precompiled responsive column patterns; use app CSS for one-off grid templates.',
      },
    },
  },
  argTypes: {
    columns: {
      control: 'select',
      options: ['1', '2', '3', '4', 'none'],
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
    columns: '3',
    gap: 'md',
    align: 'stretch',
  },
} satisfies Meta<typeof Grid>

export default meta

type Story = StoryObj<typeof meta>

const items = [
  ['Technical file', 'Open case record and supporting metadata'],
  ['Documents', 'Required attachments and validation evidence'],
  ['Resolution', 'Committee decision and final notification'],
]

export const Default: Story = {
  render: (args) => (
    <Grid {...args}>
      {items.map(([title, description]) => (
        <Card key={title} padding="sm">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </Grid>
  ),
}

export const Columns: Story = {
  render: () => (
    <Stack gap="lg">
      {(['1', '2', '3', '4'] as const).map((columns) => (
        <Grid key={columns} columns={columns} gap="sm">
          {Array.from({ length: Number(columns) }).map((_, index) => (
            <Card key={index} padding="sm">
              <CardHeader>
                <CardTitle>Column {index + 1}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </Grid>
      ))}
    </Stack>
  ),
}

export const Dashboard: Story = {
  render: () => (
    <Grid columns="3" gap="lg">
      <Card>
        <CardHeader>
          <CardTitle>Open requests</CardTitle>
          <CardDescription>24 pending technical validation</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Completed</CardTitle>
          <CardDescription>148 resolved this month</CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Attention required</CardTitle>
          <CardDescription>6 files missing supporting evidence</CardDescription>
        </CardHeader>
      </Card>
    </Grid>
  ),
}
