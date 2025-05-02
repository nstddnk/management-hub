import { AccountsHeader } from '@/components/accounts/AccountsHeader'
import { PerformanceMetrics } from '@/components/accounts/PerformanceMetrics'
import { Policies } from '@/components/accounts/PoliciesPanel'
import { AccountsStatusAndDocs } from '@/components/accounts/AccountsStatusAndDocs'
import { AccountDetailsPanel } from '@/components/accounts/AccountDetailsPanel'

export const Accounts = () => {
  return (
    <div>
      <AccountsHeader />
      <PerformanceMetrics />
      <Policies />
      <AccountsStatusAndDocs />
      <AccountDetailsPanel />
    </div>
  )
}
