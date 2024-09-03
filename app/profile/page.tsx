'use client'
import React from 'react'
import Image from 'next/image'

const profileData = {
  name: 'Sarah',
  age: 28,
  bio: 'Coffee enthusiast, hiking lover, and bookworm. Looking for someone to share adventures with!',
  interests: ['Coffee', 'Hiking', 'Reading', 'Travel'],
  photos: [
    'https://picsum.photos/id/1011/400/600',
    'https://picsum.photos/id/1012/400/600',
  ]
}

export default function Profile() {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <header className="border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Your Profile</h1>
        </header>

        <div className="mb-8">
          <Image
            src={profileData.photos[0]}
            alt={profileData.name}
            width={400}
            height={600}
            className="rounded-lg w-full h-auto"
          />
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{profileData.name}, {profileData.age}</h2>
          <p className="text-gray-600">{profileData.bio}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {profileData.interests.map((interest, index) => (
              <span key={index} className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
                {interest}
              </span>
            ))}
          </div>
        </div>

        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
          Edit Profile
        </button>
      </div>
    </div>
  )
}