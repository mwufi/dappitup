'use client'

export default function Notifications() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded shadow">New match: John Doe</li>
        <li className="bg-white p-4 rounded shadow">New message from Jane Smith</li>
        <li className="bg-white p-4 rounded shadow">Profile view from Alex Johnson</li>
      </ul>
    </div>
  )
}