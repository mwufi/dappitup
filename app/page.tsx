'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Image src="/placeholder.jpg" alt="Profile" width={300} height={400} className="rounded-lg shadow-lg" />
      <div className="mt-4 flex space-x-4">
        <button className="bg-red-500 text-white p-3 rounded-full">✕</button>
        <button className="bg-green-500 text-white p-3 rounded-full">✓</button>
      </div>
    </div>
  )
}
