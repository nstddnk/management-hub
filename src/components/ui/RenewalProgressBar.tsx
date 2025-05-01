import { ArrowIcon } from './icons/ArrowIcon'

type RenewalProgressBarProps = {
  currentValue: number
  targetRange: { min: number; max: number }
}

export const RenewalProgressBar = ({ currentValue, targetRange }: RenewalProgressBarProps) => {
  return (
    <div className="pt-6 pb-8">
      <div className="relative flex h-6">
        <div className="bg-[#E53935] w-[15%] rounded-l-xl"></div>
        <div className="bg-[#FDD835] w-[85%] rounded-r-xl"></div>
        <div className="absolute left-[100px] -top-4  mt-px flex flex-col items-center justify-between">
          <div className="text-[10px] text-[#8E8E8E]">
            TG:{targetRange.min}-{targetRange.max}%
          </div>

          <div className="bg-[#48D378] h-6 text-[10px] text-white flex items-center justify-center w-[50%]">
            {currentValue}%
          </div>

          <div className="flex items-center justify-center flex-col">
            <ArrowIcon color="#48D378" rotate={180} className="w-8 h-6" />
            <div className="text-[#48D378] -mt-[7px] text-[10px] whitespace-nowrap">ON TARGET</div>
          </div>
        </div>
      </div>
    </div>
  )
} 