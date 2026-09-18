'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../lib/cn'
import {
  type CivilDate,
  WEEKDAYS_LONG,
  WEEKDAYS_SHORT,
  addDays,
  addMonths,
  buildMonthGrid,
  daysInMonth,
  endOfWeek,
  formatLong,
  formatMonthLabel,
  parseWire,
  sameCivil,
  startOfWeek,
  toWire,
  today,
} from '../lib/date'

export interface CalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  defaultMonth?: string
  disabled?: boolean
  month?: string
  onMonthChange?: (month: string) => void
  onSelect?: (value: string) => void
  selected?: string
}

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (
    { className, defaultMonth, disabled, month, onMonthChange, onSelect, selected, ...props },
    ref,
  ) => {
    const selectedDate = parseWire(selected)
    const controlledMonth = parseWire(month)

    const [cursor, setCursor] = React.useState(() => {
      const seed = controlledMonth ?? selectedDate ?? parseWire(defaultMonth) ?? today()
      return { year: seed.year, month: seed.month }
    })
    const [focused, setFocused] = React.useState<CivilDate>(() => selectedDate ?? today())
    const shouldFocusRef = React.useRef(false)
    const gridRef = React.useRef<HTMLDivElement>(null)

    const setGridRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        gridRef.current = node

        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ref.current = node
        }
      },
      [ref],
    )

    React.useEffect(() => {
      if (!controlledMonth) {
        return
      }

      setCursor({ year: controlledMonth.year, month: controlledMonth.month })
    }, [month])

    React.useEffect(() => {
      if (!shouldFocusRef.current) {
        return
      }

      shouldFocusRef.current = false
      gridRef.current
        ?.querySelector<HTMLButtonElement>(`[data-date="${toWire(focused)}"]`)
        ?.focus()
    }, [focused])

    function updateCursor(next: { month: number; year: number }) {
      setCursor(next)
      onMonthChange?.(toWire({ ...next, day: 1 }))
    }

    function moveFocus(next: CivilDate) {
      shouldFocusRef.current = true
      setFocused(next)

      if (next.year !== cursor.year || next.month !== cursor.month) {
        updateCursor({ year: next.year, month: next.month })
      }
    }

    function moveMonth(amount: number) {
      const next = addMonths(cursor.year, cursor.month, amount)
      updateCursor(next)
      setFocused({
        year: next.year,
        month: next.month,
        day: Math.min(focused.day, daysInMonth(next.year, next.month)),
      })
    }

    function selectDate(date: CivilDate) {
      if (disabled) {
        return
      }

      setFocused(date)
      onSelect?.(toWire(date))

      if (date.year !== cursor.year || date.month !== cursor.month) {
        updateCursor({ year: date.year, month: date.month })
      }
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
      if (disabled) {
        return
      }

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          moveFocus(addDays(focused, -1))
          break
        case 'ArrowRight':
          event.preventDefault()
          moveFocus(addDays(focused, 1))
          break
        case 'ArrowUp':
          event.preventDefault()
          moveFocus(addDays(focused, -7))
          break
        case 'ArrowDown':
          event.preventDefault()
          moveFocus(addDays(focused, 7))
          break
        case 'Home':
          event.preventDefault()
          moveFocus(startOfWeek(focused))
          break
        case 'End':
          event.preventDefault()
          moveFocus(endOfWeek(focused))
          break
        case 'Enter':
        case ' ':
          event.preventDefault()
          selectDate(focused)
          break
        default:
          break
      }
    }

    const todayDate = today()
    const days = buildMonthGrid(cursor.year, cursor.month)
    const weeks = Array.from({ length: 6 }, (_, index) => days.slice(index * 7, index * 7 + 7))

    return (
      <div ref={setGridRef} className={cn('w-full select-none', className)} {...props}>
        <div className="flex items-center justify-between pb-2">
          <button
            type="button"
            aria-label="Mes anterior"
            disabled={disabled}
            onClick={() => moveMonth(-1)}
            className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-[var(--ofep-disabled-opacity)] motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0"
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <span className="text-sm font-medium text-foreground first-letter:uppercase">
            {formatMonthLabel(cursor.year, cursor.month)}
          </span>
          <button
            type="button"
            aria-label="Mes siguiente"
            disabled={disabled}
            onClick={() => moveMonth(1)}
            className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-[var(--ofep-disabled-opacity)] motion-reduce:transition-none [&_svg]:size-4 [&_svg]:shrink-0"
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
        <div role="grid" aria-label="Calendario" onKeyDown={handleKeyDown}>
          <div role="row" className="grid grid-cols-7">
            {WEEKDAYS_SHORT.map((label, index) => (
              <span
                key={label}
                role="columnheader"
                aria-label={WEEKDAYS_LONG[index]}
                className="flex h-8 items-center justify-center text-xs font-medium text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
          {weeks.map((week) => (
            <div key={toWire(week[0])} role="row" className="grid grid-cols-7">
              {week.map((date) => {
                const isOutside = date.month !== cursor.month
                const isSelected = sameCivil(date, selectedDate)
                const isFocused = sameCivil(date, focused)
                const isToday = sameCivil(date, todayDate)

                return (
                  <div
                    key={toWire(date)}
                    role="gridcell"
                    aria-selected={isSelected ? true : undefined}
                    className="flex items-center justify-center"
                  >
                    <button
                      type="button"
                      data-date={toWire(date)}
                      tabIndex={isFocused ? 0 : -1}
                      aria-label={formatLong(date)}
                      aria-current={isToday ? 'date' : undefined}
                      disabled={disabled}
                      onClick={() => selectDate(date)}
                      className={cn(
                        'inline-flex size-9 items-center justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none',
                        isOutside && 'text-muted-foreground',
                        isToday && !isSelected && 'font-semibold text-brand',
                        isSelected
                          ? 'bg-brand text-brand-foreground hover:bg-brand-hover'
                          : 'hover:bg-surface-muted',
                        disabled && 'pointer-events-none opacity-[var(--ofep-disabled-opacity)]',
                      )}
                    >
                      {date.day}
                    </button>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    )
  },
)

Calendar.displayName = 'Calendar'
