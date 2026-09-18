import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-sm border px-2 py-0.5 text-xs font-medium leading-5 transition-colors [&_svg]:size-3 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        neutral: 'border-border-subtle bg-surface-subtle text-muted-foreground',
        primary: 'border-primary/25 bg-primary-subtle text-primary',
        brand: 'border-brand/25 bg-brand-subtle text-brand',
        success: 'border-success/25 bg-success-subtle text-success',
        warning: 'border-warning/25 bg-warning-subtle text-warning',
        info: 'border-info/25 bg-info-subtle text-info',
        accent: 'border-accent/25 bg-accent-subtle text-accent',
        destructive: 'border-destructive/25 bg-destructive-subtle text-destructive',
        outline: 'border-border bg-transparent text-foreground',
      },
      size: {
        default: '',
        icon: 'size-5 justify-center p-0',
      },
    },
    defaultVariants: {
      variant: 'neutral',
      size: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant, size, className }))} {...props} />
  ),
)

Badge.displayName = 'Badge'

export { badgeVariants }
