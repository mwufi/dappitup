'use client'
import React, { useState } from 'react'
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
        avatar: 'https://picsum.photos/id/1010/200/200'
    },
    {
        id: 2,
        sender: 'Jamie',
        content: 'Looking forward to the sunset hike this weekend!',
        timestamp: '1 hour ago',
        avatar: 'https://picsum.photos/id/1011/200/200'
    },
    {
        id: 3,
        sender: 'Emily',
        content: 'Can’t wait for movie night! What’s everyone bringing?',
        timestamp: '30 minutes ago',
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
        <div className={`max-w-xs p-2 rounded-lg ${isSender ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700'}`}>
            <p className="text-sm">{message.content}</p>
            {showTimestamp && <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>}
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
                <img
                    src={message.avatar}
                    alt={message.sender}
                    width={40}
                    height={40}
                    className="rounded-full h-full mr-3 object-cover"
                />
                <h1 className="text-xl font-bold text-gray-800">{message.sender}</h1>
            </header>
            <div className="flex-grow overflow-y-auto p-4">
                <div onClick={handleMessageClick}>
                    <MessageBubble key={message.id} message={message} isSender={false} showAvatar={false} showTimestamp={showTimestamp} />
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