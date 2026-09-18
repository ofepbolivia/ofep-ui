import * as React from 'react'
import { UploadIcon } from 'lucide-react'
import { cn } from '../lib/cn'

export interface FileUploadProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children' | 'title' | 'type'> {
  action?: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  title?: React.ReactNode
}

export const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      action = 'Choose file',
      className,
      description = 'PDF, PNG or JPG up to 10 MB.',
      disabled,
      icon,
      title = 'Upload supporting document',
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref,
  ) => {
    const isInvalid = ariaInvalid === true || ariaInvalid === 'true'

    return (
      <label
        data-disabled={disabled || undefined}
        data-invalid={isInvalid || undefined}
        className={cn(
          'flex cursor-pointer items-start gap-3 rounded-lg border border-dashed border-border bg-surface-sunken p-4 transition-colors hover:border-border-strong hover:bg-surface-subtle has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-background data-[disabled=true]:pointer-events-none data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-[var(--ofep-disabled-opacity)] data-[invalid=true]:border-destructive/60 data-[invalid=true]:has-[:focus-visible]:ring-destructive',
          className,
        )}
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-surface-raised text-muted-foreground shadow-resting [&_svg]:size-4 [&_svg]:shrink-0">
          {icon ?? <UploadIcon />}
        </span>
        <span className="grid gap-1">
          <span className="text-sm font-medium text-foreground">{title}</span>
          <span className="text-xs leading-relaxed text-muted-foreground">{description}</span>
          {action ? <span className="text-sm font-medium text-brand">{action}</span> : null}
        </span>
        <input
          ref={ref}
          type="file"
          className="sr-only"
          disabled={disabled}
          aria-invalid={ariaInvalid}
          {...props}
        />
      </label>
    )
  },
)

FileUpload.displayName = 'FileUpload'
