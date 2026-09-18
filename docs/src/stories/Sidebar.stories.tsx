import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  ArrowLeftRight,
  Building2,
  Calculator,
  ChartColumn,
  ClipboardList,
  CreditCard,
  FileSpreadsheet,
  FileText,
  Gauge,
  Inbox,
  Landmark,
  LayoutDashboard,
  LineChart,
  ListChecks,
  Package,
  Settings,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Truck,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarItem,
  SidebarNav,
  SidebarProvider,
  SidebarSubGroup,
  SidebarTrigger,
  type SidebarNavItem,
} from '../../../src'

const iconMap: Record<string, LucideIcon> = {
  'layout-dashboard': LayoutDashboard,
  calculator: Calculator,
  'line-chart': LineChart,
  wallet: Wallet,
  'chart-column': ChartColumn,
  'file-spreadsheet': FileSpreadsheet,
  package: Package,
  'shopping-cart': ShoppingCart,
  'credit-card': CreditCard,
  inbox: Inbox,
  truck: Truck,
  users: Users,
  'shield-check': ShieldCheck,
  settings: Settings,
  'file-text': FileText,
  'building-2': Building2,
  'clipboard-list': ClipboardList,
  'trending-up': TrendingUp,
  gauge: Gauge,
  landmark: Landmark,
  'arrow-left-right': ArrowLeftRight,
  'list-checks': ListChecks,
}

const resolveIcon = (name: string) => iconMap[name]

const fullMenu: SidebarNavItem[] = [
  { id: 'dashboard', label: 'Dashboard', href: '#', icon: 'layout-dashboard', active: true },
  {
    id: 'finanzas',
    label: 'Finanzas',
    icon: 'wallet',
    items: [
      {
        id: 'finanzas-contabilidad',
        label: 'Contabilidad',
        items: [
          {
            id: 'fin-con-resumen',
            label: 'Resumen Contabilidad',
            href: '#',
            icon: 'file-spreadsheet',
          },
          { id: 'fin-con-anual', label: 'Contabilidad Anual', href: '#' },
          { id: 'fin-con-mensual', label: 'Contabilidad Mensual', href: '#' },
          { id: 'fin-con-trimestral', label: 'Contabilidad Trimestral', href: '#' },
        ],
      },
      {
        id: 'finanzas-analisis',
        label: 'Análisis Financiero',
        items: [
          { id: 'fin-ana-analisis', label: 'Análisis financiero', href: '#' },
          { id: 'fin-ana-anexo', label: 'Anexo Financiero', href: '#' },
        ],
      },
      {
        id: 'finanzas-estadistica',
        label: 'Estadística',
        items: [
          { id: 'fin-est-consolidada', label: 'Consulta Consolidada', href: '#' },
          { id: 'fin-est-visualizacion', label: 'Consulta de Visualizaciones', href: '#' },
        ],
      },
    ],
  },
  {
    id: 'administrador',
    label: 'Administrador',
    icon: 'shield-check',
    items: [
      { id: 'adm-usuarios', label: 'Usuarios', href: '#', icon: 'users' },
      { id: 'adm-roles', label: 'Roles', href: '#' },
      { id: 'adm-permisos', label: 'Permisos', href: '#' },
      { id: 'adm-auditoria', label: 'Auditoría', href: '#' },
      { id: 'adm-comunicados', label: 'Comunicados', href: '#', badge: '2' },
    ],
  },
  {
    id: 'inversion',
    label: 'Inversión',
    icon: 'landmark',
    items: [
      { id: 'inv-proyectos', label: 'Proyectos', href: '#' },
      { id: 'inv-actualizacion', label: 'Actualización', href: '#' },
      { id: 'inv-reportes', label: 'Reportes de Inversión', href: '#' },
    ],
  },
]

function DemoLayout({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex size-8 items-center justify-center rounded-md bg-brand text-sm font-semibold text-brand-foreground">
            OF
          </div>
          <span className="text-base font-semibold">OFEP</span>
        </SidebarHeader>
        <SidebarContent>{children}</SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-surface-muted text-xs font-medium">
              AC
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">Ana Condori</p>
              <p className="truncate text-xs text-muted-foreground">analista@ofep.gob.bo</p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 items-center gap-3 border-b border-border px-4">
          <SidebarTrigger />
          <span className="text-sm font-medium">Panel</span>
        </header>
        <div className="p-6">
          <p className="text-sm text-muted-foreground">
            Narrow the canvas below 640px to open the drawer with the menu button.
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Vertical navigation shell built on native `aside`/`nav` plus the Radix `Collapsible` primitive for expandable groups and the Radix `Dialog` primitive for the mobile drawer. There is no Radix `Sidebar` primitive, so this component composes one.\n\n' +
          'It covers three levels of navigation with the same API: a module with no children is a single-level item, a module with `items` is a two-level group, and a group with nested `items` is a three-level sub-group.\n\n' +
          'Use `SidebarProvider` + `Sidebar` + `SidebarInset` for the fixed shell. `SidebarInset` applies the `sm:ml-64` content offset. Below 640px the sidebar becomes a modal drawer opened by `SidebarTrigger`.\n\n' +
          'For data-driven menus use `SidebarNav` with an `items` array and a `resolveIcon` resolver that maps the stored icon name to a `lucide-react` component. For full control use the compound parts (`SidebarGroup`, `SidebarSubGroup`, `SidebarItem`) directly; `SidebarItem` accepts `asChild` for custom link components.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Accessible name applied to the `aside` and to the mobile dialog title.',
    },
  },
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const ThreeLevels: Story = {
  render: () => (
    <DemoLayout>
      <SidebarNav items={fullMenu} resolveIcon={resolveIcon} defaultOpenIds={['finanzas']} />
    </DemoLayout>
  ),
}

export const TwoLevels: Story = {
  render: () => (
    <DemoLayout>
      <SidebarNav
        items={[
          { id: 'dashboard', label: 'Dashboard', href: '#', icon: 'layout-dashboard' },
          {
            id: 'configuracion',
            label: 'Configuración',
            icon: 'settings',
            items: [
              { id: 'config-usuarios', label: 'Usuarios', href: '#' },
              { id: 'config-roles', label: 'Roles', href: '#' },
              { id: 'config-permisos', label: 'Permisos', href: '#' },
              { id: 'config-parametros', label: 'Parámetros', href: '#' },
            ],
          },
          {
            id: 'catalogos',
            label: 'Catálogos',
            icon: 'clipboard-list',
            items: [
              { id: 'catalogos-monedas', label: 'Monedas', href: '#' },
              { id: 'catalogos-periodos', label: 'Períodos', href: '#' },
            ],
          },
        ]}
        resolveIcon={resolveIcon}
        defaultOpenIds={['configuracion']}
      />
    </DemoLayout>
  ),
}

export const SingleLevel: Story = {
  render: () => (
    <DemoLayout>
      <SidebarNav
        items={[
          {
            id: 'dashboard',
            label: 'Dashboard',
            href: '#',
            icon: 'layout-dashboard',
            active: true,
          },
          { id: 'comunicados', label: 'Comunicados', href: '#', icon: 'inbox', badge: '2' },
          { id: 'proveedores', label: 'Proveedores', href: '#', icon: 'truck' },
          { id: 'configuracion', label: 'Configuración', href: '#', icon: 'settings' },
          { id: 'deshabilitado', label: 'Reportes', href: '#', icon: 'chart-column', disabled: true },
        ]}
        resolveIcon={resolveIcon}
      />
    </DemoLayout>
  ),
}

export const Compound: Story = {
  render: () => (
    <DemoLayout>
      <nav aria-label="Navigation">
        <ul className="m-0 list-none space-y-1 p-0">
          <SidebarItem href="#" icon={LayoutDashboard} active>
            Dashboard
          </SidebarItem>
          <SidebarGroup label="Finanzas" icon={Wallet} defaultOpen>
            <SidebarSubGroup label="Contabilidad" defaultOpen>
              <SidebarItem href="#" icon={FileSpreadsheet}>
                Resumen Contabilidad
              </SidebarItem>
              <SidebarItem href="#">Contabilidad Anual</SidebarItem>
            </SidebarSubGroup>
            <SidebarItem href="#" icon={LineChart}>
              Análisis Financiero
            </SidebarItem>
          </SidebarGroup>
          <SidebarGroup label="Administrador" icon={ShieldCheck}>
            <SidebarItem href="#" icon={Users} badge="2">
              Usuarios
            </SidebarItem>
            <SidebarItem href="#">Roles</SidebarItem>
          </SidebarGroup>
          <SidebarItem asChild>
            <a href="#">
              <CreditCard aria-hidden="true" />
              <span className="flex-1 truncate text-start">Pagos</span>
            </a>
          </SidebarItem>
        </ul>
      </nav>
    </DemoLayout>
  ),
}
