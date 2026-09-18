import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileUpload } from '../../../src'

const meta = {
  title: 'Forms/FileUpload',
  component: FileUpload,
  parameters: {
    docs: {
      description: {
        component:
          'Dropzone-styled file field built on a native `<input type="file">`. Pass `title`, `description`, `action` and `icon` to customize the copy, or keep the institutional defaults. `disabled` dims the dropzone and disables the input.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof FileUpload>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <FileUpload className="max-w-md" />,
}

export const CustomCopy: Story = {
  render: () => (
    <FileUpload
      className="max-w-md"
      title="Upload the resolution"
      description="Signed PDF up to 5 MB."
      action="Select document"
    />
  ),
}

export const Disabled: Story = {
  render: () => <FileUpload className="max-w-md" disabled />,
}
