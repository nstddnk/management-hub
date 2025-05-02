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
  'aria-label'?: string
}

export const DataTable = <T extends Record<string, any>>({
  data,
  columns,
  className = '',
  'aria-label': ariaLabel = 'Data Table',
}: DataTableProps<T>) => {
  return (
    <Table
      aria-label={ariaLabel}
      className={`min-w-full ${className}`}
      removeWrapper
      classNames={{
        table: 'min-w-full',
        thead:
          'h-6 [&_th]:!bg-[#232838] [&>tr:first-child>th:first-child]:rounded-none [&>tr:last-child>th:first-child]:rounded-none [&>tr:first-child>th:last-child]:rounded-none [&>tr:last-child>th:last-child]:rounded-none',
        tbody: 'bg-transparent',
        tr: 'even:bg-[#232838] odd:bg-[#1e2233] -mx-6',
        th: '!bg-[#232838] text-[#8E8E8E] text-xs font-light text-left py-1.5 first:pl-6 last:pr-6',
        td: 'py-[0.55rem] first:pl-6 last:pr-6',
      }}
    >
      <TableHeader>
        {columns.map((column) => (
          <TableColumn
            key={column.key}
            className={`${column.align === 'right' ? 'text-right pr-[20px]' : ''}`}
            aria-sort="none"
          >
            {column.label}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody items={data}>
        {(item) => {
          const isTotalRow =
            item.status?.type === 'total' ||
            (item.status?.label && item.status.label.includes('TOTAL'))

          return (
            <TableRow
              key={JSON.stringify(item)}
              className={isTotalRow ? 'border-b-[2px] border-[#232838]' : ''}
              role="row"
              aria-rowindex={data.indexOf(item) + 1}
              {...(isTotalRow ? { 'aria-rowtype': 'summary', 'aria-label': 'Total row' } : {})}
            >
              {(columnKey) => (
                <TableCell role="cell">
                  {columns.find((col) => col.key === columnKey)?.render(item)}
                </TableCell>
              )}
            </TableRow>
          )
        }}
      </TableBody>
    </Table>
  )
}
