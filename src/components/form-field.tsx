'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../lib/cn'
import { Label } from './label'

type FormFieldContextValue = {
  id: string
  invalid: boolean
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
}

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, invalid = false, ...props }, ref) => {
    const id = React.useId()
    const value = React.useMemo(() => ({ id, invalid }), [id, invalid])

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
>(({ className, ...props }, ref) => {
  const { id } = useFormField()

  return <Label ref={ref} htmlFor={id} className={className} {...props} />
})

FormLabel.displayName = 'FormLabel'

export interface FormControlProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactElement
}

export const FormControl = React.forwardRef<HTMLElement, FormControlProps>(
  ({ children, ...props }, ref) => {
    const { id, invalid } = useFormField()

    return (
      <Slot
        ref={ref}
        id={id}
        aria-describedby={`${id}-description ${id}-message`}
        aria-invalid={invalid || undefined}
        {...props}
      >
        {children}
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
