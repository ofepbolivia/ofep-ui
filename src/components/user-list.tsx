import * as React from 'react'
import { cn } from '../lib/cn'

export interface UserListProps extends React.ComponentProps<'ul'> {}

export const UserList = React.forwardRef<HTMLUListElement, UserListProps>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('divide-y divide-border', className)} {...props} />
  ),
)

UserList.displayName = 'UserList'

export interface UserListItemProps extends React.ComponentProps<'li'> {}

export const UserListItem = React.forwardRef<HTMLLIElement, UserListItemProps>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn(
        'flex items-center gap-4 py-4 first:pt-0 last:pb-0',
        className,
      )}
      {...props}
    />
  ),
)

UserListItem.displayName = 'UserListItem'

export interface UserListItemContentProps extends React.ComponentProps<'div'> {}

export const UserListItemContent = React.forwardRef<
  HTMLDivElement,
  UserListItemContentProps
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('min-w-0 flex-1', className)} {...props} />
))

UserListItemContent.displayName = 'UserListItemContent'

export interface UserListItemTitleProps extends React.ComponentProps<'p'> {}

export const UserListItemTitle = React.forwardRef<
  HTMLParagraphElement,
  UserListItemTitleProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('truncate text-sm font-medium leading-5 text-foreground', className)}
    {...props}
  />
))

UserListItemTitle.displayName = 'UserListItemTitle'

export interface UserListItemDescriptionProps extends React.ComponentProps<'p'> {}

export const UserListItemDescription = React.forwardRef<
  HTMLParagraphElement,
  UserListItemDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('mt-1 truncate text-sm leading-5 text-muted-foreground', className)}
    {...props}
  />
))

UserListItemDescription.displayName = 'UserListItemDescription'

export interface UserListItemValueProps extends React.ComponentProps<'div'> {}

export const UserListItemValue = React.forwardRef<
  HTMLDivElement,
  UserListItemValueProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('inline-flex shrink-0 items-center text-sm font-medium tabular-nums text-foreground', className)}
    {...props}
  />
))

UserListItemValue.displayName = 'UserListItemValue'
