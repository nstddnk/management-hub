import { cn } from '@heroui/theme'
import { useState } from 'react'
import { IncreasingDecreasingPanel } from '../ui/IncreasingDecreasingPanel'
import { Rocket } from 'lucide-react'
import { Button } from '@heroui/react'

const categories = [
  {
    id: 1,
    title: 'DECISION SUPPORT',
    count: 4,
    items: [
      { label: 'Winnability', id: 'winnability' },
      { label: 'Exposure Review & Suggested Coverage', id: 'exposure' },
      { label: 'Portfolio Strategy Alignment', id: 'strategy' },
      { label: 'Broker Analytics', id: 'broker' },
    ],
  },
  {
    id: 2,
    title: 'RISK ASSESSMENT',
    count: 6,
    items: [],
  },
  {
    id: 3,
    title: 'DOCUMENTS AND COMPLIANCE',
    count: 2,
    items: [],
  },
]

const increasingFactors = [
  { label: 'Brokers relationship', value: '+28%' },
  { label: 'Loss history', value: '+22%' },
  { label: 'Industry growth', value: '+16%' },
  { label: 'Multiline opportunity', value: '+11%' },
]

const decreasingFactors = [
  { label: 'Premium pricing', value: '-24%' },
  { label: 'Total exposure', value: '-18%' },
  { label: 'Loss ratio trend', value: '-13%' },
  { label: 'Market competition', value: '-5%' },
]
export const AccountDetailsPanel = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(1)
  const [activeItem, setActiveItem] = useState('Winnability')

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-white text-[32px] font-light">Account Details</h2>
      <div
        className="rounded-[20px] flex flex-col lg:flex-row gap-6 lg:gap-8 bg-[#1e2233] h-full p-6"
        role="region"
        aria-label="Account details content"
      >
        <aside
          className="w-full lg:w-[317px] lg:flex-shrink-0"
          role="navigation"
          aria-label="Account categories"
        >
          <div className="flex flex-row lg:flex-col gap-3">
            {categories.map(({ title, count, id, items }) => (
              <div
                key={id}
                className={cn(
                  'flex-1 lg:flex-auto p-3 lg:p-4 cursor-pointer',
                  id === activeCategoryId ? 'bg-[#252a3e] rounded-xl lg:rounded-2xl' : '',
                )}
              >
                <div
                  className="w-full flex items-center justify-between"
                  onClick={() => setActiveCategoryId(id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={id === activeCategoryId}
                  aria-controls={`category-items-${id}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveCategoryId(id)
                    }
                  }}
                >
                  <span className="text-white text-sm lg:text-base md:text-xs font-light w-[85%]">
                    {title}
                  </span>
                  <span
                    className={cn(
                      'text-white bg-[#2a2f45] text-sm lg:text-base md:text-xs px-1.5 lg:px-2 py-0.5 lg:py-1 rounded ',
                      id === activeCategoryId ? 'border border-white font-bold' : '',
                    )}
                    aria-label={`${count} items`}
                  >
                    {count}
                  </span>
                </div>

                {activeCategoryId === id && items.length > 0 && (
                  <div
                    id={`category-items-${id}`}
                    className={`mt-2 pl-2 animate-slide-down origin-top ${
                      id === activeCategoryId ? 'flex' : 'hidden'
                    } flex-row lg:flex-col flex-wrap gap-1`}
                    role="menu"
                  >
                    {items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveItem(item.label)}
                        className={cn(
                          'text-sm text-left px-2 py-1 rounded transition cursor-pointer mr-2 lg:mr-0',
                          activeItem === item.label
                            ? 'text-blue-400 md:text-xs'
                            : 'text-white/70 hover:text-blue-300 md:text-xs',
                        )}
                        role="menuitem"
                        aria-current={activeItem === item.label ? 'page' : undefined}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        <div
          className="flex-1 flex flex-col gap-4 lg:border-l lg:border-dashed lg:border-[#8a8b98] lg:pl-8"
          role="main"
          aria-label={`${activeItem} details`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-white text-2xl md:text-xl lg:text-4xl font-light">{activeItem}</h3>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            <div className="flex flex-col bg-[#252a3e] justify-start gap-[14px] rounded-xl lg:rounded-2xl p-4 w-full lg:w-1/3">
              <h4 className="text-white text-lg md:text-base lg:text-lg font-light">
                Overall Score
              </h4>
              <div className="flex items-center">
                <span className="text-white text-2xl md:text-xl lg:text-4xl font-light">82%</span>
                <div
                  className="flex items-center border border-blue-500 rounded-full px-3 lg:px-4 py-0.5 lg:py-1 ml-2"
                  aria-label="Score rating: Very Strong"
                >
                  <div className="flex gap-1 mr-2" aria-hidden="true">
                    <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-500 rounded-full inline-block"></span>
                    <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-500 rounded-full inline-block"></span>
                    <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-500 rounded-full inline-block"></span>
                    <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-500 rounded-full inline-block"></span>
                  </div>
                  <span className="text-blue-400 text-xs lg:text-sm md:text-[10px] font-light">
                    Very Strong
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-[#252a3e] justify-center rounded-xl lg:rounded-2xl p-4 w-full lg:w-1/3 min-h-[100px] lg:h-[120px] justify-between">
              <h4 className="text-white text-lg md:text-base lg:text-lg font-light">
                Historical trend
              </h4>
              <svg
                width="100%"
                height="60"
                viewBox="0 0 240 60"
                fill="none"
                aria-label="Score trending upward from January to April"
                preserveAspectRatio="none"
              >
                <polyline
                  fill="none"
                  stroke="#5B7CFA"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  points="0,45 48,35 96,40 144,30 192,40 240,33"
                />
              </svg>
              <div className="flex justify-between text-[#7c819c] text-xs lg:text-sm md:text-[10px] mt-[-8px] px-[2px]">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>Now</span>
              </div>
            </div>
            <div className="flex bg-[#252a3e] w-full lg:w-1/3 rounded-xl lg:rounded-2xl p-4">
              <div className="flex justify-between flex-col w-full">
                <h4 className="text-white text-lg md:text-base lg:text-lg font-light">Position</h4>
                <div className="flex items-center gap-3 lg:gap-4">
                  <div
                    className="w-[120px] md:w-[140px] lg:w-[160px] relative h-3 lg:h-4 bg-[#323853] rounded-r-[100px] overflow-hidden"
                    role="progressbar"
                    aria-valuenow={82}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Your score"
                  >
                    <div className="absolute h-full w-[80%] bg-gradient-to-r from-[#0f2557] to-[#60A5FA] rounded-r-[100px]" />
                  </div>
                  <p className="text-white text-xs md:text-[10px] lg:text-xs whitespace-nowrap">
                    You score 82%
                  </p>
                </div>

                <div className="flex items-center gap-3 lg:gap-4 my-2">
                  <div
                    className="w-[120px] md:w-[140px] lg:w-[160px] relative h-3 lg:h-4 bg-[#323853] rounded-r-[100px] overflow-hidden"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Top competitor score"
                  >
                    <div className="absolute h-full w-[70%] bg-gradient-to-r from-[#0f2557] to-[#60A5FA] rounded-r-[100px]" />
                  </div>
                  <p className="text-[#A0A3B2] text-xs md:text-[10px] lg:text-xs whitespace-nowrap">
                    Top competitor: 88%
                  </p>
                </div>

                <div className="flex items-center gap-3 lg:gap-4">
                  <div
                    className="w-[120px] md:w-[140px] lg:w-[160px] relative h-3 lg:h-4 bg-[#323853] rounded-r-[100px] overflow-hidden"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Workers Comp score"
                  >
                    <div className="absolute h-full w-[90%] bg-gradient-to-r from-[#0f2557] to-[#60A5FA] rounded-r-[100px]" />
                  </div>
                  <p className="text-[#A0A3B2] text-xs md:text-[10px] lg:text-xs whitespace-nowrap">
                    Workers Comp: 8.6%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="w-full lg:w-1/2">
              <IncreasingDecreasingPanel type="increase" factors={increasingFactors} />
            </div>
            <div className="w-full lg:w-1/2">
              <IncreasingDecreasingPanel type="decrease" factors={decreasingFactors} />
            </div>
          </div>

          <div
            className="flex bg-[#252a3e] rounded-xl lg:rounded-2xl p-4 flex-col gap-4"
            role="region"
            aria-labelledby="ai-recommendations-title"
          >
            <div className="flex items-center">
              <Rocket size={20} className="mr-2 text-green-400" aria-hidden="true" />
              <h4
                id="ai-recommendations-title"
                className="text-green-400 text-sm lg:text-base md:text-xs font-light"
              >
                AI-Powered Recommendations
              </h4>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row lg:items-center gap-3 justify-between">
                <div>
                  <div className="text-white text-xs md:text-[10px] lg:text-xs font-light">
                    Offer 5% premium discount in exchange for 3-year commitment
                  </div>
                  <div className="text-gray-400 text-xs md:text-[10px] lg:text-xs font-light">
                    Historical win rate increases 24% with multi-year commitments. Current pricing
                    is 12% above market average. This approach would strengthen retention while
                    maintaining adequate profitability.
                  </div>
                </div>
                <Button
                  className="lg:ml-8 bg-green-400 hover:bg-green-500 text-black text-xs md:text-[10px] lg:text-xs font-light rounded-full px-6 lg:px-10 py-2 lg:py-3 transition mt-2 lg:mt-0"
                  aria-label="Apply premium discount recommendation"
                >
                  Apply
                </Button>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center gap-3 justify-between">
                <div>
                  <div className="text-white text-xs md:text-[10px] lg:text-xs font-light mb-1">
                    Propose risk control services for cargo handling procedures
                  </div>
                  <div className="text-gray-400 text-xs md:text-[10px] lg:text-xs font-light">
                    Can potentially reduce loss ratio by 15-20% based on similar maritime accounts
                    in your portfolio. Specific focus on loading/unloading operations would address
                    the most frequent claim scenarios.
                  </div>
                </div>
                <Button
                  className="lg:ml-8 bg-green-400 hover:bg-green-500 text-black text-xs md:text-[10px] lg:text-xs font-light rounded-full px-6 lg:px-10 py-2 lg:py-3 transition mt-2 lg:mt-0"
                  aria-label="Apply risk control services recommendation"
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
