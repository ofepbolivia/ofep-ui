import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const flexVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'column-reverse': 'flex-col-reverse',
    },
    wrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      reverse: 'flex-wrap-reverse',
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
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
  },
  defaultVariants: {
    direction: 'row',
    wrap: 'nowrap',
    gap: 'md',
    align: 'stretch',
    justify: 'start',
  },
})

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, direction, wrap, gap, align, justify, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(flexVariants({ direction, wrap, gap, align, justify, className }))}
      {...props}
    />
  ),
)

Flex.displayName = 'Flex'

export { flexVariants }
