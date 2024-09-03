'use client'
import React from 'react'
import NotificationItem from '@/components/NotificationItem'
import NotificationFilter from '@/components/NotificationFilter'

const notifications = [
  { id: 1, type: 'like', user: 'Sarah', message: 'liked your profile', time: '2 minutes ago', read: false },
  { id: 2, type: 'message', user: 'Mike', message: 'sent you a message', time: '1 hour ago', read: true },
  { id: 3, type: 'match', user: 'Emily', message: 'You have a new match!', time: '3 hours ago', read: false },
  { id: 4, type: 'visit', user: 'Alex', message: 'viewed your profile', time: '1 day ago', read: true },
]

export default function Notifications() {
  return (
    <div className="min-h-screen bg-pink-400 text-white p-6">
      <div className="max-w-2xl mx-auto bg-white text-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-pink-600 mb-6">Notifications</h1>

        <NotificationFilter />

        <div className="mt-6 space-y-4">
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} notification={notification} />
          ))}
        </div>

        {notifications.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No notifications at the moment.</p>
        )}
      </div>
    </div>
  )
}