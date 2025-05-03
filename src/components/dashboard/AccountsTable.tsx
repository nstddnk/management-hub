import { DataTable, type DataTableColumnType } from '@/components/ui/DataTable'
import { MoreVertical } from 'lucide-react'
import { Button } from '@heroui/button'
import { InputField } from '@/components/ui/InputField'
import accountsData from '../../mockData/accounts.json'

type AccountItemType = {
  name: string
  type: string
  line: string
  broker: string
  renewalDate: string
  premium: string
  ratedPremium: string
  lossRatio: {
    value: number
    color: 'green' | 'yellow' | 'red'
  }
  appetite: 'HIGH' | 'MEDIUM' | 'CAUTIOUS'
  status: {
    label: 'Active' | 'Under review'
    type: 'active' | 'review'
  }
  triage: number
  winnability: {
    score: number
    label: 'Very Strong' | 'Strong' | 'Medium'
  }
}

const mockData = accountsData as AccountItemType[]

export const AccountsTable = () => {
  const columns: DataTableColumnType<AccountItemType>[] = [
    {
      key: 'name',
      label: 'ACCOUNT NAME/TYPE',
      render: (item) => (
        <div className="flex flex-col">
          <span className="text-white font-light text-xs md:text-[10px] lg:text-xs">
            {item.name}
          </span>
          <span className="text-[#8E8E8E] text-xs md:text-[10px] lg:text-xs font-light">
            {item.type}
          </span>
        </div>
      ),
    },
    {
      key: 'line',
      label: 'LINE',
      render: (item) => (
        <span className="text-white font-light text-xs md:text-[10px] lg:text-xs">{item.line}</span>
      ),
    },
    {
      key: 'broker',
      label: 'BROKER',
      render: (item) => (
        <span className="text-white font-light text-xs md:text-[10px] lg:text-xs">
          {item.broker}
        </span>
      ),
    },
    {
      key: 'renewalDate',
      label: 'RENEWAL DATE',
      render: (item) => (
        <span className="text-white font-light text-xs md:text-[10px] lg:text-xs">
          {item.renewalDate}
        </span>
      ),
    },
    {
      key: 'premium',
      label: 'PREMIUM',
      render: (item) => (
        <span className="text-[#4B7BF9] font-light text-xs md:text-[10px] lg:text-xs">
          {item.premium}
        </span>
      ),
    },
    {
      key: 'ratedPremium',
      label: 'RATED PREMIUM',
      align: 'right',
      render: (item) => (
        <div className="flex justify-end pr-[20px]">
          <span className="text-white font-light text-xs md:text-[10px] lg:text-xs">
            {item.ratedPremium}
          </span>
        </div>
      ),
    },
    {
      key: 'lossRatio',
      label: 'LOSS RATIO',
      render: (item) => (
        <div
          className={`px-2 py-1 rounded-full inline-flex items-center justify-center font-light text-xs md:text-[10px] lg:text-xs
          ${
            item.lossRatio.color === 'green'
              ? 'bg-[#16A34A]/20 text-[#16A34A]'
              : item.lossRatio.color === 'yellow'
                ? 'bg-[#F5D90A]/20 text-[#F5D90A]'
                : 'bg-[#EF4444]/20 text-[#EF4444]'
          }`}
        >
          {item.lossRatio.value}%
        </div>
      ),
    },
    {
      key: 'appetite',
      label: 'APPETITE',
      render: (item) => (
        <div className="px-3 py-1 rounded-full bg-[#1A2747] text-white text-xs md:text-[10px] lg:text-xs font-light flex items-center justify-center min-w-[100px]">
          {item.appetite}
        </div>
      ),
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (item) => (
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              item.status.type === 'active' ? 'bg-[#16A34A]' : 'bg-[#F5D90A]'
            }`}
          />
          <span className="text-white font-light text-xs md:text-[10px] lg:text-xs">
            {item.status.label}
          </span>
        </div>
      ),
    },
    {
      key: 'triage',
      label: 'TRIAGE',
      render: (item) => (
        <div className="flex items-center">
          <div className="px-3 py-1 rounded-full bg-[#171F2F] text-[#4B7BF9] text-xs md:text-[10px] lg:text-xs font-light flex items-center justify-center min-w-[80px] border border-[#4B7BF9]">
            {item.triage}
          </div>
        </div>
      ),
    },
    {
      key: 'winnability',
      label: 'WINNABILITY',
      render: (item) => (
        <div className="flex">
          <div className="px-4 py-1.5 rounded-full border border-[#4B7BF9] bg-[#171F2F] flex items-center gap-2 min-w-[160px]">
            <div className="flex gap-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < item.winnability.score ? 'bg-[#4B7BF9]' : 'opacity-20 bg-[#4B7BF9]'
                  }`}
                />
              ))}
            </div>
            <span className="text-[#4B7BF9] text-xs md:text-[10px] lg:text-xs font-light">
              {item.winnability.label}
            </span>
          </div>
        </div>
      ),
    },
    {
      key: 'actions',
      label: '',
      render: () => (
        <button
          className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10"
          aria-label="More actions"
        >
          <MoreVertical className="w-4 h-4 text-white" />
        </button>
      ),
    },
  ]

  return (
    <div className="bg-[#1e2233] rounded-2xl border border-[#1E2737] p-4">
      <div className="flex flex-col gap-3 mb-4">
        <h2 className="text-2xl md:text-xl lg:text-2xl leading-normal font-extralight text-white">
          My accounts
        </h2>
        <div className="flex flex-wrap items-center gap-2 w-full">
          <InputField
            name="search"
            placeholder="Search"
            showLabel={false}
            radius="full"
            inputClassName="w-full md:w-[200px] lg:w-[400px] h-[40px] rounded-full text-white placeholder-gray-400 bg-[#171F2F]"
            ariaLabel="Search accounts"
          />
          <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            <Button
              variant="light"
              className="px-4 py-2 rounded-full bg-transparent text-[#4B7BF9] border border-[#4B7BF9] hover:bg-[#1E2737] transition-colors"
              aria-label="Filter accounts"
            >
              Filter
            </Button>
            <Button
              variant="light"
              className="px-4 py-2 rounded-full bg-transparent text-[#4B7BF9] border border-[#4B7BF9] hover:bg-[#1E2737] transition-colors"
              aria-label="Sort accounts"
            >
              Sort
            </Button>
            <Button
              variant="light"
              className="px-4 py-2 rounded-full bg-transparent text-[#4B7BF9] border border-[#4B7BF9] hover:bg-[#1E2737] transition-colors"
              aria-label="Group accounts"
            >
              Group
            </Button>
            <Button
              variant="solid"
              className="px-4 py-2 rounded-full bg-[#4B7BF9] text-white hover:bg-[#4B7BF9]/90 transition-colors border border-[#4B7BF9]"
              aria-label="Create new account"
            >
              + New
            </Button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto -mx-4 px-4">
        <div className="min-w-[1000px]">
          <DataTable
            data={mockData}
            columns={columns}
            className="md:[&_th]:text-[10px] md:[&_th]:py-1.5 md:[&_td]:py-1.5"
          />
        </div>
      </div>
    </div>
  )
}
