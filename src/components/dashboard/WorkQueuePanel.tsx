import { useState } from 'react'
import { MoreVertical, Eye, Edit, Trash2 } from 'lucide-react'
import { DataTable, type DataTableColumn } from '@/components/ui/DataTable'
import { Button } from '@heroui/button'
import { DropdownMenu, DropdownMenuItem } from '@/components/ui/DropdownMenu'
import workQueueData from '../../mockData/workQueue.json'
import filterTabsData from '../../mockData/filterTabs.json'

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

const mockData = workQueueData as WorkQueueItem[]

type FilterTab = {
  label: string
  count: number
  isActive: boolean
}

export const WorkQueuePanel = () => {
  const [filterTabs, setFilterTabs] = useState<FilterTab[]>(filterTabsData as FilterTab[])

  const handleTabClick = (clickedLabel: string) => {
    setFilterTabs((tabs) =>
      tabs.map((tab) => ({
        ...tab,
        isActive: tab.label === clickedLabel,
      })),
    )
  }

  const columns: DataTableColumn<WorkQueueItem>[] = [
    {
      key: 'originator',
      label: 'ORIGINATOR',
      render: (item) => (
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full bg-[#1E40AF] flex items-center justify-center text-white text-sm"
            aria-hidden="true"
          >
            {item.originator.initials}
          </div>
          <span className="text-white">{item.originator.name}</span>
        </div>
      ),
    },
    {
      key: 'client',
      label: 'CLIENT/LINE',
      render: (item) => (
        <div className="flex flex-col">
          <span className="text-white">{item.client.name}</span>
          <span className="text-[#8E8E8E] text-sm" aria-label={`Line: ${item.client.type}`}>
            {item.client.type}
          </span>
        </div>
      ),
    },
    {
      key: 'type',
      label: 'TYPE',
      render: (item) => <span className="text-white">{item.type}</span>,
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (item) => (
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${item.status === 'New'
              ? 'bg-[#4B7BF9]'
              : item.status === 'Pending Review'
                ? 'bg-[#F5D90A]'
                : 'bg-[#16A34A]'
              }`}
            aria-hidden="true"
          ></div>
          <span
            className="text-white"
            aria-live={item.status === 'Pending Review' ? 'polite' : 'off'}
          >
            {item.status}
          </span>
        </div>
      ),
    },
    {
      key: 'created',
      label: 'CREATED',
      render: (item) => <span className="text-white">{item.created}</span>,
    },
    {
      key: 'actions',
      label: '',
      render: (item: WorkQueueItem) => {
        const itemIndex = mockData.findIndex(
          (i) => i.client.name === item.client.name && i.created === item.created
        );
        const isBottomItem = itemIndex >= mockData.length - 2;

        return (
          <DropdownMenu
            trigger={
              <button
                className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10"
                aria-label={`More actions for ${item.client.name}`}
              >
                <MoreVertical className="w-4 h-4 text-white" aria-hidden="true" />
              </button>
            }
            direction={isBottomItem ? 'up' : 'auto'}
          >
            <DropdownMenuItem icon={<Eye className="w-4 h-4" />}>View Details</DropdownMenuItem>
            <DropdownMenuItem icon={<Edit className="w-4 h-4" />}>Edit</DropdownMenuItem>
            <DropdownMenuItem icon={<Trash2 className="w-4 h-4 text-red-400" />}>Delete</DropdownMenuItem>
          </DropdownMenu>
        );
      },
    },
  ]

  const activeTab = filterTabs.find((tab) => tab.isActive)
  const activeTabId = activeTab ? `${activeTab.label}-panel` : ''

  return (
    <div
      className="bg-[#1e2233] rounded-2xl border border-[#1E2737] p-4 w-full lg:w-[66%]"
      role="region"
      aria-label="Work Queue"
    >
      <h2 className="text-2xl leading-normal font-extralight mb-3 text-white">Work Queue</h2>

      <div className="flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Work queue filters">
        {filterTabs.map((tab) => (
          <Button
            key={tab.label}
            onPress={() => handleTabClick(tab.label)}
            variant="light"
            role="tab"
            aria-selected={tab.isActive}
            aria-controls={`${tab.label}-panel`}
            id={`${tab.label}-tab`}
            className={`
              px-3 md:px-4 py-2 rounded-full flex items-center gap-2 transition-colors text-sm md:text-base whitespace-nowrap
              ${tab.isActive
                ? 'bg-[#4B7BF9] text-white'
                : 'bg-[#0A0F1A] text-white hover:bg-[#1E2737]'
              }
            `}
          >
            <span>{tab.label}</span>
            <span
              className="bg-black/20 px-2 rounded-full text-sm"
              aria-label={`${tab.count} items`}
            >
              {tab.count}
            </span>
          </Button>
        ))}
      </div>

      <div
        className="overflow-x-auto -mx-4 px-4"
        role="tabpanel"
        id={activeTabId}
        aria-labelledby={activeTab ? `${activeTab.label}-tab` : undefined}
      >
        <div className="min-w-[800px]">
          <DataTable
            data={mockData}
            columns={columns}
            aria-label={`${activeTab?.label || 'Work queue'} items`}
          />
        </div>
      </div>
    </div>
  )
}
