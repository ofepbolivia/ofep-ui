import * as React from 'react'
import { cn } from '../lib/cn'

export interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  attribution?: React.ReactNode
}

export const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, attribution, children, ...props }, ref) => (
    <blockquote
      ref={ref}
      className={cn(
        'm-0 rounded-r-lg border-l-2 border-brand bg-surface-subtle px-5 py-4 text-base italic leading-relaxed text-foreground',
        className,
      )}
      {...props}
    >
      {children}
      {attribution ? (
        <footer className="mt-3 text-sm font-medium not-italic text-muted-foreground">
          <cite className="not-italic">{attribution}</cite>
        </footer>
      ) : null}
    </blockquote>
  ),
)

Blockquote.displayName = 'Blockquote'
