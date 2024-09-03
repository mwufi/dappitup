'use client'
import Image from 'next/image'
import InterestTags from '@/components/InterestTags'
import FavoriteMovies from '@/components/FavoriteMovies'
import ProfileStats from '@/components/ProfileStats'

export default function Profile() {
  return (
    <div className="min-h-screen bg-pink-400 text-white p-6">
      <div className="max-w-2xl mx-auto bg-white text-gray-800 rounded-lg shadow-lg p-8">
        <Image
          src="https://picsum.photos/seed/johndoe/200/200"
          alt="John Doe"
          width={200}
          height={200}
          className="rounded-full mx-auto border-4 border-pink-400"
        />
        <h2 className="text-3xl font-bold text-center mt-4">John Doe, 28</h2>
        <p className="text-center text-gray-600">New York City</p>

        <div className="mt-6">
          <h3 className="text-xl font-bold text-pink-600">About Me</h3>
          <p className="mt-2">
            Coffee enthusiast, amateur photographer, and avid hiker. Looking for someone to share adventures and lazy Sundays with. Let's grab a coffee and see where it takes us!
          </p>
        </div>

        <InterestTags />

        <FavoriteMovies />

        <ProfileStats />

        <div className="mt-6 text-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Send a Message
          </button>
        </div>
      </div>
    </div>
  )
}