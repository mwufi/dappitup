import React from 'react'
import Image from 'next/image'

interface EventProps {
  event: {
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
}

export default function EventCard({ event }: EventProps) {
  return (
    <div className="bg-pink-50 rounded-lg shadow-md overflow-hidden">
      <Image
        src={`https://picsum.photos/seed/${event.id}/400/200`}
        alt={event.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-pink-600 mb-2">{event.title}</h2>
        <p className="text-sm text-gray-600 mb-2">Hosted by {event.host}</p>
        <p className="text-sm mb-2"><span className="font-medium">When:</span> {event.date} at {event.time}</p>
        <p className="text-sm mb-2"><span className="font-medium">Where:</span> {event.location}</p>
        <p className="text-sm mb-2"><span className="font-medium">Capacity:</span> {event.attendees}/{event.capacity}</p>
        <p className="text-sm mb-4">{event.description}</p>
        <div className="flex justify-between items-center">
          <span className="bg-pink-200 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {event.interest}
          </span>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full text-sm transition duration-300">
            Message Host
          </button>
        </div>
      </div>
    </div>
  )
}