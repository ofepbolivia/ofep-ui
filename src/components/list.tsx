import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const listVariants = cva('', {
  variants: {
    variant: {
      divided: 'divide-y divide-border',
      disc: 'list-outside list-disc space-y-2 ps-5 marker:text-muted-foreground',
      decimal: 'list-outside list-decimal space-y-2 ps-5 marker:text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'divided',
  },
})

const listItemVariants = cva('', {
  variants: {
    variant: {
      divided: 'flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0',
      prose: 'leading-6 text-foreground',
    },
  },
  defaultVariants: {
    variant: 'divided',
  },
})

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof listVariants> {
  as?: 'ul' | 'ol'
}

export const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, variant, as: Component = 'ul', ...props }, ref) => {
    const Tag = Component as React.ElementType

    return <Tag ref={ref} className={cn(listVariants({ variant, className }))} {...props} />
  },
)

List.displayName = 'List'

export interface ListItemProps
  extends React.HTMLAttributes<HTMLLIElement>,
    VariantProps<typeof listItemVariants> {}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, variant, ...props }, ref) => (
    <li ref={ref} className={cn(listItemVariants({ variant, className }))} {...props} />
  ),
)

ListItem.displayName = 'ListItem'

export { listVariants, listItemVariants }
