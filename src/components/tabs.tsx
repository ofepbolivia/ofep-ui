'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

type TabsVariant = 'underline' | 'vertical'

const TabsListVariantContext = React.createContext<TabsVariant>('underline')

export interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {}

export const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root ref={ref} className={cn('group', className)} {...props} />
))

Tabs.displayName = 'Tabs'

const tabsListVariants = cva('inline-flex text-muted-foreground', {
  variants: {
    variant: {
      underline: 'flex-wrap items-center gap-x-2 border-b border-border',
      vertical: 'flex-col gap-1',
    },
  },
  defaultVariants: {
    variant: 'underline',
  },
})

const tabsTriggerVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-[var(--ofep-disabled-opacity)] motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        underline:
          '-mb-px border-b-2 border-transparent px-4 py-3 hover:text-foreground data-[state=active]:border-brand data-[state=active]:text-foreground',
        vertical:
          'w-full justify-start rounded-md border-s-2 border-transparent px-3 py-2 hover:bg-surface-subtle hover:text-foreground data-[state=active]:border-brand data-[state=active]:bg-surface-subtle data-[state=active]:text-foreground',
      },
    },
    defaultVariants: {
      variant: 'underline',
    },
  },
)

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant = 'underline', ...props }, ref) => (
  <TabsListVariantContext.Provider value={variant ?? 'underline'}>
    <TabsPrimitive.List
      ref={ref}
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  </TabsListVariantContext.Provider>
))

TabsList.displayName = 'TabsList'

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {}

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, ...props }, ref) => {
  const variant = React.useContext(TabsListVariantContext)

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(tabsTriggerVariants({ variant }), className)}
      {...props}
    />
  )
})

TabsTrigger.displayName = 'TabsTrigger'

export interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {}

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-4 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background group-data-[orientation=vertical]:mt-0',
      className,
    )}
    {...props}
  />
))

TabsContent.displayName = 'TabsContent'

export { tabsListVariants, tabsTriggerVariants }
