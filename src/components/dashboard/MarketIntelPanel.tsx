type MarketUpdate = {
  color: 'red' | 'yellow' | 'blue'
  text: string
  link: string
}

const marketUpdates: MarketUpdate[] = [
  {
    color: 'red',
    text: 'Rate hardening in Cyber market - +15% YoY',
    link: '/news/cyber-market-update',
  },
  {
    color: 'yellow',
    text: 'New capacity entering Marine market',
    link: '/news/marine-market-update',
  },
  {
    color: 'blue',
    text: 'Environmental regulatory changes in CA',
    link: '/news/environmental-regulations',
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
    <div className="bg-[#1e2233] rounded-2xl border border-[#1E2737] p-3 w-full md:flex-1 lg:max-w-[280px]">
      <h2 className="text-1xl leading-normal font-extralight mb-3 text-white">
        Market intelligence
      </h2>

      <div className="flex flex-col gap-2">
        {marketUpdates.map((update, idx) => (
          <a
            href={update.link}
            key={update.text}
            className={`flex items-start gap-3 pb-2 border-b border-[#2A3441] ${idx === marketUpdates.length - 1 ? '' : 'last:border-b-0'} group transition-colors hover:bg-[#2A3441] rounded px-2 py-1 -mx-2`}
          >
            <div
              className={`w-[10px] h-[10px] rounded-full shrink-0 mt-1.5 ${getIndicatorColor(update.color)}`}
            />
            <span className="text-white text-sm leading-normal group-hover:text-[#4B7BF9] transition-colors">
              {update.text}
            </span>
          </a>
        ))}
        <div className=" border-[#2A3441] w-full my-1" />
      </div>
    </div>
  )
}
