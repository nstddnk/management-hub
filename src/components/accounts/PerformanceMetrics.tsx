import performanceMetricsData from '../../mockData/performanceMetrics.json'

export const PerformanceMetrics = () => {
  const metrics = performanceMetricsData

  return (
    <div className="flex flex-col gap-6" role="region" aria-label="Performance Metrics">
      <p className="text-white text-2xl md:text-[28px] lg:text-[32px] font-light">
        Performance Metrics
      </p>
      <div className="flex flex-wrap gap-4">
        <div
          className="w-full md:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] bg-[#1e2233] rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 flex flex-col justify-between min-h-[180px] border border-[#ffffff1a] shadow-[0_4px_24px_0_rgba(0,0,0,0.15)]"
          role="status"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p className="text-white text-base md:text-lg lg:text-xl">Winnability</p>
              <div
                className="flex gap-1"
                role="img"
                aria-label={`Winnability score: ${metrics.winnability.score} out of 4`}
              >
                {Array(4).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                      i < metrics.winnability.score ? 'bg-blue-500' : 'bg-gray-500/20'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-white text-3xl md:text-4xl lg:text-[44px] font-light leading-none">
              {metrics.winnability.label}
            </p>
          </div>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-400 text-xs md:text-sm"
            aria-label="View all winnability factors"
          >
            See all factors →
          </a>
        </div>

        <div
          className="w-full md:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] bg-[#1e2233] rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 flex flex-col justify-between min-h-[180px] border border-[#ffffff1a] shadow-[0_4px_24px_0_rgba(0,0,0,0.15)]"
          role="status"
        >
          <div className="flex flex-col gap-2">
            <p className="text-white text-base md:text-lg lg:text-xl">Loss Ratio</p>
            <p className="text-white text-3xl md:text-4xl lg:text-[44px] font-light leading-none">
              {metrics.lossRatio.current}%
              <span className="text-gray-500 text-sm md:text-base lg:text-xl ml-2">
                vs {metrics.lossRatio.target}% target
              </span>
            </p>
          </div>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-400 text-xs md:text-sm"
            aria-label="View loss ratio history"
          >
            View history →
          </a>
        </div>

        <div
          className="w-full md:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] bg-[#1e2233] rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 flex flex-col justify-between min-h-[180px] border border-[#ffffff1a] shadow-[0_4px_24px_0_rgba(0,0,0,0.15)]"
          role="status"
        >
          <div className="flex flex-col gap-2">
            <p className="text-white text-base md:text-lg lg:text-xl">Premium Growth</p>
            <p className="text-white text-3xl md:text-4xl lg:text-[44px] font-light leading-none">
              {metrics.premiumGrowth.percentage}%
              <span className="text-gray-500 text-sm md:text-base lg:text-xl ml-2">
                {metrics.premiumGrowth.yoyLabel}
              </span>
            </p>
            <p className="text-gray-500 text-sm md:text-base lg:text-xl">
              {metrics.premiumGrowth.values.current} vs {metrics.premiumGrowth.values.target} Target
            </p>
          </div>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-400 text-xs md:text-sm"
            aria-label="View premium growth trend"
          >
            View trend →
          </a>
        </div>

        <div
          className="w-full md:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] bg-[#1e2233] rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-6 flex flex-col justify-between min-h-[180px] border border-[#ffffff1a] shadow-[0_4px_24px_0_rgba(0,0,0,0.15)]"
          role="status"
        >
          <div className="flex flex-col gap-2">
            <p className="text-white text-base md:text-lg lg:text-xl">Exposure Distribution</p>
            {metrics.exposureDistribution.map((item, index) => (
              <div className="flex items-center gap-2 md:gap-3" key={index}>
                <div
                  className="w-[100px] md:w-[110px] lg:w-[140px] relative h-2.5 md:h-3 lg:h-4 bg-[#262B3D] rounded-r-[100px] overflow-hidden"
                  role="progressbar"
                  aria-valuenow={item.percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="absolute h-full bg-gradient-to-r from-[#0f2557] to-[#60A5FA] rounded-r-[100px]"
                    style={{ width: `${item.fillPercentage}%` }}
                  />
                </div>
                <p className="text-white text-xs md:text-sm whitespace-nowrap">
                  {item.name}: {item.percentage}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
