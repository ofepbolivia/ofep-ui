import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const imageVariants = cva('block max-w-full border border-border bg-surface', {
  variants: {
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    fit: {
      cover: 'object-cover',
      contain: 'object-contain',
      fill: 'object-fill',
      none: 'object-none',
    },
  },
  defaultVariants: {
    rounded: 'md',
    fit: 'cover',
  },
})

export interface ImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'alt'>,
    VariantProps<typeof imageVariants> {
  alt: string
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, rounded, fit, alt, ...props }, ref) => (
    <img
      ref={ref}
      alt={alt}
      className={cn(imageVariants({ rounded, fit, className }))}
      {...props}
    />
  ),
)

Image.displayName = 'Image'

export interface FigureProps extends React.HTMLAttributes<HTMLElement> {}

export const Figure = React.forwardRef<HTMLElement, FigureProps>(
  ({ className, ...props }, ref) => (
    <figure ref={ref} className={cn('m-0 space-y-2', className)} {...props} />
  ),
)

Figure.displayName = 'Figure'

export interface FigureCaptionProps extends React.HTMLAttributes<HTMLElement> {}

export const FigureCaption = React.forwardRef<HTMLElement, FigureCaptionProps>(
  ({ className, ...props }, ref) => (
    <figcaption
      ref={ref}
      className={cn('text-sm leading-relaxed text-muted-foreground', className)}
      {...props}
    />
  ),
)

FigureCaption.displayName = 'FigureCaption'

export { imageVariants }
