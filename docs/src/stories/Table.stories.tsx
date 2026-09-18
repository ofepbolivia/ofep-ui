import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../src'

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component:
          'Presentational table built on native HTML elements. `TableContainer` provides the shared document surface — rounded border and resting elevation — while `Table`, `TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableHead`, `TableCell` and `TableCaption` keep the platform semantics (`scope="col"` on headers, row grouping in `thead`/`tbody`/`tfoot`) and only add token-backed styling. The header row carries the institutional highlight: a quiet neutral background, ink labels and a thin brand underline. `variant="divided"` adds subtle vertical borders between columns, while the default keeps rows separated only. `striped` adds a neutral zebra tone to odd body rows; the selected state uses a neutral graphite tint, never red, so rows are never read as danger. It carries no state: sorting, filtering, pagination and selection belong to `DataTable` or to the consumer.',
      },
    },
  },
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

const frameworks = [
  { name: 'React', release: '2013/24/05', downloads: '4,500,000', growth: '24%' },
  { name: 'Angular', release: '2010/20/09', downloads: '2,800,000', growth: '17%' },
  { name: 'Vue', release: '2014/12/02', downloads: '3,600,000', growth: '30%' },
  { name: 'Svelte', release: '2016/26/11', downloads: '1,200,000', growth: '57%' },
]

export const Default: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableCaption>Framework adoption across the institution.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Release Date</TableHead>
            <TableHead className="text-right">NPM Downloads</TableHead>
            <TableHead className="text-right">Growth</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {frameworks.map((framework) => (
            <TableRow key={framework.name}>
              <TableCell>{framework.name}</TableCell>
              <TableCell>{framework.release}</TableCell>
              <TableCell className="tabular-nums">{framework.downloads}</TableCell>
              <TableCell className="tabular-nums">{framework.growth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const Divided: Story = {
  render: () => (
    <TableContainer>
      <Table variant="divided">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Release Date</TableHead>
            <TableHead className="text-right">NPM Downloads</TableHead>
            <TableHead className="text-right">Growth</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {frameworks.map((framework) => (
            <TableRow key={framework.name}>
              <TableCell>{framework.name}</TableCell>
              <TableCell>{framework.release}</TableCell>
              <TableCell className="tabular-nums">{framework.downloads}</TableCell>
              <TableCell className="tabular-nums">{framework.growth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const Striped: Story = {
  render: () => (
    <TableContainer>
      <Table striped>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Release Date</TableHead>
            <TableHead className="text-right">NPM Downloads</TableHead>
            <TableHead className="text-right">Growth</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {frameworks.map((framework) => (
            <TableRow key={framework.name}>
              <TableCell>{framework.name}</TableCell>
              <TableCell>{framework.release}</TableCell>
              <TableCell className="tabular-nums">{framework.downloads}</TableCell>
              <TableCell className="tabular-nums">{framework.growth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const SelectedRows: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Release Date</TableHead>
            <TableHead className="text-right">NPM Downloads</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {frameworks.map((framework, index) => (
            <TableRow
              key={framework.name}
              data-state={index === 1 || index === 3 ? 'selected' : undefined}
            >
              <TableCell>{framework.name}</TableCell>
              <TableCell>{framework.release}</TableCell>
              <TableCell className="tabular-nums">{framework.downloads}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">NPM Downloads</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {frameworks.map((framework) => (
            <TableRow key={framework.name}>
              <TableCell>{framework.name}</TableCell>
              <TableCell className="tabular-nums">{framework.downloads}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell className="tabular-nums">12,369,000</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  ),
}

export const Empty: Story = {
  render: () => (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Release Date</TableHead>
            <TableHead className="text-right">NPM Downloads</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell colSpan={3} className="h-24 text-center text-muted-foreground">
              No records found.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  ),
}
