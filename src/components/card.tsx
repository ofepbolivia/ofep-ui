import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const cardVariants = cva(
  'rounded-lg border border-border-subtle bg-surface-document text-foreground transition-[background-color,border-color,box-shadow] duration-150 motion-reduce:transition-none',
  {
    variants: {
      variant: {
        surface:
          'shadow-resting',
        muted:
          'bg-surface-subtle shadow-resting',
        interactive:
          'shadow-resting hover:border-border hover:bg-surface-raised hover:shadow-raised',
        brand:
          'border-t-2 border-t-brand shadow-resting',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
      },
    },
    defaultVariants: {
      variant: 'surface',
      padding: 'md',
    },
  },
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardVariants> { }

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, className }))}
      {...props}
    />
  ),
)

Card.displayName = 'Card'

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> { }

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-1.5', className)} {...props} />
  ),
)

CardHeader.displayName = 'CardHeader'

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> { }

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  ),
)

CardTitle.displayName = 'CardTitle'

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> { }

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm leading-relaxed text-muted-foreground', className)}
    {...props}
  />
))

CardDescription.displayName = 'CardDescription'

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> { }

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('pt-5', className)} {...props} />
  ),
)

CardContent.displayName = 'CardContent'

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> { }

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col-reverse gap-2 pt-5 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  ),
)

CardFooter.displayName = 'CardFooter'

export { cardVariants }
