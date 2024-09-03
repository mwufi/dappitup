import React from 'react'

const filters = ['All', 'Unread', 'Likes', 'Messages', 'Matches']

export default function NotificationFilter() {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          className="bg-pink-100 hover:bg-pink-200 text-pink-800 font-medium py-1 px-3 rounded-full text-sm transition duration-300"
        >
          {filter}
        </button>
      ))}
    </div>
  )
}