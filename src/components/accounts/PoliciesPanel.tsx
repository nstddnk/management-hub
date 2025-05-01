import { Ship, ShieldUser, ShieldCheck, Building2, Umbrella } from 'lucide-react'

type Policy = {
  icon: typeof ShieldUser
  iconColor: string
  name: string
  premium: string
  effectiveDate: string
}

const policies: Policy[] = [
  {
    icon: Ship,
    iconColor: 'text-[#4B7BF9]',
    name: 'Marine Cargo',
    premium: '$625,000',
    effectiveDate: '6/30/2026',
  },
  {
    icon: ShieldCheck,
    iconColor: 'text-[#16A34A]',
    name: 'General Liability',
    premium: '$175,000',
    effectiveDate: '6/30/2026',
  },
  {
    icon: ShieldUser,
    iconColor: 'text-[#9333EA]',
    name: 'Workers Comp',
    premium: '$75,000',
    effectiveDate: '---',
  },
  {
    icon: Building2,
    iconColor: 'text-[#EAB308]',
    name: 'Property',
    premium: '$64,829.83',
    effectiveDate: '---',
  },
  {
    icon: Umbrella,
    iconColor: 'text-[#EF4444]',
    name: 'Umbrella',
    premium: '$275,000',
    effectiveDate: '13/03/2026',
  },
]

export const Policies = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-white text-[32px] font-light mt-16">Policies</p>
      <div className="bg-[#1e2233] rounded-[20px] p-6">
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {policies.map((policy) => {
            const Icon = policy.icon
            return (
              <div 
                key={policy.name}
                className="flex-shrink-0 bg-[#252a3e] rounded-2xl p-6 min-w-[250px] border border-[#ffffff0d] shadow-[0_4px_24px_0_rgba(0,0,0,0.15)]"
                role="article"
                aria-label={`${policy.name} policy details`}
              >
                <div className="flex items-center gap-1">
                  <Icon className={`w-6 h-6 ${policy.iconColor}`} aria-hidden="true" />
                  <span className="text-white text-[20px]">{policy.name}</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <span className="text-[#64748B] text-sm font-light">Premium: {policy.premium}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#64748B] text-sm font-light">Eff.Date: {policy.effectiveDate}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}