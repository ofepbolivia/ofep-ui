'use client'

import * as React from 'react'
import { Check, ChevronDown, Search } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

export interface ComboboxOption {
  disabled?: boolean
  label: string
  value: string
}

const comboboxTriggerVariants = cva(
  'peer flex w-full items-center justify-between gap-2 rounded-md border border-border bg-surface-sunken text-foreground transition-colors focus-visible:outline-none focus-visible:border-b-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-[var(--ofep-disabled-opacity)] aria-[invalid=true]:border-destructive/60 aria-[invalid=true]:focus-visible:border-b-destructive [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      size: {
        sm: 'h-8 px-2.5 text-sm',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-3.5 text-base',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export interface ComboboxProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value'>,
    VariantProps<typeof comboboxTriggerVariants> {
  emptyMessage?: string
  onValueChange?: (value: string) => void
  options: ComboboxOption[]
  placeholder?: string
  searchPlaceholder?: string
  value?: string
}

export const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      className,
      disabled,
      emptyMessage = 'No results found.',
      onValueChange,
      options,
      placeholder = 'Select an option',
      searchPlaceholder = 'Search...',
      size,
      value,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false)
    const [search, setSearch] = React.useState('')
    const selectedOption = options.find((option) => option.value === value)
    const normalizedSearch = search.trim().toLowerCase()
    const filteredOptions = normalizedSearch
      ? options.filter((option) => option.label.toLowerCase().includes(normalizedSearch))
      : options

    function selectOption(nextValue: string) {
      onValueChange?.(nextValue)
      setOpen(false)
      setSearch('')
    }

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            ref={ref}
            type="button"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={cn(comboboxTriggerVariants({ size, className }))}
            {...props}
          >
            <span className={cn('line-clamp-1', !selectedOption && 'text-muted-foreground')}>
              {selectedOption?.label ?? placeholder}
            </span>
            <ChevronDown className="text-muted-foreground" aria-hidden="true" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="w-[var(--radix-popover-trigger-width)] overflow-hidden p-0"
        >
          <div className="flex items-center gap-2 border-b border-border px-3 py-2 text-muted-foreground [&_svg]:size-4 [&_svg]:shrink-0">
            <Search aria-hidden="true" />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={searchPlaceholder}
              className="h-8 min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div role="listbox" className="max-h-72 overflow-y-auto p-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={option.value === value}
                  disabled={option.disabled}
                  onClick={() => selectOption(option.value)}
                  className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-left text-sm outline-none transition-colors hover:bg-surface-subtle focus:bg-surface-subtle disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-[var(--ofep-disabled-opacity)]"
                >
                  {option.value === value ? (
                    <span className="absolute left-2 flex size-4 items-center justify-center text-brand">
                      <Check aria-hidden="true" />
                    </span>
                  ) : null}
                  {option.label}
                </button>
              ))
            ) : (
              <div className="px-2 py-6 text-center text-sm text-muted-foreground">
                {emptyMessage}
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    )
  },
)

Combobox.displayName = 'Combobox'

export { comboboxTriggerVariants }
