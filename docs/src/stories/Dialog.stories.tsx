import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Button,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  FormControl,
  FormField,
  FormLabel,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Stack,
} from '../../../src'

const meta = {
  title: 'Components/Dialog',
  component: DialogContent,
  parameters: {
    docs: {
      description: {
        component:
          'Modal window that renders the page underneath inert. Compose `Dialog` > `DialogTrigger` + `DialogContent`, and always include `DialogTitle` and `DialogDescription` for screen readers. `DialogContent` portals to the body and traps focus. `size` supports `sm | md | lg | xl | 2xl | full` and defaults to `lg`.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
  },
} satisfies Meta<typeof DialogContent>

export default meta

type Story = StoryObj<typeof meta>

export const Confirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open confirmation</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Submit request?</DialogTitle>
          <DialogDescription>
            The request will be sent to the next review stage. You can still cancel before submitting.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Stack gap="sm" direction="row" className="flex-wrap">
      {(['sm', 'md', 'lg', 'xl', '2xl', 'full'] as const).map((size) => (
        <Dialog key={size}>
          <DialogTrigger asChild>
            <Button variant="secondary">{size}</Button>
          </DialogTrigger>
          <DialogContent size={size}>
            <DialogHeader>
              <DialogTitle>Size {size}</DialogTitle>
              <DialogDescription>
                This dialog uses the {size} size variant of DialogContent.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </Stack>
  ),
}

export const RegistrationForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open registration</Button>
      </DialogTrigger>
      <DialogContent size="2xl">
        <DialogHeader>
          <DialogTitle>Create account</DialogTitle>
          <DialogDescription>
            Collect the required identity and contact information before creating the account.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="John" required />
              </FormControl>
            </FormField>
            <FormField>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" required />
              </FormControl>
            </FormField>
            <FormField>
              <FormLabel>Email address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john.doe@example.com" required />
              </FormControl>
            </FormField>
            <FormField>
              <FormLabel>Department</FormLabel>
              <FormControl>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="citizen-services">Citizen services</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="legal-affairs">Legal affairs</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormField>
            <FormField>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter password" required />
              </FormControl>
            </FormField>
            <FormField>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Confirm password" required />
              </FormControl>
            </FormField>
          </div>
          <FormField>
            <div className="flex items-start gap-2">
              <Checkbox id="dialog-registration-terms" required />
              <Label htmlFor="dialog-registration-terms" className="leading-relaxed">
                I agree with the terms and conditions.
              </Label>
            </div>
          </FormField>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Create account</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  ),
}
