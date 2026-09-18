'use client'

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '../lib/cn'

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger
const TooltipPortal = TooltipPrimitive.Portal

export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {}

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, sideOffset = 6, children, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 max-w-xs origin-[var(--radix-tooltip-content-transform-origin)] rounded-md bg-foreground px-3 py-2 text-sm font-medium leading-relaxed text-background shadow-floating data-[state=delayed-open]:animate-dropdown-in data-[state=instant-open]:animate-dropdown-in data-[state=closed]:animate-dropdown-out motion-reduce:animate-none',
        className,
      )}
      {...props}
    >
      {children}
      <TooltipPrimitive.Arrow className="fill-foreground" />
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
))

TooltipContent.displayName = TooltipPrimitive.Content.displayName

const TooltipArrow = TooltipPrimitive.Arrow

export {
  Tooltip,
  TooltipArrow,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
}
