import { WorkQueuePanel } from '../components/dashboard/WorkQueuePanel'
import { PortfolioGoalsPanel } from '../components/dashboard/PortfolioGoalsPanel'
import { QuickActionsPanel } from '../components/dashboard/QuickActionsPanel'
import { MarketIntelPanel } from '../components/dashboard/MarketIntelPanel'
import { AccountsTable } from '../components/dashboard/AccountsTable'

export const Dashboard = () => {
  return (
    <div className="p-2 space-y-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-wrap lg:flex-nowrap gap-4 w-full">
          <WorkQueuePanel />
          <PortfolioGoalsPanel />
          <div className="lg:w-[17%] md:w-full w-full flex lg:flex-col md:flex-row flex-col gap-4 justify-between">
            <QuickActionsPanel />
            <MarketIntelPanel />
          </div>
        </div>
      </div>
      <AccountsTable />
    </div>
  )
}
