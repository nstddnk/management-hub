import { AccountsHeader } from '@/components/accounts/AccountsHeader'
import { PerformanceMetrics } from '@/components/accounts/PerformanceMetrics'
import { Policies } from '@/components/accounts/PoliciesPanel'
import { AccountsStatusAndDocs } from '@/components/accounts/AccountsStatusAndDocs'
import { AccountDetailsPanel } from '@/components/accounts/AccountDetailsPanel'
import { CommunicationPanel } from '@/components/accounts/CommunicationPanel'
import { PoliciesTable } from '@/components/accounts/PoliciesTable'
export const Accounts = () => {
  return (
    <div className="flex flex-col gap-4">
      <AccountsHeader />
      <PerformanceMetrics />
      <Policies />
      <AccountsStatusAndDocs />
      <AccountDetailsPanel />
      <CommunicationPanel />
      <PoliciesTable />
    </div>
  )
}
