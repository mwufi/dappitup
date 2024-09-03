import React from 'react'
import Image from 'next/image'

const movies = [
  { title: 'Inception', poster: 'https://picsum.photos/seed/inception/100/150' },
  { title: 'The Shawshank Redemption', poster: 'https://picsum.photos/seed/shawshank/100/150' },
  { title: 'Pulp Fiction', poster: 'https://picsum.photos/seed/pulpfiction/100/150' },
]

export default function FavoriteMovies() {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold text-pink-600">Favorite Movies</h3>
      <div className="flex gap-4 mt-2 overflow-x-auto pb-2">
        {movies.map((movie, index) => (
          <div key={index} className="flex-shrink-0">
            <Image src={movie.poster} alt={movie.title} width={100} height={150} className="rounded" />
            <p className="text-sm mt-1 text-center">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}