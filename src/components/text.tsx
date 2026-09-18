import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const textVariants = cva('m-0 leading-relaxed', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
    tone: {
      primary: 'text-foreground',
      secondary: 'text-muted-foreground',
      muted: 'text-muted-foreground/80',
      success: 'text-success',
      destructive: 'text-destructive',
    },
  },
  defaultVariants: {
    size: 'md',
    tone: 'primary',
  },
})

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div'
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, size, tone, as: Component = 'p', ...props }, ref) => {
    const Tag = Component as React.ElementType

    return <Tag ref={ref} className={cn(textVariants({ size, tone, className }))} {...props} />
  },
)

Text.displayName = 'Text'

export { textVariants }
