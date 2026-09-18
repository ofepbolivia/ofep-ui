'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const linkVariants = cva(
  'rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none',
  {
    variants: {
      variant: {
        default: 'text-brand underline underline-offset-4 hover:text-brand-hover',
        subtle: 'text-brand no-underline hover:underline hover:underline-offset-4',
        muted:
          'text-muted-foreground no-underline hover:text-foreground hover:underline hover:underline-offset-4',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const classes = cn(linkVariants({ variant, className }))

    if (asChild) {
      return <Slot ref={ref} className={classes} {...props} />
    }

    return <a ref={ref} className={classes} {...props} />
  },
)

Link.displayName = 'Link'

export { linkVariants }
