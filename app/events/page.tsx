'use client'
import React, { useState } from 'react'
import EventCard from '@/components/EventCard'
import EventFilter from '@/components/EventFilter'

const events = [
    {
        id: 1,
        title: 'Coffee Tasting Workshop',
        host: 'Sarah',
        interest: 'Coffee',
        date: '2023-06-15',
        time: '14:00',
        location: 'Brew & Bean Cafe',
        capacity: 15,
        attendees: 8,
        description: 'Join us for an afternoon of coffee tasting and learn about different brewing methods.',
    },
    {
        id: 2,
        title: 'Sunset Hike',
        host: 'Mike',
        interest: 'Hiking',
        date: '2023-06-18',
        time: '18:30',
        location: 'Pine Ridge Trail',
        capacity: 20,
        attendees: 12,
        description: 'Experience a beautiful sunset while hiking through scenic trails. All skill levels welcome!',
    },
    {
        id: 3,
        title: 'Movie Night: Classic Films',
        host: 'Emily',
        interest: 'Movies',
        date: '2023-06-20',
        time: '19:00',
        location: 'Retro Cinema',
        capacity: 30,
        attendees: 22,
        description: 'Watch and discuss classic films with fellow movie enthusiasts. This week: Casablanca.',
    },
]

export default function Events() {
    const [filteredEvents, setFilteredEvents] = useState(events)

    const handleFilter = (interest: string) => {
        if (interest === 'All') {
            setFilteredEvents(events)
        } else {
            setFilteredEvents(events.filter(event => event.interest === interest))
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-light text-gray-800 mb-8">Upcoming Events</h1>

                <EventFilter onFilter={handleFilter} />

                <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>

                {filteredEvents.length === 0 && (
                    <p className="text-center text-gray-500 mt-8">No events found for this interest.</p>
                )}
            </div>
        </div>
    )
}