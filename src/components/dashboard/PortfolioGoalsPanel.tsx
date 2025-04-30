type PortfolioMetric = {
  label: string
  target: string
  current: number
  isCurrency?: boolean
  showProgressBar?: boolean
  variant?: string
}

const metrics: PortfolioMetric[] = [
  {
    label: 'PORTFOLIO LOSS RATIO TARGET',
    target: '55',
    current: 48.2,
    showProgressBar: true,
    variant: 'loss-ratio'
  },
  {
    label: 'RENEWAL RETENTION',
    target: '85-90',
    current: 88,
    showProgressBar: true,
    variant: 'renewal'
  },
  {
    label: 'NEW BUSINESS TARGET',
    target: '$12M',
    current: 8.1,
    isCurrency: true,
    showProgressBar: true,
  },
  {
    label: 'ANNUAL GWP TARGET',
    target: '$42M',
    current: 28.4,
    isCurrency: true,
    showProgressBar: true,
  },
]

type ProgressBarProps = {
  currentValue: number
  targetValue: number
  label?: string
  goodThreshold: number
  warningThreshold: number
}

const ProgressBar = ({ currentValue, targetValue, goodThreshold, warningThreshold }: ProgressBarProps) => {
  const getIndicatorPosition = (value: number) => `${value}%`
  const difference = targetValue - currentValue
  const status = `${-difference.toFixed(1)}% (GOOD)`

  return (
    <div className="relative pt-6 pb-8">
      {/* Target indicator */}
      <div 
        className="absolute -top-2 transform -translate-x-1/2 flex flex-col items-center"
        style={{ left: getIndicatorPosition(targetValue) }}
      >
        <div className="text-xs text-[#8E8E8E] mb-1">TG:{targetValue}%</div>
        <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#4285f4]" />
      </div>

      {/* Progress bar */}
      <div className="h-8 rounded-xl overflow-hidden relative">
        {/* Background zones */}
        <div className="absolute inset-0 flex">
          <div className="bg-[#43A047] h-full" style={{ width: `${goodThreshold}%` }} />
          <div className="bg-[#FDD835] h-full" style={{ width: `${warningThreshold - goodThreshold}%` }} />
          <div className="bg-[#E53935] h-full flex-1" />
        </div>
        
        {/* Current value overlay */}
        <div 
          className="absolute h-full bg-[#43A047] transition-all duration-300 flex items-center justify-center text-white font-medium text-lg"
          style={{ width: `${currentValue}%` }}
        >
          {currentValue}%
        </div>
      </div>

      {/* Current value indicator */}
      <div 
        className="absolute transform -translate-x-1/2 flex flex-col items-center"
        style={{ left: '24%', bottom: '-2px' }}
      >
        <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#48D378]" />
        <div className="text-[#48D378] text-xs whitespace-nowrap mt-1">{status}</div>
      </div>
    </div>
  )
}

type RenewalProgressBarProps = {
  currentValue: number
  targetRange: { min: number; max: number }
  label: string
}

const RenewalProgressBar = ({ currentValue, targetRange, label }: RenewalProgressBarProps) => {
  return (
    <div className="relative pt-6 pb-8">
      {/* Target indicator */}
      <div 
        className="absolute -top-2 transform flex flex-col items-start"
        style={{ left: '50%' }}
      >
        <div className="text-xs text-[#8E8E8E] mb-1">TG:{targetRange.min}-{targetRange.max}%</div>
      </div>

      {/* Progress bar */}
      <div className="h-8 rounded-xl overflow-hidden relative">
        {/* Background zones */}
        <div className="absolute inset-0 flex">
          <div className="bg-[#E53935] h-full" style={{ width: '15%' }} />
          <div className="bg-[#FDD835] h-full" style={{ width: '35%' }} />
          <div className="bg-[#43A047] h-full" style={{ width: '10%' }} />
          <div className="bg-[#FDD835] h-full flex-1" />
        </div>
        
        {/* Current value marker */}
        <div 
          className="absolute h-full flex items-center justify-center text-white font-medium text-lg"
          style={{ 
            left: '60%',
            transform: 'translateX(-95%)',
            width: '10%',
            backgroundColor: '#43A047',
          }}
        >
          {currentValue}%
        </div>
      </div>

      {/* Current value indicator */}
      <div 
        className="absolute transform flex flex-col items-center"
        style={{ 
          left: '60%',
          bottom: '-2px',
          transform: 'translateX(-95%)'
        }}
      >
        <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#48D378]" />
        <div className="text-[#48D378] text-xs whitespace-nowrap mt-1">ON TARGET</div>
      </div>
    </div>
  )
}

export const PortfolioGoalsPanel = () => {
  return (
    <div className="bg-[#1e2233] rounded-2xl border border-[#1E2737] p-4">
      <div className="flex flex-col gap-8">
        {metrics.map((metric) => {
          if (metric.variant === 'loss-ratio') {
            return (
              <div key={metric.label} className="space-y-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[#8E8E8E] text-sm">{metric.label}</span>
                </div>
                <ProgressBar
                  currentValue={metric.current}
                  targetValue={Number(metric.target)}
                  label={metric.label}
                  goodThreshold={50}
                  warningThreshold={70}
                />
              </div>
            )
          }

          if (metric.variant === 'renewal') {
            const [min, max] = metric.target.split('-').map(Number)
            return (
              <div key={metric.label} className="space-y-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[#8E8E8E] text-sm">{metric.label}</span>
                </div>
                <RenewalProgressBar
                  currentValue={metric.current}
                  targetRange={{ min, max }}
                  label={metric.label}
                />
              </div>
            )
          }

          if (!metric.showProgressBar) {
            return (
              <div key={metric.label} className="space-y-2">
                <div className="flex flex-col gap-1">
                  <span className="text-[#8E8E8E] text-sm">{metric.label}</span>
                </div>
              </div>
            )
          }

          const percentage = (metric.current / Number(metric.target.replace(/[^0-9.]/g, ''))) * 100
          const isNewBusiness = metric.label === 'NEW BUSINESS TARGET'
          const percentagePosition = isNewBusiness ? '35%' : '40%'

          return (
            <div key={metric.label} className="space-y-2">
              <div className=" flex flex-col gap-1">
                <span className=" text-[#8E8E8E] text-sm">{metric.label}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative h-8 bg-[#171F2F] rounded-lg overflow-hidden flex-1">
                  <div
                    className="absolute h-full bg-gradient-to-r from-[#041e39] to-[#1671e9] rounded-lg transition-all duration-500 flex items-center justify-end pr-3"
                    style={{ width: `${percentage}%` }}
                  >
                    <span className="text-white font-medium">${metric.current}M</span>
                  </div>
                </div>
                <span className="text-white font-medium">
                  {metric.target}
                </span>
              </div>
              <div className="flex">
                <div style={{ 
                  marginLeft: percentagePosition,
                  transform: 'translateX(-60%)'
                }}>
                  <span className="text-[#8E8E8E] text-sm">{isNewBusiness ? '67%' : '68%'}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
