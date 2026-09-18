import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox, Input, Label, Stack } from '../../../src'

const meta = {
  title: 'Forms/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component:
          'Accessible label built on the Radix label primitive. Associate it with a control through `htmlFor` matching the control `id`. It dims automatically when a peer control is disabled and turns destructive inside an invalid `FormField`.',
      },
    },
  },
  args: {
    children: 'Applicant name',
  },
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Stack gap="sm" className="w-80">
      <Label {...args} htmlFor="label-input" />
      <Input id="label-input" placeholder="Enter full name" />
    </Stack>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="label-checkbox" />
      <Label htmlFor="label-checkbox">Accept terms and conditions</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="label-disabled" disabled />
      <Label htmlFor="label-disabled">Unavailable option</Label>
    </div>
  ),
}
