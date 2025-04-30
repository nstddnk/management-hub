import { useState } from 'react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@heroui/table'
import { CircleEllipsis } from 'lucide-react'

type WorkQueueItem = {
  originator: {
    initials: string
    name: string
  }
  client: {
    name: string
    type: string
  }
  type: string
  status: 'New' | 'Pending Review' | 'Completed'
  created: string
}

const mockData: WorkQueueItem[] = [
  {
    originator: { initials: 'SM', name: 'Sam Masters' },
    client: { name: 'NAMEX Tech Solutions', type: 'Cyber Liability' },
    type: 'Underwriter Referral',
    status: 'New',
    created: '04/16/2025',
  },
  {
    originator: { initials: 'AW', name: 'Annalise Willis' },
    client: { name: 'Maritime Logistics Corp', type: 'Marine Cargo' },
    type: 'Underwriter Referral',
    status: 'New',
    created: '04/20/2025',
  },
  {
    originator: { initials: 'PD', name: 'Patrick Devenport' },
    client: { name: 'GreenField Energy Ltd', type: 'Environmental' },
    type: 'Loss Control Request',
    status: 'New',
    created: '04/16/2025',
  },
  {
    originator: { initials: 'AK', name: 'Ana Killian' },
    client: { name: 'NorthStar Financial Group', type: 'D&O Liability' },
    type: 'Underwriter Referral',
    status: 'Pending Review',
    created: '04/22/2025',
  },
  {
    originator: { initials: 'AK', name: 'Ana Killian' },
    client: { name: 'Alliance Healthcare Systems', type: 'Medical Malpractice' },
    type: 'Email',
    status: 'Completed',
    created: '04/28/2025',
  },
  {
    originator: { initials: 'MK', name: 'Me' },
    client: { name: 'QuantumTech Industries', type: 'Product Liability' },
    type: 'Email',
    status: 'Completed',
    created: '04/20/2025',
  },
]

type FilterTab = {
  label: string
  count: number
  isActive: boolean
}

export const WorkQueuePanel = () => {
  const [filterTabs, setFilterTabs] = useState<FilterTab[]>([
    { label: 'Assigned to me', count: 12, isActive: true },
    { label: 'Pending Review', count: 8, isActive: false },
    { label: 'Referrals', count: 3, isActive: false },
  ])

  const handleTabClick = (clickedLabel: string) => {
    setFilterTabs((tabs) =>
      tabs.map((tab) => ({
        ...tab,
        isActive: tab.label === clickedLabel,
      })),
    )
  }

  const columns = [
    {
      key: 'originator',
      label: 'ORIGINATOR',
      render: (item: WorkQueueItem) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#1E40AF] flex items-center justify-center text-white text-sm">
            {item.originator.initials}
          </div>
          <span className="text-white">{item.originator.name}</span>
        </div>
      ),
    },
    {
      key: 'client',
      label: 'CLIENT/LINE',
      render: (item: WorkQueueItem) => (
        <div className="flex flex-col">
          <span className="text-white">{item.client.name}</span>
          <span className="text-[#8E8E8E] text-sm">{item.client.type}</span>
        </div>
      ),
    },
    {
      key: 'type',
      label: 'TYPE',
      render: (item: WorkQueueItem) => <span className="text-white">{item.type}</span>,
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (item: WorkQueueItem) => (
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              item.status === 'New'
                ? 'bg-[#4B7BF9]'
                : item.status === 'Pending Review'
                  ? 'bg-[#F5D90A]'
                  : 'bg-[#16A34A]'
            }`}
          ></div>
          <span className="text-white">{item.status}</span>
        </div>
      ),
    },
    {
      key: 'created',
      label: 'CREATED',
      render: (item: WorkQueueItem) => <span className="text-white">{item.created}</span>,
    },
    {
      key: 'actions',
      label: '',
      render: () => (
        <button className="text-[#8E8E8E] hover:text-white transition-colors rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#1E2737]">
          <CircleEllipsis className="w-5 h-5" />
        </button>
      ),
    },
  ]

  return (
    <div className="bg-[#1e2233] rounded-2xl border border-[#1E2737] p-6">
      <h2 className="text-xl font-semibold mb-4 text-white">Work Queue</h2>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6">
        {filterTabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => handleTabClick(tab.label)}
            className={`
              px-4 py-2 rounded-full flex items-center gap-2 transition-colors
              ${
                tab.isActive
                  ? 'bg-[#4B7BF9] text-white'
                  : 'bg-[#0A0F1A] text-white hover:bg-[#1E2737]'
              }
            `}
          >
            <span>{tab.label}</span>
            <span className="bg-black/20 px-2 rounded-full text-sm">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Table */}
      <Table
        aria-label="Work Queue Items"
        className="min-w-full"
        removeWrapper
        classNames={{
          base: 'overflow-hidden',
          table: 'min-w-full',
          thead:
            'h-6 [&_th]:!bg-[#171F2F] [&>tr:first-child>th:first-child]:rounded-none [&>tr:last-child>th:first-child]:rounded-none [&>tr:first-child>th:last-child]:rounded-none [&>tr:last-child>th:last-child]:rounded-none',
          tbody: 'bg-transparent',
          tr: 'odd:bg-[#1e2233] even:bg-[#171F2F] -mx-6',
          th: '!bg-[#171F2F] text-[#8E8E8E] text-sm font-medium text-left py-1.5 first:pl-6 last:pr-6',
          td: 'py-2.5 first:pl-6 last:pr-6',
        }}
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody items={mockData}>
          {(item) => (
            <TableRow key={item.client.name}>
              {(columnKey) => (
                <TableCell>{columns.find((col) => col.key === columnKey)?.render(item)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
