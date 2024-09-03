'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface Match {
  id: string
  name: string
  lastMessage: string // Added lastMessage property
  lastSeen: string
  unread: boolean
  profilePic: string
}

interface MatchListProps {
  filter: string
}

export default function MatchList({ filter }: MatchListProps) {
  const [matches, setMatches] = useState<Match[]>([
    { id: '1', name: 'Alice', lastMessage: 'Hey, how are you?', lastSeen: '2 minutes ago', unread: true, profilePic: 'https://avatar.iran.liara.run/public/girl' },
    { id: '2', name: 'Bob', lastMessage: 'Let’s catch up soon!', lastSeen: '5 minutes ago', unread: false, profilePic: 'https://avatar.iran.liara.run/public/boy' },
    { id: '3', name: 'Charlie', lastMessage: 'Did you finish the project?', lastSeen: '10 minutes ago', unread: true, profilePic: 'https://avatar.iran.liara.run/public/boy' },
    { id: '4', name: 'David', lastMessage: 'I’ll call you later.', lastSeen: '15 minutes ago', unread: false, profilePic: 'https://avatar.iran.liara.run/public/boy' },
    { id: '5', name: 'Eve', lastMessage: 'Can you send me the files?', lastSeen: '20 minutes ago', unread: true, profilePic: 'https://avatar.iran.liara.run/public/girl' },
    { id: '6', name: 'Frank', lastMessage: 'What’s the plan for tonight?', lastSeen: '25 minutes ago', unread: false, profilePic: 'https://avatar.iran.liara.run/public/boy' },
    { id: '7', name: 'Grace', lastMessage: 'I’m on my way!', lastSeen: '30 minutes ago', unread: true, profilePic: 'https://avatar.iran.liara.run/public/girl' },
    { id: '8', name: 'Hannah', lastMessage: 'Let’s meet at 5.', lastSeen: '35 minutes ago', unread: false, profilePic: 'https://avatar.iran.liara.run/public/girl' },
    { id: '9', name: 'Isaac', lastMessage: 'Happy birthday!', lastSeen: '40 minutes ago', unread: true, profilePic: 'https://avatar.iran.liara.run/public/boy' },
    { id: '10', name: 'Jack', lastMessage: 'See you tomorrow!', lastSeen: '45 minutes ago', unread: false, profilePic: 'https://avatar.iran.liara.run/public/boy' },
    { id: '11', name: 'Kathy', lastMessage: 'Can we reschedule?', lastSeen: '50 minutes ago', unread: true, profilePic: 'https://avatar.iran.liara.run/public/girl' },
    { id: '12', name: 'Leo', lastMessage: 'I’ll be there in 10.', lastSeen: '55 minutes ago', unread: false, profilePic: 'https://avatar.iran.liara.run/public/boy' },
    { id: '13', name: 'Mia', lastMessage: 'Let’s grab lunch!', lastSeen: '1 hour ago', unread: true, profilePic: 'https://avatar.iran.liara.run/public/girl' },
    { id: '14', name: 'Nina', lastMessage: 'I need your help.', lastSeen: '1 hour ago', unread: false, profilePic: 'https://avatar.iran.liara.run/public/girl' },
    { id: '15', name: 'Oscar', lastMessage: 'What time is the meeting?', lastSeen: '1 hour ago', unread: true, profilePic: 'https://avatar.iran.liara.run/public/boy' },
    { id: '16', name: 'Paul', lastMessage: 'I’ll send you the details.', lastSeen: '1 hour ago', unread: false, profilePic: 'https://avatar.iran.liara.run/public/boy' },
    { id: '17', name: 'Quinn', lastMessage: 'Can you confirm the time?', lastSeen: '1 hour ago', unread: true, profilePic: 'https://avatar.iran.liara.run/public/girl' },
    { id: '18', name: 'Rita', lastMessage: 'Looking forward to it!', lastSeen: '1 hour ago', unread: false, profilePic: 'https://avatar.iran.liara.run/public/girl' },
    { id: '19', name: 'Sam', lastMessage: 'Let’s do it!', lastSeen: '1 hour ago', unread: true, profilePic: 'https://avatar.iran.liara.run/public/boy' },
    { id: '20', name: 'Tina', lastMessage: 'I’ll text you later.', lastSeen: '1 hour ago', unread: false, profilePic: 'https://avatar.iran.liara.run/public/girl' },
  ])

  const filteredMatches = matches.filter((match) => {
    if (filter === 'all') return true
    if (filter === 'favorites') return match.favorite
    if (filter === 'online') return match.online
    return true
  })

  const handleSwipe = (id: string) => {
    // Implement swipe action (e.g., mark as read)
  }

  return (
    <div className="flex-grow overflow-y-auto">
      {filteredMatches.map((match) => (
        <motion.div
          key={match.id}
          className="flex items-center p-4 border-b"
          drag="x"
          dragConstraints={{ left: 0, right: 50 }}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x > 40) {
              handleSwipe(match.id)
            }
          }}
        >
          <img
            src={match.profilePic}
            alt={match.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div className="flex-grow">
            <h3 className={`font-semibold ${match.unread ? 'font-bold' : ''}`}>
              {match.name}
            </h3>
            <p className={`text-sm ${match.unread ? 'font-bold' : 'text-gray-500'}`}>{match.lastMessage}</p>
          </div>
          <p className="text-sm text-gray-500">Seen {match.lastSeen}</p>
        </motion.div>
      ))}
    </div>
  )
}