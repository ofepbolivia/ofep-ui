import type { Meta, StoryObj } from '@storybook/react-vite'
import { CloudUploadIcon } from 'lucide-react'
import {
  FileInput,
  FileUpload,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
} from '../../../src'

const meta = {
  title: 'Forms/FileInput',
  component: FileInput,
  parameters: {
    docs: {
      description: {
        component:
          'File picker input. `size` supports `sm | md | lg`. Pair with `FileUpload` for a drag-and-drop dropzone, or place inside `FormControl` to wire label, description and error.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof FileInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <FormField className="w-96">
      <FormLabel>Upload file</FormLabel>
      <FormControl>
        <FileInput />
      </FormControl>
    </FormField>
  ),
}

export const WithHelpText: Story = {
  render: () => (
    <FormField className="w-96">
      <FormLabel>Upload file</FormLabel>
      <FormControl>
        <FileInput />
      </FormControl>
      <FormDescription>SVG, PNG, JPG or GIF (MAX. 800x400px).</FormDescription>
    </FormField>
  ),
}

export const MultipleFiles: Story = {
  render: () => (
    <FormField className="w-96">
      <FormLabel>Upload multiple files</FormLabel>
      <FormControl>
        <FileInput multiple />
      </FormControl>
    </FormField>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="grid w-96 gap-5">
      <FormField>
        <FormLabel>Small file input</FormLabel>
        <FormControl>
          <FileInput size="sm" />
        </FormControl>
      </FormField>
      <FormField>
        <FormLabel>Base file input</FormLabel>
        <FormControl>
          <FileInput size="md" />
        </FormControl>
      </FormField>
      <FormField>
        <FormLabel>Large file input</FormLabel>
        <FormControl>
          <FileInput size="lg" />
        </FormControl>
      </FormField>
    </div>
  ),
}

export const Dropzone: Story = {
  render: () => (
    <FileUpload
      className="h-64 max-w-xl flex-col items-center justify-center text-center"
      icon={<CloudUploadIcon className="size-8" aria-hidden="true" />}
      title={
        <>
          <span className="font-semibold">Click to upload</span> or drag and drop
        </>
      }
      description="SVG, PNG, JPG or GIF (MAX. 800x400px)"
      action={null}
    />
  ),
}
