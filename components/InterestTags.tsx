import React from 'react'

const interests = ['Photography', 'Hiking', 'Coffee', 'Travel', 'Cooking', 'Movies']

export default function InterestTags() {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-pink-600">Interests</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {interests.map((interest, index) => (
          <span key={index} className="bg-pink-100 text-pink-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {interest}
          </span>
        ))}
      </div>
    </div>
  )
}