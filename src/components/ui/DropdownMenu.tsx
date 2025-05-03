import React, { useState, useRef, useEffect } from 'react'

type DropdownMenuProps = {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: 'left' | 'right'
  direction?: 'down' | 'up' | 'auto'
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  children,
  align = 'right',
  direction = 'auto',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropDirection, setDropDirection] = useState<'up' | 'down'>(
    direction === 'auto' ? 'down' : (direction as 'up' | 'down'),
  )
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    if (!isOpen && direction === 'auto') {
      checkPosition()
    }
    setIsOpen(!isOpen)
  }

  const checkPosition = () => {
    if (triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const spaceBelow = viewportHeight - triggerRect.bottom
      const requiredSpace = 200 // Approximate height of dropdown

      if (spaceBelow < requiredSpace && triggerRect.top > requiredSpace) {
        setDropDirection('up')
      } else {
        setDropDirection('down')
      }
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (direction === 'auto' && isOpen) {
      const handlePositionChange = () => {
        checkPosition()
      }

      window.addEventListener('scroll', handlePositionChange)
      window.addEventListener('resize', handlePositionChange)

      return () => {
        window.removeEventListener('scroll', handlePositionChange)
        window.removeEventListener('resize', handlePositionChange)
      }
    }
  }, [direction, isOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={toggleDropdown} ref={triggerRef}>
        {trigger}
      </div>

      {isOpen && (
        <div
          className={`absolute z-50 ${
            dropDirection === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'
          } ${
            align === 'right' ? 'right-0' : 'left-0'
          } min-w-[200px] rounded-md bg-[#1e2233] border border-[#1E2737] shadow-lg py-1`}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export const DropdownMenuItem: React.FC<{
  onClick?: () => void
  icon?: React.ReactNode
  children: React.ReactNode
}> = ({ onClick, icon, children }) => {
  return (
    <button
      className="w-full text-left px-4 py-2 text-sm text-white hover:bg-[#171F2F] flex items-center gap-2"
      onClick={onClick}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </button>
  )
}
