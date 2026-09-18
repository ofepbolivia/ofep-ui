'use client'

import * as React from 'react'
import { CalendarIcon } from 'lucide-react'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'
import { Input, inputVariants } from './input'
import { Calendar } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { applyDisplayMask, parseDisplay, parseWire, toDisplay, toWire } from '../lib/date'

export interface DatePickerProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      'defaultValue' | 'onChange' | 'size' | 'type' | 'value'
    >,
    VariantProps<typeof inputVariants> {
  defaultValue?: string
  onValueChange?: (value: string | undefined) => void
  value?: string
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      'aria-invalid': ariaInvalid,
      className,
      defaultValue,
      disabled,
      id,
      onBlur,
      onValueChange,
      placeholder = 'dd/mm/aaaa',
      size,
      value,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false)
    const [text, setText] = React.useState(() => {
      const seed = parseWire(value) ?? parseWire(defaultValue)
      return seed ? toDisplay(seed) : ''
    })
    const [blurred, setBlurred] = React.useState(false)
    const calendarRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      if (value === undefined) {
        return
      }

      const parsedText = parseDisplay(text)
      const currentWire = parsedText ? toWire(parsedText) : undefined

      if (value === currentWire) {
        return
      }

      const next = parseWire(value)
      setText(next ? toDisplay(next) : '')
    }, [value])

    const parsed = parseDisplay(text)
    const wire = parsed ? toWire(parsed) : undefined
    const invalid = ariaInvalid ?? (blurred && text !== '' && !parsed ? true : undefined)

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      const masked = applyDisplayMask(event.target.value, text)
      setText(masked)

      const next = parseDisplay(masked)
      onValueChange?.(next ? toWire(next) : undefined)
    }

    function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
      setBlurred(true)
      onBlur?.(event)
    }

    function handleSelect(next: string) {
      const date = parseWire(next)

      if (!date) {
        return
      }

      setText(toDisplay(date))
      setBlurred(false)
      onValueChange?.(next)
      setOpen(false)
    }

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <div className="relative">
          <Input
            ref={ref}
            id={id}
            type="text"
            inputMode="numeric"
            autoComplete="off"
            placeholder={placeholder}
            value={text}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={disabled}
            aria-invalid={invalid}
            size={size}
            className={cn('pr-10', className)}
            {...props}
          />
          <PopoverTrigger asChild>
            <button
              type="button"
              aria-label="Abrir calendario"
              disabled={disabled}
              className="absolute right-1 top-1/2 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-[var(--ofep-disabled-opacity)] motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0"
            >
              <CalendarIcon aria-hidden="true" />
            </button>
          </PopoverTrigger>
        </div>
        <PopoverContent
          align="start"
          onOpenAutoFocus={(event) => {
            event.preventDefault()
            calendarRef.current?.querySelector<HTMLButtonElement>('[tabindex="0"]')?.focus()
          }}
          className="w-72 p-3"
        >
          <Calendar ref={calendarRef} selected={wire} onSelect={handleSelect} />
        </PopoverContent>
      </Popover>
    )
  },
)

DatePicker.displayName = 'DatePicker'
