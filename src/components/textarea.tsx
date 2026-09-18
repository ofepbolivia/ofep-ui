'use client'

import * as React from 'react'
import { cn } from '../lib/cn'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  showCount?: boolean
  containerClassName?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      showCount = false,
      containerClassName,
      maxLength,
      rows = 3,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref,
  ) => {
    const isControlled = value !== undefined
    const [uncontrolledCount, setUncontrolledCount] = React.useState(
      () => String(defaultValue ?? '').length,
    )
    const count = isControlled ? String(value ?? '').length : uncontrolledCount

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!isControlled && showCount) {
        setUncontrolledCount(event.target.value.length)
      }
      onChange?.(event)
    }

    const textarea = (
      <textarea
        ref={ref}
        maxLength={maxLength}
        rows={rows}
        {...(isControlled ? { value } : { defaultValue })}
        onChange={handleChange}
        className={cn(
          'peer flex min-h-24 w-full rounded-md border border-border bg-surface-sunken px-3.5 py-3 text-base text-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-b-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-[var(--ofep-disabled-opacity)] aria-[invalid=true]:border-destructive/60 aria-[invalid=true]:focus-visible:border-b-destructive',
          className,
        )}
        {...props}
      />
    )

    if (!showCount) {
      return textarea
    }

    return (
      <div className={cn('flex flex-col', containerClassName)}>
        {textarea}
        <span className="mt-1 self-end text-xs leading-snug text-muted-foreground">
          {count}
          {maxLength != null ? `/${maxLength}` : null}
        </span>
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'
