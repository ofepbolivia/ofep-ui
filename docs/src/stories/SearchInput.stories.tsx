import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchInput } from '../../../src'

const meta = {
  title: 'Forms/SearchInput',
  component: SearchInput,
  parameters: {
    docs: {
      description: {
        component:
          'Search field with a built-in submit action. Use `showLabel` and `label` for a visible label; otherwise it renders an accessible label. Pass `onSubmit` to handle the query.',
      },
    },
  },
} satisfies Meta<typeof SearchInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <SearchInput className="w-96" onSubmit={(event) => event.preventDefault()} />,
}

export const WithVisibleLabel: Story = {
  render: () => (
    <SearchInput
      className="w-96"
      showLabel
      label="Search records"
      placeholder="Search by name or document"
      onSubmit={(event) => event.preventDefault()}
    />
  ),
}

export const CustomAction: Story = {
  render: () => (
    <SearchInput
      className="w-96"
      placeholder="Search requests"
      buttonLabel="Find"
      onSubmit={(event) => event.preventDefault()}
    />
  ),
}
