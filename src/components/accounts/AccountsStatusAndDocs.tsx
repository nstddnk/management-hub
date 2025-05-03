import { Check, CircleCheck } from 'lucide-react'
import accountStatusStepsData from '../../mockData/accountStatusSteps.json'

type AccountStepType = {
  label: string
  completed: boolean
}

const steps = accountStatusStepsData as AccountStepType[]

export const AccountsStatusAndDocs = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:flex-1 flex flex-col gap-6">
        <p className="text-white text-2xl md:text-xl lg:text-[32px] font-light">Account Status</p>
        <div
          className="bg-[#1e2233] rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-[#ffffff14]"
          role="list"
          aria-label="Account status steps"
        >
          <div className="flex items-center justify-between relative">
            <div className="absolute top-[22px] left-[22px] right-[22px] h-[2px] w-auto flex">
              <div
                className="border-t-2 border-dashed"
                style={{ width: '83%', borderColor: '#16A34A' }}
              />
              <div
                className="border-t-2 border-dashed"
                style={{ width: '17%', borderColor: '#64748B' }}
              />
            </div>

            {steps.map((step, index) => (
              <div
                key={step.label}
                className="flex flex-col items-center gap-2 md:gap-3"
                role="listitem"
                aria-current={step.completed && !steps[index + 1]?.completed ? 'step' : undefined}
              >
                <div
                  className={`w-9 h-9 md:w-10 lg:w-11 md:h-10 lg:h-11 rounded-full flex items-center justify-center bg-[#1e2233] relative ${
                    step.completed
                      ? 'border-2 border-[#16A34A]'
                      : 'border-2 border-dashed border-[#64748B]'
                  }`}
                >
                  <Check
                    className={`w-5 h-5 md:w-6 md:h-6 ${step.completed ? 'text-[#16A34A]' : 'text-[#64748B]'}`}
                  />
                </div>
                <span className="text-white text-sm md:text-xs lg:text-lg">{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:flex-1 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <p className="text-white text-2xl md:text-xl lg:text-[32px] font-light">
            Compliance & Documentation
          </p>
          <button className="text-[#4B7BF9] text-base md:text-sm lg:text-lg hover:underline flex items-center">
            See history <span className="ml-2">→</span>
          </button>
        </div>
        <div
          className="bg-[#1e2233] rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-[#ffffff14]"
          role="list"
          aria-label="Compliance and documentation checklist"
        >
          <div className="flex flex-wrap">
            <div
              className="flex items-center gap-3 w-1/2 mb-6 pr-8 md:pr-16"
              role="listitem"
              aria-checked="true"
            >
              <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                <CircleCheck className="w-5 h-5 md:w-6 md:h-6 text-[#16A34A]" />
              </div>
              <span className="text-white text-sm md:text-xs lg:text-lg">KYC verification</span>
            </div>
            <div className="flex items-center gap-3 w-1/2 mb-6" role="listitem" aria-checked="true">
              <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                <CircleCheck className="w-5 h-5 md:w-6 md:h-6 text-[#16A34A]" />
              </div>
              <span className="text-white text-sm md:text-xs lg:text-lg">
                Required Documentation
              </span>
            </div>
            <div
              className="flex items-center gap-3 w-1/2 pr-8 md:pr-16"
              role="listitem"
              aria-checked="true"
            >
              <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                <CircleCheck className="w-5 h-5 md:w-6 md:h-6 text-[#16A34A]" />
              </div>
              <span className="text-white text-sm md:text-xs lg:text-lg">Regulatory approval</span>
            </div>
            <div className="flex items-center gap-3 w-1/2" role="listitem" aria-checked="true">
              <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                <CircleCheck className="w-5 h-5 md:w-6 md:h-6 text-[#16A34A]" />
              </div>
              <span className="text-white text-sm md:text-xs lg:text-lg">
                Financial Verification
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
