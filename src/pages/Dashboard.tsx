import { WorkQueuePanel } from '../components/dashboard/WorkQueuePanel'
import { PortfolioGoalsPanel } from '../components/dashboard/PortfolioGoalsPanel'
import { QuickActionsPanel } from '../components/dashboard/QuickActionsPanel'
import { MarketIntelPanel } from '../components/dashboard/MarketIntelPanel'
import { AccountsTable } from '../components/dashboard/AccountsTable'

export const Dashboard = () => {
  return (
    <div className="p-2 space-y-4">
      <div className="flex gap-4">
        <div className="w-[60%]">
          <WorkQueuePanel />
        </div>
        <div className="w-[20%]">
          <PortfolioGoalsPanel />
        </div>
        <div className="w-[20%] space-y-4">
          <QuickActionsPanel />
          <MarketIntelPanel />
        </div>
      </div>
      <AccountsTable />
    </div>
  )
}
