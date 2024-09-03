'use client'
import Image from 'next/image'

export default function Nearby() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Nearby</h2>
      <div className="relative h-[400px] bg-gray-200 rounded">
        <Image src="/map-placeholder.jpg" alt="Map" layout="fill" objectFit="cover" className="rounded" />
        <div className="absolute top-2 left-2 bg-white p-2 rounded shadow">
          <p className="font-bold">5 people nearby</p>
        </div>
      </div>
    </div>
  )
}