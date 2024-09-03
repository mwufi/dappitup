'use client'

export default function Chat() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow p-4 overflow-y-auto">
        <div className="bg-gray-200 p-2 rounded-lg mb-2 max-w-[70%]">Hey, how are you?</div>
        <div className="bg-blue-500 text-white p-2 rounded-lg mb-2 max-w-[70%] ml-auto">I'm good, thanks! How about you?</div>
        <div className="bg-gray-200 p-2 rounded-lg mb-2 max-w-[70%]">Doing great! Want to meet up later?</div>
      </div>
      <div className="p-4 bg-white border-t">
        <input type="text" placeholder="Type a message..." className="w-full p-2 rounded-full border" />
      </div>
    </div>
  )
}