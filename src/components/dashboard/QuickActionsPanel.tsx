import { Button } from '@heroui/button'

type QuickAction = {
  label: string
  onClick: () => void
}

const quickActions: QuickAction[] = [
  {
    label: 'New Submission',
    onClick: () => console.log('New Submission clicked'),
  },
  {
    label: 'Quote Builder',
    onClick: () => console.log('Quote Builder clicked'),
  },
  {
    label: 'Risks Models',
    onClick: () => console.log('Risks Models clicked'),
  },
  {
    label: 'Documents Upload',
    onClick: () => console.log('Documents Upload clicked'),
  },
]

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
            onPress={action.onClick}
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
