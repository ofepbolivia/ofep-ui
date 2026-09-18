import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  List,
  ListItem,
  Text,
} from '../../../src'

const meta = {
  title: 'Components/List',
  component: List,
  parameters: {
    docs: {
      description: {
        component:
          'List built on native `ul`/`li`. `variant` supports `divided` (default, rows separated by a rule), `disc` and `decimal` (typographic prose lists). `as` sets the element, so use `as="ol"` with `variant="decimal"` for ordered prose. `ListItem` defaults to a flex row for `divided`; pass `variant="prose"` on the item to match the prose list variants. For rows with an identity (avatar + secondary line), use `UserList`.',
      },
    },
  },
} satisfies Meta<typeof List>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <List className="max-w-md">
      <ListItem>Technical file OFEP-2026-0142</ListItem>
      <ListItem>Supporting documents</ListItem>
      <ListItem>Resolution</ListItem>
    </List>
  ),
}

export const WithValue: Story = {
  render: () => (
    <List className="max-w-md">
      <ListItem>
        <Text size="sm">Technical file</Text>
        <Text size="sm" tone="secondary">
          OFEP-2026-0142
        </Text>
      </ListItem>
      <ListItem>
        <Text size="sm">Supporting documents</Text>
        <Text size="sm" tone="secondary">
          3 files
        </Text>
      </ListItem>
      <ListItem>
        <Text size="sm">Resolution</Text>
        <Text size="sm" tone="secondary">
          Pending
        </Text>
      </ListItem>
    </List>
  ),
}

export const Prose: Story = {
  render: () => (
    <List variant="disc" className="max-w-md">
      <ListItem variant="prose">Technical file and supporting documents.</ListItem>
      <ListItem variant="prose">Written request signed by the interested party.</ListItem>
      <ListItem variant="prose">Proof of payment of the corresponding fee.</ListItem>
    </List>
  ),
}

export const Ordered: Story = {
  render: () => (
    <List as="ol" variant="decimal" className="max-w-md">
      <ListItem variant="prose">Submit the request through the online portal.</ListItem>
      <ListItem variant="prose">Attach the required documentation.</ListItem>
      <ListItem variant="prose">Wait for the technical committee resolution.</ListItem>
    </List>
  ),
}

export const InCard: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Review summary</CardTitle>
      </CardHeader>
      <CardContent>
        <List>
          <ListItem>
            <Text size="sm">Owner</Text>
            <Text size="sm" tone="secondary">
              Technical office
            </Text>
          </ListItem>
          <ListItem>
            <Text size="sm">Stage</Text>
            <Text size="sm" tone="secondary">
              Validation
            </Text>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  ),
}
