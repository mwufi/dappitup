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
const eventsList = [
  { id: 1, title: 'Cooking Class', date: '2023-07-01', time: '10:00', location: 'Culinary School', description: 'Learn to cook delicious meals with a professional chef.' },
  { id: 2, title: 'Yoga Retreat', date: '2023-07-05', time: '09:00', location: 'Mountain Resort', description: 'Join us for a relaxing weekend of yoga and meditation.' },
  { id: 3, title: 'Art Exhibition', date: '2023-07-10', time: '18:00', location: 'City Gallery', description: 'Explore the latest works from local artists.' },
  { id: 4, title: 'Book Club Meeting', date: '2023-07-15', time: '17:00', location: 'Local Library', description: 'Discuss this month’s book with fellow readers.' },
  { id: 5, title: 'Live Music Night', date: '2023-07-20', time: '20:00', location: 'Downtown Cafe', description: 'Enjoy live performances from local bands.' },
];

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

        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-800 mb-4">Explore Events and Interests</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {eventsList.map(event => (
              <div key={event.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg">
                <img src={`https://picsum.photos/400/200?random=${event.id}`} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-lg">{event.title}</h3>
                  <p className="text-sm text-gray-600">Date: {event.date} at {event.time}</p>
                  <p className="text-sm text-gray-600">Location: {event.location}</p>
                  <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                </div>
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
