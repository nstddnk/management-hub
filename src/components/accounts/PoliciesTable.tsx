import { useState } from 'react'
import { SearchFilterControls } from '../ui/SearchFilterControls'
import { DataTable, type DataTableColumn } from '@/components/ui/DataTable'
import { MoreVertical, Ship, ShieldCheck, ShieldUser, Umbrella } from 'lucide-react'

type PolicyItem = {
  line: string
  id: string
  effDate: string
  expDate: string
  status: {
    label: 'Active' | 'Pending' | 'TOTAL (4)'
    type: 'active' | 'pending' | 'total'
  }
  expiringTech: string | number
  expiringPremium: string | number
  renewalToTech: string | number
  renewalTech: string | number
  renewalPremium: string | number
  rateChange: string | null
  lossRatio: {
    value: number | null
    color: 'green' | 'yellow' | 'red' | null
  }
}

const mockData: PolicyItem[] = [
  {
    line: 'Marine Cargo',
    id: '17030212',
    effDate: '6/30/2026',
    expDate: '6/30/2027',
    status: { label: 'Active', type: 'active' },
    expiringTech: '$587,500',
    expiringPremium: '$605,000',
    renewalToTech: '$610,000',
    renewalTech: '$620,000',
    renewalPremium: '$625,000',
    rateChange: '3.3%',
    lossRatio: { value: 22, color: 'green' },
  },
  {
    line: 'General Liability',
    id: '4651092',
    effDate: '6/30/2026',
    expDate: '6/30/2027',
    status: { label: 'Active', type: 'active' },
    expiringTech: '$160,000',
    expiringPremium: '$165,000',
    renewalToTech: '$170,000',
    renewalTech: '$172,500',
    renewalPremium: '$175,000',
    rateChange: '6.1%',
    lossRatio: { value: 55, color: 'yellow' },
  },
  {
    line: 'Workers Comp',
    id: '9182371',
    effDate: 'Pending',
    expDate: 'Pending',
    status: { label: 'Pending', type: 'pending' },
    expiringTech: '$0',
    expiringPremium: '$0',
    renewalToTech: '$73,500',
    renewalTech: '$75,000',
    renewalPremium: '$75,000',
    rateChange: null,
    lossRatio: { value: null, color: null },
  },
  {
    line: 'Umbrella',
    id: '5274936',
    effDate: '13/03/2026',
    expDate: '13/03/2027',
    status: { label: 'Active', type: 'active' },
    expiringTech: '$245,000',
    expiringPremium: '$250,000',
    renewalToTech: '$267,500',
    renewalTech: '$270,000',
    renewalPremium: '$275,000',
    rateChange: '10.0%',
    lossRatio: { value: 78, color: 'red' },
  },
  {
    line: '',
    id: '',
    effDate: '',
    expDate: '',
    status: { label: 'TOTAL (4)', type: 'total' },
    expiringTech: '$992,500',
    expiringPremium: '$1,020,000',
    renewalToTech: '$1,121,000',
    renewalTech: '$1,137,500',
    renewalPremium: '$1,150,000',
    rateChange: '6.9%',
    lossRatio: { value: 58.3, color: 'yellow' },
  },
]

export const PoliciesTable = () => {
  const [search, setSearch] = useState('')

  const getLineColor = (line: string): string => {
    switch (line) {
      case 'Marine Cargo':
        return 'bg-[#4B7BF9]'
      case 'General Liability':
        return 'bg-[#16A34A]'
      case 'Workers Comp':
        return 'bg-[#9333EA]'
      case 'Umbrella':
        return 'bg-[#EF4444]'
      default:
        return 'bg-[#4B7BF9]'
    }
  }

  const getLineIcon = (line: string): JSX.Element => {
    switch (line) {
      case 'Marine Cargo':
        return <Ship className="text-white w-4 h-4" aria-hidden="true" />
      case 'General Liability':
        return <ShieldCheck className="text-white w-4 h-4" aria-hidden="true" />
      case 'Workers Comp':
        return <ShieldUser className="text-white w-4 h-4" aria-hidden="true" />
      case 'Umbrella':
        return <Umbrella className="text-white w-4 h-4" aria-hidden="true" />
      default:
        return <Ship className="text-white w-4 h-4" aria-hidden="true" />
    }
  }

  const columns: DataTableColumn<PolicyItem>[] = [
    {
      key: 'line',
      label: 'LINE',
      render: (item) =>
        item.line && (
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full ${getLineColor(item.line)} flex items-center justify-center`}
              aria-hidden="true"
            >
              {getLineIcon(item.line)}
            </div>
            <div className="flex flex-col">
              <span className="text-white font-light text-xs">{item.line}</span>
              <span
                className="text-[#8E8E8E] text-xs font-light"
                aria-label={`Policy ID: ${item.id}`}
              >
                {item.id}
              </span>
            </div>
          </div>
        ),
    },
    {
      key: 'effDate',
      label: 'EFF. DATE',
      render: (item) => <span className="text-white font-light text-xs">{item.effDate}</span>,
    },
    {
      key: 'expDate',
      label: 'EXP. DATE',
      render: (item) => <span className="text-white font-light text-xs">{item.expDate}</span>,
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (item) => (
        <div className="flex items-center gap-2">
          {!item.status.label.startsWith('TOTAL') && (
            <div
              className={`w-2 h-2 rounded-full ${item.status.type === 'active' ? 'bg-[#16A34A]' : 'bg-[#F5D90A]'}`}
              aria-hidden="true"
            />
          )}
          <span
            className="text-white font-light text-xs"
            aria-live={item.status.type === 'pending' ? 'polite' : 'off'}
          >
            {item.status.label}
          </span>
        </div>
      ),
    },
    {
      key: 'expiringTech',
      label: 'EXPIRING TECH',
      render: (item) => <span className="text-white font-light text-xs">{item.expiringTech}</span>,
    },
    {
      key: 'expiringPremium',
      label: 'EXPIRING PREMIUM',
      render: (item) => (
        <span className="text-white font-light text-xs">{item.expiringPremium}</span>
      ),
    },
    {
      key: 'renewalToTech',
      label: 'RENEWAL TO TECH',
      render: (item) => <span className="text-white font-light text-xs">{item.renewalToTech}</span>,
    },
    {
      key: 'renewalTech',
      label: 'RENEWAL TECH',
      render: (item) => <span className="text-white font-light text-xs">{item.renewalTech}</span>,
    },
    {
      key: 'renewalPremium',
      label: 'RENEWAL PREMIUM',
      render: (item) => (
        <span className="text-white font-light text-xs">{item.renewalPremium}</span>
      ),
    },
    {
      key: 'rateChange',
      label: 'RATE CHANGE',
      render: (item) => (
        <span
          className={`${
            item.status.label.startsWith('TOTAL')
              ? 'text-white'
              : item.rateChange && parseFloat(item.rateChange) > 5
                ? 'text-[#EF4444]'
                : 'text-white'
          } font-light text-xs`}
          aria-label={
            item.rateChange ? `Rate change: ${item.rateChange}` : 'Rate change not available'
          }
        >
          {item.rateChange ?? 'N/A'}
        </span>
      ),
    },
    {
      key: 'lossRatio',
      label: 'LOSS RATIO',
      render: (item) =>
        item.lossRatio.value !== null ? (
          <div
            className={`px-2 py-1 rounded-full inline-flex items-center justify-center font-light text-xs
                            ${
                              item.lossRatio.color === 'green'
                                ? 'bg-[#16A34A]/20 text-[#16A34A]'
                                : item.lossRatio.color === 'yellow'
                                  ? 'bg-[#F5D90A]/20 text-[#F5D90A]'
                                  : 'bg-[#EF4444]/20 text-[#EF4444]'
                            }`}
            aria-label={`Loss ratio: ${item.lossRatio.value}%, ${
              item.lossRatio.color === 'green'
                ? 'good'
                : item.lossRatio.color === 'yellow'
                  ? 'moderate'
                  : 'high'
            }`}
          >
            {item.lossRatio.value}%
          </div>
        ) : (
          <div
            className="px-2 py-1 inline-flex items-center justify-center text-white font-light text-xs"
            aria-label="Loss ratio not available"
          >
            N/A
          </div>
        ),
    },
    {
      key: 'actions',
      label: '',
      render: (item) =>
        !item.status.label.startsWith('TOTAL') ? (
          <button
            className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10"
            aria-label={`More actions for ${item.line}`}
          >
            <MoreVertical className="w-4 h-4 text-white" aria-hidden="true" />
          </button>
        ) : null,
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-white text-[32px] font-light">Policies</h2>
      <div
        className="bg-[#1e2233] rounded-[20px] p-6"
        role="region"
        aria-label="Policies table section"
      >
        <div className="flex items-center justify-between mb-6">
          <SearchFilterControls
            onSearchChange={setSearch}
            initialSearchValue={search}
            searchPlaceholder="Search"
          />
        </div>

        <div className="overflow-x-auto">
          <DataTable
            data={mockData}
            columns={columns}
            className="min-w-full"
            aria-label="Policies data table"
          />
        </div>
      </div>
    </div>
  )
}
