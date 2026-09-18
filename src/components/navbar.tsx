'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../lib/cn'

const Navbar = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(
        'sticky top-0 z-20 w-full border-t border-b border-border border-t-brand bg-background text-foreground',
        className,
      )}
      {...props}
    >
      <nav className="flex h-16 w-full items-center gap-2 px-4 lg:px-8">{children}</nav>
    </header>
  ),
)

Navbar.displayName = 'Navbar'

export interface NavbarContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'start' | 'end'
}

const NavbarContent = React.forwardRef<HTMLDivElement, NavbarContentProps>(
  ({ className, side = 'start', ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center gap-2', side === 'start' ? 'me-auto' : 'ms-auto', className)}
      {...props}
    />
  ),
)

NavbarContent.displayName = 'NavbarContent'

export interface NavbarBrandProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean
}

const NavbarBrand = React.forwardRef<HTMLAnchorElement, NavbarBrandProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a'

    return (
      <Comp
        ref={ref}
        className={cn(
          'flex items-center gap-2 rounded-md text-base font-semibold tracking-tight text-foreground no-underline transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0',
          className,
        )}
        {...props}
      />
    )
  },
)

NavbarBrand.displayName = 'NavbarBrand'

export { Navbar, NavbarBrand, NavbarContent }
