import type { Meta, StoryObj } from '@storybook/react-vite'
import { BriefcaseBusiness, ClipboardCheck, CreditCard, FileUser } from 'lucide-react'
import {
  Stepper,
  StepperContent,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperTitle,
} from '../../../src'

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'icon', 'detailed', 'breadcrumb', 'vertical'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Ordered progress indicator built on native `ol`/`li`. Radix Primitives does not provide a Stepper primitive, so this component stays presentational and semantic. Use `status="complete" | "current" | "upcoming" | "error"`; current items render `aria-current="step"`. Variants cover compact text, icon-only progress, detailed labels, breadcrumb-style steps, and vertical timelines.',
      },
    },
  },
} satisfies Meta<typeof Stepper>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Stepper>
      <StepperItem status="complete">
        <StepperContent className="flex items-center gap-2">
          <StepperIndicator size="sm" status="complete" />
          <StepperTitle>
            Personal <span className="hidden sm:inline">Info</span>
          </StepperTitle>
        </StepperContent>
      </StepperItem>
      <StepperItem status="current">
        <StepperContent className="flex items-center gap-2">
          <StepperIndicator size="sm" status="current">
            2
          </StepperIndicator>
          <StepperTitle>
            Account <span className="hidden sm:inline">Info</span>
          </StepperTitle>
        </StepperContent>
      </StepperItem>
      <StepperItem>
        <StepperContent className="flex items-center gap-2">
          <StepperIndicator size="sm">3</StepperIndicator>
          <StepperTitle>Confirmation</StepperTitle>
        </StepperContent>
      </StepperItem>
    </Stepper>
  ),
}

export const IconProgress: Story = {
  render: () => (
    <Stepper variant="icon">
      <StepperItem variant="icon" status="complete">
        <StepperIndicator size="lg" status="complete" />
      </StepperItem>
      <StepperItem variant="icon" status="current">
        <StepperIndicator size="lg" status="current">
          <FileUser aria-hidden="true" />
        </StepperIndicator>
      </StepperItem>
      <StepperItem variant="icon">
        <StepperIndicator size="lg">
          <ClipboardCheck aria-hidden="true" />
        </StepperIndicator>
      </StepperItem>
    </Stepper>
  ),
}

export const Detailed: Story = {
  render: () => (
    <Stepper variant="detailed">
      <StepperItem variant="detailed" status="complete">
        <StepperIndicator size="lg" status="complete" />
        <StepperContent>
          <StepperTitle>User info</StepperTitle>
          <StepperDescription>Applicant identity and contact data</StepperDescription>
        </StepperContent>
      </StepperItem>
      <StepperItem variant="detailed" status="current">
        <StepperIndicator size="lg" status="current">
          <BriefcaseBusiness aria-hidden="true" />
        </StepperIndicator>
        <StepperContent>
          <StepperTitle>Company info</StepperTitle>
          <StepperDescription>Business registration and legal address</StepperDescription>
        </StepperContent>
      </StepperItem>
      <StepperItem variant="detailed">
        <StepperIndicator size="lg">
          <CreditCard aria-hidden="true" />
        </StepperIndicator>
        <StepperContent>
          <StepperTitle>Payment info</StepperTitle>
          <StepperDescription>Fee confirmation before submission</StepperDescription>
        </StepperContent>
      </StepperItem>
    </Stepper>
  ),
}

export const Breadcrumb: Story = {
  render: () => (
    <Stepper variant="breadcrumb">
      <StepperItem variant="breadcrumb" status="complete">
        <StepperIndicator size="sm" status="complete" />
        <StepperTitle className="ms-2 truncate">
          Personal <span className="hidden sm:inline">Info</span>
        </StepperTitle>
      </StepperItem>
      <StepperItem variant="breadcrumb" status="current">
        <StepperIndicator size="sm" status="current">
          2
        </StepperIndicator>
        <StepperTitle className="ms-2 truncate">
          Account <span className="hidden sm:inline">Info</span>
        </StepperTitle>
      </StepperItem>
      <StepperItem variant="breadcrumb">
        <StepperIndicator size="sm">3</StepperIndicator>
        <StepperTitle className="ms-2 truncate">Review</StepperTitle>
      </StepperItem>
    </Stepper>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Stepper variant="vertical">
      <StepperItem variant="vertical" status="complete">
        <StepperIndicator status="complete" className="z-10 ring-4 ring-background" />
        <StepperContent>
          <StepperTitle>Personal Info</StepperTitle>
          <StepperDescription>Applicant identity was validated.</StepperDescription>
        </StepperContent>
      </StepperItem>
      <StepperItem variant="vertical" status="current">
        <StepperIndicator status="current" className="z-10 ring-4 ring-background">
          <FileUser aria-hidden="true" />
        </StepperIndicator>
        <StepperContent>
          <StepperTitle>Account Info</StepperTitle>
          <StepperDescription>Confirm access and account ownership.</StepperDescription>
        </StepperContent>
      </StepperItem>
      <StepperItem variant="vertical">
        <StepperIndicator className="z-10 ring-4 ring-background">
          <ClipboardCheck aria-hidden="true" />
        </StepperIndicator>
        <StepperContent>
          <StepperTitle>Review</StepperTitle>
          <StepperDescription>Check all files before final submission.</StepperDescription>
        </StepperContent>
      </StepperItem>
      <StepperItem variant="vertical">
        <StepperIndicator className="z-10 ring-4 ring-background">
          <ClipboardCheck aria-hidden="true" />
        </StepperIndicator>
        <StepperContent>
          <StepperTitle>Confirmation</StepperTitle>
          <StepperDescription>Receive the official receipt number.</StepperDescription>
        </StepperContent>
      </StepperItem>
    </Stepper>
  ),
}
