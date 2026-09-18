import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const listGroupVariants = cva('overflow-hidden text-foreground', {
  variants: {
    variant: {
      default: 'rounded-lg border border-border-subtle bg-surface-document shadow-resting',
      flush: 'border-y border-border bg-transparent',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const listGroupItemVariants = cva('flex items-start gap-3 border-border px-4 py-3', {
  variants: {
    interactive: {
      true: 'transition-colors hover:bg-surface-subtle',
      false: '',
    },
  },
  defaultVariants: {
    interactive: false,
  },
})

export interface ListGroupProps
  extends React.HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof listGroupVariants> {}

export const ListGroup = React.forwardRef<HTMLUListElement, ListGroupProps>(
  ({ className, variant, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(listGroupVariants({ variant, className }), '[&>li+li]:border-t')}
      {...props}
    />
  ),
)

ListGroup.displayName = 'ListGroup'

export interface ListGroupItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    VariantProps<typeof listGroupItemVariants> {}

export const ListGroupItem = React.forwardRef<HTMLLIElement, ListGroupItemProps>(
  ({ className, interactive, ...props }, ref) => (
    <li ref={ref} className={cn(listGroupItemVariants({ interactive, className }))} {...props} />
  ),
)

ListGroupItem.displayName = 'ListGroupItem'

export interface ListGroupIconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ListGroupIcon = React.forwardRef<HTMLDivElement, ListGroupIconProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-surface-subtle text-muted-foreground [&_svg]:size-4 [&_svg]:shrink-0',
        className,
      )}
      {...props}
    />
  ),
)

ListGroupIcon.displayName = 'ListGroupIcon'

export interface ListGroupContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ListGroupContent = React.forwardRef<HTMLDivElement, ListGroupContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('min-w-0 flex-1 space-y-0.5', className)} {...props} />
  ),
)

ListGroupContent.displayName = 'ListGroupContent'

export interface ListGroupTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const ListGroupTitle = React.forwardRef<HTMLParagraphElement, ListGroupTitleProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm font-medium leading-5 text-foreground', className)} {...props} />
  ),
)

ListGroupTitle.displayName = 'ListGroupTitle'

export interface ListGroupDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const ListGroupDescription = React.forwardRef<
  HTMLParagraphElement,
  ListGroupDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm leading-relaxed text-muted-foreground', className)}
    {...props}
  />
))

ListGroupDescription.displayName = 'ListGroupDescription'

export interface ListGroupActionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ListGroupAction = React.forwardRef<HTMLDivElement, ListGroupActionProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('ml-auto inline-flex shrink-0 items-center gap-2', className)} {...props} />
  ),
)

ListGroupAction.displayName = 'ListGroupAction'

export { listGroupVariants, listGroupItemVariants }
