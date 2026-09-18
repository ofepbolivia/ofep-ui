import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormControl, FormDescription, FormField, FormLabel, Textarea } from '../../../src'

const meta = {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component:
          'Multi-line text input. Turns destructive through `aria-invalid="true"`. Place inside `FormControl` to wire label, description and error. Set `showCount` with `maxLength` to render an optional character counter pinned to the bottom-right corner.',
      },
    },
  },
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <FormField className="w-96">
      <FormLabel>Your message</FormLabel>
      <FormControl>
        <Textarea rows={3} placeholder="Write your thoughts here..." />
      </FormControl>
    </FormField>
  ),
}

export const WithHelpText: Story = {
  render: () => (
    <FormField className="w-96">
      <FormLabel>Message</FormLabel>
      <FormControl>
        <Textarea rows={3} placeholder="Add context for the reviewer" />
      </FormControl>
      <FormDescription>Include any dates, references, or relevant details.</FormDescription>
    </FormField>
  ),
}

export const WithCharacterCount: Story = {
  render: () => (
    <FormField className="w-96">
      <FormLabel>Message</FormLabel>
      <FormControl>
        <Textarea rows={3} maxLength={500} showCount placeholder="Write your thoughts here..." />
      </FormControl>
    </FormField>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Textarea className="w-96" value="Disabled textarea" disabled readOnly />
  ),
}
