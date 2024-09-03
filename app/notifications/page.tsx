'use client'
import React from 'react'
import Image from 'next/image'

interface Notification {
  id: number
  type: 'like' | 'match' | 'message'
  content: string
  timestamp: string
  avatar: string
}

const notifications: Notification[] = [
  {
    id: 1,
    type: 'like',
    content: 'Alex liked your profile',
    timestamp: '2 hours ago',
    avatar: 'https://picsum.photos/id/1005/200/200'
  },
  {
    id: 2,
    type: 'match',
    content: 'You matched with Jamie',
    timestamp: '1 day ago',
    avatar: 'https://picsum.photos/id/1011/200/200'
  },
  {
    id: 3,
    type: 'message',
    content: 'New message from Sam',
    timestamp: '3 days ago',
    avatar: 'https://picsum.photos/id/1012/200/200'
  },
]

export default function Notifications() {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <header className="border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
        </header>
        
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Image
                src={notification.avatar}
                alt=""
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <div className="flex-grow">
                <p className="text-gray-800">{notification.content}</p>
                <p className="text-xs text-gray-500">{notification.timestamp}</p>
              </div>
              {notification.type === 'like' && (
                <span className="text-pink-500">❤️</span>
              )}
              {notification.type === 'match' && (
                <span className="text-pink-500">🎉</span>
              )}
              {notification.type === 'message' && (
                <span className="text-pink-500">💬</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}