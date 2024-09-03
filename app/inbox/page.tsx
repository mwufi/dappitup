'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Message {
    id: number
    sender: string
    content: string
    timestamp: string
    unread: boolean
    avatar: string
}

const messages: Message[] = [
    {
        id: 1,
        sender: 'Alex',
        content: 'Hey! How about that coffee tasting workshop?',
        timestamp: '2 hours ago',
        unread: true,
        avatar: 'https://picsum.photos/id/1005/200/200'
    },
    {
        id: 2,
        sender: 'Jamie',
        content: 'Looking forward to our Italian dinner!',
        timestamp: '1 day ago',
        unread: false,
        avatar: 'https://picsum.photos/id/1011/200/200'
    },
    {
        id: 3,
        sender: 'Sam',
        content: 'Did you see the new movie at Retro Cinema?',
        timestamp: '3 days ago',
        unread: false,
        avatar: 'https://picsum.photos/id/1012/200/200'
    },
]

export default function Inbox() {
    return (
        <div className="min-h-screen bg-white p-4 flex flex-col">
            <div className="max-w-md mx-auto h-full flex-grow">
                <header className="border-b border-gray-200 pb-4 mb-4">
                    <h1 className="text-2xl font-bold text-gray-800">Your Inbox</h1>
                </header>
                <div className="overflow-y-auto">
                    {messages.map((message) => (
                        <Link href={`/inbox/${message.id}`} key={message.id}>
                            <div className="py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Image
                                            src={message.avatar}
                                            alt={message.sender}
                                            width={50}
                                            height={50}
                                            className="rounded-full mr-3"
                                        />
                                        <div className="flex-grow">
                                            <h2 className={`font-semibold text-gray-800 ${message.unread ? 'font-bold' : ''}`}>{message.sender}</h2>
                                            <p className={`text-sm text-gray-600 truncate ${message.unread ? 'font-bold' : ''}`}>{message.content}</p>
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-500 ml-4 w-24 text-right">{message.timestamp}</div>
                                </div>
                                {message.unread && (
                                    <div className="mt-2 text-xs font-semibold text-pink-600">New message</div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}