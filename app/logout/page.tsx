'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Logout() {
  const router = useRouter()

  useEffect(() => {
    // Here you would typically call your logout API
    console.log('Logging out...')
    // After logout, redirect to home page
    setTimeout(() => router.push('/'), 2000)
  }, [router])

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Logging Out</h2>
      <p>Please wait while we log you out...</p>
    </div>
  )
}