import { Button } from '@heroui/button'
import { Paperclip } from 'lucide-react'
import cn from 'clsx'

export type CommunicationBlockProps = {
  title: string
  author: string
  date: string
  message: string
  attachmentsCount?: number
  isReplied: boolean
}

export const CommunicationBlock = ({
  title,
  author,
  date,
  message,
  attachmentsCount,
  isReplied,
}: CommunicationBlockProps) => {
  return (
    <div
      className={cn(
        'flex flex-col bg-[#252a3e] gap-2 rounded-2xl p-4 w-full h-full',
        !isReplied && 'border border-[#4251b5]',
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="px-3 py-1 text-xs font-light rounded-full bg-[#3b4bf9] text-white uppercase tracking-wide">
          {isReplied ? 'Responded' : 'New'}
        </div>
        <p className="text-white text-xl font-light leading-tight">{title}</p>
      </div>
      <div className="flex flex-row items-center text-[#8E8E8E] text-xs font-light gap-2">
        <p>{author}</p>
        <span>//</span>
        <p>{date}</p>
      </div>
      <div className="text-[#d1d5db] text-xs font-light">{message}</div>
      {attachmentsCount && (
        <div className="flex flex-row items-center gap-3">
          <span className="flex items-center gap-2 px-4 py-1 bg-green-900/90 rounded-full text-xs text-white font-light">
            <Paperclip size={12} />
            {attachmentsCount} attachments
          </span>
        </div>
      )}
      {!isReplied && (
        <div>
          <Button
            color="primary"
            radius="full"
            className="text-xs font-light bg-[#3b4bf9] text-white hover:bg-[#4B7BF9] shadow-none rounded-full"
          >
            Reply
          </Button>
        </div>
      )}
    </div>
  )
}
