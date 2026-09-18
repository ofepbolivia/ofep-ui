import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Stack,
} from '../../../src'

const meta = {
  title: 'Components/Dialog',
  component: DialogContent,
  parameters: {
    docs: {
      description: {
        component:
          'Modal window that renders the page underneath inert. Compose `Dialog` > `DialogTrigger` + `DialogContent`, and always include `DialogTitle` and `DialogDescription` for screen readers. `DialogContent` portals to the body and traps focus. `size` supports `sm | md | lg | xl | 2xl | full` and defaults to `lg`.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
  },
} satisfies Meta<typeof DialogContent>

export default meta

type Story = StoryObj<typeof meta>

export const Confirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open confirmation</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Submit request?</DialogTitle>
          <DialogDescription>
            The request will be sent to the next review stage. You can still cancel before submitting.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack gap="sm" direction="row" className="flex-wrap">
      {(['sm', 'md', 'lg', 'xl', '2xl', 'full'] as const).map((size) => (
        <Dialog key={size}>
          <DialogTrigger asChild>
            <Button variant="secondary">{size}</Button>
          </DialogTrigger>
          <DialogContent size={size}>
            <DialogHeader>
              <DialogTitle>Size {size}</DialogTitle>
              <DialogDescription>
                This dialog uses the {size} size variant of DialogContent.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </Stack>
  ),
}
