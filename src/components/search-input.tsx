'use client'

import * as React from 'react'
import { SearchIcon } from 'lucide-react'
import { cn } from '../lib/cn'
import { Button, type ButtonProps } from './button'
import { InputGroup, InputGroupInput, type InputGroupInputProps, InputGroupText } from './input-group'
import { Label } from './label'

export interface SearchInputProps
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'children'> {
  buttonLabel?: React.ReactNode
  buttonProps?: ButtonProps
  inputProps?: Omit<InputGroupInputProps, 'placeholder' | 'type'>
  label?: React.ReactNode
  placeholder?: string
  showLabel?: boolean
}

export const SearchInput = React.forwardRef<HTMLFormElement, SearchInputProps>(
  (
    {
      buttonLabel = 'Search',
      buttonProps,
      className,
      inputProps,
      label = 'Search',
      placeholder = 'Search',
      showLabel = false,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId()
    const id = inputProps?.id ?? generatedId
    const { className: buttonClassName, ...actionProps } = buttonProps ?? {}

    return (
      <form ref={ref} className={cn('grid gap-2', className)} {...props}>
        <Label htmlFor={id} className={cn(!showLabel && 'sr-only')}>
          {label}
        </Label>
        <InputGroup className="shadow-resting">
          <InputGroupText>
            <SearchIcon aria-hidden="true" />
          </InputGroupText>
          <InputGroupInput
            id={id}
            type="search"
            placeholder={placeholder}
            required
            {...inputProps}
          />
          <Button
            type="submit"
            size="sm"
            className={cn('mr-1 self-center h-7 px-3 text-xs', buttonClassName)}
            {...actionProps}
          >
            {buttonLabel}
          </Button>
        </InputGroup>
      </form>
    )
  },
)

SearchInput.displayName = 'SearchInput'
