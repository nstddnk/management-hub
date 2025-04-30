import { Link } from '@heroui/link'
import { useLocation } from 'react-router-dom'
import { useRef } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { Database, UsersRound, FileSymlink, Building2, Goal, KeyRound, House } from 'lucide-react'
import { InputField } from '@/components/ui/InputField'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: House },
  { href: '/accounts', label: 'Accounts', icon: Database },
  { href: '/brokers', label: 'Brokers', icon: UsersRound },
  { href: '/submissions', label: 'Submissions', icon: FileSymlink },
  { href: '/organizations', label: 'Organizations', icon: Building2 },
  { href: '/goals', label: 'Goals & Rules', icon: Goal },
  { href: '/admin', label: 'Admin', icon: KeyRound },
  { href: '/admin2', label: 'Admin', icon: KeyRound },
  { href: '/admin3', label: 'Admin', icon: KeyRound },
  { href: '/admin4', label: 'Admin', icon: KeyRound },
]

export const Navbar = () => {
  const location = useLocation()
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = 300
    const currentScroll = container.scrollLeft
    const newScroll =
      direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount

    container.scrollTo({
      left: newScroll,
      behavior: 'smooth',
    })
  }

  return (
    <div className="flex flex-col w-full">
      {/* Top bar */}
      <div className="w-full border-b-[0.5px] border-[#232736]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-20 px-4">
            <div className="text-2xl font-normal">Hi Arthur, welcome! You have 12 open tasks.</div>
            <div className="flex items-center gap-3">
              <InputField
                name="search"
                placeholder="Search"
                showLabel={false}
                variant="flat"
                radius="full"
                inputClassName="bg-transparent border-none w-[250px] md:w-[300px] lg:w-[400px] h-[40px] text-base text-gray-600 placeholder-gray-400 ring-0 focus:ring-0 focus:ring-offset-0"
              />
              <div className="w-10 h-10 rounded-full bg-[#1E40AF] flex items-center justify-center text-xl font-light text-white">
                AR
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex items-center justify-between w-full px-4 py-4">
            <div
              ref={scrollContainerRef}
              className="flex-1 flex items-center space-x-2 overflow-x-auto pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {navItems.map(({ href, label, icon: Icon }) => {
                const isActive = location.pathname === href
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-full border whitespace-nowrap transition-all duration-150
                      ${
                        isActive
                          ? 'bg-nav-active border-nav-active text-white'
                          : 'bg-[#0A0F1A] border-[#1E2737] text-white hover:bg-[#1E2737]'
                      }
                    `}
                  >
                    <Icon
                      className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-[#60A5FA]'}`}
                    />
                    <span className="text-sm font-medium">{label}</span>
                  </Link>
                )
              })}
            </div>

            {/* Стрелки навигации */}
            <div className="flex-shrink-0 flex items-center gap-2 ml-2">
              <button
                onClick={() => handleScroll('left')}
                className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#0A0F1A] border-[#1E2737] text-[#60A5FA] hover:bg-[#1E2737] transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#0A0F1A] border-[#1E2737] text-[#60A5FA] hover:bg-[#1E2737] transition-colors"
              >
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
