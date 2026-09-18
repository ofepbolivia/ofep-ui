import * as React from 'react'
import { CircleCheck } from 'lucide-react'
import { cn } from '../lib/cn'
import { Heading, type HeadingProps } from './heading'

export interface PasswordRequirement {
  id?: string
  label: React.ReactNode
  met?: boolean
}

export interface PasswordRequirementsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode
  titleAs?: NonNullable<HeadingProps['as']>
  requirements: PasswordRequirement[]
  showStatus?: boolean
}

export const PasswordRequirements = React.forwardRef<
  HTMLDivElement,
  PasswordRequirementsProps
>(
  (
    { title, titleAs = 'h2', requirements, showStatus = false, className, ...props },
    ref,
  ) => (
    <div ref={ref} className={cn('w-full', className)} {...props}>
      {title ? (
        <Heading as={titleAs} size="sm" className="mb-3">
          {title}
        </Heading>
      ) : null}
      <ul
        className={cn(
          'space-y-2 text-sm leading-relaxed text-foreground',
          !showStatus && 'list-inside list-disc',
        )}
      >
        {requirements.map((requirement, index) => (
          <li
            key={requirement.id ?? index}
            className={cn(showStatus && 'flex items-start gap-2')}
          >
            {showStatus ? (
              <CircleCheck
                aria-hidden="true"
                className={cn(
                  'mt-0.5 size-4 shrink-0',
                  requirement.met ? 'text-success' : 'text-muted-foreground',
                )}
              />
            ) : null}
            <span className={cn(showStatus && 'min-w-0')}>{requirement.label}</span>
          </li>
        ))}
      </ul>
    </div>
  ),
)

PasswordRequirements.displayName = 'PasswordRequirements'
