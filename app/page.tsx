'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
    <div className="min-h-screen bg-pink-400 text-white p-6 pb-20">
      <div className="max-w-2xl mx-auto bg-white text-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-pink-600 mb-6">Welcome, Sarah</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Upcoming Dates</h2>
          {upcomingDates.map(date => (
            <div key={date.id} className="bg-pink-50 p-4 rounded-lg mb-2">
              <p className="font-bold">{date.name}</p>
              <p>{date.date} at {date.time}</p>
              <p>{date.location}</p>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">For You</h2>
          {forYou.map(item => (
            <div key={item.id} className="bg-pink-50 p-4 rounded-lg mb-2">
              <p className="font-bold">{item.title}</p>
              <p className="text-sm text-pink-600">{item.type}</p>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">Events You've Attended</h2>
          {pastEvents.map(event => (
            <div key={event.id} className="bg-pink-50 p-4 rounded-lg mb-2">
              <p className="font-bold">{event.title}</p>
              <p>{event.date}</p>
            </div>
          ))}
        </section>

        <Link href="/chat" className="block w-full">
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-full transition duration-300">
            Talk to Juniper
          </button>
        </Link>
      </div>
    </div>
  )
}
