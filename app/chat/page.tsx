'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PenSquare } from 'lucide-react'
import MatchList from '@/components/MatchList'
import TabBar from '@/components/TabBar'

export default function Inbox() {
  const [activeTab, setActiveTab] = useState('chats')
  const [activeSubTab, setActiveSubTab] = useState('all')

  return (
    <div className="flex flex-col h-full">
      <TabBar
        tabs={['Chats', 'Friends']}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {activeTab === 'chats' && (
        <>
          <TabBar
            tabs={['All', 'Favorites', 'Online']}
            activeTab={activeSubTab}
            onTabChange={setActiveSubTab}
          />
          <MatchList filter={activeSubTab} />
        </>
      )}

      {activeTab === 'friends' && (
        // Implement friends list component here
        <div>Friends list</div>
      )}

      <button className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg">
        <PenSquare size={24} />
      </button>
    </div>
  )
}