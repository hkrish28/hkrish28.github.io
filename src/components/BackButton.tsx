'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="mb-8 text-indigo-300 hover:underline text-sm cursor-pointer"
      aria-label="Go back to projects"
    >
      ← Back to Projects
    </button>
  )
}
