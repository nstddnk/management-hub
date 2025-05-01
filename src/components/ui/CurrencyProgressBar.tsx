type CurrencyProgressBarProps = {
  current: number
  target: string
  isNewBusiness: boolean
}

export const CurrencyProgressBar = ({
  current,
  target,
  isNewBusiness,
}: CurrencyProgressBarProps) => {
  const percentage = (current / Number(target.replace(/[^0-9.]/g, ''))) * 100

  return (
    <>
      <div className="flex items-center gap-3">
        <div className="relative h-6 bg-[#262B3D] rounded-r-xl overflow-hidden flex-1">
          <div
            className="absolute h-full bg-gradient-to-r from-[#0f2557] to-[#60A5FA] rounded-r-xl transition-all duration-500 flex items-center justify-end pr-3"
            style={{
              width: `${percentage}%`,
              borderTopLeftRadius: '0px',
              borderBottomLeftRadius: '0px',
            }}
          >
            <span className="text-white text-xs font-medium">${current}M</span>
          </div>
        </div>
        <span className="text-white text-xs font-medium">{target}</span>
      </div>
      <div className="mt-1">
        <div className="flex justify-center text-[#8E8E8E] text-[10px]">
          {isNewBusiness ? '67%' : '68%'}
        </div>
      </div>
    </>
  )
}
