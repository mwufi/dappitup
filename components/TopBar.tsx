'use client'
import { Settings } from 'lucide-react'

export default function TopBar() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">App Name</h1>
      <Settings className="w-6 h-6" />
    </header>
  )
}