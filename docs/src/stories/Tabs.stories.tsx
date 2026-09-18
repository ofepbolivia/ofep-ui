import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bell, CreditCard, Lock, User } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from '../../../src'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          'Layered content sections built on the Radix tabs primitive. `TabsList` has two variants: `underline` (default) and `vertical` (use with `orientation="vertical"` on `Tabs` for correct arrow-key navigation). `TabsTrigger` reads the variant from context, so set it once on the list.',
      },
    },
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Underline: Story = {
  render: () => (
    <Tabs defaultValue="dashboard" className="w-full max-w-lg">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="contacts">Contacts</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <Text size="sm">Public profile and identity information.</Text>
      </TabsContent>
      <TabsContent value="dashboard">
        <Text size="sm">Overview of your pending requests.</Text>
      </TabsContent>
      <TabsContent value="settings">
        <Text size="sm">Account preferences and security.</Text>
      </TabsContent>
      <TabsContent value="contacts">
        <Text size="sm">People and departments you work with.</Text>
      </TabsContent>
    </Tabs>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="dashboard" className="w-full max-w-lg">
      <TabsList>
        <TabsTrigger value="profile">
          <User />
          Profile
        </TabsTrigger>
        <TabsTrigger value="dashboard">
          <CreditCard />
          Dashboard
        </TabsTrigger>
        <TabsTrigger value="security">
          <Lock />
          Security
        </TabsTrigger>
        <TabsTrigger value="alerts">
          <Bell />
          Alerts
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <Text size="sm">Public profile and identity information.</Text>
      </TabsContent>
      <TabsContent value="dashboard">
        <Text size="sm">Overview of your pending requests.</Text>
      </TabsContent>
      <TabsContent value="security">
        <Text size="sm">Two-factor authentication and access keys.</Text>
      </TabsContent>
      <TabsContent value="alerts">
        <Text size="sm">Notifications and delivery preferences.</Text>
      </TabsContent>
    </Tabs>
  ),
}

export const InsideCard: Story = {
  render: () => (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Service request</CardTitle>
        <CardDescription>Review each section before submitting.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="summary" className="w-full">
          <TabsList>
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="summary">
            <Text size="sm">Request type: certificate of residence.</Text>
          </TabsContent>
          <TabsContent value="documents">
            <Text size="sm">Three supporting documents attached.</Text>
          </TabsContent>
          <TabsContent value="history">
            <Text size="sm">Last update: today at 09:40.</Text>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Tabs
      defaultValue="profile"
      orientation="vertical"
      className="flex w-full max-w-2xl flex-col gap-6 md:flex-row"
    >
      <TabsList variant="vertical" className="w-full md:w-56">
        <TabsTrigger value="profile">
          <User />
          Profile
        </TabsTrigger>
        <TabsTrigger value="billing">
          <CreditCard />
          Billing
        </TabsTrigger>
        <TabsTrigger value="security">
          <Lock />
          Security
        </TabsTrigger>
        <TabsTrigger value="alerts">
          <Bell />
          Alerts
        </TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="profile"
        className="flex-1 rounded-lg bg-surface-muted p-6"
      >
        <Text size="sm">Public profile and identity information.</Text>
      </TabsContent>
      <TabsContent
        value="billing"
        className="flex-1 rounded-lg bg-surface-muted p-6"
      >
        <Text size="sm">Payment methods and invoices.</Text>
      </TabsContent>
      <TabsContent
        value="security"
        className="flex-1 rounded-lg bg-surface-muted p-6"
      >
        <Text size="sm">Two-factor authentication and access keys.</Text>
      </TabsContent>
      <TabsContent
        value="alerts"
        className="flex-1 rounded-lg bg-surface-muted p-6"
      >
        <Text size="sm">Notifications and delivery preferences.</Text>
      </TabsContent>
    </Tabs>
  ),
}
