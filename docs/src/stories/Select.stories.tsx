import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '../../../src'

const meta = {
  title: 'Forms/Select',
  component: SelectTrigger,
  parameters: {
    docs: {
      description: {
        component:
          'Dropdown selection built on the Radix select primitive. Compose `Select` > `SelectTrigger` + `SelectValue` + `SelectContent`, with `SelectItem`, `SelectGroup`, `SelectLabel` and `SelectSeparator`. `SelectTrigger` supports `size="sm" | "md" | "lg"` and turns destructive through `aria-invalid="true"`.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof SelectTrigger>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Select a department" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="citizen">Citizen services</SelectItem>
        <SelectItem value="finance">Finance</SelectItem>
        <SelectItem value="legal">Legal affairs</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Select a request type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Certificates</SelectLabel>
          <SelectItem value="residence">Residence</SelectItem>
          <SelectItem value="income">Income</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Permits</SelectLabel>
          <SelectItem value="construction">Construction</SelectItem>
          <SelectItem value="events">Public events</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Select>
        <SelectTrigger size="sm" className="w-56">
          <SelectValue placeholder="Small" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="md" className="w-56">
          <SelectValue placeholder="Medium" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="lg" className="w-56">
          <SelectValue placeholder="Large" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">Option A</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const Invalid: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-56" aria-invalid="true">
        <SelectValue placeholder="Select a department" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="citizen">Citizen services</SelectItem>
      </SelectContent>
    </Select>
  ),
}
