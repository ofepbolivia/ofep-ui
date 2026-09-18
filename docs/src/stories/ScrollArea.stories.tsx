import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ScrollArea,
  ScrollBar,
  Stack,
  Text,
} from '../../../src'

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    docs: {
      description: {
        component:
          'Custom cross-browser scrollbars over native scrolling. Add `ScrollBar orientation="horizontal"` for horizontal overflow; both axes can be combined.',
      },
    },
  },
} satisfies Meta<typeof ScrollArea>

export default meta

type Story = StoryObj<typeof meta>

type Stage = 'Approved' | 'Validation' | 'Technical review' | 'Pending evidence'

const stageBadge: Record<Stage, 'success' | 'info' | 'warning' | 'destructive'> = {
  Approved: 'success',
  Validation: 'info',
  'Technical review': 'warning',
  'Pending evidence': 'destructive',
}

const requests: { ref: string; title: string; stage: Stage }[] = [
  { ref: 'OFEP-2026-0142', title: 'Public enterprise assessment', stage: 'Validation' },
  { ref: 'OFEP-2026-0138', title: 'Infrastructure modernization', stage: 'Technical review' },
  { ref: 'OFEP-2026-0131', title: 'Procurement framework update', stage: 'Approved' },
  { ref: 'OFEP-2026-0127', title: 'Service catalog review', stage: 'Pending evidence' },
  { ref: 'OFEP-2026-0120', title: 'Annual budget alignment', stage: 'Approved' },
  { ref: 'OFEP-2026-0114', title: 'Digital signature rollout', stage: 'Validation' },
  { ref: 'OFEP-2026-0109', title: 'Interoperability agreement', stage: 'Technical review' },
  { ref: 'OFEP-2026-0103', title: 'Data governance policy', stage: 'Pending evidence' },
  { ref: 'OFEP-2026-0098', title: 'Contractor registry update', stage: 'Approved' },
]

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-56 w-full max-w-sm rounded-md border border-border">
      <Stack gap="none" className="p-2">
        {requests.map((request) => (
          <div
            key={request.ref}
            className="flex items-center justify-between gap-4 rounded-sm px-3 py-2.5 hover:bg-surface-muted"
          >
            <Stack gap="none">
              <Text size="sm">{request.title}</Text>
              <Text size="xs" tone="secondary">
                {request.ref}
              </Text>
            </Stack>
            <Badge variant={stageBadge[request.stage]}>{request.stage}</Badge>
          </div>
        ))}
      </Stack>
    </ScrollArea>
  ),
}

const stats = [
  { label: 'Pending reviews', value: '14' },
  { label: 'Approved this month', value: '32' },
  { label: 'Avg. resolution time', value: '6.2 days' },
  { label: 'Active workstreams', value: '9' },
  { label: 'Entities onboarded', value: '26' },
  { label: 'Open evidence requests', value: '5' },
]

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-full max-w-lg">
      <div className="flex w-max gap-4 p-1">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="w-44 shrink-0 rounded-md border border-border bg-surface-muted p-4"
          >
            <Text size="xs" tone="secondary">
              {stat.label}
            </Text>
            <Text className="mt-1 text-xl font-semibold">{stat.value}</Text>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

const deliverables: { name: string; owner: string; stage: Stage; due: string }[] = [
  { name: 'Annual institutional report', owner: 'Technical office', stage: 'Validation', due: '2026-10-30' },
  { name: 'Infrastructure modernization', owner: 'Digital services', stage: 'Technical review', due: '2026-11-12' },
  { name: 'Procurement framework update', owner: 'Legal office', stage: 'Approved', due: '2026-09-28' },
  { name: 'Service catalog review', owner: 'Operations', stage: 'Pending evidence', due: '2026-11-05' },
  { name: 'Digital signature rollout', owner: 'Digital services', stage: 'Validation', due: '2026-10-18' },
  { name: 'Data governance policy', owner: 'Legal office', stage: 'Pending evidence', due: '2026-11-20' },
  { name: 'Contractor registry update', owner: 'Technical office', stage: 'Approved', due: '2026-09-15' },
  { name: 'Interoperability agreement', owner: 'External affairs', stage: 'Technical review', due: '2026-12-01' },
]

export const BothAxes: Story = {
  render: () => (
    <ScrollArea className="h-64 w-full max-w-xl rounded-md border border-border">
      <div className="grid w-max min-w-full grid-cols-4 gap-x-8 gap-y-4 p-4">
        <Text size="xs" tone="secondary">Deliverable</Text>
        <Text size="xs" tone="secondary">Owner</Text>
        <Text size="xs" tone="secondary">Stage</Text>
        <Text size="xs" tone="secondary">Due date</Text>
        {deliverables.flatMap((deliverable) => [
          <Text key={`${deliverable.name}-name`} size="sm">
            {deliverable.name}
          </Text>,
          <Text key={`${deliverable.name}-owner`} size="sm">
            {deliverable.owner}
          </Text>,
          <Badge key={`${deliverable.name}-stage`} variant={stageBadge[deliverable.stage]} className="justify-self-start">
            {deliverable.stage}
          </Badge>,
          <Text key={`${deliverable.name}-due`} size="sm" tone="secondary">
            {deliverable.due}
          </Text>,
        ])}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

const decisions = [
  { date: 'Mon 08:30', text: 'Committee approved the validation methodology for the current package.' },
  { date: 'Tue 10:15', text: 'Requested supporting evidence on interoperability endpoints.' },
  { date: 'Wed 09:00', text: 'Resolution signed by the technical coordinator.' },
  { date: 'Thu 12:40', text: 'Registry updated with the new delivery schedule.' },
  { date: 'Fri 16:05', text: 'Pending internal review of the risk assessment report.' },
  { date: 'Mon 11:20', text: 'Reassigned ownership to the digital services office.' },
  { date: 'Tue 14:50', text: 'External agency confirmed integration availability.' },
  { date: 'Wed 08:10', text: 'Draft minutes distributed for committee comment.' },
]

export const InCard: Story = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Committee decisions</CardTitle>
        <CardDescription>Resolution log for the current review.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-48 w-full rounded-md border border-border">
          <Stack gap="none" className="p-2">
            {decisions.map((decision) => (
              <div key={decision.date} className="flex gap-3 px-3 py-2.5">
                <Text size="xs" tone="secondary" className="w-16 shrink-0 pt-0.5">
                  {decision.date}
                </Text>
                <Text size="sm">{decision.text}</Text>
              </div>
            ))}
          </Stack>
        </ScrollArea>
      </CardContent>
    </Card>
  ),
}