import { Breadcrumbs } from '../ui/Breadcrumbs'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { BoatLogo } from '../ui/icons/BoatLogo'
import companyInfoData from '../../mockData/companyInfo.json'
import attentionItemsData from '../../mockData/attentionItems.json'
import breadcrumbsData from '../../mockData/breadcrumbs.json'

interface AccountsHeaderProps {
  companyName?: string
  address?: string
  accountNumber?: string
  broker?: string
  underwriter?: string
}

const defaultCompanyInfo = companyInfoData as AccountsHeaderProps
const ATTENTION_ITEMS = attentionItemsData
const pages = breadcrumbsData

export const AccountsHeader = ({
  companyName = defaultCompanyInfo.companyName,
  address = defaultCompanyInfo.address,
  accountNumber = defaultCompanyInfo.accountNumber,
  broker = defaultCompanyInfo.broker,
  underwriter = defaultCompanyInfo.underwriter,
}: AccountsHeaderProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs items={pages} />

      <div className="flex flex-col md:flex-col lg:flex-row gap-4">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-transparent border-2 border-blue-500 w-20 h-20 flex items-center justify-center">
            <BoatLogo className="w-16 h-16" />
          </div>
          <div className="flex flex-col gap-1 mr-[36px]">
            <h3 className="text-[28px]" id="company-name">
              {companyName}
            </h3>

            <div className="flex flex-col">
              <div className="flex items-center text-[12px]">
                <div className="flex flex-col max-w-[200px]">
                  <span className="text-white break-words" aria-labelledby="company-name">
                    {address}
                  </span>
                </div>
                <div className="h-8 w-px bg-gray-700 mx-4 my-auto" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-gray-500">EXISTING ACCOUNT</span>
                  <span className="text-white" aria-label="Account number">
                    {accountNumber}
                  </span>
                </div>
                <div className="h-8 w-px bg-gray-700 mx-4 my-auto" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-gray-500">BROKER</span>
                  <span className="text-white" aria-label="Broker name">
                    {broker}
                  </span>
                </div>
                <div className="h-8 w-px bg-gray-700 mx-4 my-auto" aria-hidden="true" />
                <div className="flex flex-col">
                  <span className="text-gray-500">UNDERWRITER</span>
                  <span className="text-white" aria-label="Underwriter name">
                    {underwriter}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col border border-yellow-500/30 bg-[#1C1F26] p-4 rounded-2xl lg:flex-1"
          role="region"
          aria-label="Attention items"
        >
          <div className="flex items-center gap-2">
            <ExclamationCircleIcon className="w-6 h-6 text-yellow-500" aria-hidden="true" />
            <h2 className="text-yellow-100 text-lg">{ATTENTION_ITEMS.TITLE}</h2>
          </div>

          <div className="flex flex-row gap-12 mt-4">
            {ATTENTION_ITEMS.ITEMS.map((item, index) => (
              <div className="flex flex-col gap-1" key={index}>
                <h3 className="text-white text-base">{item.TITLE}</h3>
                <p className="text-gray-400 text-xs">{item.SUBTITLE}</p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-400 text-xs"
                  aria-label={`${item.LINK} for ${item.TITLE}`}
                >
                  {item.LINK} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
