import type { Meta, StoryObj } from '@storybook/react-vite'
import { Database } from 'lucide-react'
import { Label, Stack, Switch } from '../../../src'

const meta = {
  title: 'Forms/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          'On/off toggle built on the Radix switch primitive. Pair with `Label` through matching `id`/`htmlFor`. `size` supports `sm | md | lg`, and `aria-invalid="true"` turns the border destructive.',
      },
    },
  },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <label className="flex items-center gap-3 text-sm">
      <Switch id="switch-default" {...args} />
      <Label htmlFor="switch-default">Email notifications</Label>
    </label>
  ),
}

export const States: Story = {
  render: () => (
    <Stack gap="sm">
      <label className="flex items-center gap-3 text-sm">
        <Switch id="switch-on" defaultChecked />
        <Label htmlFor="switch-on">On</Label>
      </label>
      <label className="flex items-center gap-3 text-sm">
        <Switch id="switch-off" />
        <Label htmlFor="switch-off">Off</Label>
      </label>
      <label className="flex items-center gap-3 text-sm">
        <Switch id="switch-disabled" disabled />
        <Label htmlFor="switch-disabled">Disabled</Label>
      </label>
      <label className="flex items-center gap-3 text-sm">
        <Switch id="switch-disabled-checked" disabled defaultChecked />
        <Label htmlFor="switch-disabled-checked">Disabled checked</Label>
      </label>
      <label className="flex items-center gap-3 text-sm">
        <Switch id="switch-invalid" aria-invalid="true" />
        <Label htmlFor="switch-invalid">Invalid</Label>
      </label>
    </Stack>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Stack gap="sm" className="max-w-md">
      <Label
        htmlFor="switch-description-newsletter"
        className="flex w-full items-start gap-3 rounded-lg border border-border bg-surface p-4 font-normal"
      >
        <Switch
          id="switch-description-newsletter"
          defaultChecked
          className="mt-0.5"
        />
        <span className="grid gap-1">
          <span className="font-medium text-foreground">Weekly newsletter</span>
          <span className="text-muted-foreground">
            Save my credentials for easier sign-in in the future.
          </span>
        </span>
      </Label>
      <Label
        htmlFor="switch-description-credentials"
        className="flex w-full items-start gap-3 rounded-lg border border-border bg-surface p-4 font-normal"
      >
        <Switch id="switch-description-credentials" className="mt-0.5" />
        <span className="grid gap-1">
          <span className="font-medium text-foreground">Save credentials</span>
          <span className="text-muted-foreground">
            Keep me signed in on this device.
          </span>
        </span>
      </Label>
    </Stack>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Label
      htmlFor="switch-icon"
      className="flex w-full max-w-lg items-start justify-between gap-3 rounded-lg border border-border bg-surface p-4 font-normal"
    >
      <span className="grid gap-1">
        <Database className="mb-1 size-6 text-muted-foreground" aria-hidden="true" />
        <span className="font-medium text-foreground">Knowledge base</span>
        <span className="text-muted-foreground">
          Integrate your knowledge base and customer success seamlessly with your app.
        </span>
      </span>
      <Switch id="switch-icon" className="mt-0.5 shrink-0" />
    </Label>
  ),
}

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2">
        <Switch id="switch-color-primary" defaultChecked />
        <Label htmlFor="switch-color-primary">Primary</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id="switch-color-success"
          defaultChecked
          className="data-[state=checked]:bg-success"
        />
        <Label htmlFor="switch-color-success">Success</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id="switch-color-warning"
          defaultChecked
          className="data-[state=checked]:bg-warning"
        />
        <Label htmlFor="switch-color-warning">Warning</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id="switch-color-info"
          defaultChecked
          className="data-[state=checked]:bg-info"
        />
        <Label htmlFor="switch-color-info">Info</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id="switch-color-accent"
          defaultChecked
          className="data-[state=checked]:bg-accent"
        />
        <Label htmlFor="switch-color-accent">Accent</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id="switch-color-destructive"
          defaultChecked
          className="data-[state=checked]:bg-destructive"
        />
        <Label htmlFor="switch-color-destructive">Destructive</Label>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-2">
        <Switch id="switch-size-sm" size="sm" defaultChecked />
        <Label htmlFor="switch-size-sm">Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="switch-size-md" size="md" defaultChecked />
        <Label htmlFor="switch-size-md">Base</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="switch-size-lg" size="lg" defaultChecked />
        <Label htmlFor="switch-size-lg">Large</Label>
      </div>
    </div>
  ),
}
