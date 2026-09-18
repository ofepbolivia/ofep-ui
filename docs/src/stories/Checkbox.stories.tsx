import type { Meta, StoryObj } from '@storybook/react-vite'
import { Cpu, HardDrive, MemoryStick } from 'lucide-react'
import { Checkbox, Heading, Label, Stack, Text } from '../../../src'

const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'Boolean control built on the Radix checkbox primitive. Pair with `Label` through matching `id`/`htmlFor`. For option cards, drive the container state with `has-[[data-state=checked]]`. Custom colors are set with `data-[state=checked]:*` utilities.',
      },
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-default" {...args} />
      <Label htmlFor="checkbox-default">Accept terms and conditions</Label>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <Stack gap="sm">
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-unchecked" />
        <Label htmlFor="checkbox-unchecked">Unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-checked" defaultChecked />
        <Label htmlFor="checkbox-checked">Checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-disabled" disabled />
        <Label htmlFor="checkbox-disabled">Disabled</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-disabled-checked" disabled defaultChecked />
        <Label htmlFor="checkbox-disabled-checked">Disabled checked</Label>
      </div>
    </Stack>
  ),
}

export const WithHelperText: Story = {
  render: () => (
    <div className="flex items-start gap-2">
      <Checkbox
        id="checkbox-helper"
        aria-describedby="checkbox-helper-text"
        className="mt-0.5"
      />
      <div className="grid gap-1">
        <Label htmlFor="checkbox-helper">Free shipping</Label>
        <Text id="checkbox-helper-text" size="xs" tone="secondary">
          For orders shipped from $25 in books or $29 in other categories.
        </Text>
      </div>
    </div>
  ),
}

export const OptionCards: Story = {
  render: () => (
    <Stack gap="sm" className="max-w-md">
      <Label
        htmlFor="option-memory"
        className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 font-normal has-[[data-state=checked]]:border-border-strong has-[[data-state=checked]]:bg-surface-muted"
      >
        <Checkbox id="option-memory" name="option" />
        <span className="grid gap-0.5">
          <span className="font-medium text-foreground">16GB unified memory</span>
          <span className="text-muted-foreground">
            Seamlessly handle multitasking and large apps.
          </span>
        </span>
      </Label>
      <Label
        htmlFor="option-storage"
        className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 font-normal has-[[data-state=checked]]:border-border-strong has-[[data-state=checked]]:bg-surface-muted"
      >
        <Checkbox id="option-storage" name="option" defaultChecked />
        <span className="grid gap-0.5">
          <span className="font-medium text-foreground">1TB SSD storage</span>
          <span className="text-muted-foreground">
            Get ultra-fast storage with 1TB of SSD space.
          </span>
        </span>
      </Label>
    </Stack>
  ),
}

export const OptionCardsWithIcon: Story = {
  render: () => (
    <Stack gap="sm" className="max-w-md">
      <Label
        htmlFor="option-icon-memory"
        className="flex items-start justify-between gap-3 rounded-lg border border-border bg-surface p-4 font-normal has-[[data-state=checked]]:border-border-strong has-[[data-state=checked]]:bg-surface-muted"
      >
        <span className="grid gap-1">
          <MemoryStick className="mb-1 size-5 text-muted-foreground" aria-hidden="true" />
          <span className="font-medium text-foreground">16GB unified memory</span>
          <span className="text-muted-foreground">
            Seamlessly handle multitasking and large apps.
          </span>
        </span>
        <Checkbox id="option-icon-memory" name="option-icon" defaultChecked />
      </Label>
      <Label
        htmlFor="option-icon-storage"
        className="flex items-start justify-between gap-3 rounded-lg border border-border bg-surface p-4 font-normal has-[[data-state=checked]]:border-border-strong has-[[data-state=checked]]:bg-surface-muted"
      >
        <span className="grid gap-1">
          <HardDrive className="mb-1 size-5 text-muted-foreground" aria-hidden="true" />
          <span className="font-medium text-foreground">1TB SSD storage</span>
          <span className="text-muted-foreground">
            Get ultra-fast storage with 1TB of SSD space.
          </span>
        </span>
        <Checkbox id="option-icon-storage" name="option-icon" />
      </Label>
      <Label
        htmlFor="option-icon-chip"
        className="flex items-start justify-between gap-3 rounded-lg border border-border bg-surface p-4 font-normal has-[[data-state=checked]]:border-border-strong has-[[data-state=checked]]:bg-surface-muted"
      >
        <span className="grid gap-1">
          <Cpu className="mb-1 size-5 text-muted-foreground" aria-hidden="true" />
          <span className="font-medium text-foreground">10-core CPU</span>
          <span className="text-muted-foreground">
            Built for demanding institutional workloads.
          </span>
        </span>
        <Checkbox id="option-icon-chip" name="option-icon" />
      </Label>
    </Stack>
  ),
}

export const VerticalList: Story = {
  render: () => (
    <div className="grid w-56 gap-2">
      <Heading as="h3" size="sm">
        Technology
      </Heading>
      <ul className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-surface">
        <li>
          <Label
            htmlFor="list-vue"
            className="flex items-center gap-2 px-3 py-2.5 font-normal has-[[data-state=checked]]:bg-surface-muted"
          >
            <Checkbox id="list-vue" name="technology" />
            <span className="font-medium text-foreground">Vue JS</span>
          </Label>
        </li>
        <li>
          <Label
            htmlFor="list-react"
            className="flex items-center gap-2 px-3 py-2.5 font-normal has-[[data-state=checked]]:bg-surface-muted"
          >
            <Checkbox id="list-react" name="technology" />
            <span className="font-medium text-foreground">React</span>
          </Label>
        </li>
        <li>
          <Label
            htmlFor="list-angular"
            className="flex items-center gap-2 px-3 py-2.5 font-normal has-[[data-state=checked]]:bg-surface-muted"
          >
            <Checkbox id="list-angular" name="technology" />
            <span className="font-medium text-foreground">Angular</span>
          </Label>
        </li>
        <li>
          <Label
            htmlFor="list-laravel"
            className="flex items-center gap-2 px-3 py-2.5 font-normal has-[[data-state=checked]]:bg-surface-muted"
          >
            <Checkbox id="list-laravel" name="technology" />
            <span className="font-medium text-foreground">Laravel</span>
          </Label>
        </li>
      </ul>
    </div>
  ),
}

export const HorizontalList: Story = {
  render: () => (
    <div className="grid w-full max-w-2xl gap-2">
      <Heading as="h3" size="sm">
        Identification
      </Heading>
      <ul className="grid overflow-hidden rounded-lg border border-border bg-surface sm:flex">
        <li className="border-b border-border sm:border-b-0 sm:border-r">
          <Label
            htmlFor="row-vue"
            className="flex items-center gap-2 px-3 py-2.5 font-normal has-[[data-state=checked]]:bg-surface-muted"
          >
            <Checkbox id="row-vue" name="identification" />
            <span className="font-medium text-foreground">Vue JS</span>
          </Label>
        </li>
        <li className="border-b border-border sm:border-b-0 sm:border-r">
          <Label
            htmlFor="row-react"
            className="flex items-center gap-2 px-3 py-2.5 font-normal has-[[data-state=checked]]:bg-surface-muted"
          >
            <Checkbox id="row-react" name="identification" />
            <span className="font-medium text-foreground">React</span>
          </Label>
        </li>
        <li className="border-b border-border sm:border-b-0 sm:border-r">
          <Label
            htmlFor="row-angular"
            className="flex items-center gap-2 px-3 py-2.5 font-normal has-[[data-state=checked]]:bg-surface-muted"
          >
            <Checkbox id="row-angular" name="identification" />
            <span className="font-medium text-foreground">Angular</span>
          </Label>
        </li>
        <li>
          <Label
            htmlFor="row-laravel"
            className="flex items-center gap-2 px-3 py-2.5 font-normal has-[[data-state=checked]]:bg-surface-muted"
          >
            <Checkbox id="row-laravel" name="identification" />
            <span className="font-medium text-foreground">Laravel</span>
          </Label>
        </li>
      </ul>
    </div>
  ),
}

export const Inline: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="inline-1" />
        <Label htmlFor="inline-1">Inline 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="inline-2" />
        <Label htmlFor="inline-2">Inline 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="inline-3" defaultChecked />
        <Label htmlFor="inline-3">Inline checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="inline-4" disabled />
        <Label htmlFor="inline-4">Inline disabled</Label>
      </div>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="color-primary" defaultChecked />
        <Label htmlFor="color-primary">Primary</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="color-success"
          defaultChecked
          className="data-[state=checked]:border-success data-[state=checked]:bg-success data-[state=checked]:text-success-foreground"
        />
        <Label htmlFor="color-success">Success</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="color-warning"
          defaultChecked
          className="data-[state=checked]:border-warning data-[state=checked]:bg-warning data-[state=checked]:text-warning-foreground"
        />
        <Label htmlFor="color-warning">Warning</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="color-info"
          defaultChecked
          className="data-[state=checked]:border-info data-[state=checked]:bg-info data-[state=checked]:text-info-foreground"
        />
        <Label htmlFor="color-info">Info</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="color-accent"
          defaultChecked
          className="data-[state=checked]:border-accent data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground"
        />
        <Label htmlFor="color-accent">Accent</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="color-destructive"
          defaultChecked
          className="data-[state=checked]:border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground"
        />
        <Label htmlFor="color-destructive">Destructive</Label>
      </div>
    </div>
  ),
}
