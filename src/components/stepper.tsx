import * as React from 'react'
import { Check } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const stepperVariants = cva('w-full text-sm font-medium text-foreground', {
  variants: {
    variant: {
      default: 'flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-0',
      icon: 'flex items-center gap-4',
      detailed: 'flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8',
      breadcrumb:
        'flex w-full items-center overflow-hidden rounded-md border border-border-subtle bg-surface-subtle p-4',
      vertical: 'flex max-w-md flex-col',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const stepperItemVariants = cva(
  'relative flex min-w-0 text-muted-foreground data-[status=complete]:text-primary data-[status=current]:text-brand data-[status=error]:text-destructive',
  {
    variants: {
      variant: {
        default:
          "items-center sm:w-full sm:after:mx-6 sm:after:h-px sm:after:flex-1 sm:after:border-b sm:after:border-border sm:after:content-[''] sm:last:after:hidden xl:after:mx-10",
        icon:
          "w-full items-center after:ms-4 after:h-px after:flex-1 after:border-b after:border-border after:content-[''] last:after:hidden data-[status=complete]:after:border-primary data-[status=current]:after:border-brand",
        detailed: 'items-center gap-3',
        breadcrumb:
          "flex-1 items-center overflow-hidden after:mx-3 after:size-1.5 after:shrink-0 after:rotate-45 after:border-r after:border-t after:border-border after:content-[''] last:flex-none last:after:hidden data-[status=complete]:text-primary data-[status=current]:text-brand data-[status=error]:text-destructive sm:after:mx-4",
        vertical:
          "grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3 pb-8 before:absolute before:start-4 before:top-9 before:bottom-1 before:border-s before:border-border before:content-[''] last:pb-0 last:before:hidden",
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const stepperIndicatorVariants = cva(
  'flex shrink-0 items-center justify-center rounded-full border font-medium transition-colors motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      size: {
        sm: 'size-5 text-xs',
        md: 'size-8 text-sm',
        lg: 'size-10 text-base lg:size-12',
      },
      status: {
        complete: 'border-primary-subtle bg-primary-subtle text-primary',
        current: 'border-brand bg-surface-document text-brand',
        upcoming: 'border-border bg-surface-sunken text-muted-foreground',
        error: 'border-destructive bg-surface-document text-destructive',
      },
    },
    defaultVariants: {
      size: 'md',
      status: 'upcoming',
    },
  },
)

export type StepperStatus = 'complete' | 'current' | 'upcoming' | 'error'

export interface StepperProps
  extends React.ComponentProps<'ol'>,
    VariantProps<typeof stepperVariants> {}

export const Stepper = React.forwardRef<HTMLOListElement, StepperProps>(
  ({ className, variant, ...props }, ref) => (
    <ol ref={ref} className={cn(stepperVariants({ variant, className }))} {...props} />
  ),
)

Stepper.displayName = 'Stepper'

export interface StepperItemProps
  extends React.ComponentProps<'li'>,
    VariantProps<typeof stepperItemVariants> {
  status?: StepperStatus
}

export const StepperItem = React.forwardRef<HTMLLIElement, StepperItemProps>(
  ({ className, variant, status = 'upcoming', ...props }, ref) => (
    <li
      ref={ref}
      data-status={status}
      aria-current={status === 'current' ? 'step' : undefined}
      className={cn(stepperItemVariants({ variant, className }))}
      {...props}
    />
  ),
)

StepperItem.displayName = 'StepperItem'

export interface StepperIndicatorProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof stepperIndicatorVariants> {
  status?: StepperStatus
}

export const StepperIndicator = React.forwardRef<HTMLSpanElement, StepperIndicatorProps>(
  ({ className, size, status = 'upcoming', children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(stepperIndicatorVariants({ size, status, className }))}
      {...props}
    >
      {children ?? (status === 'complete' ? <Check aria-hidden="true" /> : null)}
    </span>
  ),
)

StepperIndicator.displayName = 'StepperIndicator'

export interface StepperContentProps extends React.ComponentProps<'span'> {}

export const StepperContent = React.forwardRef<HTMLSpanElement, StepperContentProps>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn('min-w-0', className)} {...props} />
  ),
)

StepperContent.displayName = 'StepperContent'

export interface StepperTitleProps extends React.ComponentProps<'span'> {}

export const StepperTitle = React.forwardRef<HTMLSpanElement, StepperTitleProps>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn('block font-medium leading-5', className)} {...props} />
  ),
)

StepperTitle.displayName = 'StepperTitle'

export interface StepperDescriptionProps extends React.ComponentProps<'span'> {}

export const StepperDescription = React.forwardRef<
  HTMLSpanElement,
  StepperDescriptionProps
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn('mt-1 block text-sm text-muted-foreground', className)} {...props} />
))

StepperDescription.displayName = 'StepperDescription'

export { stepperVariants, stepperItemVariants, stepperIndicatorVariants }
