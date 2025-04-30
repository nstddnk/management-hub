import { useState } from 'react'

export const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div className="flex gap-2">{/* Action buttons will go here */}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Stats cards will go here */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h3 className="text-lg font-medium mb-2">Total Accounts</h3>
          {isLoading ? (
            <div className="text-center py-2">Loading...</div>
          ) : (
            <div className="text-2xl font-bold">0</div>
          )}
        </div>
      </div>

      <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-4">
          {/* Charts or additional content will go here */}
          {isLoading ? (
            <div className="text-center py-4">Loading...</div>
          ) : (
            <div className="text-center py-4">No data available</div>
          )}
        </div>
      </div>
    </div>
  )
}
