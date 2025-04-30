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
    <div className="bg-[#1e2233] rounded-2xl border border-[#1E2737] p-6">
      <h2 className="text-xl font-semibold mb-6 text-white">Quick actions</h2>

      <div className="flex flex-col gap-2">
        {quickActions.map((action) => (
          <Button
            key={action.label}
            onPress={action.onClick}
            color="primary"
            variant="solid"
            radius="full"
            className="w-full h-9 text-base font-medium"
          >
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
