import { InputField } from '@/components/ui/InputField'
import { Button } from '@heroui/button'
import { CommunicationBlock, CommunicationBlockProps } from '../ui/CommunicationBlock'
import { useMemo, useState } from 'react'

const messages: CommunicationBlockProps[] = [
  {
    title: 'Policy Renewal - Auto Insurance 5/15/25',
    author: 'Michael Roberts',
    date: 'Apr 5',
    message: `Hello Arthur, I'm reaching out regarding the upcoming auto policy renewal for Real Estate Group, LLC. The current policy expires on 6/30/2024. Would you like to review coverage options before proceeding with the renewal? I've attached the current policy details and premium breakdown for your reference.`,
    attachmentsCount: 3,
    isReplied: false,
  },

  {
    title: 'Fwd: New Submission - BPM Real Estate - EFF 4/1/24',
    author: 'Joshua Dunmire',
    date: 'Mar 25',
    message: `I wanted to touch base about the property insurance policy for Real Estate Group, LLC that's coming up for renewal on 7/15/2024. We've received updated valuations for the commercial properties in your portfolio, and there are some potential adjustments to consider.
      Would you prefer to schedule a call to discuss the coverage options, or should I send over a detailed proposal with the recommended changes? I've included the current policy summary and a comparison of premium options for your review.
      Let me know what works best for your schedule, and we can proceed accordingly.`,
    isReplied: true,
  },
  {
    title: 'New Quote Request - Workers Comp Insurance',
    author: 'Sarah Chen',
    date: 'Apr 5',
    message: `Hi Arthur, Real Estate Group has expressed interest in adding workers compensation coverage to their insurance portfolio. I've completed the initial risk assessment based`,
    attachmentsCount: 3,
    isReplied: false,
  },
  {
    title: 'New Business: BPM Real Estate Group, LLC',
    author: 'Isabel Kreller',
    date: 'Feb 28',
    message: `The coverage would include higher liability limits and specialized endorsements for your mixed-use developments. Our underwriters have approved a modest 5% premium increase compared to the industry average of 12%.
        Please review the attached documentation when you have a moment. I'm available to schedule a call this week if you'd like to discuss the specifics.`,
    attachmentsCount: 5,
    isReplied: true,
  },
]

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
      <p className="text-white text-[32px] font-light mt-16">Communication</p>

      <div className="flex bg-[#1e2233] rounded-2xl p-4 flex-col gap-6 w-full">
        <div className="flex items-center gap-3">
          <InputField
            name="message"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            showLabel={false}
            inputClassName="bg-[#171F2F] text-white placeholder-[#6B7280] border-0 focus:ring-0 focus:outline-none min-w-[160px] max-w-[200px] h-10 rounded-full px-4"
            className="flex-1 max-w-[200px]"
          />
          <Button
            color="primary"
            variant="bordered"
            radius="full"
            className="px-5 text-base font-light border border-[#4B7BF9] text-[#4B7BF9] bg-transparent hover:bg-[#232736] shadow-none h-10 min-w-[90px]"
          >
            Filter
          </Button>
          <Button
            color="primary"
            variant="bordered"
            radius="full"
            className="px-5 text-base font-light border border-[#4B7BF9] text-[#4B7BF9] bg-transparent hover:bg-[#232736] shadow-none h-10 min-w-[90px]"
          >
            Group
          </Button>
        </div>
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
