type MarketUpdate = {
  color: 'red' | 'yellow' | 'blue'
  text: string
}

const marketUpdates: MarketUpdate[] = [
  {
    color: 'red',
    text: 'Rate hardening in Cyber market - +15% YoY',
  },
  {
    color: 'yellow',
    text: 'New capacity entering Marine market',
  },
  {
    color: 'blue',
    text: 'Environmental regulatory changes in CA',
  },
]

const getIndicatorColor = (color: MarketUpdate['color']) => {
  switch (color) {
    case 'red':
      return 'bg-[#EF4444]'
    case 'yellow':
      return 'bg-[#EAB308]'
    case 'blue':
      return 'bg-[#4B7BF9]'
    default:
      return ''
  }
}

export const MarketIntelPanel = () => {
  return (
    <div className="bg-[#1e2233] rounded-2xl border border-[#1E2737] p-3 max-w-[280px]">
      <h2 className="text-lg font-semibold mb-3 text-white">Market intelligence</h2>

      <div className="flex flex-col gap-2">
        {marketUpdates.map((update) => (
          <div
            key={update.text}
            className="flex items-start gap-3 pb-2 border-b border-[#2A3441] last:pb-2 last:border-b"
          >
            <div
              className={`w-[10px] h-[10px] rounded-full shrink-0 mt-1.5 ${getIndicatorColor(update.color)}`}
            />
            <span className="text-white text-sm leading-normal max-w-[200px]">{update.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
