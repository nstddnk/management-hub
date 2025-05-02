import { FC } from 'react'

interface BreadcrumbItem {
  name: string
  href: string
  current: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center text-xs">
        {items.map((item, index) => (
          <li
            key={item.name}
            className="flex items-center after:content-['//'] after:mx-2 after:text-white last:after:content-none"
          >
            <a
              href={item.href}
              className={`${item.current
                  ? 'text-blue-500 hover:text-blue-600'
                  : 'text-white hover:text-gray-300'
                }`}
              aria-current={item.current ? 'page' : undefined}
              aria-label={item.current ? `Current page: ${item.name}` : item.name}
            >
              {item.name}
            </a>
            {index < items.length - 1 && (
              <span className="sr-only">, </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
