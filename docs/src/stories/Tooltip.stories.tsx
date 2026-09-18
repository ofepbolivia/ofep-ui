import type { Meta, StoryObj } from '@storybook/react-vite'
import { InfoIcon, Trash2Icon } from 'lucide-react'
import {
  Button,
  Stack,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../../src'

const meta: Meta<typeof TooltipContent> = {
  title: 'Components/Tooltip',
  component: TooltipContent,
  parameters: {
    docs: {
      description: {
        component:
          'Short label on hover or keyboard focus. Wrap the tree in `TooltipProvider`, then use `Tooltip` > `TooltipTrigger` (with `asChild`) + `TooltipContent`. Use `side` to control placement. Icon-only triggers still need their own `aria-label`.',
      },
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={300}>
        <div className="flex min-h-48 items-center justify-center p-8">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Default tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>Tooltip content</TooltipContent>
    </Tooltip>
  ),
}

export const Positions: Story = {
  render: () => (
    <Stack direction="row" gap="sm" align="center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Shown above the trigger</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">Shown on the right</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Shown below the trigger</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">Shown on the left</TooltipContent>
      </Tooltip>
    </Stack>
  ),
}

export const IconButtons: Story = {
  render: () => (
    <Stack direction="row" gap="sm" align="center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="tertiary" aria-label="More information">
            <InfoIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>More information about this field</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="icon" variant="destructive" aria-label="Delete record">
            <Trash2Icon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Delete this record permanently</TooltipContent>
      </Tooltip>
    </Stack>
  ),
}

export const Animated: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button>Animated tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>Tooltip content</TooltipContent>
    </Tooltip>
  ),
}
