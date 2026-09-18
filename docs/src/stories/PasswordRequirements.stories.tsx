import type { Meta, StoryObj } from '@storybook/react-vite'
import * as React from 'react'
import {
  Input,
  Label,
  PasswordRequirements,
  Stack,
} from '../../../src'

const meta = {
  title: 'Components/PasswordRequirements',
  component: PasswordRequirements,
  parameters: {
    docs: {
      description: {
        component:
          'Password policy checklist. `requirements` is a list of `{ label, met }`. With `showStatus` each item renders a status icon (`success` when `met`, muted otherwise) instead of a plain bullet. `title` renders through `Heading`, and `titleAs` sets its level so document structure stays correct.',
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    titleAs: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    showStatus: { control: 'boolean' },
    requirements: { control: 'object' },
  },
  args: {
    title: 'Password requirements:',
    titleAs: 'h2',
    showStatus: false,
    requirements: [
      { id: 'length', label: 'At least 10 characters (and up to 100 characters)' },
      { id: 'lowercase', label: 'At least one lowercase character' },
      {
        id: 'special',
        label: 'Inclusion of at least one special character, e.g., ! @ # ?',
      },
    ],
  },
} satisfies Meta<typeof PasswordRequirements>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="max-w-md">
      <PasswordRequirements {...args} />
    </div>
  ),
}

export const WithStatus: Story = {
  args: { showStatus: true },
  render: (args) => (
    <div className="max-w-md">
      <PasswordRequirements
        {...args}
        requirements={[
          { id: 'length', label: 'At least 10 characters', met: true },
          { id: 'lowercase', label: 'At least one lowercase character', met: true },
          {
            id: 'special',
            label: 'At least one special character, e.g., ! @ # ?',
            met: false,
          },
        ]}
      />
    </div>
  ),
}

export const LiveValidation: Story = {
  render: () => {
    const [password, setPassword] = React.useState('')

    return (
      <Stack gap="md" className="max-w-md">
        <Stack gap="xs">
          <Label htmlFor="password-live">Password</Label>
          <Input
            id="password-live"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Stack>
        <PasswordRequirements
          title="Password requirements:"
          showStatus
          requirements={[
            { id: 'length', label: 'At least 10 characters', met: password.length >= 10 },
            {
              id: 'lowercase',
              label: 'At least one lowercase character',
              met: /[a-z]/.test(password),
            },
            {
              id: 'special',
              label: 'At least one special character, e.g., ! @ # ?',
              met: /[^A-Za-z0-9]/.test(password),
            },
          ]}
        />
      </Stack>
    )
  },
}
