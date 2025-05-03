import { ArrowUpIcon } from '@heroicons/react/24/outline'
import cn from 'clsx'

type FactorType = {
  label: string
  value: string
}

type IncreasingDecreasingPanelProps = {
  type: 'increase' | 'decrease'
  factors: FactorType[]
}
export const IncreasingDecreasingPanel = ({
  type = 'increase',
  factors = [],
}: IncreasingDecreasingPanelProps) => {
  const textColor = type === 'increase' ? 'text-green-400' : 'text-yellow-400'
  const borderColor = type === 'increase' ? 'border-green-400' : 'border-yellow-400'
  const iconColor = type === 'increase' ? 'text-green-500' : 'text-yellow-500'
  const gradientTo =
    type === 'increase'
      ? 'bg-gradient-to-r to-[#3bb477] from-[#283642]'
      : 'bg-gradient-to-r to-[#f8cd5f] from-[#283642]'

  const rotateIcon = type === 'decrease' ? 'rotate-180' : ''
  const panelTitle = type === 'increase' ? 'Increasing Winnability' : 'Decreasing Winnability'

  return (
    <div
      className="flex flex-col bg-[#252a3e] justify-start gap-6 rounded-2xl p-4 w-full"
      role="region"
      aria-labelledby={`${type}-winnability-title`}
    >
      <div className="flex items-center">
        <span
          className={cn(
            'w-8 h-8 border-2 rounded-full flex items-center justify-center mr-3',
            textColor,
            borderColor,
            rotateIcon,
          )}
          aria-hidden="true"
        >
          <ArrowUpIcon className={cn('w-3 h-3', iconColor)} />
        </span>
        <h4 id={`${type}-winnability-title`} className="text-white text-xm font-light">
          {panelTitle}
        </h4>
      </div>
      <ul className="space-y-4" aria-label={`${panelTitle} factors`}>
        {factors.map((f, i) => {
          const progressValue = 100 - (i + 1) * 20 // Approximate percentage for accessibility

          return (
            <li key={f.label} className="flex items-center justify-start gap-2">
              <span
                className={cn(
                  'w-10 h-10 border-1 rounded-full flex items-center justify-center font-semibold text-xs',
                  textColor,
                  borderColor,
                )}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="flex flex-col gap-1">
                <h5 className="text-white text-xs">{f.label}</h5>
                <div
                  style={{ width: `${270 - (i + 1) * 50}px` }}
                  className={cn('relative h-4 bg-[#323853]')}
                  role="progressbar"
                  aria-valuenow={progressValue}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${f.label} impact: ${f.value}`}
                >
                  <div className={cn('absolute h-full w-full rounded-r-[10px]', gradientTo)} />
                </div>
              </div>
              <span className="text-gray-400 text-xs font-light">{f.value}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
