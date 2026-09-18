import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Fieldset,
  FieldsetDescription,
  FieldsetLegend,
  Input,
  Label,
  Stack,
} from '../../../src'

const meta = {
  title: 'Forms/Fieldset',
  component: Fieldset,
  parameters: {
    docs: {
      description: {
        component:
          'Groups related controls under a native `<fieldset>`. Compose with `FieldsetLegend` for the group label and `FieldsetDescription` for helper text. Setting `disabled` on the fieldset disables every control inside it.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Fieldset>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Fieldset className="max-w-md">
      <FieldsetLegend>Contact details</FieldsetLegend>
      <FieldsetDescription>How the office can reach the applicant.</FieldsetDescription>
      <Stack gap="sm">
        <Label htmlFor="fieldset-email">Email</Label>
        <Input id="fieldset-email" type="email" placeholder="name@example.com" />
      </Stack>
      <Stack gap="sm">
        <Label htmlFor="fieldset-phone">Phone</Label>
        <Input id="fieldset-phone" type="tel" placeholder="+1 555 000 0000" />
      </Stack>
    </Fieldset>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Fieldset className="max-w-md" disabled>
      <FieldsetLegend>Contact details</FieldsetLegend>
      <FieldsetDescription>The whole group is disabled.</FieldsetDescription>
      <Stack gap="sm">
        <Label htmlFor="fieldset-disabled-email">Email</Label>
        <Input id="fieldset-disabled-email" type="email" placeholder="name@example.com" />
      </Stack>
    </Fieldset>
  ),
}
