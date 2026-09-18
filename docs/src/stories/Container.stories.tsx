import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Container } from '../../../src'

const meta = {
  title: 'Foundation/Container',
  component: Container,
  parameters: {
    docs: {
      description: {
        component:
          'Centers content horizontally and applies responsive horizontal padding. `size` sets the max width: `sm` (max-w-3xl), `md` (max-w-5xl), `lg` (max-w-7xl) or `full` (no max width).',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
    },
  },
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Container className="py-6">
      <Card>
        <CardHeader>
          <CardTitle>Institutional page</CardTitle>
          <CardDescription>Content is centered with a responsive max width.</CardDescription>
        </CardHeader>
        <CardContent>Page body.</CardContent>
      </Card>
    </Container>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="grid gap-4">
      {(['sm', 'md', 'lg', 'full'] as const).map((size) => (
        <Container
          key={size}
          size={size}
          className="rounded-md border border-dashed border-border bg-surface-muted py-3 text-sm text-muted-foreground"
        >
          size=&quot;{size}&quot;
        </Container>
      ))}
    </div>
  ),
}
