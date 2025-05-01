import { ArrowIcon } from './icons/ArrowIcon'

type PortfolioProgressBarProps = {
  currentValue: number
  targetValue: number
  performanceStatus?: string
}

export const PortfolioProgressBar = ({
  currentValue,
  targetValue,
  performanceStatus = '-6.8% (GOOD)',
}: PortfolioProgressBarProps) => {
  return (
    <div className="pt-10 pb-8">
      <div className="h-6 flex relative">
        <div className="absolute -top-10 mt-[8px] left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="text-[10px] mt-[2px] -mb-[8px] text-[#8E8E8E]">TG: {targetValue}%</div>
          <ArrowIcon color="#4B7BF9" className="w-8 h-6" />
        </div>

        <div className="bg-[#43A047] w-[30%] text-[10px] h-6 relative rounded-l-xl">
          <div className="absolute left-[68px] inset-0 flex items-center justify-center text-white">
            {currentValue}%
          </div>
        </div>
        <div className="bg-[#FDD835] w-[30%]" />
        <div className="bg-[#E53935] w-[40%] rounded-r-xl" />

        <div className="absolute top-[24px]  left-[30%] -translate-x-1/2 flex flex-col items-center">
          <ArrowIcon color="#48D378" rotate={180} className="w-8 h-6" />
          <div className="text-[10px] -mt-[7px] text-[#48D378] whitespace-nowrap mt-1">
            {performanceStatus}
          </div>
        </div>
      </div>
    </div>
  )
}
