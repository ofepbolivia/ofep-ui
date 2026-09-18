import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { DataTable, type DataTableColumnDef, type DataTableProps } from '../../../src'

interface Framework {
  name: string
  release: string
  downloads: number
  growth: number
}

const names = [
  'React',
  'Angular',
  'Vue',
  'Svelte',
  'Ember',
  'Backbone',
  'jQuery',
  'Bootstrap',
  'Foundation',
  'Bulma',
  'Next.js',
  'Nuxt.js',
  'Meteor',
  'Aurelia',
  'Inferno',
  'Preact',
  'Lit',
  'Alpine.js',
  'Stimulus',
  'Solid',
  'Mithril',
  'Riot',
]

const data: Framework[] = names.map((name, index) => ({
  name,
  release: `20${10 + (index % 12)}/0${(index % 9) + 1}/1${index % 9}`,
  downloads: 100000 * (index + 1),
  growth: (index * 7) % 100,
}))

const columns: DataTableColumnDef<Framework>[] = [
  {
    id: 'name',
    header: 'Name',
    accessor: (row) => row.name,
  },
  {
    id: 'release',
    header: 'Release Date',
    accessor: (row) => row.release,
  },
  {
    id: 'downloads',
    header: 'NPM Downloads',
    accessor: (row) => row.downloads,
    align: 'right',
    cell: (row) => row.downloads.toLocaleString('en-US'),
  },
  {
    id: 'growth',
    header: 'Growth',
    accessor: (row) => row.growth,
    align: 'right',
    cell: (row) => `${row.growth}%`,
  },
]

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  args: {
    columns,
    data,
  },
  parameters: {
    docs: {
      description: {
        component:
          'Composed table with built-in client-side filtering, pagination and row selection, powered by `useDataTable`. It renders the `Table` primitives inside the shared `TableContainer` surface, so it looks identical to `Table` — quiet neutral header with ink labels and a thin brand underline, same borders, radii and elevation. Per-column emphasis is opt-in through `emphasis: true`; cells are not bolded by default. `variant="divided"` adds subtle vertical borders between columns, and `striped` adds a neutral zebra tone to odd body rows — both matching `Table`. Selected rows use a neutral graphite tint, never red. It adds a search field (`InputGroup`), a rows-per-page selector (`Select`) and `Pagination`. Selection is uncontrolled and reported through `onSelectionChange`; page changes through `onPageChange` and `onPageSizeChange`. Use `manualPagination` with `rowCount` when the data is already sliced by the server. When `data` is empty, the search field, the selection column and the pagination controls are hidden, leaving only the header and the empty message. For full control, drop down to the `useDataTable` hook and compose the primitives yourself.',
      },
    },
  },
} satisfies Meta<DataTableProps<Framework>>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={data}
      getRowId={(row) => row.name}
      pageSize={5}
      selectable
    />
  ),
}

export const DividedColumns: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={data}
      getRowId={(row) => row.name}
      pageSize={5}
      selectable
      variant="divided"
    />
  ),
}

export const Striped: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={data}
      getRowId={(row) => row.name}
      pageSize={5}
      selectable
      striped
    />
  ),
}

export const WithoutSearch: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={data}
      getRowId={(row) => row.name}
      pageSize={5}
      searchable={false}
    />
  ),
}

function SingleSelectionDemo() {
  const [selected, setSelected] = React.useState<string[]>([])

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-muted-foreground">
        Selected: {selected.length > 0 ? selected[0] : 'none'}
      </p>
      <DataTable
        columns={columns}
        data={data}
        getRowId={(row) => row.name}
        pageSize={5}
        selectable="single"
        onSelectionChange={setSelected}
      />
    </div>
  )
}

export const SingleSelection: Story = {
  render: () => <SingleSelectionDemo />,
}

function SelectionDemo() {
  const [selected, setSelected] = React.useState<string[]>([])

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-muted-foreground">Selected rows: {selected.length}</p>
      <DataTable
        columns={columns}
        data={data}
        getRowId={(row) => row.name}
        pageSize={5}
        selectable
        onSelectionChange={setSelected}
      />
    </div>
  )
}

export const WithSelection: Story = {
  render: () => <SelectionDemo />,
}

function ManualPaginationDemo() {
  const pageSize = 5
  const [page, setPage] = React.useState(1)
  const pageData = data.slice((page - 1) * pageSize, page * pageSize)

  return (
    <DataTable
      columns={columns}
      data={pageData}
      getRowId={(row) => row.name}
      manualPagination
      pageSize={pageSize}
      rowCount={data.length}
      searchable={false}
      onPageChange={setPage}
    />
  )
}

export const ManualPagination: Story = {
  render: () => <ManualPaginationDemo />,
}

export const Empty: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={[]}
      emptyMessage="No frameworks match your search."
      pageSize={5}
      selectable
    />
  ),
}
