import { WorkQueuePanel } from '../components/dashboard/WorkQueuePanel'
import { PortfolioGoalsPanel } from '../components/dashboard/PortfolioGoalsPanel'
import { QuickActionsPanel } from '../components/dashboard/QuickActionsPanel'
import { MarketIntelPanel } from '../components/dashboard/MarketIntelPanel'
import { AccountsTable } from '../components/dashboard/AccountsTable'

export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-5">
          <WorkQueuePanel />
        </div>

        <div className="col-span-4">
          <PortfolioGoalsPanel />
        </div>

        <div className="col-span-3 flex flex-col gap-4">
          <QuickActionsPanel />
          <MarketIntelPanel />
        </div>
      </div>
      <div className="w-full">
        <AccountsTable />
      </div>
    </div>
  )
}
