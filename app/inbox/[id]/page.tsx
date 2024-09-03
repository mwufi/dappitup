'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
  avatar: string
}

const messages: Message[] = [
  {
    id: 1,
    sender: 'Alex',
    content: 'Hey! How about that coffee tasting workshop?',
    timestamp: '2 hours ago',
    avatar: 'https://picsum.photos/id/1005/200/200'
  },
  {
    id: 2,
    sender: 'Jamie',
    content: 'Looking forward to the sunset hike this weekend!',
    timestamp: '1 hour ago',
    avatar: 'https://picsum.photos/id/1006/200/200'
  },
  {
    id: 3,
    sender: 'Emily',
    content: 'Can’t wait for movie night! What’s everyone bringing?',
    timestamp: '30 minutes ago',
    avatar: 'https://picsum.photos/id/1007/200/200'
  },
]

export default function Chat() {
  const params = useParams()
  const messageId = Number(params.id)
  const message = messages.find(m => m.id === messageId)

  if (!message) {
    return <div>Message not found</div>
  }

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <header className="flex items-center border-b border-gray-200 pb-4 mb-4">
          <Link href="/inbox" className="text-gray-600 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <Image
            src={message.avatar}
            alt={message.sender}
            width={40}
            height={40}
            className="rounded-full mr-3"
          />
          <h1 className="text-xl font-bold text-gray-800">{message.sender}</h1>
        </header>
        <div>
          <div className="bg-gray-100 rounded-lg p-3 mb-4">
            <p className="text-gray-700">{message.content}</p>
            <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
          </div>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            rows={4}
            placeholder="Type your reply..."
          ></textarea>
          <button className="mt-2 w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Send Reply
          </button>
        </div>
      </div>
    </div>
  )
}