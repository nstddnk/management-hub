import { cn } from '@heroui/theme'
import { useState } from 'react'

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

export const AccountDetailsPanel = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(1)
  const [activeItem, setActiveItem] = useState('Winnability')
  
  return (
    <div className="flex flex-col gap-6">
      <p className="text-white text-[32px] font-light mt-16">Account Details</p>
      <div className=" rounded-[20px] flex gap-8  bg-[#1e2233] h-[500px] p-6">
        <aside className=" w-[260px] flex flex-col gap-4">
          {categories.map(({ title, count, id, items }) => (
            <div key={id} className={id === activeCategoryId ? 'bg-[#252a3e] rounded-2xl p-4' : 'p-4'}>
              <div
                className="w-full flex items-center justify-between"
                onClick={() => setActiveCategoryId(id)}
              >
                <span className="text-white text-xs font-semibold tracking-wide">{title}</span>
                <span className="text-white bg-[#2a2f45] rounded-full text-xs px-2 py-0.5">
                  {count}
                </span>
              </div>

              {activeCategoryId === id && items.length > 0 && (
                <div className="mt-2 flex flex-col gap-1 pl-2">
                  {items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveItem(item.label)}
                      className={cn(
                        'text-sm text-left px-2 py-1 rounded transition',
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
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-white text-xl font-medium tracking-wide">{activeCategoryId}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
