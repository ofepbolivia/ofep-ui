import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Bell,
  FileSpreadsheet,
  Inbox,
  Landmark,
  LayoutDashboard,
  LayoutGrid,
  LineChart,
  LogOut,
  Plus,
  Settings,
  ShieldCheck,
  User,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import {
  Avatar,
  AvatarFallback,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarNav,
  SidebarProvider,
  SidebarTrigger,
  type SidebarNavItem,
} from '../../../src'

const iconMap: Record<string, LucideIcon> = {
  'layout-dashboard': LayoutDashboard,
  wallet: Wallet,
  'file-spreadsheet': FileSpreadsheet,
  'line-chart': LineChart,
  'shield-check': ShieldCheck,
  landmark: Landmark,
  users: Users,
}

const resolveIcon = (name: string) => iconMap[name]

const menu: SidebarNavItem[] = [
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
          { id: 'fin-con-resumen', label: 'Resumen', href: '#', icon: 'file-spreadsheet' },
          { id: 'fin-con-anual', label: 'Contabilidad Anual', href: '#' },
        ],
      },
      { id: 'finanzas-analisis', label: 'Análisis Financiero', href: '#', icon: 'line-chart' },
    ],
  },
  {
    id: 'administrador',
    label: 'Administrador',
    icon: 'shield-check',
    items: [
      { id: 'adm-usuarios', label: 'Usuarios', href: '#', icon: 'users' },
      { id: 'adm-comunicados', label: 'Comunicados', href: '#', badge: '2' },
    ],
  },
]

function NotificationMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="View notifications" className="relative">
          <Bell aria-hidden="true" />
          <span className="absolute end-1.5 top-1.5 size-2 rounded-full bg-destructive" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>A new announcement was published</DropdownMenuItem>
        <DropdownMenuItem>Modification request pending review</DropdownMenuItem>
        <DropdownMenuItem>COSEEP report is available</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>View all</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function AppsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open apps">
          <LayoutGrid aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Apps</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Wallet aria-hidden="true" />
          Finanzas
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Landmark aria-hidden="true" />
          Inversión
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Users aria-hidden="true" />
          Usuarios
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Inbox aria-hidden="true" />
          Comunicados
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Open user menu"
          className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Avatar className="size-8">
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <span className="block text-sm font-semibold text-foreground">Ana Condori</span>
          <span className="block text-xs font-normal text-muted-foreground">
            analista@ofep.gob.bo
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User aria-hidden="true" />
          My profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings aria-hidden="true" />
          Account settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut aria-hidden="true" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Top application bar. There is no Radix `Navbar` primitive, so this is a native `header` + `nav` shell that composes the existing design system parts: `Button`, `Avatar`, and `DropdownMenu` for the action menus, plus `SidebarTrigger` for the mobile navigation drawer.\n\n' +
          '`Navbar` is sticky and renders the `nav` flex row. `NavbarContent` groups items on the `start` or `end` side and pushes them apart with logical margins, so the bar adapts to any number of groups. `NavbarBrand` renders the logo lockup and accepts `asChild` for custom link components.\n\n' +
          'Place `Navbar` inside `SidebarInset` so the bar sits next to the fixed sidebar instead of underneath it. The bar carries a thin institutional brand line on its top edge. There is no built-in search slot: compose `SearchInput` yourself when a screen needs it. The desktop collapse toggle is intentionally not part of this shell — the sidebar has no icon-rail mode yet, so only the mobile drawer trigger is provided.',
      },
    },
  },
} satisfies Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>

export const WithSidebar: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex size-8 items-center justify-center rounded-md bg-brand text-sm font-semibold text-brand-foreground">
            OF
          </div>
          <span className="text-base font-semibold">OFEP</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarNav items={menu} resolveIcon={resolveIcon} defaultOpenIds={['finanzas']} />
        </SidebarContent>
        <SidebarFooter>
          <p className="truncate text-xs text-muted-foreground">Session expires in 12 minutes</p>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <Navbar>
          <NavbarContent side="start">
            <SidebarTrigger />
            <NavbarBrand href="#">
              <div className="flex size-8 items-center justify-center rounded-md bg-brand text-sm font-semibold text-brand-foreground">
                OF
              </div>
              <span>OFEP</span>
            </NavbarBrand>
          </NavbarContent>
          <NavbarContent side="end">
            <Button size="sm" className="hidden sm:inline-flex">
              <Plus aria-hidden="true" />
              New widget
            </Button>
            <NotificationMenu />
            <AppsMenu />
            <UserMenu />
          </NavbarContent>
        </Navbar>
        <div className="p-6">
          <p className="text-sm text-muted-foreground">
            Narrow the canvas below 640px to open the navigation drawer with the menu button.
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  ),
}

export const Minimal: Story = {
  render: () => (
    <Navbar>
      <NavbarContent side="start">
        <NavbarBrand href="#">
          <div className="flex size-8 items-center justify-center rounded-md bg-brand text-sm font-semibold text-brand-foreground">
            OF
          </div>
          <span>OFEP</span>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent side="end">
        <Button variant="ghost" size="sm">
          Sign out
        </Button>
        <UserMenu />
      </NavbarContent>
    </Navbar>
  ),
}
