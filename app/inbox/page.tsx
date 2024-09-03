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
        content: 'Hey! How about that coffee tasting workshop? I heard they have the best pastries in town. What’s your favorite dessert?',
        timestamp: '2 hours ago',
        unread: true,
        avatar: 'https://picsum.photos/id/1005/200/200'
    },
    {
        id: 2,
        sender: 'Jamie',
        content: 'Oh, you know me too well! I live and breathe dessert. I can’t resist a good chocolate croissant! What about you?',
        timestamp: '1 hour ago',
        unread: false,
        avatar: 'https://picsum.photos/id/1011/200/200'
    },
    {
        id: 3,
        sender: 'Sam',
        content: 'Did you see the new movie at Retro Cinema? I heard it’s a romantic comedy! Perfect for a date night, right?',
        timestamp: '3 days ago',
        unread: false,
        avatar: 'https://picsum.photos/id/1012/200/200'
    },
    {
        id: 4,
        sender: 'Alex',
        content: 'Absolutely! A little laughter and some popcorn sounds like a great plan. We should definitely go together!',
        timestamp: '2 days ago',
        unread: false,
        avatar: 'https://picsum.photos/id/1005/200/200'
    },
    {
        id: 5,
        sender: 'Jamie',
        content: 'Count me in! And let’s grab some dessert after the movie. I know a place that serves the best tiramisu!',
        timestamp: '1 day ago',
        unread: false,
        avatar: 'https://picsum.photos/id/1011/200/200'
    },
    {
        id: 6,
        sender: 'Sam',
        content: 'Tiramisu? You’re speaking my language! I can’t wait for our dessert adventure!',
        timestamp: '12 hours ago',
        unread: false,
        avatar: 'https://picsum.photos/id/1012/200/200'
    },
]

export default function Inbox() {
    return (
        <div className="min-h-screen bg-white p-4 flex flex-col">
            <div className="h-full flex-grow">
                <header className="border-b border-gray-200 pb-4 mb-4">
                    <h1 className="text-2xl font-bold text-gray-800">Your Inbox</h1>
                </header>
                <div className="overflow-y-auto">
                    {messages.map((message) => (
                        <Link href={`/inbox/${message.id}`} key={message.id}>
                            <div className="py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center justify-start gap-4">
                                    <div className="flex items-center flex-grow overflow-hidden">
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
                                            {message.unread && (
                                                <div className="text-xs mt-1 font-semibold text-pink-600">New message</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-500 ml-4 w-16 text-right shrink-0">{message.timestamp}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}