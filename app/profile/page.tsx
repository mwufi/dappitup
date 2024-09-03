'use client'
import Image from 'next/image'

export default function Profile() {
  return (
    <div className="p-4">
      <Image src="/placeholder.jpg" alt="Profile" width={200} height={200} className="rounded-full mx-auto" />
      <h2 className="text-2xl font-bold text-center mt-4">John Doe, 28</h2>
      <p className="text-center text-gray-600">New York City</p>
      <div className="mt-4">
        <h3 className="font-bold">About Me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
      </div>
      <div className="mt-4">
        <h3 className="font-bold">Stats</h3>
        <ul className="list-disc list-inside">
          <li>Height: 6'0"</li>
          <li>Occupation: Software Engineer</li>
          <li>Education: Bachelor's Degree</li>
        </ul>
      </div>
    </div>
  )
}