import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const fileInputVariants = cva(
  'peer flex w-full cursor-pointer rounded-md border border-border bg-surface-sunken p-0 text-foreground transition-colors file:h-full file:border-0 file:border-r file:border-border file:bg-surface-document file:font-medium file:text-foreground hover:file:bg-surface-subtle focus-visible:outline-none focus-visible:border-b-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-[var(--ofep-disabled-opacity)] aria-[invalid=true]:border-destructive/60 aria-[invalid=true]:focus-visible:border-b-destructive',
  {
    variants: {
      size: {
        sm: 'h-8 pr-2.5 text-sm file:mr-2.5 file:px-2.5 file:text-sm',
        md: 'h-10 pr-3 text-sm file:mr-3 file:px-3 file:text-sm',
        lg: 'h-12 pr-3.5 text-base file:mr-3.5 file:px-3.5 file:text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>,
    VariantProps<typeof fileInputVariants> {}

export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, size, ...props }, ref) => (
    <input
      ref={ref}
      type="file"
      className={cn(fileInputVariants({ size, className }))}
      {...props}
    />
  ),
)

FileInput.displayName = 'FileInput'

export { fileInputVariants }
