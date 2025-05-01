import { WorkQueuePanel } from '../components/dashboard/WorkQueuePanel'
import { PortfolioGoalsPanel } from '../components/dashboard/PortfolioGoalsPanel'
import { QuickActionsPanel } from '../components/dashboard/QuickActionsPanel'
import { MarketIntelPanel } from '../components/dashboard/MarketIntelPanel'
import { AccountsTable } from '../components/dashboard/AccountsTable'

export const Dashboard = () => {
  return (
    <div className="p-2 space-y-4">
      <div className="flex gap-4 h-[533px]">

          <WorkQueuePanel />



          <PortfolioGoalsPanel />

        
        <div className="w-[17%] h-full space-y-4 flex flex-col justify-between">
          <QuickActionsPanel />
          <MarketIntelPanel />
        </div>
      </div>
      <AccountsTable />
    </div>
  )
}
