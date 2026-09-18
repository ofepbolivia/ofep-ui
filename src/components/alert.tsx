import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const alertVariants = cva(
  'relative grid w-full grid-cols-[0_1fr] items-start gap-y-1 rounded-lg px-4 py-3 text-sm has-[>svg]:grid-cols-[1rem_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:shrink-0 [&>svg]:text-current',
  {
    variants: {
      variant: {
        neutral: 'bg-surface-subtle text-foreground',
        info: 'bg-info-subtle text-info',
        success: 'bg-success-subtle text-success',
        warning: 'bg-warning-subtle text-warning',
        destructive: 'bg-destructive-subtle text-destructive',
        accent: 'bg-accent-subtle text-accent',
      },
    },
    defaultVariants: {
      variant: 'neutral',
    },
  },
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant, className }))}
      {...props}
    />
  ),
)

Alert.displayName = 'Alert'

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn('col-start-2 min-h-4 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  ),
)

AlertTitle.displayName = 'AlertTitle'

export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('col-start-2 text-sm leading-relaxed text-muted-foreground', className)}
    {...props}
  />
))

AlertDescription.displayName = 'AlertDescription'

export { alertVariants }
