import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const skeletonVariants = cva('animate-pulse rounded-sm bg-border-subtle motion-reduce:animate-none', {
  variants: {
    variant: {
      default: 'bg-border-subtle',
      contrast: 'bg-border-strong',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(skeletonVariants({ variant, className }))}
      {...props}
    />
  ),
)

Skeleton.displayName = 'Skeleton'

export { skeletonVariants }
