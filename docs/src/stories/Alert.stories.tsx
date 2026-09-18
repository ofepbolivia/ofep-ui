import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bell, CircleCheck, CircleX, Info, TriangleAlert } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle, Stack } from '../../../src'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          'Inline message banner. Variants: `neutral`, `info`, `success`, `warning`, `destructive`, `accent`. Pass an icon as the first child to render a leading icon that inherits the variant color; without an icon the title and description render edge to edge.',
      },
    },
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Variants: Story = {
  render: () => (
    <Stack gap="md" className="max-w-2xl">
      <Alert>
        <Bell />
        <AlertTitle>Request saved</AlertTitle>
        <AlertDescription>The draft is available for later review.</AlertDescription>
      </Alert>
      <Alert variant="info">
        <Info />
        <AlertTitle>New policy update</AlertTitle>
        <AlertDescription>The regulation was updated for the current fiscal year.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <CircleCheck />
        <AlertTitle>Approved</AlertTitle>
        <AlertDescription>The request completed the institutional workflow.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <TriangleAlert />
        <AlertTitle>Deadline approaching</AlertTitle>
        <AlertDescription>Submit supporting documents before the closing date.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleX />
        <AlertTitle>Action required</AlertTitle>
        <AlertDescription>Review the missing fields before continuing.</AlertDescription>
      </Alert>
    </Stack>
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <Stack gap="md" className="max-w-2xl">
      <Alert variant="success">
        <CircleCheck />
        <AlertTitle>Changes saved successfully.</AlertTitle>
      </Alert>
      <Alert variant="warning">
        <TriangleAlert />
        <AlertTitle>Your session expires in 5 minutes.</AlertTitle>
      </Alert>
    </Stack>
  ),
}

export const WithoutIcon: Story = {
  render: () => (
    <Stack gap="md" className="max-w-2xl">
      <Alert variant="info">
        <AlertTitle>Maintenance window</AlertTitle>
        <AlertDescription>
          The platform will be unavailable on Saturday from 22:00 to 23:00.
        </AlertDescription>
      </Alert>
    </Stack>
  ),
}
