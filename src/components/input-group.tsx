import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const inputGroupVariants = cva(
  'flex w-full items-stretch overflow-hidden rounded-md border border-border bg-surface-sunken text-foreground transition-colors has-[:focus-visible]:border-b-ring has-[:disabled]:pointer-events-none has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-[var(--ofep-disabled-opacity)] has-[[aria-invalid=true]]:border-destructive/60 has-[[aria-invalid=true]]:has-[:focus-visible]:border-b-destructive',
  {
    variants: {
      size: {
        sm: 'min-h-8 text-sm [&_[data-slot=input-group-input]]:px-2.5 [&_[data-slot=input-group-text]]:px-2.5',
        md: 'min-h-10 text-sm [&_[data-slot=input-group-input]]:px-3 [&_[data-slot=input-group-text]]:px-3',
        lg: 'min-h-12 text-base [&_[data-slot=input-group-input]]:px-3.5 [&_[data-slot=input-group-text]]:px-3.5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export interface InputGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupVariants> {}

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cn(inputGroupVariants({ size, className }))} {...props} />
  ),
)

InputGroup.displayName = 'InputGroup'

export interface InputGroupTextProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const InputGroupText = React.forwardRef<HTMLSpanElement, InputGroupTextProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      data-slot="input-group-text"
      className={cn(
        'flex shrink-0 items-center justify-center gap-1 text-muted-foreground [&_svg]:size-4 [&_svg]:shrink-0',
        className,
      )}
      {...props}
    />
  ),
)

InputGroupText.displayName = 'InputGroupText'

export interface InputGroupInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {}

export const InputGroupInput = React.forwardRef<HTMLInputElement, InputGroupInputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      data-slot="input-group-input"
      className={cn(
        'min-h-0 min-w-0 flex-1 bg-transparent py-1 text-inherit outline-none file:border-0 file:bg-transparent file:text-inherit file:font-medium placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    />
  ),
)

InputGroupInput.displayName = 'InputGroupInput'

export { inputGroupVariants }
