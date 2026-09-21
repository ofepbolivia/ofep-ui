'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const labelVariants = cva(
  'select-none font-medium text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-[var(--ofep-disabled-opacity)] group-data-[invalid=true]:text-destructive',
  {
    variants: {
      size: {
        sm: 'text-sm leading-none',
        md: 'text-sm leading-none',
        lg: 'text-base leading-none',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, size, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants({ size }), className)} {...props} />
))

Label.displayName = LabelPrimitive.Root.displayName

export { labelVariants }
