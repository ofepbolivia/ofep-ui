import type { Meta, StoryObj } from '@storybook/react-vite'
import { MailIcon, UserCircleIcon } from 'lucide-react'
import { InputGroup, InputGroupInput, InputGroupText, Label, Stack } from '../../../src'

const meta = {
  title: 'Forms/InputGroup',
  component: InputGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Composes an input with leading or trailing text and icons. Use `InputGroupText` for addons and `InputGroupInput` for the field itself.',
      },
    },
  },
} satisfies Meta<typeof InputGroup>

export default meta

type Story = StoryObj<typeof meta>

export const EmailWithIcon: Story = {
  render: () => (
    <Stack gap="sm" className="w-80">
      <Label htmlFor="email-with-icon">Your Email</Label>
      <InputGroup>
        <InputGroupText>
          <MailIcon aria-hidden="true" />
        </InputGroupText>
        <InputGroupInput id="email-with-icon" type="email" placeholder="name@example.com" />
      </InputGroup>
    </Stack>
  ),
}

export const UsernameWithAddon: Story = {
  render: () => (
    <Stack gap="sm" className="w-80">
      <Label htmlFor="username-with-addon">Username</Label>
      <InputGroup>
        <InputGroupText className="min-w-10 border-r border-border bg-surface">
          <UserCircleIcon aria-hidden="true" />
        </InputGroupText>
        <InputGroupInput id="username-with-addon" placeholder="elonmusk" />
      </InputGroup>
    </Stack>
  ),
}

export const WebsitePrefix: Story = {
  render: () => (
    <Stack gap="sm" className="w-80">
      <Label htmlFor="website-prefix">Website</Label>
      <InputGroup>
        <InputGroupText className="border-r border-border bg-surface font-medium">
          https://
        </InputGroupText>
        <InputGroupInput id="website-prefix" placeholder="example.com" />
      </InputGroup>
    </Stack>
  ),
}
