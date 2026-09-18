import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

export interface TableContainerProps extends React.ComponentProps<'div'> {}

export const TableContainer = React.forwardRef<HTMLDivElement, TableContainerProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'w-full overflow-x-auto rounded-lg border border-border-subtle bg-surface-document shadow-resting',
        className,
      )}
      {...props}
    />
  ),
)

TableContainer.displayName = 'TableContainer'

const tableVariants = cva('w-full caption-bottom bg-surface-document text-sm', {
  variants: {
    variant: {
      default: '',
      divided:
        '[&_th:not(:last-child)]:border-e [&_td:not(:last-child)]:border-e [&_th]:border-border-subtle [&_td]:border-border-subtle',
    },
    striped: {
      true: '[&_tbody_:where(tr:nth-child(odd))]:bg-surface-subtle',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    striped: false,
  },
})

export interface TableProps
  extends React.ComponentProps<'table'>,
    VariantProps<typeof tableVariants> {}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, variant, striped, ...props }, ref) => (
    <table
      ref={ref}
      className={cn(tableVariants({ variant, striped, className }))}
      {...props}
    />
  ),
)

Table.displayName = 'Table'

export interface TableHeaderProps extends React.ComponentProps<'thead'> {}

export const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, ...props }, ref) => (
    <thead
      ref={ref}
      className={cn(
        'bg-surface-subtle [&_tr]:border-b [&_tr]:border-brand',
        className,
      )}
      {...props}
    />
  ),
)

TableHeader.displayName = 'TableHeader'

export interface TableBodyProps extends React.ComponentProps<'tbody'> {}

export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn('[&_tr:last-child]:border-0', className)} {...props} />
  ),
)

TableBody.displayName = 'TableBody'

export interface TableFooterProps extends React.ComponentProps<'tfoot'> {}

export const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className, ...props }, ref) => (
    <tfoot
      ref={ref}
      className={cn('border-t border-border bg-surface-subtle font-medium', className)}
      {...props}
    />
  ),
)

TableFooter.displayName = 'TableFooter'

export interface TableRowProps extends React.ComponentProps<'tr'> {}

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        'border-b border-border-subtle transition-colors hover:bg-surface-muted data-[state=selected]:bg-primary-subtle data-[state=selected]:hover:bg-primary-subtle',
        className,
      )}
      {...props}
    />
  ),
)

TableRow.displayName = 'TableRow'

export interface TableHeadProps extends React.ComponentProps<'th'> {}

export const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, scope = 'col', ...props }, ref) => (
    <th
      ref={ref}
      scope={scope}
      className={cn(
        'h-10 whitespace-nowrap px-4 text-left align-middle text-xs font-semibold uppercase tracking-wide text-foreground',
        className,
      )}
      {...props}
    />
  ),
)

TableHead.displayName = 'TableHead'

export interface TableCellProps extends React.ComponentProps<'td'> {}

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn('px-4 py-3 align-middle', className)} {...props} />
  ),
)

TableCell.displayName = 'TableCell'

export interface TableCaptionProps extends React.ComponentProps<'caption'> {}

export const TableCaption = React.forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className, ...props }, ref) => (
    <caption
      ref={ref}
      className={cn('mt-4 text-sm leading-relaxed text-muted-foreground', className)}
      {...props}
    />
  ),
)

TableCaption.displayName = 'TableCaption'

export { tableVariants }
