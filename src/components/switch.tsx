'use client'

import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const switchVariants = cva(
  'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-[var(--ofep-disabled-opacity)] data-[state=checked]:bg-brand data-[state=unchecked]:bg-border-strong aria-[invalid=true]:border-destructive/60 aria-[invalid=true]:focus-visible:ring-destructive',
  {
    variants: {
      size: {
        sm: 'h-4 w-7',
        md: 'h-5 w-9',
        lg: 'h-6 w-11',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

const switchThumbVariants = cva(
  'pointer-events-none block rounded-full bg-surface-raised shadow-resting transition-transform data-[state=unchecked]:translate-x-0',
  {
    variants: {
      size: {
        sm: 'size-3 data-[state=checked]:translate-x-3',
        md: 'size-4 data-[state=checked]:translate-x-4',
        lg: 'size-5 data-[state=checked]:translate-x-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {}

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, size, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(switchVariants({ size, className }))}
    {...props}
  >
    <SwitchPrimitive.Thumb className={cn(switchThumbVariants({ size }))} />
  </SwitchPrimitive.Root>
))

Switch.displayName = SwitchPrimitive.Root.displayName

export { switchVariants, switchThumbVariants }
