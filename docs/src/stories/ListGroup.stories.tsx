import type { Meta, StoryObj } from '@storybook/react-vite'
import { CalendarDaysIcon, FileTextIcon, ShieldCheckIcon } from 'lucide-react'
import {
  Badge,
  Button,
  ListGroup,
  ListGroupAction,
  ListGroupContent,
  ListGroupDescription,
  ListGroupIcon,
  ListGroupItem,
  ListGroupTitle,
  Stack,
} from '../../../src'

const meta = {
  title: 'Components/ListGroup',
  component: ListGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Grouped list built on native `ul`/`li` for compact rows that need a shared surface, optional icon, supporting text, and a trailing status or action. Use `List` for plain divided/prose lists and `UserList` for avatar identity rows.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'flush'],
    },
  },
} satisfies Meta<typeof ListGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ListGroup className="max-w-xl">
      <ListGroupItem>
        <ListGroupContent>
          <ListGroupTitle>Technical file</ListGroupTitle>
          <ListGroupDescription>OFEP-2026-0142</ListGroupDescription>
        </ListGroupContent>
        <ListGroupAction>
          <Badge variant="info">Open</Badge>
        </ListGroupAction>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupContent>
          <ListGroupTitle>Supporting documents</ListGroupTitle>
          <ListGroupDescription>3 files attached for committee review</ListGroupDescription>
        </ListGroupContent>
        <ListGroupAction>
          <Badge variant="success">Complete</Badge>
        </ListGroupAction>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupContent>
          <ListGroupTitle>Resolution</ListGroupTitle>
          <ListGroupDescription>Pending technical validation</ListGroupDescription>
        </ListGroupContent>
        <ListGroupAction>
          <Badge variant="warning">Pending</Badge>
        </ListGroupAction>
      </ListGroupItem>
    </ListGroup>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <ListGroup className="max-w-xl">
      <ListGroupItem>
        <ListGroupIcon>
          <FileTextIcon />
        </ListGroupIcon>
        <ListGroupContent>
          <ListGroupTitle>Request received</ListGroupTitle>
          <ListGroupDescription>Registered in the institutional records system</ListGroupDescription>
        </ListGroupContent>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupIcon>
          <ShieldCheckIcon />
        </ListGroupIcon>
        <ListGroupContent>
          <ListGroupTitle>Identity verified</ListGroupTitle>
          <ListGroupDescription>Citizen data matched the official registry</ListGroupDescription>
        </ListGroupContent>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupIcon>
          <CalendarDaysIcon />
        </ListGroupIcon>
        <ListGroupContent>
          <ListGroupTitle>Committee review</ListGroupTitle>
          <ListGroupDescription>Scheduled for the next validation session</ListGroupDescription>
        </ListGroupContent>
      </ListGroupItem>
    </ListGroup>
  ),
}

export const WithActions: Story = {
  render: () => (
    <ListGroup className="max-w-xl">
      <ListGroupItem interactive>
        <ListGroupContent>
          <ListGroupTitle>Certificate request</ListGroupTitle>
          <ListGroupDescription>Ready for final approval</ListGroupDescription>
        </ListGroupContent>
        <ListGroupAction>
          <Button size="sm" variant="secondary">
            Review
          </Button>
        </ListGroupAction>
      </ListGroupItem>
      <ListGroupItem interactive>
        <ListGroupContent>
          <ListGroupTitle>Payment evidence</ListGroupTitle>
          <ListGroupDescription>Requires manual validation</ListGroupDescription>
        </ListGroupContent>
        <ListGroupAction>
          <Button size="sm" variant="secondary">
            Open
          </Button>
        </ListGroupAction>
      </ListGroupItem>
    </ListGroup>
  ),
}

export const Flush: Story = {
  render: () => (
    <Stack className="max-w-xl" gap="sm">
      <ListGroup variant="flush">
        <ListGroupItem>
          <ListGroupContent>
            <ListGroupTitle>Created</ListGroupTitle>
            <ListGroupDescription>March 12, 2026 at 09:18</ListGroupDescription>
          </ListGroupContent>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupContent>
            <ListGroupTitle>Last update</ListGroupTitle>
            <ListGroupDescription>March 14, 2026 at 16:42</ListGroupDescription>
          </ListGroupContent>
        </ListGroupItem>
      </ListGroup>
    </Stack>
  ),
}
