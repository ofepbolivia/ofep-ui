import type { Preview } from '@storybook/react-vite'
import type { ReactNode } from 'react'
import { useEffect } from 'react'
import '@fontsource-variable/inter'
import { cn } from '../../src/lib/cn'
import '../../src/styles.css'

function ThemeDecorator({
  children,
  theme,
  fill,
}: {
  children: ReactNode
  theme: 'light' | 'dark'
  fill: boolean
}) {
  useEffect(() => {
    const root = document.documentElement

    root.classList.toggle('dark', theme === 'dark')
    root.dataset.theme = theme

    return () => {
      root.classList.remove('dark')
      root.dataset.theme = 'light'
    }
  }, [theme])

  return (
    <div className={theme === 'dark' ? 'dark' : undefined} data-theme={theme}>
      <div className={cn('bg-background p-6 text-foreground', fill && 'min-h-screen')}>
        {children}
      </div>
    </div>
  )
}

const preview: Preview = {
  tags: ['autodocs'],
  globalTypes: {
    theme: {
      description: 'Theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'dark' ? 'dark' : 'light'
      const fill = context.viewMode === 'story'

      return (
        <ThemeDecorator theme={theme} fill={fill}>
          <Story />
        </ThemeDecorator>
      )
    },
  ],
  parameters: {
    docs: {
      stories: {
        includePrimary: false,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
