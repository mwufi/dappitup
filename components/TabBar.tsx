'use client'

import { motion } from 'framer-motion'

interface TabBarProps {
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function TabBar({ tabs, activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="flex justify-around bg-gray-100 p-2">
      {tabs.map((tab) => (
        <motion.button
          key={tab}
          className={`px-4 py-2 rounded-full ${
            activeTab === tab.toLowerCase() ? 'bg-blue-500 text-white' : ''
          }`}
          whileTap={{ scale: 0.95 }}
          onClick={() => onTabChange(tab.toLowerCase())}
        >
          {tab}
        </motion.button>
      ))}
    </div>
  )
}