import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Fieldset,
  FieldsetDescription,
  FieldsetLegend,
  FileUpload,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  Input,
  InputGroup,
  InputGroupInput,
  InputGroupText,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Textarea,
} from '../../../src'

const meta = {
  title: 'Forms/Patterns',
  parameters: {
    docs: {
      description: {
        component:
          'End-to-end form patterns composed from `FormField`, `Fieldset`, `Input`, `InputGroup`, `Select`, `RadioGroup`, `Checkbox`, `Switch`, `Textarea` and `FileUpload`.',
      },
    },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const BasicRequest: Story = {
  render: () => (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>Register request</CardTitle>
        <CardDescription>
          Capture the minimum required information before sending the request to review.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <FormField>
          <FormLabel>Applicant</FormLabel>
          <FormControl>
            <Input placeholder="Full name" />
          </FormControl>
        </FormField>
        <FormField>
          <FormLabel>Department</FormLabel>
          <FormControl>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="citizen">Citizen services</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="legal">Legal affairs</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
        </FormField>
        <FormField invalid>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea placeholder="Describe the request" />
          </FormControl>
          <FormMessage>A description of at least 20 characters is required.</FormMessage>
        </FormField>
        <FormField>
          <div className="flex items-center gap-3">
            <FormControl>
              <Switch defaultChecked />
            </FormControl>
            <FormLabel>Notify me by email</FormLabel>
          </div>
          <FormDescription>You will receive a copy of the resolution.</FormDescription>
        </FormField>
        <FormField>
          <div className="flex items-center gap-2">
            <Checkbox id="form-confirm" />
            <Label htmlFor="form-confirm">I confirm the information is correct.</Label>
          </div>
        </FormField>
        <div className="flex flex-row gap-2">
          <Button>Submit request</Button>
          <Button variant="secondary">Save draft</Button>
        </div>
      </CardContent>
    </Card>
  ),
}

export const RegistrationForm: Story = {
  render: () => (
    <Card className="max-w-3xl">
      <CardHeader>
        <CardTitle>Create account</CardTitle>
        <CardDescription>
          Collect account, company, and contact information before registration.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-6">
          <div className="grid gap-5 md:grid-cols-2">
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
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="OFEP" required />
              </FormControl>
            </FormField>
            <FormField>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
              </FormControl>
            </FormField>
            <FormField>
              <FormLabel>Website URL</FormLabel>
              <FormControl>
                <Input type="url" placeholder="example.com" required />
              </FormControl>
            </FormField>
            <FormField>
              <FormLabel>Unique visitors per month</FormLabel>
              <FormControl>
                <Input type="number" inputMode="numeric" placeholder="12000" required />
              </FormControl>
            </FormField>
          </div>

          <FormField>
            <FormLabel>Email address</FormLabel>
            <FormControl>
              <Input type="email" placeholder="john.doe@company.com" required />
            </FormControl>
          </FormField>

          <div className="grid gap-5 md:grid-cols-2">
            <FormField>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="•••••••••" required />
              </FormControl>
            </FormField>
            <FormField>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="•••••••••" required />
              </FormControl>
            </FormField>
          </div>

          <FormField>
            <div className="flex items-start gap-2">
              <Checkbox id="registration-terms" required />
              <Label htmlFor="registration-terms" className="leading-relaxed">
                I agree with the{' '}
                <a href="#terms" className="font-medium text-primary underline-offset-4 hover:underline">
                  terms and conditions
                </a>
                .
              </Label>
            </div>
          </FormField>

          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  ),
}

export const InformationCollection: Story = {
  render: () => (
    <Card className="max-w-3xl">
      <CardHeader>
        <CardTitle>Information collection</CardTitle>
        <CardDescription>
          A complete intake form with the most common controls for collecting applicant data.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <Fieldset>
          <FieldsetLegend>Personal information</FieldsetLegend>
          <FieldsetDescription>Use the same identity data shown on the official document.</FieldsetDescription>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="María" />
              </FormControl>
            </FormField>
            <FormField>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="González" />
              </FormControl>
            </FormField>
            <FormField>
              <FormLabel>Document number</FormLabel>
              <FormControl>
                <InputGroup>
                  <InputGroupText>DNI</InputGroupText>
                  <InputGroupInput inputMode="numeric" placeholder="00000000" />
                </InputGroup>
              </FormControl>
            </FormField>
            <FormField>
              <FormLabel>Birth date</FormLabel>
              <FormControl>
                <Input type="date" />
              </FormControl>
            </FormField>
          </div>
        </Fieldset>

        <Fieldset>
          <FieldsetLegend>Contact details</FieldsetLegend>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="name@example.com" />
              </FormControl>
            </FormField>
            <FormField>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <InputGroup>
                  <InputGroupText>+51</InputGroupText>
                  <InputGroupInput inputMode="tel" placeholder="999 999 999" />
                </InputGroup>
              </FormControl>
            </FormField>
            <FormField className="md:col-span-2">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Street, number, district" />
              </FormControl>
            </FormField>
          </div>
        </Fieldset>

        <Fieldset>
          <FieldsetLegend>Request details</FieldsetLegend>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField>
              <FormLabel>Request type</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="certificate">Certificate</SelectItem>
                    <SelectItem value="claim">Claim</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormField>
            <FormField>
              <FormLabel>Priority</FormLabel>
              <FormControl>
                <RadioGroup defaultValue="standard" className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="standard" id="info-standard" />
                    <Label htmlFor="info-standard">Standard</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="urgent" id="info-urgent" />
                    <Label htmlFor="info-urgent">Urgent</Label>
                  </div>
                </RadioGroup>
              </FormControl>
            </FormField>
            <FormField className="md:col-span-2">
              <FormLabel>Details</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe the information being submitted" />
              </FormControl>
              <FormDescription>Include dates, references or any supporting context.</FormDescription>
            </FormField>
            <FormField className="md:col-span-2">
              <FormLabel>Supporting document</FormLabel>
              <FormControl>
                <FileUpload />
              </FormControl>
            </FormField>
          </div>
        </Fieldset>

        <div className="grid gap-3 rounded-lg border border-border bg-surface-muted p-4">
          <FormField>
            <div className="flex items-center gap-3">
              <FormControl>
                <Switch defaultChecked />
              </FormControl>
              <FormLabel>Send confirmation by email</FormLabel>
            </div>
          </FormField>
          <FormField>
            <div className="flex items-start gap-2">
              <Checkbox id="collection-confirm" />
              <Label htmlFor="collection-confirm" className="leading-relaxed">
                I confirm that the information provided is accurate and complete.
              </Label>
            </div>
          </FormField>
        </div>

        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button variant="secondary">Save draft</Button>
          <Button>Submit information</Button>
        </div>
      </CardContent>
    </Card>
  ),
}
