import { Link } from '@heroui/link'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { Database, UsersRound, FileSymlink, Building2, Goal, KeyRound, House } from 'lucide-react'
import { InputField } from '@/components/ui/InputField'
import { Button } from '@heroui/button'
import navItemsData from '../../mockData/navItems.json'
import userWelcomeData from '../../mockData/userWelcome.json'


const iconMap = {
  House,
  Database,
  UsersRound,
  FileSymlink,
  Building2,
  Goal,
  KeyRound
}

const navItems = navItemsData.map(item => ({
  ...item,
  icon: iconMap[item.icon as keyof typeof iconMap]
}))

export const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [clickedItem, setClickedItem] = useState<string | null>(null)

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

  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Allow normal navigation for dashboard and accounts
    if (href === '/dashboard' || href === '/accounts') {
      return
    }

    // Prevent default link behavior for other routes
    e.preventDefault()

    // Set clicked state for visual effect
    setClickedItem(href)

    // Navigate to the route after a small delay to show the visual effect
    setTimeout(() => {
      navigate(href)
      setClickedItem(null)
    }, 300)
  }

  return (
    <div className="flex flex-col w-full" role="navigation" aria-label="Main navigation">
      <div className="w-full border-b-[0.5px] border-[#232736]">
        <div className="max-w-[1920px] mx-auto px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-normal" role="status">
              Hi {userWelcomeData.userName}, welcome! You have {userWelcomeData.openTasks} open tasks.
            </div>
            <div className="flex items-center gap-3">
              <InputField
                name="search"
                placeholder="Search"
                showLabel={false}
                radius="full"
                inputClassName="w-[250px] md:w-[300px] lg:w-[400px] h-[40px] text-white placeholder-gray-400"
                aria-label="Global search"
              />
              <div
                className="w-10 h-10 rounded-full bg-[#1E40AF] flex items-center justify-center text-xl font-light text-white"
                role="button"
                aria-label="User profile"
                tabIndex={0}
              >
                {userWelcomeData.userName.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-[1920px] mx-auto px-8">
          <div className="flex items-center justify-between w-full py-4">
            <div
              ref={scrollContainerRef}
              className="flex-1 flex items-center space-x-2 overflow-x-auto pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              role="tablist"
              aria-label="Navigation tabs"
            >
              {navItems.map(({ href, label, icon: Icon }) => {
                const isActive = location.pathname === href
                const isClickedItem = clickedItem === href

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={(e) => handleNavItemClick(e, href)}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`${label}-panel`}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-full border whitespace-nowrap transition-all duration-150
                      ${isActive
                        ? 'bg-nav-active border-nav-active text-white'
                        : isClickedItem
                          ? 'bg-[#0A0F1A] border-[#60A5FA] text-[#60A5FA] scale-95'
                          : 'bg-[#0A0F1A] border-[#1E2737] text-white hover:bg-[#1E2737]'
                      }
                    `}
                  >
                    <Icon aria-hidden="true" />
                    <span className="text-sm font-medium">{label}</span>
                  </Link>
                )
              })}
            </div>

            <div className="flex-shrink-0 flex items-center gap-2 ml-2">
              <Button
                onPress={() => handleScroll('left')}
                variant="light"
                isIconOnly
                className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#0A0F1A] border-[#1E2737] text-[#60A5FA] hover:bg-[#1E2737] transition-colors"
                aria-label="Scroll navigation left"
              >
                <ArrowLeftIcon className="w-5 h-5" aria-hidden="true" />
              </Button>
              <Button
                onPress={() => handleScroll('right')}
                variant="light"
                isIconOnly
                className="w-10 h-10 flex items-center justify-center rounded-full border bg-[#0A0F1A] border-[#1E2737] text-[#60A5FA] hover:bg-[#1E2737] transition-colors"
                aria-label="Scroll navigation right"
              >
                <ArrowRightIcon className="w-5 h-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
