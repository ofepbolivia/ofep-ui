import * as React from 'react'
import { cn } from '../lib/cn'

export interface FieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {}

export const Fieldset = React.forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({ className, ...props }, ref) => (
    <fieldset
      ref={ref}
      className={cn(
        'grid gap-4 rounded-lg border border-border-subtle bg-surface-document p-4 shadow-resting disabled:opacity-[var(--ofep-disabled-opacity)]',
        className,
      )}
      {...props}
    />
  ),
)

Fieldset.displayName = 'Fieldset'

export interface FieldsetLegendProps extends React.HTMLAttributes<HTMLLegendElement> {}

export const FieldsetLegend = React.forwardRef<HTMLLegendElement, FieldsetLegendProps>(
  ({ className, ...props }, ref) => (
    <legend
      ref={ref}
      className={cn('px-1 text-sm font-semibold text-foreground', className)}
      {...props}
    />
  ),
)

FieldsetLegend.displayName = 'FieldsetLegend'

export interface FieldsetDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FieldsetDescription = React.forwardRef<
  HTMLParagraphElement,
  FieldsetDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm leading-relaxed text-muted-foreground', className)}
    {...props}
  />
))

FieldsetDescription.displayName = 'FieldsetDescription'
