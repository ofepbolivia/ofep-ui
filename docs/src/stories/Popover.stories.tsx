import type { Meta, StoryObj } from '@storybook/react-vite'
import { Settings2Icon } from 'lucide-react'
import {
  Button,
  Input,
  Label,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from '../../../src'

const meta: Meta<typeof PopoverContent> = {
  title: 'Components/Popover',
  component: PopoverContent,
  parameters: {
    docs: {
      description: {
        component:
          'Floating disclosure panel built on the Radix popover primitive. Use `Popover` > `PopoverTrigger` (usually with `asChild`) + `PopoverContent`. Use it for lightweight interactive panels such as filters, settings, and pickers; dialogs remain for modal workflows.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-72 items-center justify-center p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">
          <Settings2Icon />
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <Stack gap="sm">
          <div>
            <p className="font-medium text-foreground">Display settings</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Adjust the visible density for this workspace.
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="popover-density">Density name</Label>
            <Input id="popover-density" defaultValue="Compact" />
          </div>
        </Stack>
      </PopoverContent>
    </Popover>
  ),
}

export const Positions: Story = {
  render: () => (
    <Stack direction="row" gap="sm" align="center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top">Shown above the trigger</PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary">Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right">Shown on the right</PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary">Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">Shown below the trigger</PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary">Left</Button>
        </PopoverTrigger>
        <PopoverContent side="left">Shown on the left</PopoverContent>
      </Popover>
    </Stack>
  ),
}

export const WithArrow: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>With arrow</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Popover content with directional arrow.</p>
        <PopoverArrow />
      </PopoverContent>
    </Popover>
  ),
}
