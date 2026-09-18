import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const gridVariants = cva('grid', {
  variants: {
    columns: {
      '1': 'grid-cols-1',
      '2': 'grid-cols-1 sm:grid-cols-2',
      '3': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      '4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      none: 'grid-cols-none',
    },
    gap: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
  },
  defaultVariants: {
    columns: '1',
    gap: 'md',
    align: 'stretch',
  },
})

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, columns, gap, align, ...props }, ref) => (
    <div ref={ref} className={cn(gridVariants({ columns, gap, align, className }))} {...props} />
  ),
)

Grid.displayName = 'Grid'

export { gridVariants }
