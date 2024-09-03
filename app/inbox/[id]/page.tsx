'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { MenuIcon } from 'lucide-react'

interface Message {
    id: number
    sender: string
    content: string
    unread?: boolean
    timestamp: string
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

const MessageBubble = ({ message, isSender, showAvatar = false, showTimestamp = false }: { message: Message; isSender: boolean; showAvatar?: boolean; showTimestamp?: boolean }) => (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} gap-2 mb-4`}>
        {showAvatar && !isSender && (
            <div className="flex-shrink-0">
                <Image
                    src={message.avatar}
                    alt={message.sender}
                    width={30}
                    height={30}
                    className="rounded-full object-cover"
                />
            </div>
        )}
        <div className={`max-w-[75vw] p-3 rounded-lg ${isSender ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700'}`}>
            <p className="text-sm">{message.content}</p>
            {showTimestamp && (
                <div>
                    <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                    <p className="text-xs text-gray-400">{new Date().toLocaleDateString()}</p>
                </div>
            )}
        </div>
    </div>
);

export default function Chat() {
    const params = useParams()
    const messageId = Number(params.id)
    const message = messages.find(m => m.id === messageId)

    const [reply, setReply] = useState('');
    const [showTimestamp, setShowTimestamp] = useState(false);

    if (!message) {
        return <div>Message not found</div>
    }

    const handleMessageClick = () => {
        setShowTimestamp(!showTimestamp);
    };

    return (
        <div className="max-w-md w-full mx-auto h-full flex flex-col pb-16">
            <header className="flex items-center border-b border-gray-200 p-4">
                <Link href="/inbox" className="text-gray-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
                <div>
                    <Image
                        src={message.avatar}
                        alt={message.sender}
                        width={40}
                        height={40}
                        className="rounded-full h-full mr-3 object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-lg font-bold text-gray-800">{message.sender}</h1>
                    <p className="text-sm text-gray-500">Berlin, 24km away</p>
                </div>
                <button className="ml-auto text-gray-600">
                    <MenuIcon className="h-6 w-6" />
                </button>
            </header>
            <div className="flex-grow overflow-y-auto p-4">
                <div onClick={handleMessageClick}>
                    <MessageBubble key={message.id} message={message} isSender={false} showAvatar={false} showTimestamp={showTimestamp} />
                </div>
                <div className="text-center my-4">
                    <p className="text-sm text-gray-500">August 23, 2024</p>
                </div>
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} isSender={msg.sender === message.sender} showAvatar={false} showTimestamp={showTimestamp} />
                ))}
            </div>
            <div className="p-4 border-t border-gray-200">
                <div className="flex">
                    <input
                        type="text"
                        className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Type your reply..."
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                    />
                    <button className="ml-2 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}