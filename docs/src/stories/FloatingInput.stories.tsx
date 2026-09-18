import type { Meta, StoryObj } from '@storybook/react-vite'
import { MailIcon, SearchIcon, UserCircleIcon } from 'lucide-react'
import {
  FloatingInput,
  FormControl,
  FormDescription,
  FormField,
  FormMessage,
  Stack,
} from '../../../src'

const meta = {
  title: 'Forms/FloatingInput',
  component: FloatingInput,
  parameters: {
    docs: {
      description: {
        component:
          'Self-contained field whose label floats over the border when focused or filled, and rests inside when empty. It owns the `placeholder=" "` trick internally, so it does not accept a visible `placeholder` — pass text through `label`. Forwards `id`, `aria-describedby` and `aria-invalid` to the native input, so it works inside `FormControl`. Inside `FormField`, do not add a `FormLabel`. `size` supports `sm | md | lg`.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof FloatingInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Full name',
  },
}

export const WithIcon: Story = {
  args: {
    label: 'Email address',
    icon: <MailIcon aria-hidden="true" />,
  },
}

export const Sizes: Story = {
  args: {
    label: 'Search',
  },
  render: () => (
    <Stack gap="md" className="w-80">
      <FloatingInput size="sm" label="Small" icon={<SearchIcon aria-hidden="true" />} />
      <FloatingInput size="md" label="Base" icon={<SearchIcon aria-hidden="true" />} />
      <FloatingInput size="lg" label="Large" icon={<SearchIcon aria-hidden="true" />} />
    </Stack>
  ),
}

export const Filled: Story = {
  args: {
    label: 'Username',
    icon: <UserCircleIcon aria-hidden="true" />,
    defaultValue: 'jane.doe',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    defaultValue: 'Read only value',
  },
}

export const Invalid: Story = {
  args: {
    label: 'Email address',
    icon: <MailIcon aria-hidden="true" />,
    invalid: true,
    defaultValue: 'not-an-email',
  },
}

export const InFormField: Story = {
  args: {
    label: 'Applicant',
  },
  render: () => (
    <div className="flex w-80 flex-col gap-5">
      <FormField>
        <FormControl>
          <FloatingInput label="Applicant" icon={<UserCircleIcon aria-hidden="true" />} />
        </FormControl>
        <FormDescription>The name must match the identity document.</FormDescription>
      </FormField>
      <FormField invalid>
        <FormControl>
          <FloatingInput label="Email" type="email" icon={<MailIcon aria-hidden="true" />} defaultValue="not-an-email" />
        </FormControl>
        <FormMessage>Enter a valid email address.</FormMessage>
      </FormField>
    </div>
  ),
}
