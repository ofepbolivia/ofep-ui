import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormControl, FormField, FormLabel, InputPassword } from '../../../src'

const meta = {
  title: 'Forms/InputPassword',
  component: InputPassword,
  parameters: {
    docs: {
      description: {
        component:
          'Password input with an accessible control to show or hide its value. `size` supports `sm | md | lg` and it can be placed inside `FormControl`.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof InputPassword>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <FormField className="w-80">
      <FormLabel>Password</FormLabel>
      <FormControl>
        <InputPassword placeholder="Enter your password" autoComplete="current-password" />
      </FormControl>
    </FormField>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="grid w-80 gap-5">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <FormField key={size} size={size}>
          <FormLabel>{size.toUpperCase()} password</FormLabel>
          <FormControl>
            <InputPassword placeholder="Enter your password" autoComplete="current-password" />
          </FormControl>
        </FormField>
      ))}
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'password',
    readOnly: true,
  },
}
