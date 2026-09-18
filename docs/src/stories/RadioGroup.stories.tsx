import type { Meta, StoryObj } from '@storybook/react-vite'
import { Cpu, HardDrive, MemoryStick } from 'lucide-react'
import { Heading, Label, RadioGroup, RadioGroupItem, Stack, Text } from '../../../src'

const meta = {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          'Set of mutually exclusive options built on the Radix radio group primitive. Pair each `RadioGroupItem` with a `Label` through matching `id`/`htmlFor`. Arrow keys move between items.',
      },
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 'standard',
  },
  render: (args) => (
    <RadioGroup {...args} className="w-56">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="standard" id="priority-standard" />
        <Label htmlFor="priority-standard">Standard</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="express" id="priority-express" />
        <Label htmlFor="priority-express">Express</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="urgent" id="priority-urgent" />
        <Label htmlFor="priority-urgent">Urgent</Label>
      </div>
    </RadioGroup>
  ),
}

export const States: Story = {
  render: () => (
    <Stack gap="lg">
      <RadioGroup defaultValue="checked" className="w-56">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="unchecked" id="radio-unchecked" />
          <Label htmlFor="radio-unchecked">Unchecked</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="checked" id="radio-checked" />
          <Label htmlFor="radio-checked">Checked</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="disabled-checked" className="w-56">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="disabled" id="radio-disabled" disabled />
          <Label htmlFor="radio-disabled">Disabled</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="disabled-checked" id="radio-disabled-checked" disabled />
          <Label htmlFor="radio-disabled-checked">Disabled checked</Label>
        </div>
      </RadioGroup>
    </Stack>
  ),
}

export const WithHelperText: Story = {
  render: () => (
    <RadioGroup defaultValue="standard" className="w-80">
      <div className="flex items-start gap-2">
        <RadioGroupItem
          value="standard"
          id="radio-helper-standard"
          aria-describedby="radio-helper-standard-text"
          className="mt-0.5"
        />
        <div className="grid gap-1">
          <Label htmlFor="radio-helper-standard">Standard delivery</Label>
          <Text id="radio-helper-standard-text" size="xs" tone="secondary">
            Arrives in 5 to 7 business days.
          </Text>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <RadioGroupItem
          value="express"
          id="radio-helper-express"
          aria-describedby="radio-helper-express-text"
          className="mt-0.5"
        />
        <div className="grid gap-1">
          <Label htmlFor="radio-helper-express">Express delivery</Label>
          <Text id="radio-helper-express-text" size="xs" tone="secondary">
            Arrives in 1 to 2 business days.
          </Text>
        </div>
      </div>
    </RadioGroup>
  ),
}

export const OptionCards: Story = {
  render: () => (
    <RadioGroup defaultValue="memory" className="w-full max-w-md gap-2">
      <Label
        htmlFor="radio-option-memory"
        className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 font-normal has-[[data-state=checked]]:border-border-strong has-[[data-state=checked]]:bg-surface-muted"
      >
        <RadioGroupItem value="memory" id="radio-option-memory" />
        <span className="grid gap-0.5">
          <span className="font-medium text-foreground">16GB unified memory</span>
          <span className="text-muted-foreground">
            Seamlessly handle multitasking and large apps.
          </span>
        </span>
      </Label>
      <Label
        htmlFor="radio-option-storage"
        className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 font-normal has-[[data-state=checked]]:border-border-strong has-[[data-state=checked]]:bg-surface-muted"
      >
        <RadioGroupItem value="storage" id="radio-option-storage" />
        <span className="grid gap-0.5">
          <span className="font-medium text-foreground">1TB SSD storage</span>
          <span className="text-muted-foreground">
            Get ultra-fast storage with 1TB of SSD space.
          </span>
        </span>
      </Label>
    </RadioGroup>
  ),
}

export const OptionCardsWithIcon: Story = {
  render: () => (
    <RadioGroup defaultValue="memory" className="w-full max-w-md gap-2">
      <Label
        htmlFor="radio-icon-memory"
        className="flex items-start justify-between gap-3 rounded-lg border border-border bg-surface p-4 font-normal has-[[data-state=checked]]:border-border-strong has-[[data-state=checked]]:bg-surface-muted"
      >
        <span className="grid gap-1">
          <MemoryStick className="mb-1 size-5 text-muted-foreground" aria-hidden="true" />
          <span className="font-medium text-foreground">16GB unified memory</span>
          <span className="text-muted-foreground">
            Seamlessly handle multitasking and large apps.
          </span>
        </span>
        <RadioGroupItem value="memory" id="radio-icon-memory" />
      </Label>
      <Label
        htmlFor="radio-icon-storage"
        className="flex items-start justify-between gap-3 rounded-lg border border-border bg-surface p-4 font-normal has-[[data-state=checked]]:border-border-strong has-[[data-state=checked]]:bg-surface-muted"
      >
        <span className="grid gap-1">
          <HardDrive className="mb-1 size-5 text-muted-foreground" aria-hidden="true" />
          <span className="font-medium text-foreground">1TB SSD storage</span>
          <span className="text-muted-foreground">
            Get ultra-fast storage with 1TB of SSD space.
          </span>
        </span>
        <RadioGroupItem value="storage" id="radio-icon-storage" />
      </Label>
      <Label
        htmlFor="radio-icon-chip"
        className="flex items-start justify-between gap-3 rounded-lg border border-border bg-surface p-4 font-normal has-[[data-state=checked]]:border-border-strong has-[[data-state=checked]]:bg-surface-muted"
      >
        <span className="grid gap-1">
          <Cpu className="mb-1 size-5 text-muted-foreground" aria-hidden="true" />
          <span className="font-medium text-foreground">10-core CPU</span>
          <span className="text-muted-foreground">
            Built for demanding institutional workloads.
          </span>
        </span>
        <RadioGroupItem value="chip" id="radio-icon-chip" />
      </Label>
    </RadioGroup>
  ),
}

export const VerticalList: Story = {
  render: () => (
    <div className="grid w-56 gap-2">
      <Heading as="h3" size="sm">
        Priority
      </Heading>
      <RadioGroup
        defaultValue="standard"
        className="gap-0 divide-y divide-border overflow-hidden rounded-lg border border-border bg-surface"
      >
        <Label
          htmlFor="vlist-standard"
          className="flex items-center gap-2 px-3 py-2.5 font-normal has-[[data-state=checked]]:bg-surface-muted"
        >
          <RadioGroupItem value="standard" id="vlist-standard" />
          <span className="font-medium text-foreground">Standard</span>
        </Label>
        <Label
          htmlFor="vlist-express"
          className="flex items-center gap-2 px-3 py-2.5 font-normal has-[[data-state=checked]]:bg-surface-muted"
        >
          <RadioGroupItem value="express" id="vlist-express" />
          <span className="font-medium text-foreground">Express</span>
        </Label>
        <Label
          htmlFor="vlist-urgent"
          className="flex items-center gap-2 px-3 py-2.5 font-normal has-[[data-state=checked]]:bg-surface-muted"
        >
          <RadioGroupItem value="urgent" id="vlist-urgent" />
          <span className="font-medium text-foreground">Urgent</span>
        </Label>
        <Label
          htmlFor="vlist-critical"
          className="flex items-center gap-2 px-3 py-2.5 font-normal has-[[data-state=checked]]:bg-surface-muted"
        >
          <RadioGroupItem value="critical" id="vlist-critical" />
          <span className="font-medium text-foreground">Critical</span>
        </Label>
      </RadioGroup>
    </div>
  ),
}

export const HorizontalList: Story = {
  render: () => (
    <div className="grid w-full max-w-2xl gap-2">
      <Heading as="h3" size="sm">
        Priority
      </Heading>
      <RadioGroup
        defaultValue="standard"
        className="gap-0 overflow-hidden rounded-lg border border-border bg-surface sm:flex"
      >
        <Label
          htmlFor="hlist-standard"
          className="flex items-center gap-2 border-b border-border px-3 py-2.5 font-normal has-[[data-state=checked]]:bg-surface-muted sm:border-b-0 sm:border-r"
        >
          <RadioGroupItem value="standard" id="hlist-standard" />
          <span className="font-medium text-foreground">Standard</span>
        </Label>
        <Label
          htmlFor="hlist-express"
          className="flex items-center gap-2 border-b border-border px-3 py-2.5 font-normal has-[[data-state=checked]]:bg-surface-muted sm:border-b-0 sm:border-r"
        >
          <RadioGroupItem value="express" id="hlist-express" />
          <span className="font-medium text-foreground">Express</span>
        </Label>
        <Label
          htmlFor="hlist-urgent"
          className="flex items-center gap-2 border-b border-border px-3 py-2.5 font-normal has-[[data-state=checked]]:bg-surface-muted sm:border-b-0 sm:border-r"
        >
          <RadioGroupItem value="urgent" id="hlist-urgent" />
          <span className="font-medium text-foreground">Urgent</span>
        </Label>
        <Label
          htmlFor="hlist-critical"
          className="flex items-center gap-2 px-3 py-2.5 font-normal has-[[data-state=checked]]:bg-surface-muted"
        >
          <RadioGroupItem value="critical" id="hlist-critical" />
          <span className="font-medium text-foreground">Critical</span>
        </Label>
      </RadioGroup>
    </div>
  ),
}

export const Inline: Story = {
  render: () => (
    <RadioGroup
      defaultValue="standard"
      className="flex flex-wrap items-center gap-4"
    >
      <div className="flex items-center gap-2">
        <RadioGroupItem value="standard" id="inline-standard" />
        <Label htmlFor="inline-standard">Standard</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="express" id="inline-express" />
        <Label htmlFor="inline-express">Express</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="urgent" id="inline-urgent" />
        <Label htmlFor="inline-urgent">Urgent</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="critical" id="inline-critical" disabled />
        <Label htmlFor="inline-critical">Critical (unavailable)</Label>
      </div>
    </RadioGroup>
  ),
}

export const Colors: Story = {
  render: () => (
    <RadioGroup
      defaultValue="success"
      className="flex flex-wrap items-center gap-4"
    >
      <div className="flex items-center gap-2">
        <RadioGroupItem value="primary" id="radio-color-primary" />
        <Label htmlFor="radio-color-primary">Primary</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="success"
          id="radio-color-success"
          className="text-success data-[state=checked]:border-success"
        />
        <Label htmlFor="radio-color-success">Success</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="warning"
          id="radio-color-warning"
          className="text-warning data-[state=checked]:border-warning"
        />
        <Label htmlFor="radio-color-warning">Warning</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="info"
          id="radio-color-info"
          className="text-info data-[state=checked]:border-info"
        />
        <Label htmlFor="radio-color-info">Info</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="accent"
          id="radio-color-accent"
          className="text-accent data-[state=checked]:border-accent"
        />
        <Label htmlFor="radio-color-accent">Accent</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem
          value="destructive"
          id="radio-color-destructive"
          className="text-destructive data-[state=checked]:border-destructive"
        />
        <Label htmlFor="radio-color-destructive">Destructive</Label>
      </div>
    </RadioGroup>
  ),
}
