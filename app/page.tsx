'use client'
import React from 'react'
import Link from 'next/link'

// Mock data for the dashboard
const messages = [
  { id: 1, name: 'Alex', avatar: 'https://picsum.photos/id/1011/50/50', lastMessage: 'Hey! Looking forward to our date!' },
  { id: 2, name: 'Jamie', avatar: 'https://picsum.photos/id/1012/50/50', lastMessage: 'Can’t wait for our dinner!' },
]

const forYou = [
  { id: 1, type: 'quest', title: 'Complete your profile', reward: '10 points' },
  { id: 2, type: 'challenge', title: 'Start a conversation with 3 new matches', reward: '20 points' },
  { id: 3, type: 'question', title: "What's your ideal first date?", reward: '5 points' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-gray-800 mb-8">Welcome, Sarah</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-800 mb-4">Chat with Friends</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {messages.map(message => (
              <div key={message.id} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center transition-shadow hover:shadow-md">
                <img src={message.avatar} alt={message.name} className="rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">{message.name}</p>
                  <p className="text-sm text-gray-600">{message.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-800 mb-4">Meet Juniper</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center transition-shadow hover:shadow-md">
            <img src="https://picsum.photos/id/1005/50/50" alt="Juniper" className="rounded-full mr-4" />
            <div>
              <p className="font-semibold text-gray-800">Juniper</p>
              <p className="text-sm text-gray-600">What're you looking for today? I'm here to help!</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-800 mb-4">For You</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {forYou.map(item => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 transition-shadow hover:shadow-md">
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="text-sm text-pink-600">{item.type} - Reward: {item.reward}</p>
              </div>
            ))}
          </div>
        </section>
        <Link href="/chat" className="block w-full">
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
            Talk to Juniper
          </button>
        </Link>
      </div>
    </div>
  )
}
