'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'
import { Label } from './label'

const floatingInputVariants = cva(
  'peer block w-full rounded-md border border-border bg-surface-sunken text-foreground transition-colors placeholder:text-transparent focus-visible:outline-none focus-visible:border-b-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-[var(--ofep-disabled-opacity)] aria-[invalid=true]:border-destructive/60 aria-[invalid=true]:focus-visible:border-b-destructive',
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

const floatingLabelVariants = cva(
  'pointer-events-none absolute start-2 top-0 z-10 inline-flex origin-left -translate-y-1/2 scale-75 items-center gap-1.5 rounded-sm bg-surface-sunken px-1 text-sm font-medium text-muted-foreground transition-[color,transform,top,background-color] duration-150 motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0 peer-disabled:opacity-[var(--ofep-disabled-opacity)] peer-[:not(:focus):placeholder-shown]:top-1/2 peer-[:not(:focus):placeholder-shown]:-translate-y-1/2 peer-[:not(:focus):placeholder-shown]:scale-100 peer-[:not(:focus):placeholder-shown]:bg-transparent',
)

const floatingLabelInvalidTone = 'text-destructive'

export interface FloatingInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'placeholder'>,
    VariantProps<typeof floatingInputVariants> {
  label: React.ReactNode
  icon?: React.ReactNode
  invalid?: boolean
  inputClassName?: string
  labelClassName?: string
}

export const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  (
    {
      className,
      inputClassName,
      labelClassName,
      label,
      icon,
      size,
      invalid,
      id,
      disabled,
      'aria-invalid': ariaInvalid,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId()
    const inputId = id ?? generatedId
    const isInvalid = invalid ?? (ariaInvalid === true || ariaInvalid === 'true')

    return (
      <div
        data-invalid={isInvalid || undefined}
        className={cn('group relative w-full', className)}
      >
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          placeholder=" "
          aria-invalid={isInvalid || undefined}
          aria-describedby={ariaDescribedBy}
          className={cn(floatingInputVariants({ size }), inputClassName)}
          {...props}
        />
        <Label
          htmlFor={inputId}
          className={cn(
            floatingLabelVariants(),
            isInvalid && floatingLabelInvalidTone,
            labelClassName,
          )}
        >
          {icon}
          {label}
        </Label>
      </div>
    )
  },
)

FloatingInput.displayName = 'FloatingInput'

export { floatingInputVariants, floatingLabelVariants }
