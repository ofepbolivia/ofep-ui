import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { LogOut, Trash2, TriangleAlert } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Stack,
} from '../../../src'

const meta = {
  title: 'Components/AlertDialog',
  component: AlertDialogContent,
  parameters: {
    docs: {
      description: {
        component:
          'Modal that interrupts the user to confirm a consequential action. Wraps the Radix alert dialog primitive, so it exposes `role="alertdialog"` and is intentionally harder to dismiss than `Dialog`: there is no close button, clicking the overlay does nothing, and Escape is blocked by the component. The only way out is an explicit action.\n\n' +
          'Always include `AlertDialogTitle` and `AlertDialogDescription` for screen readers. `AlertDialogAction` and `AlertDialogCancel` reuse the `Button` variants, so pass `variant` (for example `destructive`) and `size` to style the decision. `size` supports `sm | md | lg | xl | 2xl | full` and defaults to `md`.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
  },
} satisfies Meta<typeof AlertDialogContent>

export default meta

type Story = StoryObj<typeof meta>

export const Destructive: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 aria-hidden="true" />
          Delete record
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this record?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. The record and its attachments will be permanently
            removed from the system.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const Confirmation: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Submit request</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Submit request?</AlertDialogTitle>
          <AlertDialogDescription>
            The request will be sent to the next review stage and can no longer be edited.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep editing</AlertDialogCancel>
          <AlertDialogAction>Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="warning">Sign out</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <div className="flex size-10 items-center justify-center rounded-full bg-warning-subtle text-warning">
            <TriangleAlert aria-hidden="true" className="size-5" />
          </div>
          <AlertDialogTitle>Sign out of the system?</AlertDialogTitle>
          <AlertDialogDescription>
            Any unsaved changes in the current form will be lost.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Stay</AlertDialogCancel>
          <AlertDialogAction variant="warning">
            <LogOut aria-hidden="true" />
            Sign out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const LongContent: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Open long confirmation</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Publish the consolidated report?</AlertDialogTitle>
          <AlertDialogDescription>
            Publishing makes the report visible to every corporation in the system and locks the
            current figures for the selected period.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          <li>Open observations will be marked as unresolved.</li>
          <li>The version number will be incremented automatically.</li>
          <li>Every responsible user will receive a notification.</li>
          <li>Downloading the previous version stays available for audit purposes.</li>
          <li>The report can be unpublished by an administrator within 24 hours.</li>
        </ul>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Publish</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Stack gap="sm" direction="row" align="center">
        <Button onClick={() => setOpen(true)}>Open programmatically</Button>
        <span className="text-sm text-muted-foreground">
          State: {open ? 'open' : 'closed'}
        </span>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm the operation</AlertDialogTitle>
              <AlertDialogDescription>
                This dialog is controlled with the `open` and `onOpenChange` props.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => setOpen(false)}>Confirm</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Stack>
    )
  },
}
