'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const paginationItemVariants = cva(
  'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md border border-transparent bg-transparent text-sm font-medium text-foreground transition-colors aria-[current=page]:border-border aria-[current=page]:bg-surface-muted aria-[current=page]:text-brand motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      size: {
        sm: 'size-8',
        md: 'size-9',
        lg: 'size-10',
      },
      interactive: {
        true: 'hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-[var(--ofep-disabled-opacity)]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export interface PaginationProps extends React.ComponentProps<'nav'> {}

export const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  ),
)

Pagination.displayName = 'Pagination'

export interface PaginationContentProps extends React.ComponentProps<'ul'> {}

export const PaginationContent = React.forwardRef<HTMLUListElement, PaginationContentProps>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
  ),
)

PaginationContent.displayName = 'PaginationContent'

export interface PaginationItemProps extends React.ComponentProps<'li'> {}

export const PaginationItem = React.forwardRef<HTMLLIElement, PaginationItemProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn('m-0', className)} {...props} />
  ),
)

PaginationItem.displayName = 'PaginationItem'

export interface PaginationLinkProps
  extends React.ComponentProps<'a'>,
    VariantProps<typeof paginationItemVariants> {
  isActive?: boolean
  disabled?: boolean
  asChild?: boolean
}

export const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, isActive, size, disabled = false, asChild = false, tabIndex, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a'

    return (
      <Comp
        ref={ref}
        aria-current={isActive ? 'page' : undefined}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : tabIndex}
        className={cn(
          paginationItemVariants({ size, interactive: !disabled }),
          disabled && 'pointer-events-none opacity-[var(--ofep-disabled-opacity)]',
          className,
        )}
        {...props}
      />
    )
  },
)

PaginationLink.displayName = 'PaginationLink'

export interface PaginationPreviousProps extends PaginationLinkProps {}

export const PaginationPrevious = React.forwardRef<HTMLAnchorElement, PaginationPreviousProps>(
  ({ className, size, ...props }, ref) => (
    <PaginationLink
      ref={ref}
      size={size ?? 'sm'}
      aria-label="Go to previous page"
      className={className}
      {...props}
    >
      <ChevronLeft />
      <span className="sr-only">Previous</span>
    </PaginationLink>
  ),
)

PaginationPrevious.displayName = 'PaginationPrevious'

export interface PaginationNextProps extends PaginationLinkProps {}

export const PaginationNext = React.forwardRef<HTMLAnchorElement, PaginationNextProps>(
  ({ className, size, ...props }, ref) => (
    <PaginationLink
      ref={ref}
      size={size ?? 'sm'}
      aria-label="Go to next page"
      className={className}
      {...props}
    >
      <ChevronRight />
      <span className="sr-only">Next</span>
    </PaginationLink>
  ),
)

PaginationNext.displayName = 'PaginationNext'

export interface PaginationEllipsisProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof paginationItemVariants> {}

export const PaginationEllipsis = React.forwardRef<HTMLSpanElement, PaginationEllipsisProps>(
  ({ className, size, ...props }, ref) => (
    <span
      ref={ref}
      aria-hidden="true"
      className={cn(
        paginationItemVariants({ size }),
        'text-muted-foreground',
        className,
      )}
      {...props}
    >
      <MoreHorizontal />
      <span className="sr-only">More pages</span>
    </span>
  ),
)

PaginationEllipsis.displayName = 'PaginationEllipsis'

export { paginationItemVariants }
