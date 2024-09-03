'use client'
import Link from 'next/link'
import { Home, Bell, User, Sliders, Map, MessageCircle } from 'lucide-react'

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md">
      <ul className="flex justify-around p-4">
        <li><Link href="/"><Home className="w-6 h-6" /></Link></li>
        <li><Link href="/notifications"><Bell className="w-6 h-6" /></Link></li>
        <li><Link href="/profile"><User className="w-6 h-6" /></Link></li>
        <li><Link href="/filters"><Sliders className="w-6 h-6" /></Link></li>
        <li><Link href="/nearby"><Map className="w-6 h-6" /></Link></li>
        <li><Link href="/chat"><MessageCircle className="w-6 h-6" /></Link></li>
      </ul>
    </nav>
  )
}