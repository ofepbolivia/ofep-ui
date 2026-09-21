import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
} from '../../../src'

const meta = {
  title: 'Forms/FormField',
  component: FormField,
  parameters: {
    docs: {
      description: {
        component:
          'Wires labels, controls, descriptions and errors together without a form library. Generates ids with `useId`; `FormControl` (a Radix `Slot`) injects `id`, `aria-describedby` and `aria-invalid` into the control. `size` supports `sm | md | lg` and drives both the label typography and the control, so a single prop keeps them in sync. Set `invalid` to color the label and control. `FormMessage` renders nothing when it has no children.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof FormField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <FormField className="w-80">
      <FormLabel>Applicant</FormLabel>
      <FormControl>
        <Input placeholder="Full name" />
      </FormControl>
      <FormDescription>The name must match the identity document.</FormDescription>
    </FormField>
  ),
}

export const WithError: Story = {
  render: () => (
    <FormField invalid className="w-80">
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input type="email" defaultValue="not-an-email" />
      </FormControl>
      <FormDescription>We only use it to contact you.</FormDescription>
      <FormMessage>Enter a valid email address.</FormMessage>
    </FormField>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-5">
      <FormField size="sm">
        <FormLabel>Small field</FormLabel>
        <FormControl>
          <Input placeholder="Small" />
        </FormControl>
        <FormDescription>The label follows the field size.</FormDescription>
      </FormField>
      <FormField size="md">
        <FormLabel>Base field</FormLabel>
        <FormControl>
          <Input placeholder="Base" />
        </FormControl>
        <FormDescription>The label follows the field size.</FormDescription>
      </FormField>
      <FormField size="lg">
        <FormLabel>Large field</FormLabel>
        <FormControl>
          <Input placeholder="Large" />
        </FormControl>
        <FormDescription>The label follows the field size.</FormDescription>
      </FormField>
    </div>
  ),
}

export const CompleteForm: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-5">
      <FormField>
        <FormLabel>Full name</FormLabel>
        <FormControl>
          <Input placeholder="Jane Doe" />
        </FormControl>
      </FormField>
      <FormField>
        <FormLabel>Department</FormLabel>
        <FormControl>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="citizen">Citizen services</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
            </SelectContent>
          </Select>
        </FormControl>
        <FormDescription>Routes the request to the right team.</FormDescription>
      </FormField>
      <FormField invalid>
        <FormLabel>Reference code</FormLabel>
        <FormControl>
          <Input defaultValue="ABC" />
        </FormControl>
        <FormMessage>The reference code must be 8 characters long.</FormMessage>
      </FormField>
      <FormField>
        <div className="flex items-center gap-3">
          <FormControl>
            <Switch />
          </FormControl>
          <FormLabel>Notify me by email</FormLabel>
        </div>
        <FormDescription>You will receive a copy of the resolution.</FormDescription>
      </FormField>
    </div>
  ),
}
