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
      <p className="text-white text-[32px] font-light mt-16">Account Details</p>
      <div className=" rounded-[20px] flex gap-8  bg-[#1e2233] h-full p-6">
        <aside className="flex flex-col">
          {categories.map(({ title, count, id, items }) => (
            <div
              key={id}
              className={cn(
                'p-4 cursor-pointer',
                id === activeCategoryId ? 'bg-[#252a3e] rounded-2xl p-4' : '',
              )}
            >
              <div
                className="w-full flex items-center justify-between"
                onClick={() => setActiveCategoryId(id)}
              >
                <span className="text-white text-xm font-light w-[85%]">{title}</span>
                <span
                  className={cn(
                    `text-white bg-[#2a2f45] text-xs px-2 py-2 rounded`,
                    'text-white bg-[#2a2f45] text-xs px-2 py-2 rounded',
                    id === activeCategoryId ? 'border border-white' : '',
                  )}
                >
                  {count}
                </span>
              </div>

              {activeCategoryId === id && items.length > 0 && (
                <div className="mt-2 flex flex-col gap-1 pl-2 animate-slide-down origin-top">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveItem(item.label)}
                      className={cn(
                        'text-sm text-left px-2 py-1 rounded transition cursor-pointer',
                        activeItem === item.label
                          ? 'text-blue-400'
                          : 'text-white/70 hover:text-blue-300',
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        <div className="flex-1 flex flex-col gap-4 border-l-1 border-dashed border-[#8a8b98] pl-8">
          <div className="flex items-center justify-between">
            <p className="text-white text-4xl font-light ">{activeItem}</p>
          </div>
          <div className="flex gap-4 w-full justify-between">
            <div className="flex flex-col bg-[#252a3e] justify-start gap-[14px] rounded-2xl p-4 w-full">
              <p className="text-white text-lg font-light">Overall Score</p>
              <div className="flex items-center">
                <span className="text-white text-4xl font-light ">82%</span>
                <div className="flex items-center border border-blue-500 rounded-full px-4 py-1 ml-2">
                  <div className="flex gap-1 mr-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                    <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                    <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                    <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                  </div>
                  <span className="text-blue-400 font-light">Very Strong</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-[#252a3e] justify-center rounded-2xl p-4 w-[270px] h-[120px] justify-between">
              <p className="text-white text-lg font-light">Historical trend</p>
              <svg width="240" height="60" viewBox="0 0 240 60" fill="none">
                <polyline
                  fill="none"
                  stroke="#5B7CFA"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  points="0,45 48,35 96,40 144,30 192,40 240,33"
                />
              </svg>
              <div className="flex justify-between text-[#7c819c] text-sm mt-[-8px] px-[2px]">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>Now</span>
              </div>
            </div>
            <div className="flex bg-[#252a3e] rounded-2xl p-4">
              <div className="flex justify-center flex-col">
                <p className="text-white text-lg font-light">Position</p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-[160px] relative h-4 bg-[#323853] rounded-r-[100px] overflow-hidden"
                    role="progressbar"
                  >
                    <div className="absolute h-full w-[80%] bg-gradient-to-r from-[#0f2557] to-[#60A5FA] rounded-r-[100px]" />
                  </div>
                  <p className="text-white text-sm whitespace-nowrap">You score 82%</p>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-[160px] relative h-4 bg-[#323853] rounded-r-[100px] overflow-hidden"
                    role="progressbar"
                  >
                    <div className="absolute h-full w-[70%] bg-gradient-to-r from-[#0f2557] to-[#60A5FA] rounded-r-[100px]" />
                  </div>
                  <p className="text-[#A0A3B2] text-sm whitespace-nowrap">Top competitor: 88%</p>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-[160px] relative h-4 bg-[#323853] rounded-r-[100px] overflow-hidden"
                    role="progressbar"
                  >
                    <div className="absolute h-full w-[90%] bg-gradient-to-r from-[#0f2557] to-[#60A5FA] rounded-r-[100px]" />
                  </div>
                  <p className="text-[#A0A3B2] text-sm whitespace-nowrap">Workers Comp: 8.6%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <IncreasingDecreasingPanel type="increase" factors={increasingFactors} />
            <IncreasingDecreasingPanel type="decrease" factors={decreasingFactors} />
          </div>

          <div className="flex bg-[#252a3e] rounded-2xl p-4 flex-col gap-4">
            <div className="flex items-center">
              <Rocket size={24} className="mr-2 text-green-400" />
              <p className="text-green-400 text-xm font-light">AI-Powered Recommendations</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white text-xs font-light">
                    Offer 5% premium discount in exchange for 3-year commitment
                  </div>
                  <div className="text-gray-400 text-xs font-light">
                    Historical win rate increases 24% with multi-year commitments. Current pricing
                    is 12% above market average. This approach would strengthen retention while
                    maintaining adequate profitability.
                  </div>
                </div>
                <Button className="ml-8 bg-green-400 hover:bg-green-500 text-black text-xs font-light rounded-full px-10 py-3 transition">
                  Apply
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white text-xs font-light mb-1">
                    Propose risk control services for cargo handling procedures
                  </div>
                  <div className="text-gray-400 text-xs font-light">
                    Can potentially reduce loss ratio by 15-20% based on similar maritime accounts
                    in your portfolio. Specific focus on loading/unloading operations would address
                    the most frequent claim scenarios.
                  </div>
                </div>
                <Button className="ml-8 bg-green-400 hover:bg-green-500 text-black text-xs font-light rounded-full px-10 py-3 transition">
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
