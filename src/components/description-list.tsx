import * as React from 'react'
import { cn } from '../lib/cn'

export interface DescriptionListProps extends React.ComponentProps<'dl'> {}

export const DescriptionList = React.forwardRef<HTMLDListElement, DescriptionListProps>(
  ({ className, ...props }, ref) => (
    <dl ref={ref} className={cn('divide-y divide-border text-foreground', className)} {...props} />
  ),
)

DescriptionList.displayName = 'DescriptionList'

export interface DescriptionItemProps extends React.ComponentProps<'div'> {}

export const DescriptionItem = React.forwardRef<HTMLDivElement, DescriptionItemProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('grid gap-1 py-3 first:pt-0 last:pb-0 sm:grid-cols-[minmax(8rem,1fr)_2fr] sm:gap-6', className)}
      {...props}
    />
  ),
)

DescriptionItem.displayName = 'DescriptionItem'

export interface DescriptionTermProps extends React.ComponentProps<'dt'> {}

export const DescriptionTerm = React.forwardRef<HTMLElement, DescriptionTermProps>(
  ({ className, ...props }, ref) => (
    <dt
      ref={ref}
      className={cn('text-sm font-medium leading-relaxed text-muted-foreground', className)}
      {...props}
    />
  ),
)

DescriptionTerm.displayName = 'DescriptionTerm'

export interface DescriptionDetailsProps extends React.ComponentProps<'dd'> {}

export const DescriptionDetails = React.forwardRef<HTMLElement, DescriptionDetailsProps>(
  ({ className, ...props }, ref) => (
    <dd ref={ref} className={cn('text-sm leading-relaxed text-foreground', className)} {...props} />
  ),
)

DescriptionDetails.displayName = 'DescriptionDetails'
