import { CurrencyProgressBar } from '../ui/CurrencyProgressBar'
import { RenewalProgressBar } from '../ui/RenewalProgressBar'
import { PortfolioProgressBar } from '../ui/PortfolioProgressBar'
import portfolioMetricsData from '../../mockData/portfolioMetrics.json'

type PortfolioMetricType = {
  label: string
  target: string
  current: number
  isCurrency?: boolean
  showProgressBar?: boolean
  variant?: string
}

const metrics = portfolioMetricsData as PortfolioMetricType[]

const MetricLabel = ({ label }: { label: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[#8E8E8E] text-xs">{label}</span>
  </div>
)

export const PortfolioGoalsPanel = () => {
  return (
    <div className="bg-[#1e2233] rounded-2xl border border-[#1E2737] p-4 w-full md:w-full lg:w-[17%]">
      <h2 className="text-2xl leading-normal font-extralight mb-3 text-white">Portfolio goals</h2>
      <div className="flex flex-col gap-5 md:gap-7">
        {metrics.map((metric) => (
          <div key={metric.label} className="space-y-2">
            <MetricLabel label={metric.label} />
            {metric.variant === 'loss-ratio' && (
              <PortfolioProgressBar
                currentValue={metric.current}
                targetValue={Number(metric.target)}
                performanceStatus="-6.8% (GOOD)"
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
