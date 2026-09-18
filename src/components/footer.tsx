import * as React from 'react'
import { cn } from '../lib/cn'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'

const Footer = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <footer
      ref={ref}
      className={cn(
        'flex flex-col gap-4 border-t border-border bg-background p-4 text-sm leading-5 text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:p-6',
        className,
      )}
      {...props}
    />
  ),
)

Footer.displayName = 'Footer'

const FooterSocial = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center justify-center gap-1', className)}
      {...props}
    />
  ),
)

FooterSocial.displayName = 'FooterSocial'

export interface FooterSocialLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string
  tooltip?: string
}

const FooterSocialLink = React.forwardRef<HTMLAnchorElement, FooterSocialLinkProps>(
  ({ className, label, tooltip, children, ...props }, ref) => {
    const link = (
      <a
        ref={ref}
        aria-label={label}
        className={cn(
          'inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0',
          className,
        )}
        {...props}
      >
        {children}
      </a>
    )

    if (!tooltip) {
      return link
    }

    return (
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>{link}</TooltipTrigger>
          <TooltipContent>{tooltip}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  },
)

FooterSocialLink.displayName = 'FooterSocialLink'

export { Footer, FooterSocial, FooterSocialLink }
