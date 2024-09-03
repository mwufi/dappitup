import React from 'react'

interface EventFilterProps {
  onFilter: (interest: string) => void
}

const interests = ['All', 'Coffee', 'Hiking', 'Movies']

export default function EventFilter({ onFilter }: EventFilterProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {interests.map((interest) => (
        <button
          key={interest}
          onClick={() => onFilter(interest)}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-pink-50 hover:text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition-colors"
        >
          {interest}
        </button>
      ))}
    </div>
  )
}