import { WorkQueuePanel } from '../components/dashboard/WorkQueuePanel'
import { PortfolioGoalsPanel } from '../components/dashboard/PortfolioGoalsPanel'
import { QuickActionsPanel } from '../components/dashboard/QuickActionsPanel'
import { MarketIntelPanel } from '../components/dashboard/MarketIntelPanel'

export const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      <div className="w-full lg:flex-[2]">
        <WorkQueuePanel />
      </div>
      <div className="w-full lg:w-[300px] flex flex-col gap-6">
        <PortfolioGoalsPanel />
        <QuickActionsPanel />
        <MarketIntelPanel />
      </div>
    </div>
  )
}
