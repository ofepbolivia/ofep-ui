'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'
import { Spinner } from './spinner'

const buttonVariants = cva(
  'inline-flex shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap align-top rounded-md font-medium no-underline transition-[color,background-color,border-color,box-shadow,opacity] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-[var(--ofep-disabled-opacity)] aria-disabled:pointer-events-none aria-disabled:opacity-[var(--ofep-disabled-opacity)] motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow-resting hover:bg-primary-hover hover:shadow-raised',
        brand:
          'bg-brand-subtle text-brand hover:bg-brand/15',
        secondary:
          'border border-border bg-surface-document text-foreground shadow-resting hover:border-border-strong hover:bg-surface-subtle hover:shadow-raised',
        tertiary:
          'border border-border bg-transparent text-foreground hover:border-border-strong hover:bg-surface-subtle',
        ghost:
          'bg-transparent text-foreground hover:bg-surface-subtle',
        success:
          'bg-success text-success-foreground shadow-resting hover:bg-success-hover hover:shadow-raised',
        warning:
          'bg-warning text-warning-foreground shadow-resting hover:bg-warning-hover hover:shadow-raised',
        destructive:
          'bg-destructive text-destructive-foreground shadow-resting hover:opacity-90 hover:shadow-raised',
      },
      size: {
        sm: 'h-8 px-3 pb-0.5 text-xs',
        md: 'h-9 px-4 pb-0.5 text-sm',
        lg: 'h-10 px-5 pb-0.5 text-sm',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, disabled, children, ...props },
    ref,
  ) => {
    const classes = cn(
      buttonVariants({ variant, size, className }),
      loading && 'pointer-events-none cursor-wait [--ofep-disabled-opacity:1]',
    )
    const isDisabled = disabled || loading || undefined

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ children?: React.ReactNode }>

      return (
        <Slot
          ref={ref}
          className={classes}
          aria-disabled={isDisabled}
          aria-busy={loading || undefined}
          data-loading={loading || undefined}
          {...props}
        >
          {React.cloneElement(
            child,
            undefined,
            loading ? (
              <>
                <Spinner />
                {child.props.children}
              </>
            ) : (
              child.props.children
            ),
          )}
        </Slot>
      )
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        data-loading={loading || undefined}
        {...props}
      >
        {loading ? (
          <>
            <Spinner />
            {children}
          </>
        ) : (
          children
        )}
      </button>
    )
  },
)

Button.displayName = 'Button'

export { buttonVariants }
