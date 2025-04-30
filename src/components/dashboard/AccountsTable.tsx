import { DataTable, type DataTableColumn } from '@/components/ui/DataTable'
import { CircleEllipsis } from 'lucide-react'
import { Button } from '@heroui/button'
import { InputField } from '@/components/ui/InputField'

type AccountItem = {
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

const mockData: AccountItem[] = [
  {
    name: 'NAMEX Tech Solutions',
    type: 'Large Enterprise',
    line: 'D&O Liability',
    broker: 'Willis Towers',
    renewalDate: '04/16/2025',
    premium: '$2.3M',
    ratedPremium: '$2.8M',
    lossRatio: { value: 32, color: 'green' },
    appetite: 'HIGH',
    status: { label: 'Active', type: 'active' },
    triage: 180,
    winnability: { score: 4, label: 'Very Strong' }
  },
  {
    name: 'Alliance Healthcare Systems',
    type: 'Mid Market',
    line: 'Medical Malpractice',
    broker: 'Aon Risk',
    renewalDate: '06/30/2025',
    premium: '$1.7M',
    ratedPremium: '$1.9M',
    lossRatio: { value: 38, color: 'yellow' },
    appetite: 'MEDIUM',
    status: { label: 'Under review', type: 'review' },
    triage: 165,
    winnability: { score: 4, label: 'Strong' }
  },
  {
    name: 'Maritime Logistics Corp',
    type: 'Shipping/Logistics',
    line: 'Marine Cargo',
    broker: 'Marsh McLennan',
    renewalDate: '09/05/2025',
    premium: '$875K',
    ratedPremium: '$920K',
    lossRatio: { value: 25, color: 'green' },
    appetite: 'HIGH',
    status: { label: 'Active', type: 'active' },
    triage: 182,
    winnability: { score: 4, label: 'Very Strong' }
  },
  {
    name: 'GreenField Energy Ltd',
    type: 'Energy Sector',
    line: 'Environmental Liability',
    broker: 'Aon Risk',
    renewalDate: '07/22/2025',
    premium: '$1.2M',
    ratedPremium: '$1.4M',
    lossRatio: { value: 67, color: 'red' },
    appetite: 'CAUTIOUS',
    status: { label: 'Under review', type: 'review' },
    triage: 158,
    winnability: { score: 4, label: 'Medium' }
  }
]

export const AccountsTable = () => {
  const columns: DataTableColumn<AccountItem>[] = [
    {
      key: 'name',
      label: 'ACCOUNT NAME/TYPE',
      render: (item) => (
        <div className="flex flex-col">
          <span className="text-white">{item.name}</span>
          <span className="text-[#8E8E8E] text-sm">{item.type}</span>
        </div>
      ),
    },
    {
      key: 'line',
      label: 'LINE',
      render: (item) => <span className="text-white">{item.line}</span>,
    },
    {
      key: 'broker',
      label: 'BROKER',
      render: (item) => <span className="text-white">{item.broker}</span>,
    },
    {
      key: 'renewalDate',
      label: 'RENEWAL DATE',
      render: (item) => <span className="text-white">{item.renewalDate}</span>,
    },
    {
      key: 'premium',
      label: 'PREMIUM',
      render: (item) => <span className="text-[#4B7BF9]">{item.premium}</span>,
    },
    {
      key: 'ratedPremium',
      label: 'RATED PREMIUM',
      align: 'right',
      render: (item) => (
        <div className="flex justify-end pr-[20px]">
          <span className="text-white">{item.ratedPremium}</span>
        </div>
      ),
    },
    {
      key: 'lossRatio',
      label: 'LOSS RATIO',
      render: (item) => (
        <div className={`px-2 py-1 rounded-full inline-flex items-center justify-center
          ${item.lossRatio.color === 'green' ? 'bg-[#16A34A]/20 text-[#16A34A]' : 
            item.lossRatio.color === 'yellow' ? 'bg-[#F5D90A]/20 text-[#F5D90A]' : 
            'bg-[#EF4444]/20 text-[#EF4444]'}`}>
          {item.lossRatio.value}%
        </div>
      ),
    },
    {
      key: 'appetite',
      label: 'APPETITE',
      render: (item) => (
        <div className={`px-3 py-1 rounded-full bg-[#1E2737] text-white text-sm flex items-center justify-center min-w-[100px]
          ${item.appetite === 'HIGH' ? 'bg-[#1E2737]' : 
            item.appetite === 'MEDIUM' ? 'bg-[#1E2737]' : 
            'bg-[#1E2737] text-[#EF4444]'}`}>
          {item.appetite}
        </div>
      ),
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (item) => (
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${
            item.status.type === 'active' ? 'bg-[#16A34A]' : 'bg-[#F5D90A]'
          }`} />
          <span className="text-white">{item.status.label}</span>
        </div>
      ),
    },
    {
      key: 'triage',
      label: 'TRIAGE',
      render: (item) => (
        <div className="flex items-center">
          <div className="px-3 py-1 rounded-full bg-[#171F2F] text-[#4B7BF9] text-sm flex items-center justify-center min-w-[80px] border border-[#4B7BF9]">
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
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < item.winnability.score ? 'bg-[#4B7BF9]' : 'opacity-20 bg-[#4B7BF9]'
                  }`}
                />
              ))}
            </div>
            <span className="text-[#4B7BF9] text-sm">{item.winnability.label}</span>
          </div>
        </div>
      ),
    },
    {
      key: 'actions',
      label: '',
      render: () => (
        <Button
          isIconOnly
          variant="light"
          className="text-[#8E8E8E] hover:text-white transition-colors rounded-full w-8 h-8 min-w-8 min-h-8 p-0 hover:bg-[#1E2737] bg-transparent"
        >
          <CircleEllipsis className="w-5 h-5" />
        </Button>
      ),
    },
  ]

  return (
    <div className="bg-[#1e2233] rounded-2xl border border-[#1E2737] p-4">
      <div className="flex items-center gap-6 mb-4">
        <h2 className="text-xl font-semibold text-white">My accounts</h2>
        <div className="flex items-center gap-2">
          <InputField
            name="search"
            placeholder="Search"
            showLabel={false}
            radius="full"
            inputClassName="w-[250px] md:w-[300px] lg:w-[400px] h-[40px] text-white placeholder-gray-400 bg-[#171F2F]"
          />
          <Button
            variant="light"
            className="px-4 py-2 rounded-full bg-transparent text-[#4B7BF9] border border-[#4B7BF9] hover:bg-[#1E2737] transition-colors"
          >
            Filter
          </Button>
          <Button
            variant="light"
            className="px-4 py-2 rounded-full bg-transparent text-[#4B7BF9] border border-[#4B7BF9] hover:bg-[#1E2737] transition-colors"
          >
            Sort
          </Button>
          <Button
            variant="light"
            className="px-4 py-2 rounded-full bg-transparent text-[#4B7BF9] border border-[#4B7BF9] hover:bg-[#1E2737] transition-colors"
          >
            Group
          </Button>
          <Button
            variant="solid"
            className="px-4 py-2 rounded-full bg-[#4B7BF9] text-white hover:bg-[#4B7BF9]/90 transition-colors border border-[#4B7BF9]"
          >
            + New
          </Button>
        </div>
      </div>

      <DataTable data={mockData} columns={columns} />
    </div>
  )
}
