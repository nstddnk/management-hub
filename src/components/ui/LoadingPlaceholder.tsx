import React from 'react'

export const LoadingPlaceholder: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-132px)] w-full">
            <div className="w-16 h-16 border-4 border-[#1E40AF] border-t-transparent rounded-full animate-spin mb-6"></div>
            <h2 className="text-2xl font-medium text-white mb-2">Loading...</h2>
            <p className="text-gray-400">This feature is currently under development</p>
        </div>
    )
} 