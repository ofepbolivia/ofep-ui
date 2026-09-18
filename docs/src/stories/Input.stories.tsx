import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormControl, FormField, FormLabel, Input } from '../../../src'

const meta = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          'Text input. `size` supports `sm | md | lg`. Turns destructive through `aria-invalid="true"`. Place inside `FormControl` to wire label, description and error.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Type here',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="grid w-80 gap-5">
      <FormField>
        <FormLabel>Small Input</FormLabel>
        <FormControl>
          <Input size="sm" placeholder="Small input" required />
        </FormControl>
      </FormField>
      <FormField>
        <FormLabel>Base Input</FormLabel>
        <FormControl>
          <Input size="md" placeholder="Base input" required />
        </FormControl>
      </FormField>
      <FormField>
        <FormLabel>Large Input</FormLabel>
        <FormControl>
          <Input size="lg" placeholder="Large input" required />
        </FormControl>
      </FormField>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="grid w-80 gap-3">
      <Input aria-label="Disabled input" value="Disabled input" disabled readOnly />
      <Input aria-label="Disabled readonly input" value="Disabled readonly input" disabled readOnly />
    </div>
  ),
}
