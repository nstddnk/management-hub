import { cn } from '@heroui/theme'
import { useState } from 'react'
import { IncreasingDecreasingPanel } from '../ui/IncreasingDecreasingPanel'
import { Rocket } from 'lucide-react'
import { Button } from '@heroui/react'
import accountDetailsCategoriesData from '../../mockData/accountDetailsCategories.json'
import winnabilityFactorsData from '../../mockData/winnabilityFactors.json'

const categories = accountDetailsCategoriesData
const { increasingFactors, decreasingFactors } = winnabilityFactorsData

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
                    className={`mt-2 pl-2 animate-slide-down origin-top ${id === activeCategoryId ? 'flex' : 'hidden'
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
                  >
                    <div className="absolute h-full w-[82%] bg-gradient-to-r from-[#4B7BF9] via-[#4B7BF9] to-[#60A5FA] rounded-r-[100px]"></div>
                  </div>
                  <span className="text-blue-500 font-bold inline-flex items-center">
                    <Rocket className="w-4 h-4 mr-1" aria-hidden="true" /> Top 82%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col my-4">
            <h4 className="text-white text-lg md:text-base lg:text-lg font-light mb-4">
              Influencing Factors
            </h4>
            <div className="flex flex-col xl:flex-row gap-4 mt-2">
              <IncreasingDecreasingPanel
                type="increase"
                factors={increasingFactors}
              />
              <IncreasingDecreasingPanel
                type="decrease"
                factors={decreasingFactors}
              />
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
              View Full Analysis
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
