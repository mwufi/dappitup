import React from 'react'
import Image from 'next/image'

type NotificationType = 'like' | 'message' | 'match' | 'visit'

interface NotificationProps {
  notification: {
    id: number
    type: NotificationType
    user: string
    message: string
    time: string
    read: boolean
  }
}

const iconMap: Record<NotificationType, string> = {
  like: '❤️',
  message: '💬',
  match: '🎉',
  visit: '👀',
}

export default function NotificationItem({ notification }: NotificationProps) {
  return (
    <div className={`flex items-center p-4 rounded-lg ${notification.read ? 'bg-gray-100' : 'bg-pink-100'}`}>
      <div className="flex-shrink-0 mr-4">
        <Image
          src={`https://picsum.photos/seed/${notification.user}/50/50`}
          alt={notification.user}
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className="flex-grow">
        <p className="font-semibold">
          {iconMap[notification.type]} {notification.user} {notification.message}
        </p>
        <p className="text-sm text-gray-500">{notification.time}</p>
      </div>
      {!notification.read && (
        <div className="flex-shrink-0 ml-4">
          <span className="bg-pink-500 rounded-full w-3 h-3 inline-block"></span>
        </div>
      )}
    </div>
  )
}