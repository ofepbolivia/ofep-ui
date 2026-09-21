'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'
import { Label, labelVariants } from './label'

type FormFieldSize = VariantProps<typeof labelVariants>['size']

type FormFieldContextValue = {
  id: string
  invalid: boolean
  size?: FormFieldSize
}

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null)

function useFormField() {
  const context = React.useContext(FormFieldContext)

  if (!context) {
    throw new Error('useFormField must be used within a FormField')
  }

  return context
}

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  invalid?: boolean
  size?: FormFieldSize
}

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, invalid = false, size, ...props }, ref) => {
    const id = React.useId()
    const value = React.useMemo(() => ({ id, invalid, size }), [id, invalid, size])

    return (
      <FormFieldContext.Provider value={value}>
        <div
          ref={ref}
          data-invalid={invalid || undefined}
          className={cn('group flex flex-col [&>*+*]:mt-2 [&>p]:mt-0.5', className)}
          {...props}
        />
      </FormFieldContext.Provider>
    )
  },
)

FormField.displayName = 'FormField'

export interface FormLabelProps
  extends React.ComponentPropsWithoutRef<typeof Label> {}

export const FormLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  FormLabelProps
>(({ className, size, ...props }, ref) => {
  const { id, size: fieldSize } = useFormField()

  return <Label ref={ref} htmlFor={id} size={size ?? fieldSize} className={className} {...props} />
})

FormLabel.displayName = 'FormLabel'

export interface FormControlProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactElement
}

export const FormControl = React.forwardRef<HTMLElement, FormControlProps>(
  ({ children, ...props }, ref) => {
    const { id, invalid, size } = useFormField()

    const control = size
      ? React.cloneElement(children as React.ReactElement<{ size?: FormFieldSize }>, { size })
      : children

    return (
      <Slot
        ref={ref}
        id={id}
        aria-describedby={`${id}-description ${id}-message`}
        aria-invalid={invalid || undefined}
        {...props}
      >
        {control}
      </Slot>
    )
  },
)

FormControl.displayName = 'FormControl'

export interface FormDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  FormDescriptionProps
>(({ className, ...props }, ref) => {
  const { id } = useFormField()

  return (
    <p
      ref={ref}
      id={`${id}-description`}
      className={cn('text-xs leading-snug text-muted-foreground', className)}
      {...props}
    />
  )
})

FormDescription.displayName = 'FormDescription'

export interface FormMessageProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  FormMessageProps
>(({ className, children, ...props }, ref) => {
  const { id, invalid } = useFormField()

  if (!children) {
    return null
  }

  return (
    <p
      ref={ref}
      id={`${id}-message`}
      role={invalid ? 'alert' : undefined}
      className={cn('text-xs font-medium leading-snug text-destructive', className)}
      {...props}
    >
      {children}
    </p>
  )
})

FormMessage.displayName = 'FormMessage'

export { useFormField }
