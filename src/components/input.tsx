import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const inputVariants = cva(
  'peer flex w-full rounded-md border border-border bg-surface-sunken text-foreground transition-colors file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-b-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-[var(--ofep-disabled-opacity)] aria-[invalid=true]:border-destructive/60 aria-[invalid=true]:focus-visible:border-b-destructive',
  {
    variants: {
      size: {
        sm: 'h-8 px-2.5 text-sm',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-3.5 text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, ...props }, ref) => (
    <input ref={ref} className={cn(inputVariants({ size, className }))} {...props} />
  ),
)

Input.displayName = 'Input'

export { inputVariants }
