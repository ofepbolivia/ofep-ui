import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Container,
  Input,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from '../../../src'

const meta = {
  title: 'Foundation/Layout',
  parameters: {
    docs: {
      description: {
        component:
          'Layout patterns composed from `Container`, `Card` and `Stack`. Use these primitives to keep institutional screens consistent.',
      },
    },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const InstitutionalForm: Story = {
  render: () => (
    <Container size="sm" className="py-10">
      <Card>
        <CardHeader>
          <CardTitle>Service registration</CardTitle>
          <CardDescription>
            Use layout primitives to keep institutional screens consistent.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Stack gap="lg">
            <Stack gap="sm">
              <Text size="sm" tone="secondary">
                Applicant name
              </Text>
              <Input placeholder="Enter full name" />
            </Stack>
          </Stack>
        </CardContent>
        <CardFooter>
          <Button variant="secondary">Cancel</Button>
          <Button>Continue</Button>
        </CardFooter>
      </Card>
    </Container>
  ),
}

export const InstitutionalScreen: Story = {
  render: () => (
    <Container size="lg" className="py-10">
      <Stack gap="lg">
        <div className="flex items-center gap-3 border-t-2 border-t-brand pt-4">
          <div className="flex size-10 items-center justify-center rounded-md bg-brand text-sm font-semibold text-brand-foreground">
            OF
          </div>
          <div className="min-w-0">
            <Text className="font-semibold">OFEP</Text>
            <Text size="xs" tone="secondary">
              Oficina Técnica para el Fortalecimiento de la Empresa Pública
            </Text>
          </div>
          <Button variant="brand" className="ms-auto">
            Nuevo registro
          </Button>
        </div>

        <Tabs defaultValue="summary">
          <TabsList>
            <TabsTrigger value="summary">Resumen</TabsTrigger>
            <TabsTrigger value="documents">Documentos</TabsTrigger>
            <TabsTrigger value="history">Historial</TabsTrigger>
          </TabsList>
          <TabsContent value="summary">
            <Stack gap="md">
              <div className="grid gap-4 sm:grid-cols-3">
                <Card variant="brand">
                  <Text size="xs" tone="secondary" className="uppercase tracking-wider">
                    Total empresas
                  </Text>
                  <Text className="mt-1 text-2xl font-semibold tabular-nums">124</Text>
                </Card>
                <Card>
                  <Text size="xs" tone="secondary" className="uppercase tracking-wider">
                    En revisión
                  </Text>
                  <Text className="mt-1 text-2xl font-semibold tabular-nums">18</Text>
                </Card>
                <Card>
                  <Text size="xs" tone="secondary" className="uppercase tracking-wider">
                    Aprobadas
                  </Text>
                  <Text className="mt-1 text-2xl font-semibold tabular-nums">96</Text>
                </Card>
              </div>

              <Card padding="none">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Empresa</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Etapa</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow data-state="selected">
                      <TableCell>Empresa Pública de Servicios</TableCell>
                      <TableCell>
                        <Badge variant="success">Aprobado</Badge>
                      </TableCell>
                      <TableCell>Validación</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Corporación de Desarrollo</TableCell>
                      <TableCell>
                        <Badge variant="warning">En revisión</Badge>
                      </TableCell>
                      <TableCell>Evaluación</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Entidad de Inversión</TableCell>
                      <TableCell>
                        <Badge variant="brand">OFEP</Badge>
                      </TableCell>
                      <TableCell>Registro</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </Stack>
          </TabsContent>
          <TabsContent value="documents">
            <Text size="sm" tone="secondary">
              Documents pending review appear here.
            </Text>
          </TabsContent>
          <TabsContent value="history">
            <Text size="sm" tone="secondary">
              The audit trail appears here.
            </Text>
          </TabsContent>
        </Tabs>
      </Stack>
    </Container>
  ),
}
