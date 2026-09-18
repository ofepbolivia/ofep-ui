import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  DescriptionDetails,
  DescriptionItem,
  DescriptionList,
  DescriptionTerm,
} from '../../../src'

const meta = {
  title: 'Components/DescriptionList',
  component: DescriptionList,
  parameters: {
    docs: {
      description: {
        component:
          'Native `dl` for key/value pairs. Compose `DescriptionList` > `DescriptionItem` (`div`) with `DescriptionTerm` (`dt`) and `DescriptionDetails` (`dd`). Rows are separated with a token-backed divider and use no leading or trailing padding on the first and last item.',
      },
    },
  },
} satisfies Meta<typeof DescriptionList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="max-w-md">
      <DescriptionList>
        <DescriptionItem>
          <DescriptionTerm>Email address</DescriptionTerm>
          <DescriptionDetails>yourname@flowbite.com</DescriptionDetails>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionTerm>Home address</DescriptionTerm>
          <DescriptionDetails>
            92 Miles Drive, Newark, NJ 07103, California, USA
          </DescriptionDetails>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionTerm>Phone number</DescriptionTerm>
          <DescriptionDetails>+00 123 456 789 / +12 345 678</DescriptionDetails>
        </DescriptionItem>
      </DescriptionList>
    </div>
  ),
}

export const InCard: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Applicant details</CardTitle>
      </CardHeader>
      <CardContent>
        <DescriptionList>
          <DescriptionItem>
            <DescriptionTerm>Full name</DescriptionTerm>
            <DescriptionDetails>Mariana Torres</DescriptionDetails>
          </DescriptionItem>
          <DescriptionItem>
            <DescriptionTerm>Document</DescriptionTerm>
            <DescriptionDetails>OFEP-2026-0142</DescriptionDetails>
          </DescriptionItem>
          <DescriptionItem>
            <DescriptionTerm>Status</DescriptionTerm>
            <DescriptionDetails>Under review</DescriptionDetails>
          </DescriptionItem>
        </DescriptionList>
      </CardContent>
    </Card>
  ),
}
