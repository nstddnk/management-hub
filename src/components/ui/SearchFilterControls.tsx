import { InputField } from '@/components/ui/InputField'
import { Button } from '@heroui/button'
import { useState } from 'react'

interface SearchFilterControlsProps {
    onSearchChange?: (value: string) => void
    initialSearchValue?: string
    onFilter?: () => void
    onGroup?: () => void
    searchPlaceholder?: string
}

export const SearchFilterControls = ({
    onSearchChange,
    initialSearchValue = '',
    onFilter,
    onGroup,
    searchPlaceholder = 'Search',
}: SearchFilterControlsProps) => {
    const [search, setSearch] = useState(initialSearchValue)

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        onSearchChange?.(e.target.value)
    }

    return (
        <div className="flex items-center gap-3" role="search" aria-label="Search and filter controls">
            <InputField
                name="search"
                placeholder={searchPlaceholder}
                value={search}
                onChange={handleSearchChange}
                showLabel={false}
                inputClassName="bg-[#171F2F] text-white placeholder-[#6B7280] border-0 focus:ring-0 focus:outline-none min-w-[160px] max-w-[200px] h-10 rounded-full px-4"
                className="flex-1 max-w-[200px]"
                aria-label={searchPlaceholder}
            />
            <Button
                color="primary"
                variant="bordered"
                radius="full"
                className="px-5 text-base font-light border border-[#4B7BF9] text-[#4B7BF9] bg-transparent hover:bg-[#232736] shadow-none h-10 min-w-[90px]"
                onClick={onFilter}
                aria-label="Filter results"
                disabled={!onFilter}
            >
                Filter
            </Button>
            <Button
                color="primary"
                variant="bordered"
                radius="full"
                className="px-5 text-base font-light border border-[#4B7BF9] text-[#4B7BF9] bg-transparent hover:bg-[#232736] shadow-none h-10 min-w-[90px]"
                onClick={onGroup}
                aria-label="Group results"
                disabled={!onGroup}
            >
                Group
            </Button>
        </div>
    )
} 