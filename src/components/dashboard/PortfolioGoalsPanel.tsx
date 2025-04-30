type PortfolioMetric = {
  label: string
  target: string
  current: number
  isCurrency?: boolean
  showProgressBar?: boolean
}

const metrics: PortfolioMetric[] = [
  {
    label: 'PORTFOLIO LOSS RATIO TARGET',
    target: '',
    current: 48.2,
    showProgressBar: false,
  },
  {
    label: 'RENEWAL RETENTION',
    target: '',
    current: 88,
    showProgressBar: false,
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

export const PortfolioGoalsPanel = () => {
  return (
    <div className="bg-[#1e2233] rounded-2xl border border-[#1E2737] p-6">
      <h2 className="text-xl font-semibold mb-6 text-white">Portfolio goals</h2>

      <div className="flex flex-col gap-8">
        {metrics.map((metric) => {
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

          return (
            <div key={metric.label} className="space-y-2">
              <div className="flex flex-col gap-1">
                <span className="text-[#8E8E8E] text-sm">{metric.label}</span>
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
                <span className="text-[#8E8E8E] font-medium min-w-[60px] text-right">
                  {metric.target}
                </span>
              </div>
              <div className="flex pr-3">
                <div style={{ marginLeft: `${percentage}%`, transform: 'translateX(-50%)' }}>
                  <span className="text-[#8E8E8E] text-sm">{Math.round(percentage)}%</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
