'use client'

import * as React from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { Bell, CircleCheck, CircleX, Info, TriangleAlert, X } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

type ToastVariant = 'neutral' | 'success' | 'destructive' | 'warning' | 'info'

const ToastVariantContext = React.createContext<ToastVariant>('neutral')

const toastRoot =
  'group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-lg border border-border bg-surface-overlay p-4 text-foreground shadow-floating transition-transform data-[state=open]:animate-toast-in data-[state=closed]:animate-toast-out data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] motion-reduce:animate-none motion-reduce:transition-none'

const toastIconVariants = cva(
  'inline-flex size-7 shrink-0 items-center justify-center rounded [&_svg]:size-4',
  {
    variants: {
      variant: {
        neutral: 'bg-surface-subtle text-muted-foreground',
        success: 'bg-success-subtle text-success',
        destructive: 'bg-destructive-subtle text-destructive',
        warning: 'bg-warning-subtle text-warning',
        info: 'bg-info-subtle text-info',
      },
    },
    defaultVariants: {
      variant: 'neutral',
    },
  },
)

const toastIconMap = {
  neutral: Bell,
  success: CircleCheck,
  destructive: CircleX,
  warning: TriangleAlert,
  info: Info,
} as const

const ToastProvider = ToastPrimitive.Provider

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

const toastViewportPosition: Record<ToastPosition, string> = {
  'top-left': 'top-0 left-0 flex-col-reverse',
  'top-center': 'top-0 left-1/2 -translate-x-1/2 flex-col-reverse',
  'top-right': 'top-0 right-0 flex-col-reverse',
  'bottom-left': 'bottom-0 left-0 flex-col',
  'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2 flex-col',
  'bottom-right': 'bottom-0 right-0 flex-col',
}

export interface ToastViewportProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport> {
  position?: ToastPosition
}

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  ToastViewportProps
>(({ className, position = 'top-right', ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(
      'fixed z-[100] flex max-h-screen w-full gap-2 p-4 sm:max-w-sm',
      toastViewportPosition[position],
      className,
    )}
    {...props}
  />
))

ToastViewport.displayName = 'ToastViewport'

export interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root> {
  variant?: ToastVariant
}

export const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  ToastProps
>(({ className, variant = 'neutral', ...props }, ref) => (
  <ToastVariantContext.Provider value={variant ?? 'neutral'}>
    <ToastPrimitive.Root ref={ref} className={cn(toastRoot, className)} {...props} />
  </ToastVariantContext.Provider>
))

Toast.displayName = 'Toast'

export interface ToastIconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ToastIcon = React.forwardRef<HTMLDivElement, ToastIconProps>(
  ({ className, children, ...props }, ref) => {
    const variant = React.useContext(ToastVariantContext)
    const Icon = toastIconMap[variant]

    return (
      <div
        ref={ref}
        className={cn(toastIconVariants({ variant }), className)}
        {...props}
      >
        {children ?? <Icon aria-hidden="true" />}
      </div>
    )
  },
)

ToastIcon.displayName = 'ToastIcon'

export interface ToastTitleProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title> {}

export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  ToastTitleProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={cn('text-sm font-medium', className)}
    {...props}
  />
))

ToastTitle.displayName = 'ToastTitle'

export interface ToastDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description> {}

export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  ToastDescriptionProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={cn('text-sm leading-relaxed text-muted-foreground', className)}
    {...props}
  />
))

ToastDescription.displayName = 'ToastDescription'

export interface ToastActionProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Action> {}

export const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Action>,
  ToastActionProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-border bg-transparent px-3 text-sm font-medium transition-colors hover:border-border-strong hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-[var(--ofep-disabled-opacity)] motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0',
      className,
    )}
    {...props}
  />
))

ToastAction.displayName = 'ToastAction'

export interface ToastCloseProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitive.Close> {}

export const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  ToastCloseProps
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    aria-label="Close"
    className={cn(
      'inline-flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-[var(--ofep-disabled-opacity)] motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0',
      className,
    )}
    {...props}
  >
    <X aria-hidden="true" />
  </ToastPrimitive.Close>
))

ToastClose.displayName = 'ToastClose'

export interface ToastOptions {
  title?: React.ReactNode
  description?: React.ReactNode
  variant?: ToastVariant
  duration?: number
  action?: React.ReactNode
}

type ToastRecord = ToastOptions & { id: string }

const TOAST_LIMIT = 4
const EMPTY: ToastRecord[] = []

let toastState: ToastRecord[] = []
const listeners = new Set<() => void>()
let counter = 0

function emit() {
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)

  return () => {
    listeners.delete(listener)
  }
}

function getSnapshot() {
  return toastState
}

function getServerSnapshot() {
  return EMPTY
}

function createToast(options: ToastOptions) {
  const id = `toast-${++counter}`
  toastState = [...toastState, { id, ...options }].slice(-TOAST_LIMIT)
  emit()

  return id
}

function dismissToast(id: string) {
  toastState = toastState.filter((item) => item.id !== id)
  emit()
}

type ToastInput = ToastOptions | string

function normalize(input: ToastInput): ToastOptions {
  return typeof input === 'string' ? { title: input } : input
}

export const toast = Object.assign(
  (input: ToastInput) => createToast(normalize(input)),
  {
    success: (input: ToastInput) => createToast({ ...normalize(input), variant: 'success' }),
    error: (input: ToastInput) => createToast({ ...normalize(input), variant: 'destructive' }),
    warning: (input: ToastInput) => createToast({ ...normalize(input), variant: 'warning' }),
    info: (input: ToastInput) => createToast({ ...normalize(input), variant: 'info' }),
    dismiss: (id: string) => dismissToast(id),
  },
)

export interface ToasterProps extends ToastViewportProps {}

export const Toaster = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  ToasterProps
>(({ className, position = 'top-right', ...props }, ref) => {
  const toasts = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return (
    <ToastProvider swipeDirection={position.endsWith('left') ? 'left' : 'right'}>
      {toasts.map(({ id, title, description, variant, duration, action }) => (
        <Toast
          key={id}
          variant={variant}
          duration={duration}
          onOpenChange={(open) => {
            if (!open) {
              dismissToast(id)
            }
          }}
        >
          <ToastIcon />
          <div className="flex flex-1 flex-col gap-1">
            {title ? <ToastTitle>{title}</ToastTitle> : null}
            {description ? <ToastDescription>{description}</ToastDescription> : null}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport ref={ref} position={position} className={className} {...props} />
    </ToastProvider>
  )
})

Toaster.displayName = 'Toaster'

export { ToastProvider, ToastViewport, toastIconVariants }
