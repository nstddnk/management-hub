export const PerformanceMetrics = () => {
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
              <div className="flex gap-1" role="img" aria-label="Winnability score: 4 out of 4">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              </div>
            </div>
            <p className="text-white text-3xl md:text-4xl lg:text-[44px] font-light leading-none">
              Very Strong
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
              25%
              <span className="text-gray-500 text-sm md:text-base lg:text-xl ml-2">
                vs 42% target
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
              12.4%
              <span className="text-gray-500 text-sm md:text-base lg:text-xl ml-2">
                YoY increase
              </span>
            </p>
            <p className="text-gray-500 text-sm md:text-base lg:text-xl">$123M vs $150M Target</p>
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
            <div className="flex items-center gap-2 md:gap-3">
              <div
                className="w-[100px] md:w-[110px] lg:w-[140px] relative h-2.5 md:h-3 lg:h-4 bg-[#262B3D] rounded-r-[100px] overflow-hidden"
                role="progressbar"
                aria-valuenow={71.4}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="absolute h-full w-[80%] bg-gradient-to-r from-[#0f2557] to-[#60A5FA] rounded-r-[100px]" />
              </div>
              <p className="text-white text-xs md:text-sm whitespace-nowrap">Marine Cargo: 71.4%</p>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <div
                className="w-[100px] md:w-[110px] lg:w-[140px] relative h-2.5 md:h-3 lg:h-4 bg-[#262B3D] rounded-r-[100px] overflow-hidden"
                role="progressbar"
                aria-valuenow={20}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="absolute h-full w-[70%] bg-gradient-to-r from-[#0f2557] to-[#60A5FA] rounded-r-[100px]" />
              </div>
              <p className="text-white text-xs md:text-sm whitespace-nowrap">
                General Liability: 20%
              </p>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <div
                className="w-[100px] md:w-[110px] lg:w-[140px] relative h-2.5 md:h-3 lg:h-4 bg-[#262B3D] rounded-r-[100px] overflow-hidden"
                role="progressbar"
                aria-valuenow={8.6}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="absolute h-full w-[60%] bg-gradient-to-r from-[#0f2557] to-[#60A5FA] rounded-r-[100px]" />
              </div>
              <p className="text-white text-xs md:text-sm whitespace-nowrap">Workers Comp: 8.6%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
