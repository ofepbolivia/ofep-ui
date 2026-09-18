import type { Meta, StoryObj } from '@storybook/react-vite'
import { Figure, FigureCaption, Image, Stack } from '../../../src'

const demo =
  'data:image/svg+xml;charset=utf-8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360"><rect width="640" height="360" fill="#f4f2ef"/><path d="M0 300 L200 180 L340 280 L470 200 L640 300 L640 360 L0 360 Z" fill="#c7bcb3"/><circle cx="500" cy="110" r="42" fill="#b8242a" opacity="0.25"/></svg>',
  )

const meta = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    docs: {
      description: {
        component:
          'Responsive image built on native `img`. `alt` is required — pass an empty string only when the image is decorative. `rounded` supports `none | sm | md | lg | full`; `fit` supports `cover | contain | fill | none`. Wrap in `Figure` with `FigureCaption` to add a visible caption.',
      },
    },
  },
  argTypes: {
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    fit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'none'],
    },
  },
  args: {
    src: demo,
    alt: 'Institutional building at sunset',
    width: 640,
    height: 360,
  },
} satisfies Meta<typeof Image>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Rounded: Story = {
  render: () => (
    <Stack gap="md" direction="row" align="center" className="flex-wrap">
      <Image src={demo} alt="Rounded none" rounded="none" className="size-24" />
      <Image src={demo} alt="Rounded sm" rounded="sm" className="size-24" />
      <Image src={demo} alt="Rounded md" rounded="md" className="size-24" />
      <Image src={demo} alt="Rounded lg" rounded="lg" className="size-24" />
      <Image src={demo} alt="Rounded full" rounded="full" className="size-24" />
    </Stack>
  ),
}

export const WithCaption: Story = {
  render: () => (
    <Figure className="max-w-md">
      <Image src={demo} alt="Institutional building at sunset" rounded="lg" />
      <FigureCaption>Headquarters of the public enterprise office.</FigureCaption>
    </Figure>
  ),
}

export const Fit: Story = {
  render: () => (
    <Stack gap="md" direction="row" className="flex-wrap">
      <Image src={demo} alt="Cover fit" fit="cover" className="h-40 w-64 bg-surface-muted" />
      <Image src={demo} alt="Contain fit" fit="contain" className="h-40 w-64 bg-surface-muted" />
    </Stack>
  ),
}
