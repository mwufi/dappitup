'use client'
import React from 'react'
import Link from 'next/link'

// Mock data for the dashboard
const upcomingDates = [
  { id: 1, name: 'Alex', date: '2023-06-18', time: '19:00', location: 'Central Park' },
  { id: 2, name: 'Jamie', date: '2023-06-20', time: '20:00', location: 'Italian Restaurant' },
]

const forYou = [
  { id: 1, type: 'quest', title: 'Complete your profile' },
  { id: 2, type: 'challenge', title: 'Start a conversation with 3 new matches' },
  { id: 3, type: 'question', title: "What's your ideal first date?" },
]

const pastEvents = [
  { id: 1, title: 'Speed Dating Night', date: '2023-06-10' },
  { id: 2, title: 'Cooking Class Mixer', date: '2023-06-05' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-gray-800 mb-8">Welcome, Sarah</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-800 mb-4">Upcoming Dates</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingDates.map(date => (
              <div key={date.id} className="bg-white border border-gray-200 rounded-lg p-4 transition-shadow hover:shadow-md">
                <p className="font-semibold text-pink-600">{date.name}</p>
                <p className="text-sm text-gray-600">{date.date} at {date.time}</p>
                <p className="text-sm text-gray-600">{date.location}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-800 mb-4">For You</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {forYou.map(item => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 transition-shadow hover:shadow-md">
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="text-sm text-pink-600">{item.type}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-800 mb-4">Events You've Attended</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {pastEvents.map(event => (
              <div key={event.id} className="bg-white border border-gray-200 rounded-lg p-4 transition-shadow hover:shadow-md">
                <p className="font-semibold text-gray-800">{event.title}</p>
                <p className="text-sm text-gray-600">{event.date}</p>
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
