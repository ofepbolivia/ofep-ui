import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const headingVariants = cva('m-0 font-semibold tracking-tight text-foreground', {
  variants: {
    size: {
      sm: 'text-lg leading-7',
      md: 'text-2xl leading-8',
      lg: 'text-3xl leading-9',
      xl: 'text-4xl leading-10',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Component = 'h2', className, size, ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(headingVariants({ size, className }))}
      {...props}
    />
  ),
)

Heading.displayName = 'Heading'

export { headingVariants }
