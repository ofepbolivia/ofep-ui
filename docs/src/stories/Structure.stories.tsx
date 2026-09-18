import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Container,
  Separator,
  Stack,
  Text,
} from '../../../src'

const meta = {
  title: 'Foundation/Structure',
  parameters: {
    docs: {
      description: {
        component:
          'Composition patterns for page structure. Use `Container` for page width, `Stack` for vertical rhythm, and native Tailwind grid utilities where a screen needs columns. There is no separate `SystemGrid` component because grid is layout composition, not a design-system primitive.',
      },
    },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const SectionedCard: Story = {
  render: () => (
    <Card className="max-w-2xl">
      <CardHeader>
        <CardTitle>Administrative summary</CardTitle>
        <CardDescription>Use separators only where grouping needs to be explicit.</CardDescription>
      </CardHeader>
      <CardContent>
        <Stack gap="md">
          <Separator />
          <Stack gap="sm">
            <Text size="sm">Department: Citizen services</Text>
            <Text size="sm">Status: In review</Text>
            <Text size="sm">Updated: Today</Text>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  ),
}

export const PageComposition: Story = {
  render: () => (
    <Container size="lg">
      <Stack gap="lg">
        <Stack gap="xs">
          <Text size="sm" tone="secondary">
            Overview
          </Text>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Budget execution</h2>
          <Text tone="secondary">Compose responsive layouts with Tailwind grid utilities.</Text>
        </Stack>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Approved budget', 'Bs 12.4M'],
            ['Executed', 'Bs 8.1M'],
            ['Pending review', '14 requests'],
          ].map(([label, value]) => (
            <Card key={label}>
              <CardHeader>
                <CardDescription>{label}</CardDescription>
                <CardTitle>{value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Stack>
    </Container>
  ),
}
