'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const radioGroupItemVariants = cva(
  'peer aspect-square shrink-0 rounded-full border border-border bg-surface-sunken text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-[var(--ofep-disabled-opacity)] data-[state=checked]:border-brand aria-[invalid=true]:border-destructive/60 aria-[invalid=true]:focus-visible:ring-destructive aria-[invalid=true]:data-[state=checked]:border-destructive/60 [&_svg]:shrink-0',
  {
    variants: {
      size: {
        sm: 'size-4 [&_svg]:size-3',
        md: 'size-5 [&_svg]:size-4',
        lg: 'size-6 [&_svg]:size-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

type RadioGroupSize = VariantProps<typeof radioGroupItemVariants>['size']

const RadioGroupSizeContext = React.createContext<RadioGroupSize>(undefined)

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  size?: RadioGroupSize
}

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, size, ...props }, ref) => (
  <RadioGroupSizeContext.Provider value={size}>
    <RadioGroupPrimitive.Root ref={ref} className={cn('grid gap-3', className)} {...props} />
  </RadioGroupSizeContext.Provider>
))

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioGroupItemVariants> {}

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, size, ...props }, ref) => {
  const inheritedSize = React.useContext(RadioGroupSizeContext)

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioGroupItemVariants({ size: size ?? inheritedSize }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})

RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { radioGroupItemVariants }
