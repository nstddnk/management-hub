import { Ship, ShieldUser, ShieldCheck, Building2, Umbrella } from 'lucide-react'
import policiesData from '../../mockData/policies.json'

type PolicyType = {
  iconType: string
  iconColor: string
  name: string
  premium: string
  effectiveDate: string
}

const policies = policiesData as PolicyType[]

const getIconComponent = (iconType: string) => {
  switch (iconType) {
    case 'Ship':
      return Ship
    case 'ShieldUser':
      return ShieldUser
    case 'ShieldCheck':
      return ShieldCheck
    case 'Building2':
      return Building2
    case 'Umbrella':
      return Umbrella
    default:
      return Ship
  }
}

export const Policies = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-white text-[32px] font-light">Policies</p>
      <div className="bg-[#1e2233] rounded-[20px] p-6">
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {policies.map((policy) => {
            const Icon = getIconComponent(policy.iconType)

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
                    <span className="text-[#64748B] text-sm font-light">
                      Premium: {policy.premium}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#64748B] text-sm font-light">
                      Eff.Date: {policy.effectiveDate}
                    </span>
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
