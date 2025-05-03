import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import marketUpdatesData from '../../mockData/marketUpdates.json'

type MarketUpdateType = {
  color: 'red' | 'yellow' | 'blue'
  text: string
  link: string
  id?: string
  details?: string
}

// Add IDs and mock details to market updates
const marketUpdates = (marketUpdatesData as MarketUpdateType[]).map((update, index) => ({
  ...update,
  id: `update-${index}`,
  details:
    'This market update may impact your portfolio. Our analysis suggests potential opportunities in related sectors. Click for more detailed information and expert recommendations.',
}))

const getIndicatorColor = (color: MarketUpdateType['color']) => {
  switch (color) {
    case 'red':
      return 'bg-[#EF4444]'
    case 'yellow':
      return 'bg-[#EAB308]'
    case 'blue':
      return 'bg-[#4B7BF9]'
    default:
      return ''
  }
}

export const MarketIntelPanel = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    setExpandedItem((prev) => (prev === id ? null : id))
  }

  return (
    <div className="bg-[#1e2233] rounded-2xl border border-[#1E2737] p-3 w-full md:flex-1 lg:max-w-[280px]">
      <h2 className="text-1xl leading-normal font-extralight mb-3 text-white">
        Market intelligence
      </h2>

      <div className="flex flex-col gap-2">
        {marketUpdates.map((update, idx) => (
          <div
            key={update.id}
            className={`${idx === marketUpdates.length - 1 ? '' : 'border-b border-[#2A3441]'} pb-2`}
          >
            <div className="flex items-start gap-3 group transition-colors hover:bg-[#2A3441] rounded px-2 py-1 -mx-2">
              <div
                className={`w-[10px] h-[10px] rounded-full shrink-0 mt-1.5 ${getIndicatorColor(update.color)}`}
              />
              <span
                onClick={(e) => toggleExpand(update.id, e)}
                className="text-white text-sm leading-normal group-hover:text-[#4B7BF9] transition-colors flex-1 cursor-pointer"
              >
                {update.text}
              </span>
              <button
                onClick={(e) => toggleExpand(update.id, e)}
                className="text-[#4B7BF9] hover:text-[#4B7BF9]/80 transition-colors shrink-0"
                aria-label={expandedItem === update.id ? 'Hide details' : 'Show details'}
              >
                {expandedItem === update.id ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>

            {expandedItem === update.id && (
              <div className="mt-2 ml-5 mr-1 p-3 bg-[#232838] rounded-md text-white/80 text-xs leading-normal">
                <p>{update.details}</p>
                <a
                  href={update.link}
                  className="mt-2 inline-block text-[#4B7BF9] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read full analysis →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
