'use client'

import * as React from 'react'
import { type VariantProps } from 'class-variance-authority'
import { FloatingInput, type FloatingInputProps } from './floating-input'
import { Input, inputVariants, type InputProps } from './input'

type CurrencyInputBaseProps = {
  defaultValue?: string
  onValueChange?: (value: string | undefined) => void
  value?: string
}

function cleanCurrencyText(value: string) {
  let next = ''
  let hasDecimal = false

  for (const character of value.replace(/,/g, '')) {
    if (character >= '0' && character <= '9') {
      next += character
      continue
    }

    if (character === '.' && !hasDecimal) {
      next += character
      hasDecimal = true
    }
  }

  const [integer = '', decimals = ''] = next.split('.')
  const normalizedInteger = integer.replace(/^0+(?=\d)/, '') || (hasDecimal ? '0' : '')
  const normalizedDecimals = decimals.slice(0, 2)

  return hasDecimal ? `${normalizedInteger}.${normalizedDecimals}` : normalizedInteger
}

function formatCurrencyText(value: string) {
  const hasDecimal = value.includes('.')
  const [integer = '', decimals = ''] = value.split('.')
  const groupedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return hasDecimal ? `${groupedInteger}.${decimals}` : groupedInteger
}

function toCurrencyWire(value: string) {
  if (value === '' || value.endsWith('.')) {
    return undefined
  }

  return /^\d+(\.\d{1,2})?$/.test(value) ? value : undefined
}

function toCurrencyDisplay(value: string | undefined) {
  if (!value) {
    return ''
  }

  return formatCurrencyText(cleanCurrencyText(value))
}

export interface CurrencyInputProps
  extends Omit<InputProps, 'defaultValue' | 'onChange' | 'size' | 'type' | 'value'>,
    CurrencyInputBaseProps,
    VariantProps<typeof inputVariants> {}

export const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>(
  (
    {
      className,
      defaultValue,
      inputMode = 'decimal',
      onBlur,
      onValueChange,
      placeholder = '0.00',
      size,
      value,
      ...props
    },
    ref,
  ) => {
    const [text, setText] = React.useState(() => toCurrencyDisplay(value ?? defaultValue))

    React.useEffect(() => {
      if (value === undefined) {
        return
      }

      const next = toCurrencyDisplay(value)

      if (next !== text) {
        setText(next)
      }
    }, [text, value])

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      const next = cleanCurrencyText(event.target.value)

      setText(formatCurrencyText(next))
      onValueChange?.(toCurrencyWire(next))
    }

    function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
      const next = cleanCurrencyText(text)
      const wire = toCurrencyWire(next)

      if (wire) {
        const [integer, decimals = ''] = wire.split('.')
        const normalized = `${integer}.${decimals.padEnd(2, '0')}`
        setText(formatCurrencyText(normalized))
        onValueChange?.(normalized)
      }

      onBlur?.(event)
    }

    return (
      <Input
        ref={ref}
        type="text"
        inputMode={inputMode}
        autoComplete="off"
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        size={size}
        className={className}
        {...props}
      />
    )
  },
)

CurrencyInput.displayName = 'CurrencyInput'

export interface FloatingCurrencyInputProps
  extends Omit<FloatingInputProps, 'defaultValue' | 'onChange' | 'placeholder' | 'type' | 'value'>,
    CurrencyInputBaseProps {}

export const FloatingCurrencyInput = React.forwardRef<
  HTMLInputElement,
  FloatingCurrencyInputProps
>(
  (
    {
      defaultValue,
      inputClassName,
      inputMode = 'decimal',
      onBlur,
      onValueChange,
      value,
      ...props
    },
    ref,
  ) => {
    const [text, setText] = React.useState(() => toCurrencyDisplay(value ?? defaultValue))

    React.useEffect(() => {
      if (value === undefined) {
        return
      }

      const next = toCurrencyDisplay(value)

      if (next !== text) {
        setText(next)
      }
    }, [text, value])

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      const next = cleanCurrencyText(event.target.value)

      setText(formatCurrencyText(next))
      onValueChange?.(toCurrencyWire(next))
    }

    function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
      const next = cleanCurrencyText(text)
      const wire = toCurrencyWire(next)

      if (wire) {
        const [integer, decimals = ''] = wire.split('.')
        const normalized = `${integer}.${decimals.padEnd(2, '0')}`
        setText(formatCurrencyText(normalized))
        onValueChange?.(normalized)
      }

      onBlur?.(event)
    }

    return (
      <FloatingInput
        ref={ref}
        type="text"
        inputMode={inputMode}
        autoComplete="off"
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        inputClassName={inputClassName}
        {...props}
      />
    )
  },
)

FloatingCurrencyInput.displayName = 'FloatingCurrencyInput'
