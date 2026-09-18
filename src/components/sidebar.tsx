'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { Slot } from '@radix-ui/react-slot'
import { ChevronDown, Menu, X, type LucideIcon } from 'lucide-react'
import { cn } from '../lib/cn'
import { Button } from './button'

const MOBILE_BREAKPOINT = 640

interface SidebarContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  toggle: () => void
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null)

const useSidebar = () => {
  const context = React.useContext(SidebarContext)

  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }

  return context
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const query = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => setIsMobile(query.matches)

    onChange()
    query.addEventListener('change', onChange)

    return () => query.removeEventListener('change', onChange)
  }, [])

  return isMobile
}

export interface SidebarProviderProps {
  children?: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

const SidebarProvider = ({
  children,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
}: SidebarProviderProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)
  const open = openProp ?? uncontrolledOpen

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (openProp === undefined) {
        setUncontrolledOpen(next)
      }

      onOpenChange?.(next)
    },
    [openProp, onOpenChange],
  )

  const toggle = React.useCallback(() => setOpen(!open), [open, setOpen])

  const value = React.useMemo(() => ({ open, setOpen, toggle }), [open, setOpen, toggle])

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}

SidebarProvider.displayName = 'SidebarProvider'

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  label?: string
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ className, children, label = 'Sidebar', ...props }, ref) => {
    const { open, setOpen } = useSidebar()
    const isMobile = useIsMobile()

    React.useEffect(() => {
      if (!isMobile && open) {
        setOpen(false)
      }
    }, [isMobile, open, setOpen])

    return (
      <>
        <aside
          ref={ref}
          aria-label={label}
          className={cn(
            'fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-e border-border bg-background text-foreground sm:flex',
            className,
          )}
          {...props}
        >
          {children}
        </aside>
        <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
          <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-overlay transition-opacity data-[state=closed]:opacity-0 data-[state=open]:opacity-100 motion-reduce:transition-none sm:hidden" />
            <DialogPrimitive.Content
              className="fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-e border-border bg-background text-foreground data-[state=closed]:animate-sidebar-out data-[state=open]:animate-sidebar-in motion-reduce:animate-none sm:hidden"
            >
              <DialogPrimitive.Title className="sr-only">{label}</DialogPrimitive.Title>
              <DialogPrimitive.Description className="sr-only">
                {label} navigation
              </DialogPrimitive.Description>
              {children}
              <DialogPrimitive.Close className="absolute end-4 top-4 inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0">
                <X className="size-4" aria-hidden="true" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
      </>
    )
  },
)

Sidebar.displayName = 'Sidebar'

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex h-16 shrink-0 items-center gap-2 border-b border-border px-4',
        className,
      )}
      {...props}
    />
  ),
)

SidebarHeader.displayName = 'SidebarHeader'

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex-1 overflow-y-auto overscroll-contain px-4 py-4', className)}
      {...props}
    />
  ),
)

SidebarContent.displayName = 'SidebarContent'

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mt-auto shrink-0 border-t border-border px-4 py-4', className)}
      {...props}
    />
  ),
)

SidebarFooter.displayName = 'SidebarFooter'

export interface SidebarGroupProps extends React.HTMLAttributes<HTMLLIElement> {
  label: string
  icon?: LucideIcon
  badge?: React.ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  disabled?: boolean
}

const SidebarCollapsibleGroup = React.forwardRef<
  HTMLLIElement,
  SidebarGroupProps & { nested?: boolean }
>(
  (
    {
      className,
      label,
      icon: Icon,
      badge,
      nested = false,
      children,
      defaultOpen,
      open,
      onOpenChange,
      disabled,
      ...props
    },
    ref,
  ) => (
    <li ref={ref} className={cn('m-0 p-0', className)} {...props}>
      <CollapsiblePrimitive.Root
        defaultOpen={defaultOpen}
        open={open}
        onOpenChange={onOpenChange}
        disabled={disabled}
        className="group/collapsible"
      >
        <CollapsiblePrimitive.Trigger
          className={cn(
            'flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-[var(--ofep-disabled-opacity)] motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0',
            nested && 'font-normal',
          )}
        >
          {Icon ? (
            <Icon aria-hidden="true" />
          ) : null}
          <span className="flex-1 truncate text-start">{label}</span>
          {badge}
          <ChevronDown
            aria-hidden="true"
            className="text-muted-foreground transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180 motion-reduce:transition-none"
          />
        </CollapsiblePrimitive.Trigger>
        <CollapsiblePrimitive.Content className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down motion-reduce:animate-none">
          <ul className="mt-1 space-y-1 ps-4">{children}</ul>
        </CollapsiblePrimitive.Content>
      </CollapsiblePrimitive.Root>
    </li>
  ),
)

SidebarCollapsibleGroup.displayName = 'SidebarCollapsibleGroup'

const SidebarGroup = React.forwardRef<HTMLLIElement, SidebarGroupProps>((props, ref) => (
  <SidebarCollapsibleGroup ref={ref} {...props} />
))

SidebarGroup.displayName = 'SidebarGroup'

const SidebarSubGroup = React.forwardRef<HTMLLIElement, SidebarGroupProps>((props, ref) => (
  <SidebarCollapsibleGroup ref={ref} nested {...props} />
))

SidebarSubGroup.displayName = 'SidebarSubGroup'

const sidebarItemClass =
  'relative flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground no-underline transition-colors before:absolute before:inset-y-2 before:start-0 before:w-px before:bg-transparent before:content-[\'\'] hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-[current=page]:bg-surface-muted aria-[current=page]:font-medium aria-[current=page]:before:bg-brand motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0'

export interface SidebarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: LucideIcon
  badge?: React.ReactNode
  active?: boolean
  disabled?: boolean
  asChild?: boolean
  linkComponent?: React.ElementType
}

const SidebarItem = React.forwardRef<HTMLLIElement, SidebarItemProps>(
  (
    {
      className,
      children,
      icon: Icon,
      badge,
      active = false,
      disabled = false,
      asChild = false,
      linkComponent,
      href,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : (linkComponent ?? 'a')

    return (
      <li ref={ref} className="m-0 p-0">
        <Comp
          href={href}
          aria-current={active ? 'page' : undefined}
          aria-disabled={disabled || undefined}
          className={cn(
            sidebarItemClass,
            disabled && 'pointer-events-none opacity-[var(--ofep-disabled-opacity)]',
            className,
          )}
          {...props}
        >
          {asChild ? (
            children
          ) : (
            <>
              {Icon ? <Icon aria-hidden="true" /> : null}
              <span className="flex-1 truncate text-start">{children}</span>
              {badge}
            </>
          )}
        </Comp>
      </li>
    )
  },
)

SidebarItem.displayName = 'SidebarItem'

export interface SidebarNavItem {
  id: string | number
  label: string
  href?: string
  icon?: string
  badge?: React.ReactNode
  active?: boolean
  disabled?: boolean
  items?: SidebarNavItem[]
}

export interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: SidebarNavItem[]
  resolveIcon?: (name: string) => LucideIcon | undefined
  linkComponent?: React.ElementType
  defaultOpenIds?: Array<string | number>
  label?: string
}

const renderNavItems = (
  items: SidebarNavItem[],
  depth: number,
  resolveIcon: SidebarNavProps['resolveIcon'],
  defaultOpenIds: Array<string | number>,
  linkComponent: React.ElementType | undefined,
): React.ReactNode =>
  items.map((item) => {
    const Icon = item.icon ? resolveIcon?.(item.icon) : undefined

    if (item.items && item.items.length > 0) {
      const Group = depth === 0 ? SidebarGroup : SidebarSubGroup

      return (
        <Group
          key={item.id}
          label={item.label}
          icon={Icon}
          badge={item.badge}
          defaultOpen={defaultOpenIds.includes(item.id)}
        >
          {renderNavItems(item.items, depth + 1, resolveIcon, defaultOpenIds, linkComponent)}
        </Group>
      )
    }

    return (
      <SidebarItem
        key={item.id}
        href={item.href}
        icon={Icon}
        badge={item.badge}
        active={item.active}
        disabled={item.disabled}
        linkComponent={linkComponent}
      >
        {item.label}
      </SidebarItem>
    )
  })

const SidebarNav = React.forwardRef<HTMLElement, SidebarNavProps>(
  (
    {
      className,
      items,
      resolveIcon,
      linkComponent,
      defaultOpenIds = [],
      label = 'Navigation',
      ...props
    },
    ref,
  ) => (
    <nav ref={ref} aria-label={label} className={className} {...props}>
      <ul className="m-0 list-none space-y-1 p-0">
        {renderNavItems(items, 0, resolveIcon, defaultOpenIds, linkComponent)}
      </ul>
    </nav>
  ),
)

SidebarNav.displayName = 'SidebarNav'

export interface SidebarTriggerProps
  extends React.ComponentPropsWithoutRef<typeof Button> {}

const SidebarTrigger = React.forwardRef<HTMLButtonElement, SidebarTriggerProps>(
  ({ className, onClick, ...props }, ref) => {
    const { open, setOpen } = useSidebar()

    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        aria-label="Open navigation"
        aria-expanded={open}
        onClick={(event) => {
          onClick?.(event)
          setOpen(true)
        }}
        className={cn('size-8 sm:hidden', className)}
        {...props}
      >
        <Menu aria-hidden="true" />
      </Button>
    )
  },
)

SidebarTrigger.displayName = 'SidebarTrigger'

const SidebarInset = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('min-h-svh w-full sm:ml-64', className)} {...props} />
  ),
)

SidebarInset.displayName = 'SidebarInset'

export {
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
  useSidebar,
}
