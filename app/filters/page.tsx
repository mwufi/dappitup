'use client'

export default function Filters() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Age Range</label>
          <input type="range" min="18" max="100" className="w-full" />
        </div>
        <div>
          <label className="block mb-2">Distance Range</label>
          <input type="range" min="1" max="100" className="w-full" />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded w-full">Apply Filters</button>
      </div>
    </div>
  )
}