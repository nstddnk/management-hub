import { ArrowIcon } from './icons/ArrowIcon'

type RenewalProgressBarProps = {
  currentValue: number
  targetRange: { min: number; max: number }
  label?: string
}

export const RenewalProgressBar = ({
  currentValue,
  targetRange,
  label = "Renewal progress"
}: RenewalProgressBarProps) => {
  // Determine if value is on target
  const isOnTarget = currentValue >= targetRange.min && currentValue <= targetRange.max;
  const statusText = isOnTarget ? "ON TARGET" : currentValue < targetRange.min ? "BELOW TARGET" : "ABOVE TARGET";

  return (
    <div className="pt-6 pb-8">
      <div
        className="relative flex h-6"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={currentValue}
        aria-valuetext={`${currentValue}% renewal rate, target range is ${targetRange.min}% to ${targetRange.max}%`}
        aria-label={label}
      >
        <div className="bg-[#E53935] w-[15%] rounded-l-xl" aria-hidden="true"></div>
        <div className="bg-[#FDD835] w-[85%] rounded-r-xl" aria-hidden="true"></div>
        <div className="absolute left-[40%] -top-4 mt-px flex flex-col items-center justify-between">
          <div className="text-[10px] text-[#8E8E8E]" aria-label={`Target range: ${targetRange.min}% to ${targetRange.max}%`}>
            TG:{targetRange.min}-{targetRange.max}%
          </div>

          <div
            className="bg-[#48D378] h-6 text-[10px] text-white flex items-center justify-center w-[50%]"
            aria-hidden="true"
          >
            {currentValue}%
          </div>

          <div className="flex items-center justify-center flex-col">
            <ArrowIcon color="#48D378" rotate={180} className="w-8 h-6" aria-hidden="true" />
            <div
              className="text-[#48D378] -mt-[7px] text-[10px] whitespace-nowrap"
              aria-live="polite"
            >
              {statusText}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
