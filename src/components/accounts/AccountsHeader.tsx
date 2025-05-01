import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Breadcrumbs } from '../ui/Breadcrumbs'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

interface AccountsHeaderProps {
  companyName?: string
  address?: string
  accountNumber?: string
  broker?: string
  underwriter?: string
}

export const defaultCompanyInfo: AccountsHeaderProps = {
  companyName: 'Maritime Logistics Corp',
  address: '425 Harbor Boulevard, Suite 300, Seattle, WA 98104',
  accountNumber: '54383',
  broker: 'Marsh McLennan',
  underwriter: 'Kate Johnson',
}

const ATTENTION_ITEMS = {
  TITLE: 'Needs Attention',
  MARINE_SURVEY: {
    TITLE: 'Marine Survey Required',
    SUBTITLE: 'Scheduled for 06/12/2025',
    LINK: 'Review details',
  },
  LOSS_CONTROL: {
    TITLE: 'Loss Control Complete',
    SUBTITLE: 'Last inspection: 02/15/2025',
    LINK: 'View report',
  },
  CLAIMS_REVIEW: {
    TITLE: 'Claims Review Required',
    SUBTITLE: '3 open claims // $245,000 TTL',
    LINK: 'View claims',
  },
}

const pages = [
  { name: 'Dashboard', href: '#', current: false },
  { name: 'Accounts', href: '#', current: false },
  { name: 'Maritime Logistics Corp', href: '#', current: true },
]

export const AccountsHeader = ({
  companyName = defaultCompanyInfo.companyName,
  address = defaultCompanyInfo.address,
  accountNumber = defaultCompanyInfo.accountNumber,
  broker = defaultCompanyInfo.broker,
  underwriter = defaultCompanyInfo.underwriter,
}: AccountsHeaderProps) => {
  return (
    <div className=" flex flex-col gap-4">
      <Breadcrumbs items={pages} />

      <div className="flex items-center gap-4">
        <div className="rounded-full bg-purple-700 w-20 h-20"></div>
        <div className=" flex flex-col gap-1 mr-[50px]">
          <h3 className="text-[28px]">{companyName}</h3>

          <div className="flex flex-col">
            <div className="flex items-center text-[12px]">
              <div className="flex flex-col max-w-[200px]">
                <span className="text-white break-words">{address}</span>
              </div>
              <div className="h-8 w-px bg-gray-700 mx-4 my-auto" />
              <div className="flex flex-col">
                <span className="text-gray-500">EXISTING ACCOUNT</span>
                <span className="text-white">{accountNumber}</span>
              </div>
              <div className="h-8 w-px bg-gray-700 mx-4 my-auto" />
              <div className="flex flex-col">
                <span className="text-gray-500">BROKER</span>
                <span className="text-white">{broker}</span>
              </div>
              <div className="h-8 w-px bg-gray-700 mx-4 my-auto" />
              <div className="flex flex-col">
                <span className="text-gray-500">UNDERWRITER</span>
                <span className="text-white">{underwriter}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col border border-yellow-500/30 bg-[#1C1F26] p-4 rounded-2xl">
          <div className="flex items-center gap-2">
            <ExclamationCircleIcon className="w-6 h-6 text-yellow-500" />
            <h2 className="text-yellow-100 text-lg">{ATTENTION_ITEMS.TITLE}</h2>
          </div>

          <div className="flex flex-row gap-12 mt-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-base">{ATTENTION_ITEMS.MARINE_SURVEY.TITLE}</h3>
              <p className="text-gray-400 text-xs">{ATTENTION_ITEMS.MARINE_SURVEY.SUBTITLE}</p>
              <a href="#" className="text-blue-500 hover:text-blue-400 text-xs">
                {ATTENTION_ITEMS.MARINE_SURVEY.LINK} →
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-white text-base">{ATTENTION_ITEMS.LOSS_CONTROL.TITLE}</h3>
              <p className="text-gray-400 text-xs">{ATTENTION_ITEMS.LOSS_CONTROL.SUBTITLE}</p>
              <a href="#" className="text-blue-500 hover:text-blue-400 text-xs">
                {ATTENTION_ITEMS.LOSS_CONTROL.LINK} →
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-white text-base">{ATTENTION_ITEMS.CLAIMS_REVIEW.TITLE}</h3>
              <p className="text-gray-400 text-xs">{ATTENTION_ITEMS.CLAIMS_REVIEW.SUBTITLE}</p>
              <a href="#" className="text-blue-500 hover:text-blue-400 text-xs">
                {ATTENTION_ITEMS.CLAIMS_REVIEW.LINK} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
