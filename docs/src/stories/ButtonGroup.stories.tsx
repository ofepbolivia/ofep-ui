import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronDown, Copy, Pencil, Share2, Trash2 } from 'lucide-react'
import { Button, ButtonGroup } from '../../../src'

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Merges adjacent buttons into a single control by collapsing the shared edge and flattening inner corners, so only the first and last stay rounded. Renders `role="group"`, so pass an `aria-label`. Use `orientation="vertical"` for a stacked group.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof ButtonGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <ButtonGroup aria-label="Account sections">
      <Button variant="secondary">Profile</Button>
      <Button variant="secondary">Settings</Button>
      <Button variant="secondary">Messages</Button>
    </ButtonGroup>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <ButtonGroup aria-label="Record actions">
      <Button variant="secondary">
        <Copy />
        Copy
      </Button>
      <Button variant="secondary">
        <Pencil />
        Edit
      </Button>
      <Button variant="secondary">
        <Share2 />
        Share
      </Button>
      <Button variant="destructive" aria-label="Delete">
        <Trash2 />
      </Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical" aria-label="Options">
      <Button variant="secondary">
        Option
        <ChevronDown />
      </Button>
      <Button variant="secondary">Another action</Button>
      <Button variant="secondary">Something else</Button>
    </ButtonGroup>
  ),
}

export const MixedVariants: Story = {
  render: () => (
    <ButtonGroup aria-label="Primary group">
      <Button>Save</Button>
      <Button variant="secondary">Duplicate</Button>
      <Button variant="destructive">Delete</Button>
    </ButtonGroup>
  ),
}
