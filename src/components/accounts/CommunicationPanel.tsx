import { CommunicationBlock, CommunicationBlockProps } from '../ui/CommunicationBlock'
import { useMemo, useState } from 'react'
import { SearchFilterControls } from '../ui/SearchFilterControls'
import communicationMessagesData from '../../mockData/communicationMessages.json'

const messages = communicationMessagesData as CommunicationBlockProps[]

export const CommunicationPanel = () => {
  const [search, setSearch] = useState('')

  const data = useMemo(
    () =>
      search
        ? messages.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
        : messages,
    [search],
  )

  return (
    <div className="flex flex-col gap-6">
      <p className="text-white text-[32px] font-light">Communication</p>

      <div className="flex bg-[#1e2233] rounded-2xl p-4 flex-col gap-6 w-full">
        <SearchFilterControls onSearchChange={setSearch} initialSearchValue={search} />
        <div className="w-full">
          <div className="grid grid-cols-2 gap-4">
            {data.map((message) => (
              <CommunicationBlock key={message.title} {...message} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
