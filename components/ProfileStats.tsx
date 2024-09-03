import React from 'react'

const stats = [
  { label: 'Height', value: "6'0\"" },
  { label: 'Occupation', value: 'Software Engineer' },
  { label: 'Education', value: "Bachelor's Degree" },
  { label: 'Looking for', value: 'Long-term relationship' },
  { label: 'Zodiac Sign', value: 'Leo' },
]

export default function ProfileStats() {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-pink-600">Quick Facts</h3>
      <ul className="mt-2 space-y-1">
        {stats.map((stat, index) => (
          <li key={index} className="flex justify-between">
            <span className="font-medium">{stat.label}:</span>
            <span>{stat.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}