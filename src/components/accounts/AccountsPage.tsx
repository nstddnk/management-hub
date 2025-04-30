import { useState } from 'react'

export const AccountsPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Accounts</h2>
        <div className="flex gap-2">{/* Action buttons will go here */}</div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-4">
          {/* Table or list content will go here */}
          {isLoading ? (
            <div className="text-center py-4">Loading...</div>
          ) : (
            <div className="text-center py-4">No accounts found</div>
          )}
        </div>
      </div>
    </div>
  )
}
