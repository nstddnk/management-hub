import { CurrencyProgressBar } from '../ui/CurrencyProgressBar'

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
    variant: 'loss-ratio',
  },
  {
    label: 'RENEWAL RETENTION',
    target: '85-90',
    current: 88,
    showProgressBar: true,
    variant: 'renewal',
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
  goodThreshold: number
  warningThreshold: number
}

const ProgressBar = ({
  currentValue,
  targetValue,
  goodThreshold,
  warningThreshold,
}: ProgressBarProps) => {
  return (
    <div className="flex flex-col gap-2">
     
      <div className="flex items-center gap-2">
        <span className="text-xs text-[#8E8E8E]">Target: {targetValue}%</span>
        <span className="text-xs text-[#48D378]">{currentValue}% (GOOD)</span>
      </div>
      <div className="h-6 rounded-xl overflow-hidden relative">
  
        <div className="flex h-full w-full">
          <div className="bg-[#43A047] h-full" style={{ width: `${goodThreshold}%` }} />
          <div
            className="bg-[#FDD835] h-full"
            style={{ width: `${warningThreshold - goodThreshold}%` }}
          />
          <div className="bg-[#E53935] h-full flex-1" />
        </div>
        <div className="absolute inset-0">
          <div
            className="h-full bg-[#43A047] flex items-center justify-center text-white text-xs font-medium"
            style={{ width: `${currentValue}%` }}
          >
            {currentValue}%
          </div>
        </div>
      </div>
    </div>
  )
}

type RenewalProgressBarProps = {
  currentValue: number
  targetRange: { min: number; max: number }
}

const RenewalProgressBar = ({ currentValue, targetRange }: RenewalProgressBarProps) => {
  return (
    <div className="pt-6 pb-8">
      <div className="relative flex h-6">
        <div className="bg-[#E53935] w-[15%] rounded-l-xl"></div>
        <div className="bg-[#FDD835] w-[85%] rounded-r-xl"></div>
        <div className="absolute left-[100px] -top-4 gap-[0.5rem] -mt-2 flex flex-col items-center justify-between">
          <div className=" text-xs text-[#8E8E8E]">
            TG:{targetRange.min}-{targetRange.max}%
          </div>

          <div className="bg-[#48D378] h-6 text-xs text-white flex items-center justify-center w-[50%]">
            {currentValue}%
          </div>

          <div className="flex items-center justify-center flex-col">
            <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[15px] border-l-transparent border-r-transparent border-b-[#48D378]" />
            <div className="text-[#48D378] text-xs whitespace-nowrap mt-1">ON TARGET</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MetricLabel = ({ label }: { label: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[#8E8E8E] text-xs">{label}</span>
  </div>
)

export const PortfolioGoalsPanel = () => {
  return (
    <div className="bg-[#1e2233] rounded-2xl border border-[#1E2737] p-4">
      <h2 className="text-2xl font-medium text-white mb-5">Portfolio goals</h2>
      <div className="flex flex-col gap-5 md:gap-7">
        {metrics.map((metric) => (
          <div key={metric.label} className="space-y-2">
            <MetricLabel label={metric.label} />
            {metric.variant === 'loss-ratio' && (
              <ProgressBar
                currentValue={metric.current}
                targetValue={Number(metric.target)}
                goodThreshold={50}
                warningThreshold={70}
              />
            )}
            {metric.variant === 'renewal' && (
              <RenewalProgressBar
                currentValue={metric.current}
                targetRange={{
                  min: Number(metric.target.split('-')[0]),
                  max: Number(metric.target.split('-')[1]),
                }}
              />
            )}
            {metric.isCurrency && (
              <CurrencyProgressBar
                current={metric.current}
                target={metric.target}
                isNewBusiness={metric.label === 'NEW BUSINESS TARGET'}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
