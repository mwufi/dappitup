import React from 'react'

interface Event {
  id: number
  title: string
  host: string
  interest: string
  date: string
  time: string
  location: string
  capacity: number
  attendees: number
  description: string
}

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 transition-shadow hover:shadow-md">
      <h2 className="text-xl font-semibold text-pink-600 mb-2">{event.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{event.date} at {event.time}</p>
      <p className="text-gray-700 mb-4">{event.description}</p>
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-600">Host: {event.host}</span>
        <span className="text-pink-600 font-medium">{event.attendees}/{event.capacity} attending</span>
      </div>
    </div>
  )
}