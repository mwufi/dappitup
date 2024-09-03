import React from 'react'

const interests = ['All', 'Coffee', 'Hiking', 'Photography', 'Movies', 'Cooking', 'Travel']

interface EventFilterProps {
  onFilter: (interest: string) => void
}

export default function EventFilter({ onFilter }: EventFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {interests.map((interest) => (
        <button
          key={interest}
          onClick={() => onFilter(interest)}
          className="bg-pink-100 hover:bg-pink-200 text-pink-800 font-medium py-1 px-3 rounded-full text-sm transition duration-300"
        >
          {interest}
        </button>
      ))}
    </div>
  )
}