import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@heroui/table'

export type DataTableColumn<T> = {
  key: string
  label: string
  render: (item: T) => React.ReactNode
  align?: 'left' | 'right' | 'center'
}

type DataTableProps<T> = {
  data: T[]
  columns: DataTableColumn<T>[]
  className?: string
}

export const DataTable = <T extends Record<string, any>>({
  data,
  columns,
  className = '',
}: DataTableProps<T>) => {
  return (
    <Table
      aria-label="Data Table"
      className={`min-w-full ${className}`}
      removeWrapper
      classNames={{
        base: 'overflow-hidden',
        table: 'min-w-full',
        thead:
          'h-6 [&_th]:!bg-[#232838] [&>tr:first-child>th:first-child]:rounded-none [&>tr:last-child>th:first-child]:rounded-none [&>tr:first-child>th:last-child]:rounded-none [&>tr:last-child>th:last-child]:rounded-none',
        tbody: 'bg-transparent',
        tr: 'even:bg-[#232838] odd:bg-[#1e2233] -mx-6',
        th: '!bg-[#232838] text-[#8E8E8E] text-sm font-medium text-left py-1.5 first:pl-6 last:pr-6',
        td: 'py-2.5 first:pl-6 last:pr-6',
      }}
    >
      <TableHeader>
        {columns.map((column) => (
          <TableColumn
            key={column.key}
            className={`${column.align === 'right' ? 'text-right pr-[20px]' : ''}`}
          >
            {column.label}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody items={data}>
        {(item) => (
          <TableRow key={JSON.stringify(item)}>
            {(columnKey) => (
              <TableCell>{columns.find((col) => col.key === columnKey)?.render(item)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
