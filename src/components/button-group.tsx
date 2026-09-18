import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const buttonGroupVariants = cva(
  'inline-flex w-fit items-stretch [&>*]:focus-visible:relative [&>*]:focus-visible:z-10',
  {
    variants: {
      orientation: {
        horizontal:
          '-space-x-px [&>*:first-child]:rounded-l-md [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-l-none [&>*:last-child]:rounded-r-md [&>*:not(:first-child):not(:last-child)]:rounded-none',
        vertical:
          'flex-col -space-y-px [&>*:first-child]:rounded-t-md [&>*:first-child]:rounded-b-none [&>*:last-child]:rounded-t-none [&>*:last-child]:rounded-b-md [&>*:not(:first-child):not(:last-child)]:rounded-none',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
)

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      className={cn(buttonGroupVariants({ orientation, className }))}
      {...props}
    />
  ),
)

ButtonGroup.displayName = 'ButtonGroup'

export { buttonGroupVariants }
