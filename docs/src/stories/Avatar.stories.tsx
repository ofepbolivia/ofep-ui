import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar, AvatarFallback, AvatarImage, Stack, Text } from '../../../src'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          'Identity image with a fallback. `AvatarImage` renders the picture; `AvatarFallback` renders when the image is missing or still loading.',
      },
    },
  },
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const UserIdentity: Story = {
  render: () => (
    <Stack direction="row" gap="sm" align="center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="User profile" />
        <AvatarFallback>UI</AvatarFallback>
      </Avatar>
      <Stack gap="none">
        <Text size="sm">Mariana Torres</Text>
        <Text size="xs" tone="secondary">
          Services coordinator
        </Text>
      </Stack>
    </Stack>
  ),
}
