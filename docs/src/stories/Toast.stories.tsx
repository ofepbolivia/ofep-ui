import type { Decorator, Meta, StoryObj } from '@storybook/react-vite'
import {
  Button,
  Stack,
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastIcon,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toaster,
  toast,
} from '../../../src'

const withFullHeightCanvas: Decorator = (Story) => (
  <div className="min-h-[55vh] [contain:paint]">
    <Story />
  </div>
)

const meta = {
  title: 'Components/Toast',
  component: Toast,
  decorators: [withFullHeightCanvas],
  parameters: {
    docs: {
      description: {
        component:
          'Transient message built on the Radix toast primitive. Mount `<Toaster />` once at the root and call the imperative `toast()` helper from anywhere — no provider wrapping required. Variants: `neutral`, `success`, `destructive`, `warning`, `info`. For full control use the declarative parts inside `ToastProvider` and always mount a `ToastViewport`.',
      },
    },
  },
} satisfies Meta<typeof Toast>

export default meta

type Story = StoryObj<typeof meta>

export const Imperative: Story = {
  render: () => (
    <div>
      <Stack direction="row" gap="sm" align="center" className="flex-wrap">
        <Button variant="secondary" onClick={() => toast.success('Item moved successfully.')}>
          Success
        </Button>
        <Button variant="secondary" onClick={() => toast.error('Item has been deleted.')}>
          Danger
        </Button>
        <Button variant="secondary" onClick={() => toast.warning('Improve password difficulty.')}>
          Warning
        </Button>
        <Button variant="secondary" onClick={() => toast.info('A new policy update is available.')}>
          Info
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            toast({
              title: 'Request saved',
              description: 'The draft is available for later review.',
              action: <ToastAction altText="Undo">Undo</ToastAction>,
            })
          }
        >
          With action
        </Button>
      </Stack>
      <Toaster />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <ToastProvider duration={600000}>
      <Toast variant="success">
        <ToastIcon />
        <div className="flex flex-1 flex-col gap-1">
          <ToastTitle>Item moved successfully.</ToastTitle>
          <ToastDescription>The record is now in the archive.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast variant="destructive">
        <ToastIcon />
        <div className="flex flex-1 flex-col gap-1">
          <ToastTitle>Item has been deleted.</ToastTitle>
          <ToastDescription>This action cannot be undone.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast variant="warning">
        <ToastIcon />
        <div className="flex flex-1 flex-col gap-1">
          <ToastTitle>Improve password difficulty.</ToastTitle>
          <ToastDescription>Add numbers and symbols to your password.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast variant="info">
        <ToastIcon />
        <div className="flex flex-1 flex-col gap-1">
          <ToastTitle>New policy update</ToastTitle>
          <ToastDescription>The regulation was updated for the current fiscal year.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <Toast variant="neutral">
        <ToastIcon />
        <div className="flex flex-1 flex-col gap-1">
          <ToastTitle>Scheduled maintenance</ToastTitle>
          <ToastDescription>The platform will be unavailable on Saturday.</ToastDescription>
        </div>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
}

export const WithAction: Story = {
  render: () => (
    <ToastProvider duration={600000}>
      <Toast>
        <ToastIcon />
        <div className="flex flex-1 flex-col gap-1">
          <ToastTitle>Request submitted</ToastTitle>
          <ToastDescription>You can still revert it before the next review stage.</ToastDescription>
        </div>
        <ToastAction altText="Undo submission">Undo</ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  ),
}
