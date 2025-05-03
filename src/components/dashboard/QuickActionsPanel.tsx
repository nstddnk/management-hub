import { Button } from '@heroui/button'
import quickActionsData from '../../mockData/quickActions.json'

type QuickAction = {
  label: string
  action: string
}

const quickActions = quickActionsData as QuickAction[]

export const QuickActionsPanel = () => {
  return (
    <div
      className="bg-[#1e2233] rounded-2xl border border-[#1E2737] p-3 w-full md:flex-1 lg:max-w-[280px]"
      role="region"
      aria-label="Quick Actions"
    >
      <h2 className="text-2xl leading-normal font-extralight mb-3 text-white">Quick actions</h2>

      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-2" role="menu">
        {quickActions.map((action) => (
          <Button
            key={action.label}
            onPress={() => console.log(`${action.action} clicked`)}
            color="primary"
            variant="solid"
            radius="full"
            role="menuitem"
            className="w-full py-2 md:py-2.5 text-sm md:text-base font-medium"
          >
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
