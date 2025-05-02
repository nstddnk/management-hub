import { ArrowIcon } from './icons/ArrowIcon'

type PortfolioProgressBarProps = {
  currentValue: number
  targetValue: number
  performanceStatus?: string
  label?: string
}

export const PortfolioProgressBar = ({
  currentValue,
  targetValue,
  performanceStatus = '-6.8% (GOOD)',
  label = 'Portfolio performance',
}: PortfolioProgressBarProps) => {
  // Extract just the status part (GOOD, etc.) for aria labels
  const statusMatch = performanceStatus.match(/\(([^)]+)\)/)
  const statusText = statusMatch ? statusMatch[1] : 'GOOD'

  return (
    <div className="pt-10 pb-8">
      <div
        className="h-6 flex relative"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={currentValue}
        aria-valuetext={`Current value is ${currentValue}%, target is ${targetValue}%, performance is ${performanceStatus}`}
        aria-label={label}
      >
        <div className="absolute -top-10 mt-[8px] left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div
            className="text-[10px] mt-[2px] -mb-[8px] text-[#8E8E8E]"
            aria-label={`Target: ${targetValue}%`}
          >
            TG: {targetValue}%
          </div>
          <ArrowIcon color="#4B7BF9" className="w-8 h-6" aria-hidden="true" />
        </div>

        <div
          className="bg-[#43A047] w-[30%] text-[10px] h-6 relative rounded-l-xl"
          aria-hidden="true"
        >
          <div
            className="absolute left-[68px] inset-0 flex items-center justify-center text-white"
            aria-hidden="true"
          >
            {currentValue}%
          </div>
        </div>
        <div className="bg-[#FDD835] w-[30%]" aria-hidden="true" />
        <div className="bg-[#E53935] w-[40%] rounded-r-xl" aria-hidden="true" />

        <div className="absolute top-[24px] left-[30%] -translate-x-1/2 flex flex-col items-center">
          <ArrowIcon color="#48D378" rotate={180} className="w-8 h-6" aria-hidden="true" />
          <div
            className="text-[10px] -mt-[7px] text-[#48D378] whitespace-nowrap mt-1"
            aria-live="polite"
            aria-label={`Performance: ${performanceStatus}`}
          >
            {performanceStatus}
          </div>
        </div>
      </div>
    </div>
  )
}
