'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const labelVariants = cva(
  'select-none text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-[var(--ofep-disabled-opacity)] group-data-[invalid=true]:text-destructive',
)

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
))

Label.displayName = LabelPrimitive.Root.displayName

export { labelVariants }
